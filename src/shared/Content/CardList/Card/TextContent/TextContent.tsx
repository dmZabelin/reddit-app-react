import React, { useEffect, useState } from 'react';
import styles from './textcontent.scss';
import axios from 'axios';
import smile from 'src/assets/img/smile.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';

interface ITextContentProps {
	title: string;
	author: string;
	created: string;
}

const getAuthorImg = async (username: string, token: string): Promise<any> => {
	return axios
		.get(`https://oauth.reddit.com/user/${username}/about.json`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.then((resp) => {
			return resp.data.data.snoovatar_img;
		});
};

export function TextContent(props: ITextContentProps) {
	const token = useSelector<RootState, string>((state) => state.token.token);
	const [authorImg, setAuthorImg] = useState('');

	useEffect(() => {
		getAuthorImg(props.author, token).then((res) => {
			setAuthorImg(res);
		});
	}, []);
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<div className={styles.userLink}>
					<img
						className={styles.avatar}
						src={authorImg.length > 0 ? authorImg : smile}
						alt="avatar"
					/>
					<a href="#user-url" className={styles.username} target="_blank">
						{props.author}
					</a>
				</div>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>
					{props.created}
				</span>
			</div>
			<h2 className={styles.title}>
				<a href="#post-url" className={styles.postLink} target="_blank">
					{props.title}
				</a>
			</h2>
		</div>
	);
}
