"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Nav.module.scss';

export type NavProps = {
	title: string;
}

const Nav: React.FC<NavProps> = ({ }) => {
	return (
		<div className={styles.nav}>
			<div className="nav-mobile">
				<span className={`${styles.close} icon-cross`}></span>
				<div className={styles.container}>
					<div className={styles.menu}>
						<ul>
							<li>Home</li>
							<li>Find a doctor</li>
							<li>Apps</li>
							<li>Testimonials</li>
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
			<div className="nav-desktop">
				<Image src="/logo.png" alt="Logo" width={100} height={50} />
				<div className="menu-desktop">
					<ul>
						<li>Home</li>
						<li>Find a doctor</li>
						<li>Apps</li>
						<li>Testimonials</li>
						<li>Contact us</li>
						<li>About us</li>
						<li>Privacy policy</li>
						<li>Terms of service</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
