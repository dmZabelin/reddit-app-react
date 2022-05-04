import React, { useState } from 'react';
import styles from './dropdown.scss';
import { CloseButton } from '../Content/CardList/Card/Menu/CloseButton';
import { noop } from '../../utils/js/noop';

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	classStyle: string;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
}

export function Dropdown({
	button,
	children,
	isOpen,
	onOpen = noop,
	onClose = noop,
	classStyle,
}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
	React.useEffect(() => {
		setIsDropdownOpen(isOpen);
	}, [isOpen]);
	React.useEffect(
		() => (isDropdownOpen ? onOpen() : onClose()),
		[isDropdownOpen]
	);
	const handleOpen = () => {
		if (isOpen === undefined) {
			setIsDropdownOpen(!isDropdownOpen);
		}
	};
	return (
		<div className={styles[classStyle]}>
			<div className={styles.container} onClick={handleOpen}>
				{button}
			</div>
			{isDropdownOpen && (
				<div className={styles.dropdown}>
					{children}
					<CloseButton onClick={() => setIsDropdownOpen(false)} />
				</div>
			)}
		</div>
	);
}
