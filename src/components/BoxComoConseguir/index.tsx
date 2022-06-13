import React from 'react';
import styles from './BoxComoConseguir.module.scss';
import planta from 'assets/plantaComoConseguir.png';

export default function boxComoConseguir() {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={planta} alt="Planta" />
			<div className={styles['text-container']}>
				<div className={styles.title}><span className={styles.small}>Como conseguir</span> <br /><span className={styles.big}>minha planta</span></div>
				<ul className={styles.lista}>
					<li><span className={styles.item}>Escolha suas plantas</span></li>
					<li><span className={styles.item}>faça seu pedido</span></li>
					<li><span className={styles.item}>Aguarde na sua casa</span></li>
				</ul>
			</div>
		</div>
	);
}
