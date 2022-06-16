import React, { useEffect, useState } from 'react';
import styles from './Ofertas.module.scss';
// import produtos from 'data/produtos.json';
import { ReactComponent as Seta } from 'assets/seta.svg';
import ControllerLista from 'components/ControllerLista';
import { IOferta } from './../../interfaces/IOferta';

export default function Ofertas() {

	const [lista, setLista] = useState<IOferta[]>([]);
	const [ordenacao, setOrdenacao] = useState<'name' | 'preco'>('preco');
	const [filtro, setFiltro] = useState<number[]>([0, 40]);

	useEffect(() => {
		const url = 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw';
		fetch(url).then(function(response) {
			response.json().then(function(data) {
				setLista(data);
			});
		}).catch(function(err) {
			console.error('Failed retrieving information', err);
		});

	}, []);	

	return (
		<>
			<div className={styles.small}>
			Conheça nossas
			</div>
			<span className={styles.big}>ofertas</span>	

			<ControllerLista setOrdenacao={setOrdenacao} setFiltro={setFiltro} />		

			<div className={styles.ofertas}>

				{
					// lista.sort((a,b) => a.name - b.name);
					

					lista && lista
						.sort((a,b) => (a[ordenacao] > b[ordenacao]) ? 1 : ((b[ordenacao] > a[ordenacao]) ? -1 : 0))
						.filter(produto => produto.preco >= filtro[0] && produto.preco <= filtro[1])
						.map(produto => (
							<div key={produto.ordem} className={styles.oferta}>
								<img  src={require(`assets/${produto.img}.png`)} alt={produto.name} />
								<div className={styles.info}>
									<div className={styles.nome}>{produto.name}</div>
									<div className={styles.preco}>R$ {produto.preco.toFixed(2)}</div>
									<a href="#">Comprar <Seta className={styles.seta} /></a>
								</div>
							</div>
						))
				}
				
				{/* {produtos.map(produto => (
					<div key={produto.id} className={styles.oferta}>
						<img  src={require(`assets/${produto.imagem}`)} alt={produto.nome} />
						<div className={styles.info}>
							<div className={styles.nome}>{produto.nome}</div>
							<div className={styles.preco}>R$ {produto.preco.toFixed(2)}</div>
							<a href="#">Comprar <Seta className={styles.seta} /></a>
						</div>
					</div>
				))} */}
			</div>
		</>
	);
}
