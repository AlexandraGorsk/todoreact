import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import { useLocales } from '../../providers/LocalesProvider';
import { deletedTodo, doneTodo } from '../../store/todo';
import { ListIt } from './ListItem.styles';

const ListItem = ({ name, id, done }) => {
	const { trans } = useLocales();
	const { buttons } = trans;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deletedTodo(id));
	};
	const handleDone = () => {
		dispatch(doneTodo(id));
	};
	return (
		<ListIt>
			<p>{name}</p>
			<div>
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
	);
};

export default ListItem;
