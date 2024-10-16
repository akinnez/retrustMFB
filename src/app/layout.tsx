import type {Metadata} from 'next';
import {Gilroy_Medium, Gilroy_ExtraBold} from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import Navbar from '@/app/ui/Nav/Navbar';
import Footer from '@/app/ui/Footer/Index';

export const metadata: Metadata = {
	title: 'Retrust MFB Official Website',
	description: 'Generated by Retrust MFB',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${Gilroy_Medium.variable} ${Gilroy_ExtraBold.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
