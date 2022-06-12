import React from 'react';
import 'normalize.css';
import './global.css';
import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import BoxComoConseguir from './components/BoxComoConseguir';
import Ofertas from './components/Ofertas';
import  Menu  from 'components/Menu';

function HomePage() {
	return (
		<>
			<div className="container">
				<main>
					<Menu />
					<AssinaturaNewsletter />
				</main>
				<BoxComoConseguir />
				<Ofertas />
			</div>
		</>
	);
}

export default HomePage;
