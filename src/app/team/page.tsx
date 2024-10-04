'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import PageCard from '@/app/ui/Cards/PageCard';
import dynamic from 'next/dynamic';

const BoardOfDirector = dynamic(() => import('@/app/ui/Team/BoardOfDirector'), {
	ssr: false,
});
const Management = dynamic(() => import('@/app/ui/Team/Management'), {
	ssr: false,
});

function Team() {
	return (
		<>
			<PageCard className="min-h-[calc(70vh-5rem)]">
				<div className="w-3/4 lg:w-2/5 text-center">
					<h1 className="text-3xl sm:text-5xl w-full">
						Our Leadership{' '}
						<span className="text-TColor-150">Team</span>
					</h1>
					<h4 className="mt-5 text-TColor-50/75 lg:text-lg">
						We are here for your every need – your dreams, goals,
						and whatever you need. Our products are designed to
						simplify your daily life so you can save, spend and
						borrow with ease.
					</h4>
				</div>
			</PageCard>

			<div className="px-3 md:px-10 xl:px-28 py-5 md:py-10 xl:py-20">
				<Tabs defaultValue="bod" className="min-h-screen">
					<TabsList className="p-0">
						<TabsTrigger value="bod" className="lg:w-[250px] mx-3">
							Board of Directors
						</TabsTrigger>
						<TabsTrigger
							value="management"
							className="lg:w-[250px] mx-3"
						>
							Management Team
						</TabsTrigger>
					</TabsList>
					<TabsContent className="bg-TColor-400 " value="bod">
						<div className="my-10">
							<BoardOfDirector />
						</div>
					</TabsContent>
					<TabsContent className="bg-TColor-400" value="management">
						<Management />
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
}

export default Team;
