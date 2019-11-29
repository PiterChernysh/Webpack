const defaultStore = [
	{
		id: 1,
		author: 'Николай',
		text: 'олололололололо',
	},
	{
		id: 2,
		author: 'Юрий',
		text: 'Всем привет!',
	},
	{
		id: 3,
		author: 'Юрий1',
		text: 'Всем привет2!',
	},
	{
		id: 4,
		author: 'test',
		text: 'from app',
	}
];

export const removeComment = id => ({
	type: 'REMOVE_COMMENT',
	payload: id,
});

export const updateComment = comment => ({
	type: 'UPDATE_COMMENT',
	payload: comment,
});

export const createComment = comment => ({
	type: 'CREATE_COMMENT',
	payload: comment,
});

export const setComments = () => ({
	type: 'SET_COMMENTS',
	payload: defaultStore,
});