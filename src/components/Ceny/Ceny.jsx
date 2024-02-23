import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BottomSideMotionDiv } from '../Styled/StyledMotionDiv';
import './Ceny.css';

const Ceny = () => {
	const [isSectionVisible, setIsSectionVisible] = useState(false);
	const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

	const checkIfSectionIsVisible = () => {
		const section = document.querySelector('.ceny');
		const bounds = section.getBoundingClientRect();

		const isVisible = bounds.top < window.innerHeight / 0.75;
		// && bounds.bottom > window.innerHeight / 3;

		return isVisible;
	};

	const handleScroll = () => {
		if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
			setIsSectionVisible(true);
			setHasAnimationPlayed(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [hasAnimationPlayed]);

	return (
		<div className='price-container'>
			<h2 className='price-title'>Ceny</h2>
			<h3>Ile to kosztuje.</h3>
			<BottomSideMotionDiv
				className='ceny title'
				isSectionVisible={isSectionVisible}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
					quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
					incidunt labore, quasi eius repellat corrupti voluptates et quidem
					similique mollitia suscipit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
					quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
					incidunt labore, quasi eius repellat corrupti voluptates et quidem
					similique mollitia suscipit?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
					quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
					incidunt labore, quasi eius repellat corrupti voluptates et quidem
					similique mollitia suscipit?
				</p>
			</BottomSideMotionDiv>
		</div>
	);
};

export default Ceny;
