"use client";
import React, { useState } from 'react';
import styles from './Nav.module.scss';
import Image from 'next/image';
import { MenuItem } from '../MenuItem';

export type NavProps = {
	title: string;
}

const Nav: React.FC<NavProps> = ({ }) => {

	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className={styles.nav}>
			{isVisible ? (
				<div className={styles.navMobile}>
				<span className={`${styles.close} icon-cross`} onClick={toggleMenu}></span>
				<div className={styles.containerMobile}>
					<div className={styles.menu}>
						<ul>
							<MenuItem content='Home'></MenuItem>
							<MenuItem content='Find a doctor'></MenuItem>
							<MenuItem content='Apps'></MenuItem>
							<MenuItem content='Testimonials'></MenuItem>
						</ul>
					</div>
					<div className={styles.contact}>
						<ul>
							<li>Contact us</li>
							<li>About us</li>
							<li>Privacy policy</li>
							<li>Terms of service</li>
						</ul>
					</div>
					<div className={styles.social}>
						<ul>
							<li>
								<a href="">
									<span className={`${styles.icon} icon-facebook2`}>
										<span className="path1"></span>
										<span className="path2"></span>
									</span>
								</a>
							</li>
							<li>
								<a href="">
									<span className={`${styles.icon} icon-twitter`}>
									</span>
								</a>
							</li>
							<li>
								<a href="">
									<span className={`${styles.icon} icon-github`}>
										<span className="path1"></span><span className="path2"></span>
									</span>
								</a>
							</li>
							<li>
								<a href="">
									<span className={`${styles.icon} icon-linkedin`}>
										<span className="path1"></span><span className="path2"></span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			): null}
			
			<div className={`${styles.navDesktop}`}>
				<div className={`${styles.containerDesktop}`}>
					<Image src="logo.svg" alt="Logo" width={160} height={41} />
					<div className={`${styles.menuDesktop}`}>
						<ul>
							<MenuItem content='Home'></MenuItem>
							<MenuItem content='Find a doctor'></MenuItem>
							<MenuItem content='Apps'></MenuItem>
							<MenuItem content='Testimonials'></MenuItem>
						</ul>
					</div>
					<span className={`${styles.icon} icon-menu ${styles.iconMenu}`} onClick={toggleMenu}></span>
				</div>
			</div>
		</div>
	);
};

export default Nav;
