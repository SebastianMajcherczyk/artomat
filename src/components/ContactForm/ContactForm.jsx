import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './ContactForm.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { Button } from 'react-scroll';
import Alert from '@mui/material/Alert';

export const ContactForm = () => {
	const form = useRef();

	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
		severity: '',
	});

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setSnackbar({
			...snackbar,
			open: false,
		});
	};

	const areAllValuesEmpty = values => {
		return Object.values(values).every(value => value === '' || value == null);
	};
	const sendEmail = e => {
		e.preventDefault();

		if (areAllValuesEmpty(values)) {
			setSnackbar({
				...snackbar,
				open: true,
				message: 'Wypełnij formularz',
				severity: 'error',
			});
			setTimeout(() => {
				setSnackbar({
					...snackbar,
					open: false,
					message: '',
					severity: '',
				});
			}, 3000);

			return;
		}
		if (isValid) {
			setSnackbar({
				...snackbar,
				open: true,
				message: 'Wysyłanie wiadomości...',
				severity: 'info',
			});
			emailjs
				.sendForm(
					'service_uti8sk8',
					'template_k29mdcw',
					form.current,
					'5t4-_n6PVUjWYWYSd'
				)
				.then(
					result => {
						if (result.text === 'OK') {
							resetForm();
							setSnackbar({
								...snackbar,
								open: true,
								message: 'Wiadomość wysłana',
								severity: 'success',
							});
							setTimeout(() => {
								setSnackbar({
									...snackbar,
									open: false,
									message: '',
								});
							}, 3000);
						}
					},
					error => {
						setSnackbar({
							...snackbar,
							open: true,
							message: 'Wystąpił błąd',
							severity: 'error',
						});
						setTimeout(() => {
							setSnackbar({
								...snackbar,
								open: false,
								message: '',
							});
						}, 3000);
					}
				);
		} else {
			setSnackbar({
				...snackbar,
				open: true,
				message: 'Wypełnij formularz poprawnie',
				severity: 'error',
			});
			setTimeout(() => {
				setSnackbar({
					...snackbar,
					open: false,
					message: '',
				});
			}, 3000);
		}
	};

	const {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		isValid,
		resetForm,
	} = useFormik({
		initialValues: {
			user_name: '',
			user_email: '',
			user_phone: '',
			message: '',
		},
		validationSchema: yup.object({
			user_name: yup.string().required('Podaj swoje imię'),
			user_email: yup
				.string()
				.email('Podaj prawidłowy adres email')
				.required('Podaj swój adres email'),
			message: yup.string().required('Wpisz wiadomość'),
		}),
	});

	const action = (
		<>
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handleClose}>
				<CloseIcon fontSize='small' />
			</IconButton>
		</>
	);

	return (
		<form ref={form} onSubmit={sendEmail}>
			<div className='form-element'>
				<label htmlFor='user_name'>Imię:</label>
				<input
					type='text'
					name='user_name'
					value={values.user_name}
					id='user_name'
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						touched.user_name && errors.user_name ? 'input-error' : null
					}
				/>
				<p className={touched.user_name && errors.user_name ? 'error-visible' : 'error-invisible'}>
					{errors.user_name ? errors.user_name : 'placeholder'}
				</p>
			</div>
			<div className='form-element'>
				<label htmlFor='user_email'>Email:</label>
				<input
					type='email'
					name='user_email'
					value={values.user_email}
					id='user_email'
					onChange={handleChange}
					onBlur={handleBlur}
					className={
						touched.user_email && errors.user_email ? 'input-error' : null
					}
				/>
					<p className={touched.user_email && errors.user_email ? 'error-visible' : 'error-invisible'}>
					{errors.user_email?.length > 0 ? errors.user_email : 'placeholder'}
				</p>
			</div>

			<div className='form-element'>
				<label
					htmlFor='user_phone'
					style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
					Numer telefonu
					<p>(nie jest konieczny ale ułatwi kontakt):</p>
				</label>
				<input
					type='tel'
					name='user_phone'
					value={values.user_phone}
					id='user_phone'
					onChange={handleChange}
				/>
			</div>
			<div className='form-element'>
				<label htmlFor='message'>Wiadomość:</label>
				<textarea
					name='message'
					value={values.message}
					id='message'
					onChange={handleChange}
					onBlur={handleBlur}
					className={touched.message && errors.message ? 'input-error' : null}
				/>
				<p className={touched.message && errors.message ? 'error-visible' : 'error-invisible'}>
					{errors.message ? errors.message : 'placeholder'}
				</p>
			</div>

			<input type='submit' value='Wyślij wiadomość' />
			<div className='form-element'>
				<Snackbar
					open={snackbar.open}
					autoHideDuration={6000}
					TransitionComponent={Slide}
					onClose={handleClose}
					action={action}>
					<Alert severity={snackbar.severity}>{snackbar.message}</Alert>
				</Snackbar>
			</div>
		</form>
	);
};
