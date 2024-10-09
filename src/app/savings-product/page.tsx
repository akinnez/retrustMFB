'use client';

import PageCard from '@/app/ui/Cards/PageCard';
import Carousel from '@/app/ui/Carousel/Index';

function SavingsProduct() {
	return (
		<>
			<PageCard className="min-h-[calc(70vh-5rem)]">
				<div className="px-3 lg:px-0 lg:w-2/5 text-center">
					<h1 className="text-3xl sm:text-5xl w-full">
						Our Savings Products
					</h1>
					<h4 className="mt-5 text-TColor-50 lg:text-lg">
						We are here for your every need – your dreams, goals,
						and whatever you need. Our products are designed to
						simplify your daily life so you can save, spend and
						borrow with ease.
					</h4>
				</div>
			</PageCard>
			<div className="px-3 md:px-10 xl:px-28 py-5 md:py-10 xl:py-20">
				<Carousel />
			</div>
		</>
	);
}

export default SavingsProduct;
