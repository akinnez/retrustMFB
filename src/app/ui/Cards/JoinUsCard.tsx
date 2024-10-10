'use client';

import {ItemProps} from '@/app/lib/definitions';
import ItemsList from '@/app/ui/Carousel/CarouselItems';

const docs: ItemProps = {
	label: 'Join Us on Our Journey',
	src: '/images/manwtheadset.svg',
	width: 400,
	style: '!flex-col px-3 md:px-10 xl:px-28 py-5 md:py-10',
};

function JoinUsCard() {
	return (
		<>
			<div className="bg-bg-100/25 pt-10 lg:pt-0">
				<ItemsList
					className="px-3 lg:px-0 text-center lg:text-left lg:w-4/5 mx-auto"
					imageContStyle="p-10"
					formList={docs}
				>
					<div className="">
						<h5 className="mt-5 text-TColor-50/75 leading-7">
							We invite you to be a part of our journey to
							redefine microfinance banking in Nigeria. Together,
							we can build a brighter financial future for
							everyone.
						</h5>
					</div>
				</ItemsList>
			</div>
		</>
	);
}

export default JoinUsCard;
