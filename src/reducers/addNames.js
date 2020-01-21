const addNames = (state = [], action) => {
	switch(action.type) {
		case 'ADD':
			return [...state].concat(action.name)
			break;
		case 'REMOVE':
    		state.splice(action.index, 1);
			return [...state]
			break;
		default:
			return state
			break;
	}

}

export default addNames;
