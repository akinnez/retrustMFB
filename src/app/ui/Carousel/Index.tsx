'use client';

import CarouselComp from './CarouselComp';
import {formList} from '@/app/lib/placeholder-data';
import ItemsList from './CarouselItems';

function Carousel() {
	return (
		<>
			<CarouselComp
				NodeArray={[
					<ItemsList formList={formList[0]} />,
					<ItemsList formList={formList[1]} />,
					<ItemsList formList={formList[2]} />,
				]}
			/>
		</>
	);
}

export default Carousel;
