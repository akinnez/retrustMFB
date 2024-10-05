import Image from 'next/image';
import Card from '../Card';

function ATMCardUseCard() {
	return (
		<>
			<Card className=" bg-bg-200 my-10 lg:my-0">
				<div className="pt-16">
					<div className="px-3 lg:px-14 text-center lg:text-left">
						<h2 className={'text-2xl lg:text-3xl text-TColor-250'}>
							Card you can use anywhere, anytime
						</h2>
						<h4 className="mt-5 text-TColor-50/75 leading-7 my-7">
							Life is demands can be overwhelming, but handling
							payments should not be. At Retrust, we have
							simplified the way you manage your finances so you
							can pay for your utilities, TV subscriptions, and
							send money to loved ones effortlessly.
						</h4>
					</div>

					<div className="lg:pt-[1.4rem]">
						<Image
							src={'/images/card.svg'}
							alt="image-not-found"
							width={700}
							height={360}
							className="rounded-b-3xl"
						/>
					</div>
				</div>
			</Card>
		</>
	);
}

export default ATMCardUseCard;
