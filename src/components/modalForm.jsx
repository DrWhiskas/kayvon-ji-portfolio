import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/modalForm.css';

export default function ModalForm({ openModal, closeModal, message }) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_km0md3m',
				'template_wodo88m',
				form.current,
				'Wv7vX9hFaAfwBlGQk'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<form className="modalform" ref={form} onSubmit={sendEmail}>
			<label className="modalform__name">Name</label>
			<input className="modalform__username" type="text" name="user_name" />
			<label>Email</label>
			<input className="modalform__email" type="email" name="user_email" />
			<label className="modalform__title">Message</label>
			<textarea className="modalform__text" name="message" />
			<input type="submit" value="Send" />
		</form>
	);
}
