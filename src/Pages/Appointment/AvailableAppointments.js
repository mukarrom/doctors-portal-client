import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointments = ({ date }) => {
	const [services, setServices] = useState([]);
	const [treatment, setTreatment] = useState(null);

	useEffect(() => {
		fetch(
			'https://doctors-portal-server-6rx21wxn3-mukarrom.vercel.app/services'
		)
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<div>
			<h4 className="text-secondary text-lg font-bold text-center my-10">
				Available appointment on {format(date, 'PP')}
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services.map(service => (
					<ServiceCard
						key={service._id}
						service={service}
						setTreatment={setTreatment}
					/>
				))}
			</div>
			{treatment && (
				<BookingModal
					date={date}
					treatment={treatment}
					setTreatment={setTreatment}
				/>
			)}
		</div>
	);
};

export default AvailableAppointments;
