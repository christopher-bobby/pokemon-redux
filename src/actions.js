export const addName = (name) => {
	return {
		type: 'ADD',
		name
	}
}
export const removeName = (index) => {
	return {
		type: 'REMOVE',
		index
	}
}
export const addOwnedTotal = () => {
	return {
		type: 'ADD_TOTAL'	
	}
}