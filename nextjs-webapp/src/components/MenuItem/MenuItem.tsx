"use client";
import React, { useState } from 'react';
import styles from './MenuItem.module.scss';

export type MenuItemProps = {
	content: string
}

const MenuItem: React.FC<MenuItemProps> = ({ content }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const toggleActive = () => {
		console.log('toggleActive');
		setIsActive(!isActive);
	};

	return (
		<li className={isActive ? styles.active : ''} onClick={toggleActive}>
			{content}
		</li>
	);
};

export default MenuItem;
