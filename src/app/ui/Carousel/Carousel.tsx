import {useState} from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Strollbar from './Strollbar';

function CarouselComponent({NodeArray}: {NodeArray: React.ReactNode[]}) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			<div className="flex space-x-4">
				<Carousel
					className={`w-full snap-center origin-center`}
					orientation="vertical"
				>
					<CarouselContent className="space-y-10 snap-center max-h-fit">
						<CarouselItem className="w-full block">
							<div className="p-1">{NodeArray[activeIndex]}</div>
						</CarouselItem>
					</CarouselContent>
					<Strollbar
						setIndex={setActiveIndex}
						NodeArray={NodeArray}
					/>
				</Carousel>
			</div>
		</>
	);
}

export default CarouselComponent;
