export const validateForm = (todoName) => {
	if (todoName.length === 0) {
		return 'Поле не должно быть пустое';
	}
	if (todoName.length < 4) {
		return 'поле должно сождержать более 4 символов';
	}
	if (todoName.length > 20) {
		return 'поле не должно превышать 20 символов';
	}
	return '';
};
