import {Users} from 'lucide-react';
import {Avatar} from '../Avatar';
import {ListItemProps} from './Navbar';
import {navListType} from './NavList';
import ListItem from './ListItem';
import UserBold from '../Icons/UserBold';
import WritingPad from '../Icons/WritingPad';
import SubTitle from '../Icons/Subtitle';
import DocumentBox from '../Icons/DocumentBox';

export const aboutUs: ListItemProps[] = [
	{
		title: 'About Retrust',
		href: '/about',
		description: 'Read what make us innovative',
		icon: (
			<Avatar className="bg-TColor-100">
				<Users className="text-TColor-150 h-5 w-5" />
			</Avatar>
		),
	},
	{
		title: 'Our Leadership Team',
		href: '/team',
		description: 'Meet our awesome leadership team',
		icon: (
			<Avatar className="bg-TColor-100">
				<UserBold styles="h-5 w-5" />
			</Avatar>
		),
	},
];
export const services: ListItemProps[] = [
	{
		href: '/loan-products',
		description: 'Need extra funds, apply now',
		title: 'Loans',
		icon: (
			<Avatar className="bg-TColor-100">
				<WritingPad styles="h-5 w-5" />
			</Avatar>
		),
		otherList: [
			'Retrust EazyStart',
			'Retrust BizGrow',
			'Retrust EduAssure',
			'Retrust EquipMax',
			'Retrust PayDayPlus',
		],
	},
	{
		href: '/savings-product',
		description: 'Save as you desire',
		title: 'Savings',
		icon: (
			<Avatar className="bg-TColor-100">
				<SubTitle styles="h-5 w-5" />
			</Avatar>
		),
		otherList: [
			'Retrust Fixed Deposit',
			'Retrust Savings',
			'Retrust NORA (Nurturing Opportunities for Realizing Assets) Target Savings',
		],
	},
	{
		href: '/digitalSolution',
		description: 'Pay your bills easily',
		title: 'Digital Solutions',
		icon: (
			<Avatar className="bg-TColor-100">
				<DocumentBox styles="h-5 w-5" />
			</Avatar>
		),
		otherList: [
			'Internet Banking',
			'Mobile Banking',
			'Point of Sales (POS)',
			'Automated Teller Machines (ATM)',
			'Card Services',
			'USSD',
		],
	},
];

export const navListComp: navListType[] = [
	{
		trigger: 'About Us',
		children: (
			<>
				{aboutUs.map((about, i) => (
					<div key={i} className="flex items-center gap-5">
						<div className="hidden lg:block">{about.icon}</div>
						<ListItem title={about.title} href={about.href}>
							{about.description}
						</ListItem>
					</div>
				))}
			</>
		),
	},
	{
		trigger: 'Our Services',
		contentStyle: 'w-[900px]',
		children: (
			<div className="lg:grid lg:grid-cols-3">
				{services.map((service, i) => (
					<div key={i}>
						<div className="flex items-center gap-5">
							<div className="hidden lg:block">
								{service.icon}
							</div>

							<ListItem title={service.title} href={service.href}>
								{service.description}
							</ListItem>
						</div>
						<ul className="w-3/4 ml-auto">
							{service.otherList?.map((list, i) => (
								<li
									className="px-3 list-disc text-TColor-50"
									key={i}
								>
									{list}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		),
	},
];
