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

class Filter extends React.Component {
	handleChange = (e) => {
		const { onChangeFilteredStatus } = this.props;
		const fiterStatus = e.target.textContent; //onChangeFilteredStatus(e.target.textContent)
		onChangeFilteredStatus(fiterStatus);
	};
	handleFilter = (e) => {
		const { onChangeFilteredValue } = this.props;
		const value = e.target.value;
		onChangeFilteredValue(value);
	};
	render() {
		const { filterStatus } = this.props;
		return (
			<FilterForm>
				<Input
					label='Поиск по названию'
					id='search'
					placeholder='Начни вводить'
					onChange={this.handleFilter}
				/>
				<ButtonsGroup>
					<Button
						variant='contained'
						type='button'
						onClick={this.handleChange}
						active={filterStatus === 'Все' && 'active'}
					>
						Все
					</Button>
					<Button
						variant='contained'
						type='button'
						onClick={this.handleChange}
						active={filterStatus === 'Выполненные' && 'active'}
					>
						Выполненные
					</Button>
					<Button
						variant='contained'
						type='button'
						onClick={this.handleChange}
						active={filterStatus === 'Удалённые' && 'active'}
					>
						Удалённые
					</Button>
				</ButtonsGroup>
			</FilterForm>
		);
	}
}

export default Filter;
