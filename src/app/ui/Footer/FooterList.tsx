import Image from 'next/image';
import {footerList} from '@/app/ui/Footer/FooterDocs';
import {FooterListComp} from '@/app/ui/Footer/FooterListComp';
import Link from 'next/link';

function FooterList() {
	return (
		<div className="min-h-[calc(70vh-10rem)] bg-TColor-400">
			<div className="flex justify-center items-center">
				<div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-4/5 min-h-[50vh] lg:grid grid-cols-3 gap-5 lg:items-center">
					<div className="col-span-1 my-20 lg:my-0 text-center lg:text-left">
						<Image
							src={'/images/logo.svg'}
							width={150}
							layout="fixed"
							objectFit="contain"
							height={150}
							alt={'logo'}
							className="mx-auto lg:mx-0"
						/>
						<h5 className="my-5 text-TColor-50">
							Eledunmo Plaza, 35 Obafemi Awolowo Way, Ikeja
							Underbridge Ikeja Lagos,
						</h5>
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
					<div className="col-span-2 lg:grid lg:grid-cols-4">
						{footerList.map((e, i) => (
							<FooterListComp
								key={i}
								label={e.label}
								list={e.list}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="text-center text-TColor-50/80">
				©️ 2024 Retrust. All rights reserved.
			</div>
		</div>
	);
}

export default FooterList;
