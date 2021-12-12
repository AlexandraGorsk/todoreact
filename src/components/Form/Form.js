import React from 'react';
import styled from 'styled-components';
import { validateForm } from './helpers/validateForm';
import Button from '../Button';
import Input from '../Input';

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

class Form extends React.Component {
	state = {
		name: '',
		error: validateForm(''),
		touched: false,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			error: validateForm(e.target.value),
		});
	};
	handleBlur = () => {
		this.setState({
			touched: true,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const { onCreateTodo } = this.props;
		const { name, error,touched } = this.state;
    if (!touched){
      this.setState({touched:true})
    }
		if (!error) {
			onCreateTodo(name);

			this.setState({ name: '', error: validateForm(''), touched:false });
		}
	};

	render() {
		const { name, error, touched } = this.state;

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
					onChange={this.handleChange}
					onBlur={this.handleBlur}
				/>
				<div>
					<Button
						onClick={this.handleSubmit}
						variant='contained'
						size='large'
						type='submit'
					>
						Создать
					</Button>
				</div>
			</FormContainer>
		);
	}
}

export default Form;
