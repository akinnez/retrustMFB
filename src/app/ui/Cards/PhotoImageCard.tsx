import clsx from 'clsx';
import Card from '../Card';
import {filesProps} from '../../lib/definitions';
import Image from 'next/image';
import {motion} from 'framer-motion';

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
				<motion.div
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{
						opacity: {ease: 'linear', duration: 1},
						layout: {duration: 1},
					}}
					viewport={{once: false}}
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
				</motion.div>
			</Card>
		</>
	);
};
