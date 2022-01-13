import React from 'react';

import Button from '../Button';

const ListItem = ({ name, onDoneTodo, onDeleteClick, id, done }) => {
	const handleDelete = () => {
		onDeleteClick(id);
	};
	const handleDone = () => {
		onDoneTodo(id);
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
						Выполнено
					</Button>
				)}
				<Button
					onClick={handleDelete}
					variant='outlined'
					size='small'
					type='button'
				>
					Удалить
				</Button>
			</div>
		</li>
	);
};

export default ListItem;
