'use client';

import {ItemProps} from '@/app/lib/definitions';
import Card from '@/app/ui/Card';
import ItemsList from '@/app/ui/Carousel/CarouselItems';
import Link from 'next/link';
import {ChevronRight} from 'lucide-react';

const docs: ItemProps = {
	label: 'Quick and Easy Account Opening',
	src: '/images/account.svg',
	width: 423,
	style: '!flex-col',
};
function AccountOpeningCard() {
	return (
		<>
			<Card className="bg-TColor-100 pt-10 lg:pt-0">
				<ItemsList
					className="px-3 lg:px-0 text-center lg:text-left lg:w-4/5 mx-auto"
					labelStyle="text-TColor-150"
					imageStyle="rounded-br-3xl"
					imageContStyle="flex justify-end"
					formList={docs}
				>
					<div className="">
						<h5 className="mt-5 text-TColor-50/75 leading-7">
							We have designed our sign-up process to be
							lightning-fast, ensuring you can start banking
							without any delay. No lengthy paperwork or
							complicated steps here. Just give us your basic
							info, verify your identity, and you are done. It is
							banking made simple.
						</h5>
						<Link
							className="flex gap-2 text-TColor-150 mt-5 font-bold justify-center lg:justify-normal"
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

export default AccountOpeningCard;
