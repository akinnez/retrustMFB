import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {navListType} from './NavList';
import Link from 'next/link';
import {Button} from '@/components/ui/button';

const MobileSideNav = ({
	navListComp,
	close,
}: {
	navListComp: navListType[];
	close: any;
}) => {
	return (
		<>
			<div className="w-[270px] h-screen">
				<Accordion type="single" collapsible>
					{navListComp.map((e, i) => (
						<AccordionItem value={e?.trigger} key={i}>
							<AccordionTrigger>{e?.trigger}</AccordionTrigger>
							<AccordionContent onClick={() => close()}>
								{e?.children}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<div>
					<Link href={'/news'}>
						<h2 className=" py-5 hover:text-TColor-150 hover:font-bold">
							Newsroom
						</h2>
					</Link>
					<Button className="rounded-3xl w-full my-5" size={`lg`}>
						Get App
					</Button>
				</div>
			</div>
		</>
	);
};
export default MobileSideNav;
