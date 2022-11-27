import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import MyHistory from './Pages/Dashboard/MyHistory';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				{/* Home */}
				<Route path="/" element={<Home />}></Route>
				{/* Appointment */}
				<Route
					path="/appointment"
					element={
						<RequireAuth>
							<Appointment />
						</RequireAuth>
					}
				/>
				{/* Dashboard */}
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					{/* dashboard/ my appointment */}
					<Route index element={<MyAppointment />} />
					{/* dashboard/ my review */}
					<Route path="/dashboard/review" element={<MyReview />} />
					{/* dashboard/ my history */}
					<Route path="/dashboard/history" element={<MyHistory />} />
					{/* dashboard/ user */}
					<Route
						path="/dashboard/users"
						element={
							<RequireAdmin>
								<Users />
							</RequireAdmin>
						}
					/>
					{/* dashboard/ add doctor */}
					<Route
						path="/dashboard/addDoctor"
						element={
							<RequireAdmin>
								<AddDoctor />
							</RequireAdmin>
						}
					/>
					{/* dashboard/ manage doctor */}
					<Route
						path="/dashboard/manageDoctor"
						element={
							<RequireAdmin>
								<ManageDoctor />
							</RequireAdmin>
						}
					/>
				</Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
