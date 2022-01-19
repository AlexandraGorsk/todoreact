import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { getSlice } from '../../store/todo';
import { setFilterStatus, setFilterValue } from '../../store/todo';

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

const Filter = () => {
	const dispatch = useDispatch();
	const { filterStatus } = useSelector(getSlice);
	const handleChange = (e) => {
		dispatch(setFilterStatus(e.target.name));
	};
	const handleFilter = (e) => {
		dispatch(setFilterValue(e.target.value));
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
					name='Все'
					onClick={handleChange}
					active={filterStatus === 'Все' && 'active'}
				>
					Все
				</Button>
				<Button
					variant='contained'
					type='button'
					name='Выполненные'
					onClick={handleChange}
					active={filterStatus === 'Выполненные' && 'active'}
				>
					Выполненные
				</Button>
				<Button
					variant='contained'
					type='button'
					name='Удалённые'
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
