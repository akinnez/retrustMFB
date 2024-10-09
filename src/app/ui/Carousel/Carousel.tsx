'use client';

const stickyPostiton = 380;
function CarouselComponent({
	NodeArray,
	index,
	position,
	local,
}: {
	NodeArray: React.ReactNode[];
	index?: number;
	position?: boolean;
	local?: string;
}) {
	return (
		<>
			<div
				className={`flex flex-col w-full ${
					position && 'fixed w-full pr-10 top-[150px]'
				}`}
			>
				<div className={`w-full`}>
					<div className="space-y-10">
						<div className="w-full block">
							<div className="p-1">{NodeArray[index ?? 0]}</div>
						</div>
					</div>
				</div>
			</div>
			{local == 'loan' && (
				<div
					className={`absloute inset-0]`}
					style={{
						height: `${
							stickyPostiton * NodeArray.length + stickyPostiton
						}px`,
					}}
				></div>
			)}
			{local == 'savings' && (
				<div
					className={`absloute inset-0]`}
					style={{
						height: `${stickyPostiton * NodeArray.length - 1}px`,
					}}
				></div>
			)}
		</>
	);
}

export default CarouselComponent;
