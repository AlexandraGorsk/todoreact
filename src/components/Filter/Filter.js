import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Input from '../Input';

const FilterForm = styled('form')`
	padding: 12px 16px;
	display: flex;
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 8px;
`;

const ButtonsGroup = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 4px -4px 0;

	> button {
		margin: 4px;
		flex: 1;
	}
`;

const Filter = ({
	onChangeFilteredStatus,
	onChangeFilteredValue,
	filterStatus,
}) => {
	const handleChange = (e) => {
		const fiterStatus = e.target.textContent; //onChangeFilteredStatus(e.target.textContent)
		onChangeFilteredStatus(fiterStatus);
	};
	const handleFilter = (e) => {
		const value = e.target.value;
		onChangeFilteredValue(value);
	};
	return (
		<FilterForm>
			<Input
				label='Поиск по названию'
				id='search'
				placeholder='Начни вводить'
				onChange={handleFilter}
			/>
			<ButtonsGroup>
				<Button
					variant='contained'
					type='button'
					onClick={handleChange}
					active={filterStatus === 'Все' && 'active'}
				>
					Все
				</Button>
				<Button
					variant='contained'
					type='button'
					onClick={handleChange}
					active={filterStatus === 'Выполненные' && 'active'}
				>
					Выполненные
				</Button>
				<Button
					variant='contained'
					type='button'
					onClick={handleChange}
					active={filterStatus === 'Удалённые' && 'active'}
				>
					Удалённые
				</Button>
			</ButtonsGroup>
		</FilterForm>
	);
};

export default Filter;
