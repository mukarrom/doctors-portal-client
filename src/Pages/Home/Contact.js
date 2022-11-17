import React from 'react';
import marker from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
	return (
		<section
			style={{
				background: `url(${marker})`,
				backgroundSize: 'cover',
			}}
			className="flex justify-center items-center p-10"
		>
			<div className="flex flex-col justify-center gap-y-5 lg:w-1/3">
				<h5 className="text-xl text-center text-primary">Contact Us</h5>
				<h3 className="text-3xl text-center text-white">
					Stay connected with us
				</h3>
				<input
					className="p-2 rounded-md"
					type="text"
					placeholder="Email Address"
				/>
				<input className="p-2 rounded-md" type="text" placeholder="Subject" />
				<textarea
					className="rounded-md"
					name=""
					placeholder="Your message"
					id=""
					cols="30"
					rows="10"
				></textarea>
				<div className="flex justify-center">
					<PrimaryButton>Submit</PrimaryButton>
				</div>
			</div>
		</section>
	);
};

export default Contact;
