import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import { useLocales } from '../../providers/LocalesProvider';
import { deletedTodo, doneTodo } from '../../store/todo';

const ListItem = ({ name, id, done }) => {
	const { trans } = useLocales();
	const { buttons, list } = trans;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deletedTodo(id));
	};
	const handleDone = () => {
		dispatch(doneTodo(id));
	};
	return (
		<li>
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
		</li>
	);
};

export default ListItem;
