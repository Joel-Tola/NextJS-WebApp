"use client";
import React from 'react';
import styles from './Nav.module.scss';

export type NavProps = {
	title: string;
}

const Nav: React.FC<NavProps> = ({ }) => {
	return (
		<div className={styles.nav}>
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
								<span className={`${styles.icon} icon-facebook`}>
									<span className="path1"></span>
									<span className="path2"></span>
								</span>
							</a>
						</li>
						<li>
							<a href="">
								<span className= {`${styles.icon} icon-twitter`}>
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
	);
};

export default Nav;
