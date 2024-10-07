'use client';
import clsx from 'clsx';

type CardProps = {
	children?: React.ReactNode;
	className?: string;
};

function Card({children, className}: CardProps) {
	return (
		<>
			<div className={clsx('rounded-3xl', className)}>{children}</div>
		</>
	);
}

export default Card;
