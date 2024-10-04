'use client';
import clsx from 'clsx';

function Management({className}: {className?: string}) {
	return (
		<>
			<div
				className={clsx(
					'min-h-[calc(100vh-5rem)] flex justify-center items-center',
					className
				)}
			>
				<h1 className="text-5xl">PAGE NOT FOUND</h1>
			</div>
		</>
	);
}

export default Management;
