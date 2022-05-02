import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.global.scss';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

const container = document.getElementById('root');
const root = createRoot(container as Element);

window.addEventListener('load', () => {
	root.render(
		<Layout>
			<Header />
		</Layout>
	);
});
