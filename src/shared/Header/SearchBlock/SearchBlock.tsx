import React, { useContext } from 'react';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
	const { icon, name } = useContext(userContext);
	return (
		<div className={styles.searchBlock}>
			<UserBlock avatarSrc={icon} userName={name} />
		</div>
	);
}
