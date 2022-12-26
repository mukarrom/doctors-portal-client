import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const Users = () => {
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery(['users'], () =>
		fetch('https://doctors-portal-server-puce.vercel.app/user', {
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
			<div className="text-2xl">All Users: {users.length}</div>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<UsersRow key={user?._id} user={user} refetch={refetch} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
