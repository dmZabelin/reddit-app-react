import React, { useEffect } from 'react';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { Content } from '../Content';
import { UserContextProvider } from '../context/userContext';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/reducers/tokenSlice';

export function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const url = new URL(window.location.href);
		const token = url.hash.split('&')[0].split('=')[1];
		if (token) {
			dispatch(setToken(token));
		}
	}, []);
	return (
		<UserContextProvider>
			<Layout>
				<Header />
				<Content />
			</Layout>
		</UserContextProvider>
	);
}
