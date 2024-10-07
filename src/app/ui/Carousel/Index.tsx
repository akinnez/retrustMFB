'use client';

import CarouselComp from './CarouselComp';
import {formList} from '@/app/lib/placeholder-data';
import ItemsList from './CarouselItems';
import CarouselComponent from './Carousel';

const NodeArray = [
	<ItemsList key={formList[0].label} formList={formList[0]} />,
	<ItemsList key={formList[1].label} formList={formList[1]} />,
	<ItemsList key={formList[2].label} formList={formList[2]} />,
];

function Carousel() {
	return (
		<>
			<div className="hidden lg:block">
				<CarouselComponent NodeArray={NodeArray} />
			</div>
			<div className=" lg:hidden">
				<CarouselComp NodeArray={NodeArray} />
			</div>
		</>
	);
}

export default Carousel;
