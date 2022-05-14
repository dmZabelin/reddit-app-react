import React from 'react';
import styles from './content.scss';
import { CardList } from './CardList';
import { PostsContextProvider } from '../context/postsContext';

export function Content() {
	return (
		<PostsContextProvider>
			<div className={styles.content}>
				<CardList />
			</div>
		</PostsContextProvider>
	);
}
