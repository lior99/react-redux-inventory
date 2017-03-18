export function addItemToInventory(item) {
	return {
		type : 'ADD_ITEM_TO_INVENTORY',
		payload : {
			item
		}
	}
} 

export function saveItemOnEdit(item) {
	return {
		type : 'SAVE_ITEM_ON_EDIT',
		payload : {
			item
		}
	}
}

export function deleteItem(id) {
	return {
		type : 'DELETE_ITEM',
		padyload : {
			id
		}
	}
}
