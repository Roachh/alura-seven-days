import React from 'react';
import styles from './BoxComoConseguir.module.scss';
import planta from 'assets/plantaComoConseguir.png';

export default function boxComoConseguir() {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={planta} alt="Planta" />
			<div className={styles['text-container']}>
				<div><span className={styles.title}>Como conseguir <span className={styles.big}>minha planta</span></span></div>
				<ul className={styles.lista}>
					<li>Escolha suas plantas</li>
					<li>faça seu pedido</li>
					<li>Aguarde na sua casa</li>
				</ul>
			</div>
		</div>
	);
}
