const reducer = (store=100, { type }) => {
    switch(type) {
        case 'INCREMENT': {
            return store + 1;
        }
        case 'DECREMENT': {
            return store - 1;
        }
        default: {
            return store;
        }
    }
};

export default reducer;