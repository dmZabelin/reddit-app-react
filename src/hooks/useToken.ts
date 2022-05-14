import { useEffect, useState } from 'react';

export function useToken() {
	const [token, setToken] = useState('');
	useEffect(() => {
		const url = new URL(window.location.href);
		const token = url.hash.split('&')[0].split('=')[1];
		if (token) {
			setToken(token);
		}
	}, []);
	return [token];
}
