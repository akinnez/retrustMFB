import {cn} from '@/lib/utils';
import Link from 'next/link';

const ListItem = ({
	className,
	title,
	children,
	href,
}: {
	className?: string;
	title: string;
	children: React.ReactNode;
	href: string;
}) => {
	return (
		<li>
			<Link
				href={href}
				className={cn(
					'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
					className
				)}
			>
				<h2 className="leading-none">{title}</h2>
				<p className="line-clamp-2 leading-snug text-TColor-50/70">
					{children}
				</p>
			</Link>
		</li>
	);
};

export default ListItem;
