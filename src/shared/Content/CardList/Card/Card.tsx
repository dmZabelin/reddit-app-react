import React from 'react';
import styles from './card.scss';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface ICardProps {
	content: {
		title: string;
		author: string;
		created: string;
	};
}

export function Card(props: ICardProps) {
	return (
		<li className={styles.card}>
			<TextContent
				title={props.content.title}
				author={props.content.author}
				created={props.content.created}
			/>
			<Preview />
			<Menu />
			<Controls />
		</li>
	);
}
