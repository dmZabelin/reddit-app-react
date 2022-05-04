import React from 'react';
import styles from './preview.scss';

export function Preview() {
	return (
		<div className={styles.preview}>
			<img
				src="https://cdn.dribbble.com/users/4889061/screenshots/17705416/media/320a2e1c24cb7e86bb57d9f484c26268.png?compress=1&resize=640x480&vertical=top"
				alt="Preview"
			/>
		</div>
	);
}
