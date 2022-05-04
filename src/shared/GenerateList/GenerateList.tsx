import React from 'react';
import styles from './generateList.scss';
import { noop } from '../../utils/js/noop';
import { Icon } from '../Icons';
import { IIcon } from '../Icons';

interface IItem {
	id: string;
	text: string;
	onClick?: (id: string) => void;
	className?: string;
	As?: 'a' | 'button' | 'li' | 'div';
	href?: string;
	icon: IIcon;
}

interface IGenerateListProps {
	list: IItem[];
}

export function GenerateList({ list }: IGenerateListProps) {
	return (
		<>
			{list.map(
				({
					As = 'div',
					text,
					onClick = noop,
					className,
					id,
					href,
					icon,
				}) => (
					<As
						onClick={() => onClick(id)}
						className={className && styles[className]}
						key={id}
						href={href}
					>
						{icon && (
							<Icon
								iconName={icon.iconName}
								iconSize={icon.iconSize}
								iconColor={icon.iconColor}
							/>
						)}
						{text}
					</As>
				)
			)}
		</>
	);
}
