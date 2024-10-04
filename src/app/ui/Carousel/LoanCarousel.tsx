'use client';
import CarouselComp from './CarouselComp';
import ItemsList from './CarouselItems';
import {loanList} from '@/app/lib/placeholder-data';

function LoanCarousel() {
	return (
		<>
			<CarouselComp
				NodeArray={[
					<ItemsList
						key={loanList[0].label}
						formList={loanList[0]}
					/>,
					<ItemsList
						key={loanList[1].label}
						formList={loanList[1]}
					/>,
					<ItemsList
						key={loanList[2].label}
						formList={loanList[2]}
					/>,
					<ItemsList
						key={loanList[3].label}
						formList={loanList[3]}
					/>,
					<ItemsList
						key={loanList[4].label}
						formList={loanList[4]}
					/>,
				]}
			/>
		</>
	);
}

export default LoanCarousel;
