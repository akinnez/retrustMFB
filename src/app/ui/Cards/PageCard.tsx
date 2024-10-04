import clsx from 'clsx';
import Image from 'next/image';

function PageCard({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<>
			<div className={clsx('relative -z-10 w-full', className)}>
				<div className="px-5 hidden md:block">
					<Image
						src={'/images/semilogo.svg'}
						width={150}
						height={100}
						alt="not found"
					/>
				</div>

				<div className="float-end px-5 pt-10 hidden md:block">
					<Image
						src={'/images/semilogo.svg'}
						width={150}
						height={100}
						alt="not found"
					/>
				</div>

				<div className="absolute inset-0 -z-10 min-h-[calc(70vh-5rem)] bg-TColor-100 flex items-center justify-center">
					{children}
				</div>
			</div>
		</>
	);
}

export default PageCard;
