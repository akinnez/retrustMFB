'use client';

import {bodFiles} from '@/app/lib/placeholder-data';
import {PhotoImageCard} from '../Cards/PhotoImageCard';
import {filesProps} from '@/app/lib/definitions';

// Make a new component
const PhotoCard = ({file}: {file: filesProps}) => {
	return (
		<>
			<PhotoImageCard
				className="w-[350px] h-[500px]"
				imageBorderStyle="w-[350px] max-h-[350px]"
				file={file}
			>
				<div className="my-10 text-center">
					<p className={`font-semibold text-TColor-150 text-lg`}>
						{file.name || ''}
					</p>
					<p className="mt-5">
						{(file?.position as string) || 'Director'}
					</p>
				</div>
			</PhotoImageCard>
		</>
	);
};
function BoardOfDirector() {
	return (
		<>
			<div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10">
				{bodFiles.map((e, i) => (
					<PhotoCard file={e} key={i} />
				))}
			</div>
		</>
	);
}

export default BoardOfDirector;
