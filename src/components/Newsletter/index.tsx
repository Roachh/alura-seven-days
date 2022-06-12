import React, { useEffect, useState } from 'react';
import styles from './Newsletter.module.scss';
import {ReactComponent as Mail} from 'assets/mail.svg';

export default function Newsletter() {
	const [email, setEmail] = useState('');
	const [isValid, setIsValid] = useState<boolean>(false);

	useEffect(() => {
		setIsValid(emailValidation(email));
		if(isValid) {
			//console.log(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
		}
		//fazer com que a classe do input seja invalido caso o email seja invalido	(querySelector? refs?)	
	}, [email]);
	
	function emailValidation(emailString: string){
		const regex = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
		if(!emailString || regex.test(emailString) === false){
			return false;
		}
		return true;
	}

	return (
		<div className={styles.newsletter}>
			<div className={styles['input-wrapper']}>
				<Mail className={styles.mail} />
				<input className={isValid ? styles.valido : ''} type="email" placeholder='Insira seu e-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
			</div>
			<input type="button" value="Assinar newsletter" onClick={() => isValid ? alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`) : ''} />			
		</div>
	);
}
