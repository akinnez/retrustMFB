'use client';

import {ItemProps, ListProps} from '@/app/lib/definitions';
import Image from 'next/image';
import {ListComp} from '@/app/ui/ListComp';
import clsx from 'clsx';

function ItemsList({
	formList,
	labelStyle,
	imageStyle,
	imageContStyle,
	className,
	children,
}: {
	formList: ItemProps;
	labelStyle?: string;
	imageStyle?: string;
	imageContStyle?: string;
	className?: string;
	children?: React.ReactNode;
}) {
	const arrayList: ListProps[] = formList?.listing as ListProps[];
	return (
		<>
			<div
				className={clsx(
					'flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 justify-center items-center',
					formList?.style
				)}
			>
				<div className={className}>
					<h2 className={clsx('text-2xl lg:text-3xl', labelStyle)}>
						{formList?.label}
					</h2>

					{formList?.subText && (
						<h4 className="text-xl text-TColor-150">
							{formList?.subText}
						</h4>
					)}
					{arrayList && (
						<ul className="p-5 text-TColor-50/75">
							{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
							{arrayList.map((_: any, i: number) => (
								<ListComp key={i} description={_.description} />
							))}
						</ul>
					)}

					<div>{children}</div>
				</div>
				<div className={imageContStyle}>
					<Image
						src={formList?.src}
						alt="image-not-found"
						width={formList?.width || 500}
						height={formList?.height || 426}
						className={imageStyle}
					/>
				</div>
			</div>
		</>
	);
}

export default ItemsList;
