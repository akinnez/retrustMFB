import Link from 'next/link';
import {Avatar} from '../Avatar';
import TwitterX from '../Icons/TwitterX';
import Whatsapp from '../Icons/Whatsapp';

import Youtube from '../Icons/Youtube';
import Image from 'next/image';

export const social: React.ReactNode[] = [
	<Whatsapp styles="h-6 w-6" />,
	<Image
		src={'/images/instagram.svg'}
		alt="notfound"
		width={19}
		height={19}
	/>,
	<TwitterX styles="h-6 w-6" />,
	<Youtube styles="h-6 w-6 fill-TColor-150" />,
];

export const footerList = [
	{
		label: 'About',
		list: [
			<Link href="/about">About</Link>,
			<Link href="/team">Our Team</Link>,
			<Link href="#">Newsroom</Link>,
		],
	},
	{
		label: 'Security',
		list: [
			<Link href="/privacy-policy">Privacy Policy</Link>,
			<Link href="#">Cookies Policy</Link>,
			<Link href="#">Security Policy</Link>,
			<Link href="/term-of-use">Terms of Use</Link>,
		],
	},
	{
		label: 'Help',
		list: [<Link href="#">Learn</Link>, <Link href="#">Newsroom</Link>],
	},
	{
		label: 'Contact',
		list: [
			'09012345678',
			'info@Retrustmfb.com',
			<div className="flex gap-x-5 lg:gap-x-2 justify-center">
				{social.map((e, i) => (
					<Avatar key={i} className="bg-TColor-100">
						{e}
					</Avatar>
				))}
			</div>,
		],
	},
];
