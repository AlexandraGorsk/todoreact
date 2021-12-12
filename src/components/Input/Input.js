import React from 'react';

import styled from 'styled-components';

const InputWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	color: ${(props) => (props.error ? 'red' : 'black')};
   > label {
		margin-bottom: 4px;
	}

	> input {
		padding: 8px;
		border-radius: 4px;
		border: 1px solid ${(props) => (props.error ? 'red' : 'black')};
	}
	> p {
		margin: 4px 0px 0px;
	}
`;

const Input = ({ label, error, description, ...inputProps }) => {
	return (
		<InputWrapper error={error}>
			<label htmlFor={inputProps.id}>{label}</label>
			<input {...inputProps} />
			{description && <p>{description}</p>}
		</InputWrapper>
	);
};

export default Input;
