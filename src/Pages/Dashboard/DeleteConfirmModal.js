import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingdoctor }) => {
	const handleDelete = () => {
		fetch(`http://localhost:9000/doctors/${deletingDoctor.email}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then(res => res.json())
			.then(data => {
				if (data.deletedCount) {
					toast.success(`Doctor ${deletingDoctor.name} deleted successfully`);
					setDeletingdoctor(null);
					refetch();
				} else {
					toast.error('Sorry, Something went wrong');
				}
			});
	};
	return (
		<div>
			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-error">
						Are you sure you want to delete {deletingDoctor.name}
					</h3>
					<p className="py-4">
						You've been selected for a chance to get one year of subscription to
						use Wikipedia for free!
					</p>
					<div className="modal-action">
						<button
							onClick={() => handleDelete()}
							className="btn btn-error btn-xs"
						>
							delete
						</button>
						<label htmlFor="my-modal-6" className="btn btn-xs">
							Cancel
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmModal;
