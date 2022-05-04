import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../../Dropdown';
import { MenuButton } from './MenuButton';
import { generateId } from '../../../../../utils/react/generateId';
import { merge } from '../../../../../utils/js/merge';
import { GenerateList } from '../../../../GenerateList';

const menuList = [
	{
		As: 'li' as const,
		text: 'Комментарии',
		className: 'menuItem',
		icon: { iconName: 'comment', iconSize: 16, iconColor: '#999' },
	},
	{
		As: 'li' as const,
		text: 'Поделиться',
		className: 'menuItem',
		icon: { iconName: 'share', iconSize: 16, iconColor: '#999' },
	},
	{
		As: 'li' as const,
		text: 'Скрыть',
		className: 'menuItem',
		icon: { iconName: 'hide', iconSize: 16, iconColor: '#999' },
	},
	{
		As: 'li' as const,
		text: 'Сохранить',
		className: 'menuItem',
		icon: { iconName: 'save', iconSize: 16, iconColor: '#999' },
	},
	{
		As: 'li' as const,
		text: 'Пожаловаться',
		className: 'menuItem',
		icon: { iconName: 'complain', iconSize: 16, iconColor: '#999' },
	},
].map(generateId);

const menuMobile = [
	{
		As: 'li' as const,
		text: 'Скрыть',
		className: 'menuItem',
		icon: { iconName: 'hide', iconSize: 16, iconColor: '#999' },
	},
	{
		As: 'li' as const,
		text: 'Пожаловаться',
		className: 'menuItem',
		icon: { iconName: 'complain', iconSize: 16, iconColor: '#999' },
	},
].map(generateId);

export function Menu() {
	const [list, setList] = React.useState(menuList);
	const [listMobile, setListMobile] = React.useState(menuMobile);
	const handleItemClick = (id: string) => {
		console.log(id);
	};
	return (
		<Dropdown button={<MenuButton />} classStyle={'menuCard'}>
			<ul className={styles.menuList}>
				<GenerateList
					list={list.map(merge({ onClick: handleItemClick }))}
				/>
			</ul>
			<ul className={styles.menuMobile}>
				<GenerateList
					list={listMobile.map(merge({ onClick: handleItemClick }))}
				/>
			</ul>
		</Dropdown>
	);
}
