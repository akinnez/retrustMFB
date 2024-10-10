'use client';

import FooterList from '@/app/ui/Footer/FooterList';
import FooterTop from '@/app/ui/Footer/FooterTop';

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
