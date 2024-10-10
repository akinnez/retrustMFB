import Link from 'next/link';
import Card from '@/app/ui/Card';
import ItemsList from '@/app/ui/Carousel/CarouselItems';
import {ChevronRight} from 'lucide-react';
import {ItemProps} from '@/app/lib/definitions';

const docs: ItemProps = {
	label: 'Instant Loans, Anytime You Need Them',
	src: '/images/loan.svg',
	width: 423,
	style: '!flex-col',
};

function InstantLoanCard() {
	return (
		<>
			<Card className="bg-bg-300 pt-10 lg:pt-0">
				<ItemsList
					className="px-3 lg:px-0 text-center lg:text-left lg:w-4/5 mx-auto"
					labelStyle="text-TColor-300"
					imageContStyle="pt-10"
					formList={docs}
				>
					<div className="">
						<h5 className="mt-5 text-TColor-50/75 leading-7">
							Need a loan? Retrust has you covered. Whether for
							personal or business needs, we offer a range of loan
							options to suit you. Apply anytime and receive funds
							directly in your Retrust account-quick, easy, and
							hassle-free.
						</h5>
						<Link
							className="flex gap-2 text-TColor-300 mt-5 font-bold justify-center lg:justify-normal"
							href={'#'}
						>
							Get app now <ChevronRight />
						</Link>
					</div>
				</ItemsList>
			</Card>
		</>
	);
}

export default InstantLoanCard;
