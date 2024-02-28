import React, { Suspense } from 'react';

import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { Element } from 'react-scroll';
import { Parallax } from 'react-parallax';
import { Footer } from './components/Footer/Footer';
const WallArtVisualizer = React.lazy(() =>
	import('./components/WallArtVisualizer/WallArtVisualizer')
);
const Gallery = React.lazy(() => import('./components/Gallery/Gallery'));
const Technika = React.lazy(() => import('./components/Technika/Technika'));
const Ceny = React.lazy(() => import('./components/Ceny/Ceny'));
const Inspiracje = React.lazy(() =>
	import('./components/Inspiracje/Inspiracje')
);

const strength = 300;

const AppLazy = () => {
	return (
		<div className='App'>
			<div className='app-container'>
				{/* <Parallax
					blur={0}
					bgImage={require('../src/image21.jpg')}
					bgImageAlt='tło'
					strength={strength}> */}
				<Header />
				<Element name='home'>
					<section className='first-section'>
						<Banner />
					</section>
				</Element>
				{/* </Parallax> */}

				<Suspense fallback={<div>Loading...</div>}>
					<Parallax
						blur={0}
						bgImage={require('../src/image22.jpg')}
						bgImageAlt='tło'
						strength={strength}>
						<Element name='technika'>
							<section>
								<Technika />
							</section>
						</Element>
					</Parallax>
							{/* <Parallax
						bgImage={require('../src/image21.jpg')}
						bgImageAlt='tło'
						strength={strength}> */}
					<Element name='gallery'>
						<section className='gallery-section'>
							<Gallery />
						</section>
					</Element>
					{/* </Parallax> */}
			

					<Parallax
						bgImage={require('../src/image22.jpg')}
						bgImageAlt='tło'
						strength={strength}>
					<Element name='ceny'>
						<section className='price-section'>
							<Ceny />
						</section>
					</Element>
					</Parallax>

			
					{/* <Parallax
						blur={0}
						bgImage={require('../src/image22.jpg')}
						bgImageAlt='tło'
						strength={strength}> */}
						<Element name='inspiracje'>
							<section>
								<Inspiracje />
							</section>
						</Element>
					{/* </Parallax> */}
					<Parallax
						blur={0}
						bgImage={require('../src/image22.jpg')}
						bgImageAlt='tło'
						strength={strength}>
						<Element name='visualizer'>
							<section>
								<WallArtVisualizer />
							</section>
						</Element>
					</Parallax>
					{/* <Parallax
						bgImage={require('../src/image21.jpg')}
						bgImageAlt='tło'
						strength={strength}> */}
					<Element name='kontakt' style={{ width: '100%' }}>
						<Footer />
					</Element>
					{/* </Parallax> */}
				</Suspense>
			</div>
		</div>
	);
};

export default AppLazy;
