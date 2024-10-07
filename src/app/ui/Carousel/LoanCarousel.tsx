'use client';
import CarouselComponent from './Carousel';
import CarouselComp from './CarouselComp';
import CarouselItems from './CarouselItems';
import {loanList} from '@/app/lib/placeholder-data';

const NodeArray = [
	<CarouselItems formList={loanList[0]} />,
	<CarouselItems formList={loanList[1]} />,
	<CarouselItems formList={loanList[2]} />,
	<CarouselItems formList={loanList[3]} />,
	<CarouselItems formList={loanList[4]} />,
];
function LoanCarousel() {
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

export default LoanCarousel;
