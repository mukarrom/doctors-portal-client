import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
	const services = [
		{
			_id: 1,
			name: 'Fluoride Treatment',
			description: '',
			img: fluoride,
		},
		{
			_id: 2,
			name: 'Cavity Filling',
			description: '',
			img: cavity,
		},
		{
			_id: 3,
			name: 'Teeth whitening',
			description: '',
			img: whitening,
		},
	];
	return (
		<section className="my-28">
			<div className="text-center">
				<h1 className="text-3xl font-bold text-primary uppercase">
					Our Services
				</h1>
				<h1 className="text-4xl">Services we provided</h1>
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{services.map(service => (
					<Service key={service._id} service={service}></Service>
				))}
			</div>
		</section>
	);
};

export default Services;
