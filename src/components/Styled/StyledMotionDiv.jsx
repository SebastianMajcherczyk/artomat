import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LeftSideMotionDiv = styled(({ isSectionVisible, ...props }) => (
  <motion.div
    initial={{ x: '-140%', opacity: 0 }}
    animate={isSectionVisible ? { x: 0, opacity: 1 } : { opacity: 0 }}
    transition={{ type: 'spring', stiffness: 50 }}
    {...props} 
  />
))``


export const RightSideMotionDiv = styled(({ isSectionVisible, ...props }) => (
	<motion.div
		initial={{ x: '140%', opacity: 0 }}
		animate={isSectionVisible ? { x: 0, opacity: 1 } : { opacity: 0 }}
		transition={{ type: 'spring', stiffness: 50 }}
		{...props}
	/>
))``;

export const BottomSideMotionDiv = styled(({ isSectionVisible, ...props }) => (
  <motion.div
    initial={{ y: '140%', opacity: 0 }}
    animate={isSectionVisible ? { y: 0, opacity: 1 } : { opacity: 0 }}
    transition={{ type: 'spring', stiffness: 50 }}
    {...props}
  />
))``;
