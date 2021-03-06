const inventory = (state = [], action) => {
	let index;

	switch (action.type) {
		case 'ADD_ITEM_TO_INVENTORY':
				return [
					...state,
					action.payload.item
				]

		case 'SAVE_ITEM_ON_EDIT':
			const copiedState = [ ...state ];
			index = copiedState.findIndex((item) => item.id === action.payload.item.id);

			if (index === -1){
				return state;
			}

			return [
				...state.slice(0, index),
				action.payload.item,
				...state.slice(index + 1)
			]

		case 'DELETE_ITEM' :
		   index = state.findIndex( item => item.id === action.payload.id);
		   if (index === -1) return state;

		   return [
		   		...state.slice(0, index),
		   		...state.slice(index + 1)
		   ]

		default:
			return state;
	}
}

export default inventory;
