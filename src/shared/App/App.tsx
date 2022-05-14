import React from 'react';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { Content } from '../Content';
import { useToken } from '../../hooks/useToken';
import { tokenContext } from '../context/tokenContext';
import { UserContextProvider } from '../context/userContext';

export function App() {
	const [token] = useToken();
	return (
		<tokenContext.Provider value={token}>
			<UserContextProvider>
				<Layout>
					<Header />
					<Content />
				</Layout>
			</UserContextProvider>
		</tokenContext.Provider>
	);
}
