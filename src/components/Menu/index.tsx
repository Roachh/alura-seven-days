import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';


export default function Menu() {
	return (
		<header className={styles.header}>
			<Logo className={styles.logo} />
			<ul className={styles.lista}>
				<li><a href="#">Como Fazer</a></li>
				<li><a href="#">Ofertas</a></li>
				<li><a href="#">Depoimentos</a></li>
				<li><a href="#">Vídeos</a></li>
				<li><a href="#">Meu carrinho</a></li>
			</ul>
		</header>
	);
}
