'use client';

import Image from 'next/image';

import PageCard from '../ui/Cards/PageCard';
import Card from '../ui/Card';
import {PhotoImageCard} from '../ui/Cards/PhotoImageCard';
import {filesProps} from '../lib/definitions';
import {files} from '../lib/placeholder-data';

const PhotoAboutCard = ({file}: {file: filesProps}) => {
	return (
		<>
			<PhotoImageCard
				className="lg:w-[500px] lg:h-[580px]"
				imageBorderStyle="lg:w-[500px] lg:h-[500px] bg-TColor-100"
				imageStype={file?.imageStype}
				file={file}
			>
				<div className="my-7 text-center">
					<p className={`font-semibold text-TColor-50 text-lg`}>
						{file.name || ''}
					</p>
				</div>
			</PhotoImageCard>
		</>
	);
};

function About() {
	return (
		<>
			<PageCard className="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh+15rem)]">
				<div className="px-3 lg:px-0 lg:w-3/4 text-center">
					<h1 className="text-3xl sm:text-5xl w-full">Who we are</h1>
					<h4 className="mt-5 text-TColor-50/80 lg:text-lg">
						We are a Microfinance Bank established with the mission
						to serve economically active Nigerians through a
						customer-focused approach, utilizing technology in a
						sustainable way while adhering to industry best
						practices.
					</h4>

					<div className="my-10">
						<Image
							src={'/images/page2Banner.svg'}
							alt="not-found"
							width={1277}
							height={602}
						/>
					</div>
				</div>
			</PageCard>
			<div className="px-3 md:px-10 xl:px-28 py-5 md:py-10 xl:py-20">
				<div className="lg:w-3/4 mx-auto">
					<h4 className="text-center text-TColor-150">OUR MISSION</h4>
					<h2 className=" text-lg lg:text-3xl text-center text-TColor-50 mt-3">
						To empower individuals and MSMEs through accessible
						financial services, fostering economic development and
						improving livelihoods in a customer centric manner.
					</h2>
				</div>
				<div className="my-10 lg:my-20">
					<Card className="relative -z-10 w-full min-h-[200px] lg:min-h-0">
						<div className="flex justify-between items-center">
							<div className="hidden md:block">
								<Image
									src={'/images/semilogo.svg'}
									width={150}
									height={100}
									alt="not found"
								/>
							</div>
							<div className="hidden md:block">
								<Image
									src={'/images/semilogo.svg'}
									width={150}
									height={100}
									alt="not found"
								/>
							</div>
						</div>

						<Card className="absolute inset-0 -z-10 bg-TColor-150 text-TColor-400 flex items-center">
							<div className="px-3 lg:px-0 text-center lg:text-left lg:w-3/4 mx-auto lg:grid lg:grid-cols-3">
								<h1 className="text-center text-3xl mb-5 lg:mb-0">
									Our Vision
								</h1>
								<p className="col-span-2 font-bold">
									To be a leading microfinance bank in
									Nigeria, leveraging technology in driving
									inclusive economic growth and financial
									inclusion
								</p>
							</div>
						</Card>
					</Card>
				</div>
				<div>
					<h4 className="text-center text-TColor-150">OUR VALUES</h4>
					<h1 className="text-center text-TColor-50 text-3xl my-3">
						Our core values speak in volume
					</h1>
					<div className="lg:grid lg:grid-cols-2 gap-x-10">
						{files.map((e, i) => (
							<PhotoAboutCard file={e} key={i} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
