import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../shared/store/rootReducer';

interface IUserData {
	name?: string;
	icon?: string;
}

export function useUserData() {
	const [data, setData] = useState<IUserData>({});
	const token = useSelector<RootState, string>((state) => state.token.token);
	console.log(token);
	useEffect(() => {
		if (token && token.length > 0) {
			axios
				.get('https://oauth.reddit.com/api/v1/me.json', {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((resp) => {
					const userData = resp.data;
					setData({ name: userData.name, icon: userData.snoovatar_img });
				})
				.catch(console.log);
		}
	}, [token]);
	return [data];
}
