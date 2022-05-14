import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.global.scss';
import { App } from './shared/App';

const container = document.getElementById('root');
const root = createRoot(container as Element);

window.addEventListener('load', () => {
	root.render(<App />);
});
