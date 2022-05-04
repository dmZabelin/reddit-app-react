import React from 'react';
import styles from './textcontent.scss';

export function TextContent() {
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<div className={styles.userLink}>
					<img
						className={styles.avatar}
						src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=8"
						alt="avatar"
					/>
					<a href="#user-url" className={styles.username}>
						Дмитрий Гришин
					</a>
				</div>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>4
					часа назад
				</span>
			</div>
			<h2 className={styles.title}>
				<a href="#post-url" className={styles.postLink}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Consequatur illo illum.
				</a>
			</h2>
		</div>
	);
}
