import React, { useContext } from 'react';
import { Card } from './Card';
import styles from './cardlist.scss';
import { postsContext } from '../../context/postsContext';

export function CardList() {
	const postsData = useContext(postsContext);
	return (
		<ul className={styles.cardsList}>
			{postsData.map((obj) => (
				<Card key={obj.id} content={obj.content} />
			))}
		</ul>
	);
}
