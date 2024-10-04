import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {useEffect, useState} from 'react';

function CarouselComp({NodeArray}: {NodeArray: React.ReactNode[]}) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<Carousel
				className="w-full"
				orientation={isMobile ? 'vertical' : 'horizontal'}
			>
				<CarouselContent>
					{NodeArray.map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<>{_}</>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex" />
				<CarouselNext className="hidden md:flex" />
			</Carousel>
		</>
	);
}

export default CarouselComp;
