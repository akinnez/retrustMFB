import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

function CarouselComp({NodeArray}: {NodeArray: React.ReactNode[]}) {
	return (
		<>
			<Carousel
				className={`w-full snap-center origin-center`}
				orientation={'vertical'}
			>
				<CarouselContent className="space-y-10 snap-center origin-center max-h-fit">
					{NodeArray.map((_, index) => {
						return (
							<CarouselItem key={index}>
								<div className="p-1">{<>{_}</>}</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</>
	);
}

export default CarouselComp;
