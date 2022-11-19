import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
	const { name, slots } = service;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<div className="card-body">
				<h2 className="card-title text-secondary">{name}</h2>
				<p className="">
					{slots?.length ? (
						<span className="">{slots[0]}</span>
					) : (
						<span className="text-red-400">Try another day</span>
					)}
				</p>
				<p className="">
					{slots?.length} {slots?.length > 0 ? 'spaces' : 'space'} available
				</p>
				<div className="card-actions justify-center">
					<label
						disabled={slots?.length === 0}
						htmlFor="booking-modal"
						className="btn btn-secondary text-white"
						onClick={() => setTreatment(service)}
					>
						Book Appointment
					</label>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
