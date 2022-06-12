import React from 'react';
import styles from './AssinaturaNewsletter.module.scss';
import Newsletter from '../Newsletter/index';

export default function AssinaturaNewsletter() {
	return (
		<div className={styles.screen}>
			<div className={styles.container}>
				<div className={styles['content-container']}>
					<div className={styles.title}><span className={styles.small}>Sua casa com as</span> <br /><span className={styles.big}>melhores <br /> plantas</span></div>
					<p>
						Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
						Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
					</p>
					<Newsletter />
				</div>
			</div>
		</div>
		
	);
}
