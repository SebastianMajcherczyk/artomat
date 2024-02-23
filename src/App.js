import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import WallArtVisualizer  from './components/WallArtVisualizer/WallArtVisualizer';
import Gallery  from './components/Gallery/Gallery';
import Technika  from './components/Technika/Technika';
import  Ceny  from './components/Ceny/Ceny';
import Inspiracje  from './components/Inspiracje/Inspiracje';

function App() {
	return (
		<div className='App'>
			<div className='app-container'>
				<Header />
				<Routes>
					<Route path='/' element={<Banner />} />
					<Route
						path='/technika'
						element={<Technika/>
							
						}
					/>
					<Route path='/ceny' element={<Ceny/>} />
					<Route path='/portfolio' element={<Gallery/>} />
					<Route path='/wizualizacje' element={<WallArtVisualizer />} />
					<Route path='/inspiracje' element={<Inspiracje/>} />
					<Route path='/kontakt' element={<div>Kontakt</div>} />
					<Route path='*' element={<div>Not Found</div>} />
				</Routes>
				<footer>
					<p>© 2021</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
