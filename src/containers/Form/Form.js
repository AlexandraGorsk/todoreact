import React, { useState } from 'react';
import styled from 'styled-components';
import { validateForm } from './helpers/validateForm';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/todo';
import { useLocales } from '../../providers/LocalesProvider';

const FormContainer = styled('form')`
	padding: 12px 16px;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.backgroundColor.paper};
	border-radius: 8px;

	> div {
		margin-top: 8px;
	}
`;
const Form = () => {
	const { trans } = useLocales();
	const { form, buttons } = trans;
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
				label={form.newTodo}
				id='create'
				error={!!touched && !!error}
				description={touched && error}
				placeholder={form.placeholder}
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
					{buttons.create}
				</Button>
			</div>
		</FormContainer>
	);
};

export default Form;
