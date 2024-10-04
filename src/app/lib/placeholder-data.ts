import {filesProps, ItemProps, ListProps} from './definitions';

export const files: filesProps[] = [
	{
		name: 'Professionalism',
		url: '/images/teamwork.svg',
		height: 350,
		width: 554,
		imageStype: 'pt-10 lg:pt-32',
	},
	{
		name: 'Integrity',
		url: '/images/puzzle.svg',
		height: 456,
		width: 547,
		imageStype: 'pt-10',
	},
	{
		name: 'Customer Centricity',
		url: '/images/operator.svg',
		height: 456,
		width: 547,
		imageStype: 'pt-10',
	},
	{
		name: 'Excellence',
		url: '/images/improve.svg',
		height: 456,
		width: 456,
		imageStype: 'pt-10',
	},
];

export const bodFiles: filesProps[] = [
	{
		name: 'Oladimeji Babatunde Kazeem (MCIB)',
		position: 'Managing Director',
		url: '/images/image7.svg',
		width: 350,
		height: 350,
	},
	{
		name: 'Oladimeji Babatunde Kazeem (MCIB)',
		position: 'Managing Director',
		url: '/images/image7.svg',
		width: 350,
		height: 350,
	},
	{
		name: 'Oladimeji Babatunde Kazeem (MCIB)',
		position: 'Managing Director',
		url: '/images/image7.svg',
		width: 350,
		height: 350,
	},
	{
		name: 'Oladimeji Babatunde Kazeem (MCIB)',
		position: 'Managing Director',
		url: '/images/image7.svg',
		width: 350,
		height: 350,
	},
	{
		name: 'Oladimeji Babatunde Kazeem (MCIB)',
		position: 'Managing Director',
		url: '/images/image7.svg',
		width: 350,
		height: 350,
	},
	{
		name: 'Oladimeji Babatunde Kazeem (MCIB)',
		position: 'Managing Director',
		url: '/images/image7.svg',
		width: 350,
		height: 350,
	},
	{
		name: 'Oladimeji Babatunde Kazeem (MCIB)',
		position: 'Managing Director',
		url: '/images/image7.svg',
		width: 350,
		height: 350,
	},
];

const POSList: ListProps[] = [
	{
		description:
			'POS Terminals for business growth to Merchants and Agents',
	},
	{
		description: 'Credit scoring for loan access to businesses.',
	},
];
const ATMList: ListProps[] = [
	{
		description: 'Access to ATMs for access to all.',
	},
];
const USSDList: ListProps[] = [
	{
		description: 'Access to financial services through SMS',
	},
];

const CardList: ListProps[] = [
	{
		description: 'Instant issuance of ATM cards',
	},
	{
		description: 'Personalized Debit card services',
	},
];
const WebList: ListProps[] = [
	{
		description: 'Seamless access to financial services via the internet',
	},
	{
		description: 'Improved and secure access to product offerings.',
	},
];

const MobileList: ListProps[] = [
	{
		description: 'Convenient access to banking services via mobile phones.',
	},
	{
		description: 'Bills payment and other services made easy.',
	},
];

export const digitalFiles: filesProps[] = [
	{
		name: 'Web/Internet Banking',
		height: 424,
		width: 601,
		url: '/images/image.svg',
		position: WebList,
	},
	{
		name: 'Mobile Banking',
		height: 424,
		width: 601,
		url: '/images/image1.svg',
		position: MobileList,
	},
	{
		name: 'Point of Sale (POS)',
		height: 424,
		width: 601,
		url: '/images/image2.svg',
		position: POSList,
	},
	{
		name: 'Automated Teller Machines (ATM)',
		height: 424,
		width: 601,
		url: '/images/image3.svg',
		position: ATMList,
	},
	{
		name: 'Card Services',
		height: 424,
		width: 601,
		url: '/images/image4.svg',
		position: CardList,
	},
	{
		name: 'USSD Services',
		height: 424,
		width: 601,
		url: '/images/image5.svg',
		position: USSDList,
	},
];

const savings: ListProps[] = [
	{
		description:
			'Secure and accessible savings accounts with competitive interest rates.',
	},
	{
		description: 'Encourages regular saving habits.',
	},
	{
		description:
			'Loans will be structured to include savings element to drive deposit.',
	},
];
const deposit: ListProps[] = [
	{
		description: 'Higher interest rates for fixed-term deposits.',
	},
	{
		description: 'Encourages long-term savings and investment.',
	},
];

const target: ListProps[] = [
	{
		description:
			'Structured to encourage saving towards a special occasion or project e.g., festivities, accommodation, building projects, investment etc.',
	},
	{
		description:
			'Strict withdrawal policies to deter withdrawal and aid achievement.',
	},
	{
		description: 'Competitive rates to attract long term deposits.',
	},
];

const easyStart: ListProps[] = [
	{
		description:
			'Small loans (500k – 2m) for personal or business purposes.',
	},
	{
		description: 'Flexible repayment terms and competitive interest rates.',
	},
	{
		description: 'Secured with both cheques and guarantors.',
	},
];

const edu: ListProps[] = [
	{
		description:
			'Loans structured towards business support for schools and educational institutions.',
	},
	{
		description: 'Termly plans to suit peculiarity of the risk asset.',
	},
	{
		description: 'Covers funding needs for travelling students as well.',
	},
];

const payday: ListProps[] = [
	{
		description: 'Advance financing for employees of sound organizations. ',
	},
	{
		description: 'Repayments are structured around salary days.',
	},
	{
		description:
			'Security usually set around financial tickets and official network.',
	},
];

const asset: ListProps[] = [
	{
		description:
			'Loans structured towards acquisition of assets which includes but not limited to Cars, Gadgets, Tools and appliances etc',
	},
	{
		description:
			'Minimum of 20% Equity contribution aids sense of ownership.',
	},
	{
		description: 'Monthly repayment plan.',
	},
	{
		description: 'Assets acquired in Retrust name to serve as collateral.',
	},
];
const bizGrow: ListProps[] = [
	{
		description:
			'Repayment can be structured in line with customers’ business flow usually monthly.',
	},
	{
		description:
			'Business Support over the repayment period with the possibility of Top-Ups where necessary subject to customer credit score and behaviour.',
	},
];

export const formList: ItemProps[] = [
	{
		label: 'Regular Savings Accounts:',
		listing: savings,
		src: '/images/image5.svg',
	},
	{
		label: 'Fixed Deposit Accounts:',
		listing: deposit,
		src: '/images/image6.svg',
	},
	{
		label: 'Target Savings Accounts (Retrust NORA):',
		listing: target,
		src: '/images/image7.svg',
	},
];
export const loanList: ItemProps[] = [
	{
		label: 'Retrust EazyStart',
		subText: 'Retail/Microloans for Individuals',
		listing: easyStart,
		src: '/images/image8.svg',
	},
	{
		label: 'Retrust BizGrow',
		subText: 'Small and Medium Enterprise (SME) Loans',
		listing: bizGrow,
		src: '/images/image9.svg',
	},
	{
		label: 'Retrust EduAsure',
		subText: 'Retail/Microloans for Individuals',
		listing: edu,
		src: '/images/image10.svg',
	},
	{
		label: 'Retrust EquipMax',
		subText: 'Asset Acquisition Financing',
		listing: asset,
		src: '/images/image11.svg',
	},
	{
		label: 'Retrust PayDayPlus',
		subText: 'Salary Advance Loans for Private Sector Employees',
		listing: payday,
		src: '/images/image12.svg',
	},
];
