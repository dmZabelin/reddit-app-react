import React from 'react';
import styles from './userBlock.scss';
import { UserIcon } from '../../../Icons';
import { EColors, Text } from '../../../Text';

interface IUserBlockProps {
	avatarSrc?: string;
	userName?: string;
}

export function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
	return (
		<a
			href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&state=random_string&redirect_uri=http://localhost:5000/auth&scope=identity read submit`}
			className={styles.userLink}
		>
			<div className={styles.userIcon}>
				{avatarSrc ? <img src={avatarSrc} alt="user icon" /> : <UserIcon />}
			</div>

			<div className={styles.userName}>
				<Text size={20} color={userName ? EColors.black : EColors.grey99}>
					{userName || 'Аноним'}
				</Text>
			</div>
		</a>
	);
}
