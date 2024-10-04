import Link from 'next/link';
import {Avatar} from '../Avatar';
import TwitterX from '../Icons/TwitterX';
import Whatsapp from '../Icons/Whatsapp';

import Youtube from '../Icons/Youtube';
import Image from 'next/image';

export const social: React.ReactNode[] = [
	<Whatsapp styles="h-6 w-6" key={'whatsapp'} />,
	<Image
		key={'instagram'}
		src={'/images/instagram.svg'}
		alt="notfound"
		width={19}
		height={19}
	/>,
	<TwitterX styles="h-6 w-6" key={'X'} />,
	<Youtube styles="h-6 w-6 fill-TColor-150" key={'Youtube'} />,
];

export const footerList = [
	{
		label: 'About',
		list: [
			<Link href="/about" key={'about'}>
				About
			</Link>,
			<Link href="/team" key={'team'}>
				Our Team
			</Link>,
			<Link href="#" key={'news'}>
				Newsroom
			</Link>,
		],
	},
	{
		label: 'Security',
		list: [
			<Link href="/privacy-policy" key={'privacy'}>
				Privacy Policy
			</Link>,
			<Link href="#" key={'cookies'}>
				Cookies Policy
			</Link>,
			<Link href="#" key={'security'}>
				Security Policy
			</Link>,
			<Link href="/term-of-use" key={'TOU'}>
				Terms of Use
			</Link>,
		],
	},
	{
		label: 'Help',
		list: [
			<Link href="#" key={'learn'}>
				Learn
			</Link>,
			<Link href="#" key={'newsroom'}>
				Newsroom
			</Link>,
		],
	},
	{
		label: 'Contact',
		list: [
			'09012345678',
			'info@Retrustmfb.com',
			<div
				key={'contactUs'}
				className="flex gap-x-5 lg:gap-x-2 justify-center"
			>
				{social.map((e, i) => (
					<Avatar key={i} className="bg-TColor-100">
						{e}
					</Avatar>
				))}
			</div>,
		],
	},
];
