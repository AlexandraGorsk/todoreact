import React, { useState } from 'react';
import styled from 'styled-components';
import { validateForm } from './helpers/validateForm';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/todo';

const FormContainer = styled('form')`
	padding: 12px 16px;
	display: flex;
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 8px;

	> div {
		margin-top: 8px;
	}
`;
const Form = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [error, setError] = useState(validateForm(''));
	const [touched, setTouched] = useState(false);

	const handleChange = (e) => {
		setName(e.target.value);
		setError(validateForm(e.target.value));
	};
	const handleBlur = () => {
		setTouched(true);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!touched) {
			setTouched(true);
		}
		if (!error) {
			dispatch(createTodo(name));
			setName('');
			setError(validateForm(''));
			setTouched(false);
		}
	};

	return (
		<FormContainer>
			<Input
				name='name'
				label='Новое задание'
				id='create'
				error={!!touched && !!error}
				description={touched && error}
				placeholder='Название'
				value={name}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<div>
				<Button
					onClick={handleSubmit}
					variant='contained'
					size='large'
					type='submit'
				>
					Создать
				</Button>
			</div>
		</FormContainer>
	);
};

export default Form;
