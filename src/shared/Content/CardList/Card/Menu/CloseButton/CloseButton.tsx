import React from 'react';
import styles from './closebutton.scss';

interface ICloseButton {
	onClick: () => void;
}

export function CloseButton({ onClick }: ICloseButton) {
	return (
		<button className={styles.menuButton} onClick={onClick}>
			Закрыть
		</button>
	);
}
