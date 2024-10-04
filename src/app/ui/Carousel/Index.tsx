'use client';

import CarouselComp from './CarouselComp';
import {formList} from '@/app/lib/placeholder-data';
import ItemsList from './CarouselItems';

function Carousel() {
	return (
		<>
			<CarouselComp
				NodeArray={[
					<ItemsList
						key={formList[0].label}
						formList={formList[0]}
					/>,
					<ItemsList
						key={formList[1].label}
						formList={formList[1]}
					/>,
					<ItemsList
						key={formList[2].label}
						formList={formList[2]}
					/>,
				]}
			/>
		</>
	);
}

export default Carousel;
