import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.global.scss';
import { App } from './shared/App';
import { Provider } from 'react-redux';
import store from './shared/store';

const container = document.getElementById('root');
const root = createRoot(container as Element);

window.addEventListener('load', () => {
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
});
