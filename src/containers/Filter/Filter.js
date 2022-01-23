import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useLocales } from '../../providers/LocalesProvider';
import { getSlice } from '../../store/todo';
import { setFilterStatus, setFilterValue } from '../../store/todo';

const FilterForm = styled('form')`
	padding: 12px 16px;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.backgroundColor.paper};
	color: ${(props) => props.theme.color.main};
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
	const { trans } = useLocales();
	const { filter, buttons } = trans;
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
				label={filter.title}
				id='search'
				placeholder={filter.placeholder}
				onChange={handleFilter}
			/>
			<ButtonsGroup>
				<Button
					variant='contained'
					type='button'
					name="'Все'"
					onClick={handleChange}
					active={filterStatus === 'Все' && 'active'}
				>
					{buttons.filteredAll}
				</Button>
				<Button
					variant='contained'
					type='button'
					name='Выполненные'
					onClick={handleChange}
					active={filterStatus === 'Выполненные' && 'active'}
				>
					{buttons.filteredDone}
				</Button>
				<Button
					variant='contained'
					type='button'
					name='Удалённые'
					onClick={handleChange}
					active={filterStatus === 'Удалённые' && 'active'}
				>
					{buttons.filteredDeleted}
				</Button>
			</ButtonsGroup>
		</FilterForm>
	);
};

export default Filter;
