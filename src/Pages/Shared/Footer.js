import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
	return (
		<footer
			style={{
				background: `url(${footer})`,
				backgroundSize: 'cover',
			}}
			className="p-10"
		>
			<div className="footer">
				<div>
					<span className="footer-title">Services</span>
					<a className="link link-hover" href="/">
						Branding
					</a>
					<a className="link link-hover" href="/">
						Design
					</a>
					<a className="link link-hover" href="/">
						Marketing
					</a>
					<a className="link link-hover" href="/">
						Advertisement
					</a>
				</div>
				<div>
					<span className="footer-title" href="/">
						Company
					</span>
					<a className="link link-hover" href="/">
						About us
					</a>
					<a className="link link-hover" href="/">
						Contact
					</a>
					<a className="link link-hover" href="/">
						Jobs
					</a>
					<a className="link link-hover" href="/">
						Press kit
					</a>
				</div>
				<div>
					<span className="footer-title" href="/">
						Legal
					</span>
					<a className="link link-hover" href="/">
						Terms of use
					</a>
					<a className="link link-hover" href="/">
						Privacy policy
					</a>
					<a className="link link-hover" href="/">
						Cookie policy
					</a>
				</div>
			</div>
			<footer className="footer footer-center p-4">
				<div>
					<p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
				</div>
			</footer>
		</footer>
	);
};

export default Footer;
