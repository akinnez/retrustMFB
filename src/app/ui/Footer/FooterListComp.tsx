export const FooterListComp = ({
	label,
	list,
}: {
	label: string;
	list: React.ReactNode[];
}) => {
	return (
		<>
			<div className="text-center lg:text-left">
				<h4 className="text-TColor-150">{label}</h4>
				<ul className="my-5">
					{list.map((e, i) => (
						<li className="text-TColor-50/75 my-3" key={i}>
							{e}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
