import Image from 'next/image';
import Card from '@/app/ui/Card';

function BudgetCard() {
	return (
		<>
			<Card className="bg-bg-100 my-10 lg:my-0">
				<div className="pt-16">
					<div className="px-3 lg:px-14 text-center lg:text-left">
						<h2 className={'text-2xl lg:text-3xl text-TColor-200'}>
							Budget every expenses
						</h2>
						<h5 className="mt-5 text-TColor-50/75 leading-7 my-7">
							Your dreams are unique, and so is our approach. With
							our flexible saving options and competitive interest
							rates, we are here to help you turn aspirations into
							achievements. Open an account with us and let us
							make your dreams a reality, together.
						</h5>
					</div>

					<div className="px-10">
						<Image
							src={'/images/appAnalysis.svg'}
							alt="image-not-found"
							width={423}
							height={423}
						/>
					</div>
				</div>
			</Card>
		</>
	);
}

export default BudgetCard;
