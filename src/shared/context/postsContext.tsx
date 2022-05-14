import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

interface IUsePostsContextData {
	id: string;
	content: {
		title: string;
		author: string;
		created: string;
	};
}

export const postsContext = React.createContext<Array<IUsePostsContextData>>(
	[]
);

export function PostsContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [postsData] = usePostsData();
	return (
		<postsContext.Provider value={postsData}>
			{children}
		</postsContext.Provider>
	);
}
