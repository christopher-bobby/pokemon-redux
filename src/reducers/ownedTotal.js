const ownedTotal = (state = 0, action) => {
	switch(action.type) {
		case 'ADD_TOTAL':
			return state+=1;
			break;
		default:
			return state
			break
	}
}

export default ownedTotal;