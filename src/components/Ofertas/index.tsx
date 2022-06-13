import React from 'react';
import styles from './Ofertas.module.scss';
import produtos from 'data/produtos.json';
import { ReactComponent as Seta } from 'assets/seta.svg';

export default function Ofertas() {

	return (
		<>
			<div className={styles.small}>
			Conheça nossas
			</div>
			<span className={styles.big}>ofertas</span>			

			<div className={styles.ofertas}>

				{produtos.map(produto => (
					<div key={produto.id} className={styles.oferta}>
						<img  src={require(`assets/${produto.imagem}`)} alt={produto.nome} />
						<div className={styles.info}>
							<div className={styles.nome}>{produto.nome}</div>
							<div className={styles.preco}>R$ {produto.preco.toFixed(2)}</div>
							<a href="#">Comprar <Seta className={styles.seta} /></a>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
