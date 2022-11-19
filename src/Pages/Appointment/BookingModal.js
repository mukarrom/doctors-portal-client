import { format } from 'date-fns';
import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
	const { name, slots, _id } = treatment;
	const [user] = useAuthState(auth);
	const formattedDate = format(date, 'PP');

	const handleOnSubmit = event => {
		event.preventDefault();
		const slot = event.target.slot.value;

		const booking = {
			treatmentId: _id,
			treatment: name,
			date: formattedDate,
			slot,
			patient: user.email,
			patientName: user.displayName,
			phone: event.target.phone.value,
		};

		fetch('http://localhost:9000/booking', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(booking),
		})
			.then(res => res.json())
			.then(data => {
				if (data.success) {
					toast.success(`Appointment is set on ${formattedDate} at ${slot}`);
				} else {
					toast.error(
						`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
					);
				}
				refetch();
				// to close the modal
				setTreatment(null);
			});
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
						Booking for: {name}
					</h3>

					<form
						onSubmit={handleOnSubmit}
						className="grid grid-cols-1 justify-items-center gap-5"
					>
						{/* date */}
						<input
							disabled
							value={format(date, 'PP')}
							className="input input-bordered w-full max-w-xs"
						/>
						{/* slot */}
						<select
							name="slot"
							className="select select-bordered w-full max-w-xs"
						>
							{slots.map((slot, index) => (
								<option key={index}>{slot}</option>
							))}
						</select>
						{/* name */}
						<input
							type="text"
							name="name"
							readOnly
							value={user?.displayName || 'name not found'}
							className="input input-bordered w-full max-w-xs"
						/>
						{/* email */}
						<input
							type="email"
							name="email"
							value={user?.email || 'email not found'}
							readOnly
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
