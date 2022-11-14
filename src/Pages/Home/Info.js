import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
	return (
		<div className="grid grid-cols-3 gap-5">
			<InfoCard
				cardTitle="Opening Hours"
				bgClass="bg-gradient-to-r from-secondary to-primary"
				img={clock}
				info="Lorem Ipsum is simply dummy text of the pri"
			/>
			<InfoCard
				cardTitle="Visit out location"
				bgClass="bg-accent"
				img={marker}
				info="Lorem Ipsum is simply dummy text of the pri"
			/>
			<InfoCard
				cardTitle="Contact us now"
				bgClass="bg-gradient-to-r from-secondary to-primary"
				img={phone}
				info="Lorem Ipsum is simply dummy text of the pri"
			/>
		</div>
	);
};

export default Info;
