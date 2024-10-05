import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import {motion, MotionValue, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';

function CarouselComp({NodeArray}: {NodeArray: React.ReactNode[]}) {
	const scrollRef = useRef(null);
	const {scrollYProgress} = useScroll({target: scrollRef});

	function useParallax(value: MotionValue<number>, distance: number) {
		return useTransform(value, [0, 1], [-distance, distance]);
	}

	const y = useParallax(scrollYProgress, 0);

	return (
		<>
			<Carousel
				className={`max-h-[400px] overflow-y-auto w-full`}
				orientation={'vertical'}
			>
				<CarouselContent className="space-y-10" ref={scrollRef}>
					{NodeArray.map((_, index) => (
						<motion.div
							initial={{opacity: 0}}
							whileInView={{opacity: 1}}
							viewport={{root: scrollRef, once: false}}
							style={{y}}
						>
							<CarouselItem
								key={index}
								className={index == 0 ? 'active' : ''}
							>
								<div className="p-1">
									<>{_}</>
								</div>
							</CarouselItem>
						</motion.div>
					))}
				</CarouselContent>
			</Carousel>
		</>
	);
}

export default CarouselComp;

// Photos from https://citizenofnowhe.re/lines-of-the-city
// import "./styles.css";
// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   MotionValue
// } from "framer-motion";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id }: { id: number }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section>
//       <div ref={ref}>
//         <img src={`/${id}.jpg`} alt="A London skyscraper" />
//       </div>
//       <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
//     </section>
//   );
// }

// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <>
//       {[1, 2, 3, 4, 5].map((image) => (
//         <Image id={image} />
//       ))}
//       <motion.div className="progress" style={{ scaleX }} />
//     </>
//   );
// }
