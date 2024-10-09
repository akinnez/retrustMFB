'use client';

import Image from 'next/image';
import Card from '@/app/ui/Card';
import Link from 'next/link';

function HomePageBannerCard() {
	return (
		<>
			<Card className="bg-TColor-100 py-20 lg:py-0 min-h-[calc(90vh-5rem)] !rounded-none lg:!rounded-[3rem]">
				<div className="lg:relative w-full min-h-[calc(90vh-5rem)]">
					<div className="flex justify-center items-center lg:min-h-[calc(90vh-5rem)]">
						<div className="px-3 sm:px-0 sm:w-4/5 lg:w-1/2 text-center relative z-10">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl  w-full">
								Building a{' '}
								<span className="text-TColor-150">
									Brighter{' '}
								</span>
								Financial Future
							</h1>
							<h4 className="mt-5 text-TColor-50/75 sm:text-lg leading-7">
								We are here for your every need – your dreams,
								goals, and whatever you need. Our products are
								designed to simplify your daily life so you can
								save, spend and borrow with ease.
							</h4>
							<div className="mt-10 flex justify-center gap-x-5">
								<Link href={'#'}>
									<Image
										src={'/images/apple.svg'}
										alt="apple"
										width={130}
										height={130}
									/>
								</Link>
								<Link href={'#'}>
									<Image
										src={'/images/play.svg'}
										alt="play"
										width={130}
										height={130}
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="hidden lg:absolute inset-x-0 bottom-0 lg:flex justify-between rounded-b-[3rem]">
						<Image
							src={'/images/footerSlant.svg'}
							alt="not-found"
							width={300}
							height={300}
							className="rounded-bl-[3rem]"
						/>
						<Image
							src={'/images/retrustMobile.svg'}
							alt="not-found"
							width={300}
							height={300}
							className="rounded-br-[3rem]"
						/>
					</div>
					<div className="flex justify-center lg:hidden">
						<Image
							src={'/images/footerImage.svg'}
							alt="apple"
							width={300}
							height={300}
							className="mx-auto my-10"
						/>
					</div>
				</div>
			</Card>
		</>
	);
}

export default HomePageBannerCard;
