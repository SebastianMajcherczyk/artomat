import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Inspiracje.css';
import {
	LeftSideMotionDiv,
	RightSideMotionDiv,
} from '../Styled/StyledMotionDiv';

const Inspiracje = () => {
	const [isSectionVisible, setIsSectionVisible] = useState(false);
	const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

	const checkIfSectionIsVisible = () => {
		const section = document.querySelector('.inspirations-container');
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
		<div className='inspirations-container'>
			<h2 className='inspirations-title'>Inspiracje</h2>
			<h3>Znajdź pomysł na swoją ścianę</h3>
			<LeftSideMotionDiv
				isSectionVisible={isSectionVisible}
				className='inspirations left-div'>
				<h4>Trochę naszych podpowiedzi</h4>
			</LeftSideMotionDiv>
			<RightSideMotionDiv
				isSectionVisible={isSectionVisible}
				className='inspirations right-div'>
				<h4>A tutaj możesz znaleźć coś co Cię zainspiruje</h4>
			</RightSideMotionDiv>
		</div>
	);
};

export default Inspiracje;
