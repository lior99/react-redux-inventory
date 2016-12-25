// add item to inventory
export function addItemToInventory(item) {
	return {
		type : 'ADD_ITEM_TO_INVENTORY',
		item
	}
} 

export function removeFromInventory(item){
	return {
		type : 'REMOVE_FROM_INVENTORY',
		item
	}
}

export function saveItemOnEdit(item) {
	return {
		type : 'SAVE_ITEM_ON_EDIT',
		item
	}
}