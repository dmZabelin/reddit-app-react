import React from 'react';
import styles from './controls.scss';
import { KarmaCounter } from './KarmaCounter';
import { CommentButton } from './CommentButton';
import { Action } from './Action';

export function Controls() {
	return (
		<div className={styles.controls}>
			<KarmaCounter />
			<CommentButton />
			<Action />
		</div>
	);
}
