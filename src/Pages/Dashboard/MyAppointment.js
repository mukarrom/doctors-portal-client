import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
	const [appointments, setAppointments] = useState([]);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (user) {
			fetch(
				`https://doctors-portal-server-puce.vercel.app/booking?patient=${user.email}`,
				{
					method: 'GET',
					headers: {
						authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			)
				.then((res) => {
					if (res.status === 401 || res.status === 403) {
						signOut(auth);
						localStorage.removeItem('accessToken');
						navigate('/');
					}
					return res.json();
				})
				.then((data) => setAppointments(data));
		}
	}, [user, navigate]);

	return (
		<div>
			<h2>My appointment {appointments.length}</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>SN</th>
							<th>Name</th>
							<th>Date</th>
							<th>Time</th>
							<th>Treatment</th>
						</tr>
					</thead>
					<tbody>
						{appointments.map((appointment, index) => (
							<tr key={appointment._id}>
								<th>{index + 1}</th>
								<td>{appointment.patientName}</td>
								<td>{appointment.date}</td>
								<td>{appointment.slot}</td>
								<td>{appointment.treatment}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyAppointment;
