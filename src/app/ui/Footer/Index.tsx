'use client';

import FooterList from './FooterList';
import FooterTop from './FooterTop';

function Footer() {
	return (
		<>
			<div className="block w-full relative z-10">
				<FooterTop />
				<FooterList />
			</div>
		</>
	);
}

export default Footer;
