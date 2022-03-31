import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import { useLocales } from '../../providers/LocalesProvider';
import { deletedTodo, doneTodo } from '../../store/todo';
import { ListIt } from './ListItem.styles';
import { Dialog } from '@mui/material';
import Modal from '../Modal';

const ListItem = ({ name, id, done }) => {
	const { trans } = useLocales();
	const { buttons } = trans;
	const dispatch = useDispatch();
	const [open, toggle] = useReducer((prev) => !prev, false);

	const handleDelete = () => {
		dispatch(deletedTodo(id));
	};
	const handleDone = () => {
		dispatch(doneTodo(id));
	};

	return (
		<>
			<ListIt>
				<p>{name}</p>
				<div>
					<Button
						onClick={toggle}
						variant='outlined'
						size='small'
						type='button'
					>
						{buttons.edit}
					</Button>
					{!done && (
						<Button
							onClick={handleDone}
							variant='outlined'
							size='small'
							type='button'
						>
							{buttons.done}
						</Button>
					)}
					<Button
						onClick={handleDelete}
						variant='outlined'
						size='small'
						type='button'
					>
						{buttons.delete}
					</Button>
				</div>
			</ListIt>
			<Dialog open={open} onClose={toggle}>
				<Modal key={id} name={name} id={id} onButton={toggle} />
			</Dialog>
		</>
	);
};

export default ListItem;
