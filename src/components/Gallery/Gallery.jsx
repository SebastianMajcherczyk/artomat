import react, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import './Gallery.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MediaSlider } from './MediaSlider';
import { GalleryData } from './Gallery-data';
import { useEffect } from 'react';
import { RightSideMotionDiv } from '../Styled/StyledMotionDiv';

const Gallery = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const [isSectionVisible, setIsSectionVisible] = useState(false);
	const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

	const theme = useTheme();
	const small = useMediaQuery(theme.breakpoints.up('sm'));
	const medium = useMediaQuery(theme.breakpoints.up('md'));
	const large = useMediaQuery(theme.breakpoints.up('lg'));

	const checkIfSectionIsVisible = () => {
		const section = document.querySelector('.gallery');
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

	const getFileName = path => {
		const pathArray = path.split('/');
		const lastPart = pathArray[pathArray.length - 1];
		const queryParamIndex = lastPart.indexOf('?');
		if (queryParamIndex !== -1) {
			return lastPart.substring(0, queryParamIndex);
		}
		return lastPart;
	};

	const handleImageClick = e => {
		const data = e.target.src;
		console.log('data:', data);
		const fileName = getFileName(data);
		console.log('fileName:', fileName);
		const foundIndex = GalleryData.findIndex(
			item => item.thumbnail === './Realizacje/Thumbnails/' + fileName
		);
		console.log(fileName, foundIndex);
		setCurrentImage(foundIndex);
		setViewerIsOpen(true);
	};

	let cols = 2;
	let gap = 3;
	if (GalleryData.length >= 2 && (small || medium)) {
		cols = 2;
		gap = 3;
	}

	if (GalleryData.length >= 3 && (small || medium)) {
		cols = 3;
		gap = 3;
	}

	if (GalleryData.length >= 4 && medium) {
		cols = 4;
		gap = 8;
	}

	if (GalleryData.length >= 5 && large) {
		cols = 6;
		gap = 8;
	}

	return (
		<div className='gallery-container'>
			<h2 className='gallery-title'>Galeria</h2>
			<h3>Zobacz dotychczasowe realizacje</h3>
			<RightSideMotionDiv
				isSectionVisible={isSectionVisible}
				className='gallery'>
				<ImageList
					cols={cols}
					variant='quilted'
					gap={gap}
					sx={{
						width: {
							md: 800,
							lg: '90%',
						},
						height: '800',
					}}>
					<ImageListItem key='Subheader' cols={cols}>
						{/* <ListSubheader
							component='div'
							className='gallery-subheader'
							sx={{
								backgroundColor: '#fafafa',
								color: '#001129',
								textTransform: 'uppercase',
							}}>
							Galeria realizacji
						</ListSubheader> */}
					</ImageListItem>
					{GalleryData.map(item => (
						<ImageListItem key={item.thumbnail}>
							<img
								srcSet={`${item.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
								src={`${item.thumbnail}?w=248&fit=crop&auto=format`}
								alt={item.title}
								loading='lazy'
								style={{
									cursor: 'pointer',
									'&:hover': {
										transform: 'scale(1.1)',
									},
								}}
								onClick={handleImageClick}
							/>
							<ImageListItemBar
								title={item.title}
								subtitle={item.author}
								actionIcon={
									<IconButton
										sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
										aria-label={`info about ${item.title}`}>
										<InfoIcon />
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</ImageList>
				{viewerIsOpen && (
					<div className='slider2'>
						<MediaSlider
							images={GalleryData}
							selectedIndex={currentImage}
							setViewerIsOpen={setViewerIsOpen}
						/>
					</div>
				)}
			</RightSideMotionDiv>
		</div>
	);
};

export default Gallery;
