import {cn} from '@/lib/utils';

function Strollbar({
	NodeArray,
	className,
	setIndex,
}: {
	setIndex: React.Dispatch<React.SetStateAction<number>>;
	NodeArray?: React.ReactNode[];
	className?: string;
}) {
	const scrollHeight = 400;
	const arrayLength = NodeArray?.length || 1;
	const lastScrollTop = `h-[${arrayLength * scrollHeight}px]`;

	// const {scrollNext, scrollPrev} = useCarousel();

	function handleScroll(e: any) {
		const activeIndex = Math.round(e.target.scrollTop / scrollHeight);
		setIndex(activeIndex);
	}

	return (
		<div
			onScroll={(e) => handleScroll(e)}
			className={cn(
				'absolute w-4 h-[400px] overflow-y-scroll -right-12 top-1/2 -translate-y-1/2',
				className
			)}
		>
			{/* Invisible scrollbar content to create height */}
			<div className={lastScrollTop}></div>
		</div>
	);
}

export default Strollbar;
