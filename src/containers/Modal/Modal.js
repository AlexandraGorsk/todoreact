import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Button from '../../components/Button';

import { useLocales } from '../../providers/LocalesProvider';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../store/todo';

const Modal = ({ id, name, onButton }) => {
	const dispatch = useDispatch();
	const { trans } = useLocales();
	const { modal } = trans;
	const [newName, setNewName] = useState(name);
	const handleChange = (e) => {
		setNewName(e.target.value);
	};
	const handleChangeTitle = () => {
		dispatch(editTodo({ id, newName }));
		onButton();
	};
	return (
		<Box
			sx={{
				padding: 5,
			}}
		>
			<Typography variant='h6' component='h2' sx={{ marginBottom: 1 }}>
				{modal.new}
			</Typography>
			<TextField
				required
				sx={{ paddingBottom: 2 }}
				fullWidth
				defaultValue={name}
				value={newName}
				onChange={handleChange}
			/>
			<Button
				variant='outlined'
				size='small'
				type='button'
				onClick={handleChangeTitle}
			>
				{modal.button}
			</Button>
		</Box>
	);
};

export default Modal;
