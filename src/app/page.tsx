'use client';
import Image from 'next/image';
import AccountOpeningCard from './ui/Cards/AccountOpeningCard';
import ATMCardUseCard from './ui/Cards/ATMCardUseCard';
import BudgetCard from './ui/Cards/BudgetCard';
import HomePageBannerCard from './ui/Cards/HomePageBannerCard';
import InstantLoanCard from './ui/Cards/InstantLoanCard';
import JoinUsCard from './ui/Cards/JoinUsCard';
import Card from './ui/Card';
import {motion} from 'framer-motion';

export default function Home() {
	return (
		<>
			<div className="md:px-10 xl:px-28 lg:py-10 bg-bg-100/25">
				<HomePageBannerCard />
				<div className="lg:flex justify-between items-center my-10">
					<div className="lg:grid lg:grid-cols-2 gap-20">
						<div className="my-10 lg:my-0">
							<h5 className="text-TColor-50/50 my-5 text-center lg:text-left">
								FULLY LICENSED BY
							</h5>
							<div className="flex gap-x-3 justify-center items-center">
								<Image
									src={'/images/cbn.svg'}
									alt="not-found"
									width={23}
									height={31}
								/>
								<h5 className=" text-lg">
									Central Bank of Nigeria
								</h5>
							</div>
						</div>
						<div className="my-10 lg:my-0">
							<h5 className="text-TColor-50/50 my-5 text-center lg:text-left">
								DEPOSITS INSURED BY
							</h5>
							<div className="flex justify-center lg:justify-normal">
								<Image
									src={'/images/ndic.svg'}
									alt="not-found"
									width={81}
									height={31}
								/>
							</div>
						</div>
					</div>
					<div className="px-3 lg:px-0 w-full lg:w-2/5 my-10 lg:my-0">
						<Card className="flex items-center gap-3 px-3 py-4  border border-TColor-50/50 ">
							<Image
								src={'/images/qrcode.svg'}
								alt="not-found"
								width={47}
								height={47}
							/>

							<div className="">
								Scan the QR code with your phone camera to
								download the Retrust app.
							</div>
						</Card>
					</div>
				</div>
			</div>

			<div className="px-3 md:px-10 xl:px-28 py-5 md:py-10 bg-TColor-400">
				<motion.div
					layout
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{
						opacity: {ease: 'linear', duration: 1},
						layout: {duration: 0.3},
					}}
					viewport={{once: false}}
				>
					<div className="lg:grid grid-cols-3 gap-10 py-10">
						<div className="col-span-2 text-center lg:text-left">
							<h2 className={'text-2xl lg:text-4xl'}>
								Building the tracks of digital finance.
							</h2>
							<h5 className="mt-5 text-TColor-50/75 leading-7 my-7">
								Retrust Microfinance Bank stands out for its
								customer-centric approach, innovative solutions,
								and commitment to creating positive social and
								economic impacts. We believe in fostering trust,
								driving growth, and empowering communities to
								achieve their full potential.
							</h5>
						</div>
					</div>
				</motion.div>
				<motion.div
					layout
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{
						opacity: {ease: 'linear', duration: 1},
						layout: {duration: 0.3},
					}}
					viewport={{once: false}}
				>
					<AccountOpeningCard />
				</motion.div>

				<div className="my-10 lg:grid grid-cols-2 gap-x-20">
					<motion.div
						layout
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						transition={{
							opacity: {ease: 'linear', duration: 1},
							layout: {duration: 1},
						}}
						viewport={{once: false}}
					>
						<BudgetCard />
					</motion.div>
					<motion.div
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						transition={{
							opacity: {ease: 'linear', duration: 1},
							layout: {duration: 1},
						}}
						viewport={{once: false}}
					>
						<ATMCardUseCard />
					</motion.div>
				</div>
				<motion.div
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{
						opacity: {ease: 'linear'},
						layout: {duration: 1},
					}}
					viewport={{once: false}}
				>
					<InstantLoanCard />
				</motion.div>
			</div>
			<motion.div
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{
					opacity: {ease: 'linear'},
					layout: {duration: 1},
				}}
				viewport={{once: false}}
			>
				<JoinUsCard />
			</motion.div>
		</>
	);
}
