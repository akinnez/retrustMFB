'use client';

import {filesProps, ListProps} from '@/app/lib/definitions';
import {digitalFiles} from '@/app/lib/placeholder-data';
import PageCard from '@/app/ui/Cards/PageCard';
import {ListComp} from '@/app/ui/ListComp';
import {PhotoImageCard} from '@/app/ui/Cards/PhotoImageCard';

const PhotoCard = ({file}: {file: filesProps}) => {
	const arrayList: ListProps[] = file?.position as ListProps[];
	return (
		<>
			<PhotoImageCard
				className="lg:w-[500px] lg:h-[500px]"
				imageBorderStyle="lg:w-[500px]"
				imageStype={file?.imageStype}
				file={file}
			>
				<div className="text-left py-7">
					<h3 className={`font-semibold text-TColor-50 text-xl px-5`}>
						{file.name || ''}
					</h3>
					<ul className="my-5 px-7">
						{arrayList &&
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							arrayList?.map((e: any, i: number) => (
								<ListComp
									key={i}
									description={e.description}
									title={e.title}
								/>
							))}
					</ul>
				</div>
			</PhotoImageCard>
		</>
	);
};
function DigitalSolution() {
	return (
		<>
			<PageCard className="min-h-[calc(70vh-5rem)]">
				<div className="lg:w-2/5 text-center">
					<h1 className="text-3xl sm:text-5xl w-full">
						Our Digital Solutions
					</h1>
					<h5 className="mt-5 text-TColor-50/75 lg:text-lg">
						We are here for your every need – your dreams, goals,
						and whatever you need. Our products are designed to
						simplify your daily life so you can save, spend and
						borrow with ease.
					</h5>
				</div>
			</PageCard>
			<div className="px-3 md:px-10 xl:px-28 py-5 md:py-10 xl:py-20">
				<div className="mx-auto lg:grid lg:grid-cols-2 gap-x-10">
					{digitalFiles.map((e, i) => (
						<PhotoCard file={e} key={i} />
					))}
				</div>
			</div>
		</>
	);
}

export default DigitalSolution;
