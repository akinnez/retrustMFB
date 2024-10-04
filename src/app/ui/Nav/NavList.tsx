'use client';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import clsx from 'clsx';
import * as React from 'react';

export type navListType = {
	trigger: string;
	children: React.ReactNode;
	contentStyle?: string;
};

function NavigationMenuDropdown({navList}: {navList: navListType[]}) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{navList.map((e, i) => (
					<NavigationMenuItem key={i}>
						<NavigationMenuTrigger>
							{e?.trigger}
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul
								className={clsx(
									'grid gap-3 p-6 w-[500px]',
									e?.contentStyle
								)}
							>
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										{e?.children}
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default NavigationMenuDropdown;
