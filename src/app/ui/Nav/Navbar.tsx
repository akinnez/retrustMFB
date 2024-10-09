'use client';
import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Menu, XCircle} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {navListComp} from './NavDocs';
import dynamic from 'next/dynamic';

const NavigationMenuDropdown = dynamic(() => import('@/app/ui/Nav/NavList'), {
	ssr: false,
});
const MobileSideNav = dynamic(() => import('@/app/ui/Nav/MobileSideNav'), {
	ssr: false,
});

export type ListItemProps = {
	title: string;
	href: string;
	description: string;
	otherList?: Array<string>;
	icon: React.ReactNode;
};

function Navbar() {
	const [isOpen, setOpen] = useState(false);
	function open() {
		setOpen(true);
	}
	function close() {
		setOpen(false);
	}
	return (
		<>
			<header className="sticky top-0 z-50 w-full flex px-3 md:px-10 xl:px-28 lg:justify-between lg:items-center bg-TColor-400 py-5">
				<Link href={'/'} className="w-full lg:w-auto cursor-pointer">
					<Image
						src={'/images/logo.svg'}
						width={150}
						height={150}
						alt={'logo'}
					/>
				</Link>

				<nav
					className={`fixed lg:static top-0 z-50 flex-col min-w-[320px] lg:w-full h-screen lg:h-full justify-start flex lg:flex-row lg:justify-center items-center ${
						isOpen
							? 'left-0 bg-TColor-400 transition-all duration-500 ease-linear lg:bg-TColor-400 pt-40  lg:py-0 overflow-y-auto lg:overflow-hidden '
							: '-left-[100%] lg:left-0 transition-all duration-1000 ease-linear '
					}`}
				>
					<div className="gap-x-5 items-center hidden lg:flex">
						<NavigationMenuDropdown navList={navListComp} />
						<Link
							href={'/news'}
							className="hover:text-TColor-150 hover:font-bold"
						>
							Newsroom
						</Link>
					</div>
					<div className="lg:hidden">
						<div className="absolute top-4 right-0 mx-5 flex justify-between w-full">
							<Image
								src={'/images/logo.svg'}
								width={150}
								layout="fixed"
								objectFit="contain"
								height={150}
								alt={'logo'}
								className="mx-5"
							/>

							<XCircle
								className="cursor-pointer"
								onClick={() => close()}
							/>
						</div>

						<MobileSideNav
							close={close}
							navListComp={navListComp}
						/>
					</div>
				</nav>

				<Button className="rounded-3xl hidden lg:block" size={`lg`}>
					Get App
				</Button>

				<div className="lg:hidden">
					<Menu className="cursor-pointer" onClick={() => open()} />
				</div>
			</header>
		</>
	);
}

export default Navbar;
