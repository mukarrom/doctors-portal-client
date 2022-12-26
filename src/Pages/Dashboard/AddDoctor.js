import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();
	// react query
	const { data: services, isLoading } = useQuery(['services'], () =>
		fetch('https://doctors-portal-server-puce.vercel.app/services').then(
			(res) => res.json()
		)
	);

	if (isLoading) {
		return <Loading />;
	}
	/**
	 * Upload image in imagebb
	 */
	// const myKey = 'f49ab4cb58a5ae6bbc130fa701be81a2';
	const formData = new FormData();
	const onSubmit = async (data) => {
		if (data && data.image[0]) {
			formData.append('image', data.image[0]);
			console.log('upload success');
		} else {
			console.log('can not append image');
		}

		// console.log(formData);
		const url =
			'https://api.imgbb.com/1/upload?key=f49ab4cb58a5ae6bbc130fa701be81a2';
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					const img = result.data.url;
					const doctor = {
						name: data.name,
						email: data.email,
						specialty: data.specialty,
						img: img,
					};
					// send to your database
					fetch('https://doctors-portal-server-puce.vercel.app/doctors', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
							authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						},
						body: JSON.stringify(doctor),
					})
						.then((res) => res.json())
						.then((insertedData) => {
							if (insertedData.insertedId) {
								reset();
								toast.success('The doctor added in database successfully');
							} else {
								toast.error('failed to upload in database');
							}
						});
				} else {
					toast.error('Failed to upload image file in "imgbb" cloud');
				}
			});
	};
	return (
		<div>
			<h2 className="text-2xl">Add Doctors</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* daisy */}
				<div className="form-control w-full max-w-xs">
					{/* >-> Name <-< */}
					<label className="label">
						<span className="label-text">Your name</span>
					</label>
					<input
						type="name"
						placeholder="Your name"
						className="input input-bordered w-full max-w-xs"
						{...register('name', {
							required: {
								value: true,
								message: 'Name is Required',
							},
						})}
						// aria-invalid={errors.name ? 'true' : 'false'}
					/>
					<label className="label">
						{errors.name?.type === 'required' && (
							<p className="label-text-alt text-red-500" role="alert">
								{errors.name.message}
							</p>
						)}
					</label>
					{/* >-> Email <-< */}
					<label className="label">
						<span className="label-text">Your email</span>
					</label>
					<input
						type="email"
						placeholder="Your email"
						className="input input-bordered w-full max-w-xs"
						{...register('email', {
							required: {
								value: true,
								message: 'Email is Required',
							},
							pattern: {
								value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
								message: 'Provide a valid Email',
							},
						})}
						// aria-invalid={errors.email ? 'true' : 'false'}
					/>
					<label className="label">
						{errors.email?.type === 'required' && (
							<p className="label-text-alt text-red-500" role="alert">
								{errors.email.message}
							</p>
						)}
						{errors.email?.type === 'pattern' && (
							<p className="label-text-alt text-red-500" role="alert">
								{errors.email.message}
							</p>
						)}
					</label>
					{/* >-> password <-< */}
					<label className="label">
						<span className="label-text">Specialty</span>
					</label>
					<select
						{...register('specialty')}
						className="select input-bordered w-full max-w-xs"
					>
						{services.map((service) => (
							<option key={service._id} value={service.name}>
								{service.name}
							</option>
						))}
					</select>

					<label className="label">
						{errors.password?.type === 'required' && (
							<p className="label-text-alt text-red-500" role="alert">
								{errors.password.message}
							</p>
						)}
					</label>
				</div>
				{/* >-> Name <-< */}
				<label className="label">
					<span className="label-text">Image</span>
				</label>
				<input
					type="file"
					className="input input-bordered w-full max-w-xs"
					{...register('image', {
						required: {
							value: true,
							message: 'Image is Required',
						},
					})}
					// aria-invalid={errors.name ? 'true' : 'false'}
				/>
				<label className="label">
					{errors.name?.type === 'required' && (
						<p className="label-text-alt text-red-500" role="alert">
							{errors.name.message}
						</p>
					)}
				</label>
				{/* Login button */}
				<input className="btn w-full max-w-xs" type="submit" value="Add" />
			</form>
		</div>
	);
};

export default AddDoctor;

/**
 * {
    "data": {
        "id": "64v0wwF",
        "title": "doctor1",
        "url_viewer": "https://ibb.co/64v0wwF",
        "url": "https://i.ibb.co/kh32BBX/doctor1.jpg",
        "display_url": "https://i.ibb.co/SKQwyyB/doctor1.jpg",
        "width": "5760",
        "height": "3840",
        "size": 5600347,
        "time": "1669520932",
        "expiration": "0",
        "image": {
            "filename": "doctor1.jpg",
            "name": "doctor1",
            "mime": "image/jpeg",
            "extension": "jpg",
            "url": "https://i.ibb.co/kh32BBX/doctor1.jpg"
        },
        "thumb": {
            "filename": "doctor1.jpg",
            "name": "doctor1",
            "mime": "image/jpeg",
            "extension": "jpg",
            "url": "https://i.ibb.co/64v0wwF/doctor1.jpg"
        },
        "medium": {
            "filename": "doctor1.jpg",
            "name": "doctor1",
            "mime": "image/jpeg",
            "extension": "jpg",
            "url": "https://i.ibb.co/SKQwyyB/doctor1.jpg"
        },
        "delete_url": "https://ibb.co/64v0wwF/28caefdea02bd2115d51aab24a57849f"
    },
    "success": true,
    "status": 200
}

 {
    "data": {
        "id": "wNNYzLy",
        "title": "people1",
        "url_viewer": "https://ibb.co/wNNYzLy",
        "url": "https://i.ibb.co/bgg7K31/people1.png",
        "display_url": "https://i.ibb.co/bgg7K31/people1.png",
        "width": "90",
        "height": "90",
        "size": 5870,
        "time": "1669478936",
        "expiration": "0",
        "image": {
            "filename": "people1.png",
            "name": "people1",
            "mime": "image/png",
            "extension": "png",
            "url": "https://i.ibb.co/bgg7K31/people1.png"
        },
        "thumb": {
            "filename": "people1.png",
            "name": "people1",
            "mime": "image/png",
            "extension": "png",
            "url": "https://i.ibb.co/wNNYzLy/people1.png"
        },
        "delete_url": "https://ibb.co/wNNYzLy/24cf5f295314015845a56673f77842e8"
    },
    "success": true,
    "status": 200
}
 */
