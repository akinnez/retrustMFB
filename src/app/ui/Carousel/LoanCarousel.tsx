'use client';
import CarouselComp from './CarouselComp';
import ItemsList from './CarouselItems';
import {loanList} from '@/app/lib/placeholder-data';

function LoanCarousel() {
	return (
		<>
			<CarouselComp
				NodeArray={[
					<ItemsList formList={loanList[0]} />,
					<ItemsList formList={loanList[1]} />,
					<ItemsList formList={loanList[2]} />,
					<ItemsList formList={loanList[3]} />,
					<ItemsList formList={loanList[4]} />,
				]}
			/>
		</>
	);
}

export default LoanCarousel;
