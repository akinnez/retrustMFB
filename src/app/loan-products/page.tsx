'use client';
import PageCard from '@/app/ui/Cards/PageCard';
import {useEffect, useState} from 'react';
import {loanList} from '../lib/placeholder-data';
import ItemsList from '../ui/Carousel/CarouselItems';
import CarouselComponent from '../ui/Carousel/Carousel';
import CarouselComp from '../ui/Carousel/CarouselComp';

const NodeArray = [
	<ItemsList key={0} formList={loanList[0]} />,
	<ItemsList key={1} formList={loanList[1]} />,
	<ItemsList key={2} formList={loanList[2]} />,
	<ItemsList key={3} formList={loanList[3]} />,
	<ItemsList key={4} formList={loanList[4]} />,
];
const stickyPostiton = 380;
function LoanPageContent({
	index,
	position,
}: {
	index: number;
	position: boolean;
}) {
	return (
		<>
			<div className="hidden lg:block">
				<CarouselComponent
					local="loan"
					index={index}
					NodeArray={NodeArray}
					position={position}
				/>
			</div>
			<div className="lg:hidden">
				<CarouselComp NodeArray={NodeArray} />
			</div>
		</>
	);
}

function LoanPage() {
	const [index, setIndex] = useState(0);
	const [stroll, setStroll] = useState(0);

	function handleStrollBelow() {
		const scrollY = window.scrollY;
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
			<div className="">
				<PageCard className="min-h-[calc(70vh-5rem)]">
					<div className="px-3 lg:px-0 lg:w-2/5 text-center">
						<h1 className="text-3xl sm:text-5xl w-full">
							Our Loan Products
						</h1>
						<h5 className="mt-5 text-TColor-50 lg:text-lg">
							We are here for your every need – your dreams,
							goals, and whatever you need. Our products are
							designed to simplify your daily life so you can
							save, spend and borrow with ease.
						</h5>
					</div>
				</PageCard>
				<div className="px-3 md:px-10 xl:px-28 py-5  w-full">
					<LoanPageContent
						index={index}
						position={fixedCondition()}
					/>
				</div>
			</div>
		</>
	);
}

export default LoanPage;
