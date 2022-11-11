import React from 'react';

const InfoCard = ({ img, cardTitle, info, bgClass }) => {
	return (
		<div className={`card lg:card-side shadow-xl text-white px-5 ${bgClass}`}>
			<figure>
				<img src={img} alt="clock" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{cardTitle}</h2>
				<p>{info}</p>
			</div>
		</div>
	);
};

export default InfoCard;
