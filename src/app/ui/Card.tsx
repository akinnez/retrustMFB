'use client';
import clsx from 'clsx';

type CardProps = {
	children?: React.ReactNode;
	className?: string;
};

function Card({children, className}: CardProps) {
	return (
		<>
			<div
				className={clsx(
					'rounded-3xl shadow-sm shadow-TColor-50',
					className
				)}
			>
				{children}
			</div>
		</>
	);
}

export default Card;
