import clsx from 'clsx';
import Card from '../Card';
import {filesProps} from '../../lib/definitions';
import Image from 'next/image';

export const PhotoImageCard = ({
	file,
	children,
	imageStype,
	imageBorderStyle,
	className,
}: {
	file: filesProps;
	className?: string;
	imageBorderStyle?: string;
	imageStype?: string;
	children?: React.ReactNode;
}) => {
	return (
		<>
			<Card
				className={clsx(
					'text-center mx-auto my-5 shadow-none',
					className
				)}
			>
				<div className={clsx('rounded-2xl', imageBorderStyle)}>
					<Image
						src={file?.url || ''}
						alt={'not-found'}
						width={file?.width || 456}
						height={file?.height || 456}
						className={imageStype}
					/>
				</div>
				{children}
			</Card>
		</>
	);
};
