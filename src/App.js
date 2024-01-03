import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { WallArtVisualizer } from './components/WallArtVisualizer/WallArtVisualizer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Banner />} />
				<Route path='/technique' element={<div>Technika</div>} />
				<Route path='/prices' element={<div>Ceny</div>} />
				<Route path='/portfolio' element={<div>Realizacje</div>} />
				<Route path='/visualize' element={<WallArtVisualizer />} />
				<Route path='/inspirations' element={<div>Inspiracje</div>} />
				<Route path='/contact' element={<div>Kontakt</div>} />
				<Route path='*' element={<div>Not Found</div>} />
			</Routes>
		</div>
	);
}

export default App;
