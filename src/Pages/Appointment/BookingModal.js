import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
	const handleOnSubmit = event => {
		event.preventDefault();
		setTreatment(null);
	};
	return (
		<div>
			<input type="checkbox" id="booking-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="font-bold text-lg mb-2 text-center text-secondary">
						Booking for: {treatment?.name}
					</h3>

					<form
						onSubmit={handleOnSubmit}
						className="grid grid-cols-1 justify-items-center gap-5"
					>
						<input
							disabled
							value={format(date, 'PP')}
							className="input input-bordered w-full max-w-xs"
						/>
						<select className="select select-bordered w-full max-w-xs">
							{treatment?.slots.map((slot, index) => (
								<option key={index}>{slot}</option>
							))}
						</select>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="email"
							name="email"
							placeholder="Your email"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="phone"
							name="phone"
							placeholder="Phone number"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="submit"
							value={'Submit'}
							className="btn btn-secondary w-full max-w-xs"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
