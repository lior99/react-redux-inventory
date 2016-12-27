export function addItemToInventory(item) {
	return {
		type : 'ADD_ITEM_TO_INVENTORY',
		item
	}
} 

export function saveItemOnEdit(item) {
	return {
		type : 'SAVE_ITEM_ON_EDIT',
		item
	}
}

export function deleteItem(id) {
	return {
		type : 'DELETE_ITEM',
		id
	}
}
