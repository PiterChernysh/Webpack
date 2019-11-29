const reducer = (store=[], { type, payload }) => {
	switch(type) {
		case 'SET_COMMENTS': {
			return payload;
		}
		case 'REMOVE_COMMENT': {
			return store.filter(item => item.id !== payload);
		}
		case 'UPDATE_COMMENT': {
			return store.map(item => item.id === payload.id ? payload : item);
		}
		case 'CREATE_COMMENT': {
			return [payload, ...store];
		}
		default: {
			return store;
		}
	}
};

export default reducer;