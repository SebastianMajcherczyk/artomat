import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import './Banner.css';

import Video1 from './Adam.mp4';
import Video2 from './Giraffe.mp4';
import Video3 from './Kancelaria.mp4';
import Video4 from './Pies.mp4';
import Video5 from './Suszarnia.mp4';
import Video6 from './Yoda.mp4';

export const Banner = () => {
	const AutoplaySlider = withAutoplay(AwesomeSlider);

	const modifyVideoElements = () => {
		const videos = document.querySelectorAll('.slider video');
		videos.forEach(video => {
			video.muted = true;
			video.autoplay = true;
			video.preload = 'auto';
			video.controls = false;
			video.play().catch(e => {
				console.error('Error trying to play the video:', e);
			});
		});
	};
	useEffect(() => {
		modifyVideoElements();
	}, []);

	return (
		<div className='banner-container'>
			<div className='div-for-slider'>
				<AutoplaySlider
					className='slider'
					play={true}
					cancelOnInteraction={false}
					onTransitionStart={modifyVideoElements}
					onFirstMount={modifyVideoElements}
					interval={5000}
					animation=''
					bullets={false}
					organicArrows={false}
					infinite={true}
					transitionDelay={500}>
					<div data-src={Video1} />
					<div data-src={Video2} />
					<div data-src={Video3} />
					<div data-src={Video4} />
					<div data-src={Video5} />
					<div data-src={Video6} />
				</AutoplaySlider>
			</div>

			<div className='banner-text'>
				<h2 className=' banner-title'>Nadruki ścienne</h2>
				
				<h3>Spraw by Twoja ściana ożyła.</h3>
				<p>
					Dziękujemy za odwiedzenie strony Loft Print, wiodącego dostawcy usług
					druku ściennego. Łaczymy zastosowanie najnowocześniejszej technologii
					z naszym doświadczeniem, aby przemieniać zwykłe ściany w zachwycające
					dzieła sztuki. Jesteśmy gotowi zrealizować każdą Twoją wizję, bez
					względu na to, czy chodzi o ścianę z gipsu, cegły, betonu czy drewna.
					Loft Print oferuje bogatą gamę usług druku ściennego, przeznaczonych
					dla różnorodnych zastosowań i branż. Jesteśmy w stanie sprostać
					wszystkiemu - od dużych projektów dla przestrzeni komercyjnych, po
					indywidualne rozwiązania dla domów. Nasza nowatorska technika
					drukowania atramentem utwardzanym UV zapewnia żywe i trwałe wydruki,
					które zrobią wrażenie.
				</p>
				<p>
					Dzięki naszym spersonalizowanym projektom ściennym, masz możliwość
					wyróżnienia każdej przestrzeni. Niezależnie od tego, czy szukasz
					profesjonalnego druku ściennego do biura, identyfikacji wizualnej
					firmy, czy budynków administracji publicznej, posiadamy kompetencje,
					aby dostarczyć znakomite efekty, spełniające Twoje oczekiwania.
				</p>
				<p>
					Jesteśmy dumni z tworzenia wydruków ściennych w wysokiej
					rozdzielczości, które wiernie odwzorowują cyfrowe dzieła sztuki i
					ujmują nawet najdrobniejsze szczegóły. Nasze artystyczne usługi druku
					ściennego pozwalają na stworzenie zapierających dech w piersiach
					murali i ożywienie Twojej wyobraźni na dużą skalę.
				</p>
				<p>
					Każdy projekt jest dla nas wyjątkowy, dlatego w Loft Print oferujemy
					kompleksowe doradztwo w zakresie projektowania ścian, by Twoja
					koncepcja została perfekcyjnie zrealizowana. Nasz zespół specjalistów
					będzie ściśle współpracował z Tobą, aby w pełni zrozumieć Twoje
					potrzeby, doradzić i stworzyć projekt, który zaspokoi Twoje
					oczekiwania.
				</p>
			</div>
		</div>
	);
};
