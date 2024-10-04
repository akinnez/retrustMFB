import clsx from 'clsx';

export const Avatar = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) => {
	return (
		<>
			<div
				className={clsx(
					'rounded-full h-10 w-10 shadow-sm flex justify-center items-center',
					className
				)}
			>
				{children}
			</div>
		</>
	);
};
