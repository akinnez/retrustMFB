import Image from 'next/image';
import Card from '@/app/ui/Card';
import Link from 'next/link';

function FooterTop() {
	return (
		<>
			<div className="min-h-[calc(100vh-10rem)] bg-bg-100 flex justify-center items-center py-5 lg:py-0">
				<Card className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-4/5 bg-TColor-50 min-h-[50vh] lg:grid grid-cols-2 lg:gap-5 lg:items-center">
					<div className="w-3/4 mx-auto text-center md:text-left">
						<h4 className="text-TColor-400 my-5 text-4xl">
							Easy Access – Anytime, Anywhere
						</h4>
						<span className="text-TColor-400">
							Ready to elevate your lifestyle? Then get RETRUST! 
						</span>
						<div className="mt-5 flex justify-center lg:justify-normal gap-x-5">
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
					<div>
						<Image
							src={'/images/footerImage.svg'}
							alt="apple"
							width={270}
							height={270}
							className="mx-auto my-10"
						/>
					</div>
				</Card>
			</div>
		</>
	);
}

export default FooterTop;
