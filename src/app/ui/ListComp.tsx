import {ListProps} from '../lib/definitions';

export const ListComp = (value: ListProps) => {
	const {description, title} = value;
	return (
		<>
			<li className="list-disc">
				<h4 className="inline">{title}</h4>
				<span>{description}</span>
			</li>
		</>
	);
};
