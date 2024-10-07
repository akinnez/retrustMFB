import {cn} from '@/lib/utils';

function Strollbar({
	NodeArray = [],
	className,
	setIndex,
}: {
	setIndex: React.Dispatch<React.SetStateAction<number>>;
	NodeArray?: React.ReactNode[];
	className?: string;
}) {
	const scrollHeight = 400;
	const arrayLength = NodeArray?.length || 1;
	const totalHeight = arrayLength * scrollHeight;

	// const {scrollNext, scrollPrev} = useCarousel();

	function handleScroll(e: React.UIEvent<HTMLDivElement>) {
		const activeIndex = Math.round(
			e.currentTarget.scrollTop / scrollHeight
		);
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
			<div style={{height: `${totalHeight}px`}}></div>
		</div>
	);
}

export default Strollbar;
