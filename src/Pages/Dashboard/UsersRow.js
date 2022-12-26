import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch }) => {
	const { email, role } = user;

	const makeAdmin = () => {
		fetch(`https://doctors-portal-server-puce.vercel.app/user/admin/${email}`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		})
			.then((res) => {
				if (res.status === 403) {
					toast.error('Failed to make an admin');
				}
				return res.json();
			})
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success('Successfully made admin', email);
					refetch();
				}
			});
	};
	return (
		<tr>
			<th>1</th>
			<td>{email}</td>
			<td>
				{role !== 'admin' && (
					<button className="btn btn-xs" onClick={makeAdmin}>
						Make admin
					</button>
				)}
			</td>
			<td>
				<button className="btn btn-xs">Remove user</button>
			</td>
		</tr>
	);
};

export default UsersRow;
