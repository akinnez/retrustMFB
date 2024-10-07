'use client';
import CarouselComponent from './Carousel';
import CarouselComp from './CarouselComp';
import CarouselItems from './CarouselItems';
import {loanList} from '@/app/lib/placeholder-data';

const NodeArray = [
	<CarouselItems key={0} formList={loanList[0]} />,
	<CarouselItems key={1} formList={loanList[1]} />,
	<CarouselItems key={2} formList={loanList[2]} />,
	<CarouselItems key={3} formList={loanList[3]} />,
	<CarouselItems key={4} formList={loanList[4]} />,
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
