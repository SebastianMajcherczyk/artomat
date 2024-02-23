import React, { useEffect, useState } from 'react';
import './Technika.css';
import { LeftSideMotionDiv } from '../Styled/StyledMotionDiv';

const Technika = () => {
	const [isSectionVisible, setIsSectionVisible] = useState(false);
	const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

	const checkIfSectionIsVisible = () => {
		const section = document.querySelector('.technika');
		const bounds = section.getBoundingClientRect();

		const isVisible =
			bounds.top < window.innerHeight / 2 &&
			bounds.bottom > window.innerHeight / 2;

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
		<div className='technika-container'>
			<h2 className='visual-title'>Technika</h2>
			<h3>Trochę wiedzy praktycznej</h3>
			<LeftSideMotionDiv
				isSectionVisible={isSectionVisible}
				className='technika title '>
				
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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
					quasi nostrum ratione. Dolorum aspernatur, recusandae tempore facere
					incidunt labore, quasi eius repellat corrupti voluptates et quidem
					similique mollitia suscipit?
				</p>
			</LeftSideMotionDiv>
		</div>
	);
};

export default Technika;
