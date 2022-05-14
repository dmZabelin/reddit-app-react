import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../shared/context/tokenContext';
import axios from 'axios';
import { getTimeAgo } from '../utils/js/getTimeAgo';

interface IObj {
	data: {
		[key: string]: string | boolean | number;
	};
}

interface IUsePostsData {
	id: string;
	content: {
		title: string;
		author: string;
		created: string;
	};
}

export function usePostsData() {
	const [postsData, setPostsData] = useState<Array<IUsePostsData>>([]);
	const token = useContext(tokenContext);
	useEffect(() => {
		if (token && token.length > 0) {
			axios
				.get('https://oauth.reddit.com/best.json?sr_detail=true', {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((resp) => {
					console.log(resp.data.data.children);
					const postsDataArr = resp.data.data.children.map((obj: IObj) => {
						return {
							id: obj.data.id,
							content: {
								title: obj.data.title,
								author: obj.data.author,
								created: getTimeAgo(obj.data.created as number),
							},
						};
					});
					setPostsData(postsDataArr);
				})
				.catch(console.log);
		}
	}, [token]);
	return [postsData];
}
