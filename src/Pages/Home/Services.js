import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whiting from '../../assets/images/whiting.png';

const Services = () => {
	const services = [
		{
			_id: 1,
			img: fluoride,
			title: '',
			des: '',
		},
		{
			_id: 2,
			img: fluoride,
			title: '',
			des: '',
		},
		{
			_id: 3,
			img: fluoride,
			title: '',
			des: '',
		},
	];
	return (
		<div>
			<div className="text-center my-28">
				<h1 className="text-3xl font-bold text-primary uppercase">
					Our Services
				</h1>
				<h1 className="text-4xl">Services we provided</h1>
			</div>
			<div></div>
		</div>
	);
};

export default Services;
