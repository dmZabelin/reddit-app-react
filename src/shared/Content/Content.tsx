import React from 'react';
import styles from './content.scss';
import { CardList } from './CardList';

export function Content() {
	return (
		<div className={styles.content}>
			<CardList />
		</div>
	);
}
