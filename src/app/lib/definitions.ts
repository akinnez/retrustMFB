export type filesProps = {
	url: string;
	name: string;
	height: number;
	position?: string | ListProps[];
	width: number;
	imageStype?: string;
};

export interface ListProps {
	title?: string;
	description: string;
}

export type ItemProps = {
	src: string;
	label?: string;
	height?: number;
	width?: number;
	subText?: string;
	style?: string;
	listing?: ListProps[];
};
