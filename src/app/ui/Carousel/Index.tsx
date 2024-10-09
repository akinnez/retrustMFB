'use client';

import CarouselComp from '@/app/ui/Carousel/CarouselComp';
import {formList} from '@/app/lib/placeholder-data';
import ItemsList from '@/app/ui/Carousel/CarouselItems';
import CarouselComponent from './Carousel';
import {useEffect, useState} from 'react';

const NodeArray = [
	<ItemsList key={formList[0].label} formList={formList[0]} />,
	<ItemsList key={formList[1].label} formList={formList[1]} />,
	<ItemsList key={formList[2].label} formList={formList[2]} />,
];

const stickyPostiton = 380;

function Carousel() {
	const [index, setIndex] = useState(0);
	const [stroll, setStroll] = useState(0);

	function handleStrollBelow(e: Event) {
		const scrollY = (e.target as Window).scrollY;
		const activeIndex = Math.floor(scrollY / (stickyPostiton + 150));
		setIndex(activeIndex);
		setStroll(scrollY);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleStrollBelow); // Add scroll event listener

		return () => {
			window.removeEventListener('scroll', handleStrollBelow); // Cleanup on unmount
		};
	}, []);

	function fixedCondition(): boolean {
		if (stroll >= stickyPostiton) return true;
		else return false;
	}
	return (
		<>
			<div className="hidden lg:block">
				<CarouselComponent
					local="savings"
					position={fixedCondition()}
					index={index}
					NodeArray={NodeArray}
				/>
			</div>
			<div className=" lg:hidden">
				<CarouselComp NodeArray={NodeArray} />
			</div>
		</>
	);
}

export default Carousel;
