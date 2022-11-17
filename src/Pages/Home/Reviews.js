import React from 'react';

const Review = ({ review }) => {
	return (
		<div className="card lg:max-w-lg bg-base-100 shadow-xl">
			<div className="card-body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet.
					Nisi cupiditate porro sunt dignissimos!
				</p>
				<div className="flex items-center">
					<div className="avatar mr-5">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={review.img} alt="" />
						</div>
					</div>
					<div className="">
						<h4 className="text-xl">{review.name}</h4>
						<h4 className="">{review.location}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
