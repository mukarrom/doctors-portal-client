import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointments = ({ date }) => {
	// const [services, setServices] = useState([]);
	const [treatment, setTreatment] = useState(null);
	const formattedDate = format(date, 'PP');

	// React Query
	const {
		data: services,
		isLoading,
		refetch,
	} = useQuery(['available', formattedDate], () =>
		fetch(`http://localhost:9000/available?date=${formattedDate}`).then(res =>
			res.json()
		)
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<h4 className="text-secondary text-lg font-bold text-center my-10">
				Available appointment on {format(date, 'PP')}
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services?.map(service => (
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
					refetch={refetch}
				/>
			)}
		</div>
	);
};

export default AvailableAppointments;
