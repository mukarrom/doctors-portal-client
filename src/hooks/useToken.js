import { useEffect, useState } from 'react';

const useToken = user => {
	const [token, setToken] = useState('');
	useEffect(() => {
		const email = user?.user?.email;
		const currentUser = { email: email };
		if (email) {
			fetch(`http://localhost:9000/user/${email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(currentUser),
			})
				.then(res => res.json())
				.then(data => {
					// console.log('data inside useToken', data);
					// get jwt token from backend and define a variable
					const accessToken = data.token;
					// set token in local storage
					localStorage.setItem('accessToken', accessToken);
					// set in useState
					setToken(accessToken);
				});
		}
	}, [user]);

	return [token];
};

export default useToken;
