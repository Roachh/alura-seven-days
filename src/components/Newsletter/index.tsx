import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styles from './Newsletter.module.scss';
import {ReactComponent as Mail} from 'assets/mail.svg';
import emailjs from '@emailjs/browser';

export default function Newsletter() {
	const form = useRef<HTMLFormElement>(null);
	const inputEmail = useRef<HTMLInputElement>(null);
	const isMounted = useRef(false);

	const [email, setEmail] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(false);	

	useEffect(() => {
		setIsValid(emailValidation(email));	
		if(isMounted.current && !isValid && inputEmail.current) inputEmail.current.className = styles.invalido;
		else isMounted.current = true;
	}, [email]);
	
	function emailValidation(emailString: string){
		const regex = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
		if(!emailString || regex.test(emailString) === false){
			return false;
		}
		return true;
	}

	function sendEmail(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();

		if (form.current !== undefined && form.current) {			
			emailjs.sendForm('service_oau6pya', 'template_un2ksfx', form.current, process.env.REACT_APP_PUBLIC_KEY)
				.then((result) => {
					console.log(result.text);
				}, (error) => {
					console.log(error.text);
				});
		}
		setEmail('');
	}	

	return (
		<form ref={form} onSubmit={sendEmail} className={styles.newsletter}>
			<div className={styles['input-wrapper']}>
				<Mail className={styles.mail} />
				<input ref={inputEmail} className={isValid ? styles.valido : ''} name="user_email" type="email" placeholder='Insira seu e-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
			</div>
			<input type="submit" value="Assinar newsletter" onClick={() => isValid ? alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`) : ''} />			
		</form>
	);
}
