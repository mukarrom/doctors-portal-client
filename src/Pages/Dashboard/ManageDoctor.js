import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageDoctor = () => {
	const [deletingDoctor, setDeletingdoctor] = useState(null);
	const {
		data: doctors,
		isLoading,
		refetch,
	} = useQuery(['doctors'], () =>
		fetch('https://doctors-portal-server-puce.vercel.app/doctors', {
			method: 'GET',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<h2 className="text-2xl">Manage doctors: {doctors.length}</h2>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Photo and Name</th>
							<th>Email</th>
							<th>Specialty</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{doctors.map((doctor) => (
							<tr key={doctor._id}>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src={doctor.img}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">{doctor.name}</div>
											<div className="text-sm opacity-50">
												{doctor.specialty}
											</div>
										</div>
									</div>
								</td>
								<td>
									{doctor.email}
									<br />
									<span className="badge badge-ghost badge-sm">
										Desktop Support Technician
									</span>
								</td>
								<td>{doctor.specialty}</td>
								<th>
									<label
										onClick={() => setDeletingdoctor(doctor)}
										htmlFor="my-modal-6"
										className="btn btn-error btn-xs"
									>
										delete
									</label>
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{deletingDoctor && (
				<DeleteConfirmModal
					deletingDoctor={deletingDoctor}
					refetch={refetch}
					setDeletingdoctor={setDeletingdoctor}
				/>
			)}
		</div>
	);
};

export default ManageDoctor;
