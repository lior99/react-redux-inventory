import React, { Component } from 'react';
import getGuid from '../Utils/Utils';
import Row from './Row';
import AddItemToInventory from './AddItemToInventory';

import { connect } from 'react-redux';

class Grid extends Component {
	constructor(props){
		super();
		this.deleteItem = this.deleteItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.cancel = this.cancel.bind(this);
		this.saveItem = this.saveItem.bind(this);
	}

	cancel(e){
		const key = e.target.dataset.itemKey;
		const rows = this.state.items.slice();
		const index = rows.findIndex(row => row.key === key);

		//return if there is no match
		if (index === -1) return;
		
		rows[index].editable = false;
		// this.setState({ items : rows });
	}


	saveItem(item){
		const currentItems = this.props.items.slice();
		const rowIndex = currentItems.findIndex((rowItem) => rowItem.id === item.id);

		if (rowIndex === -1) return;

		const newItems = [
			...currentItems.slice(0, rowIndex),
			item,
			...currentItems.slice(rowIndex + 1)
		]	

		this.props.onSaveItem(item);
	}

	editItem(e) {
		const items = this.props.items;
		const key = e.target.dataset.itemKey;
		const index = items.findIndex(row => row.key === key);

		const rows = items.slice();
		rows[index].editable = true;
	}

	deleteItem(id) {
		this.props.onDeleteItem(id);
	}

	render() {
		const items = this.props.items;

		const renderedItems = items.map((item, index) => {
			const uniqueKey = item.id;
			return (
					<Row key={uniqueKey} id={uniqueKey}  item={item} index={index} updateItem={this.saveItem} deleteItem={this.deleteItem} />
				)
		})
		
		return (
			<div className="grid-container">
				<div className="add-new-item">
					<AddItemToInventory />
				</div>

				<div className="table">
					<div className="table-head">
						<div className="table-head-cell">#</div>
						<div className="table-head-cell">Item Description</div>
						<div className="table-head-cell">Quantity</div>
						<div className="table-head-cell">Price</div>
						<div className="table-head-cell">Image</div>
						<div className="table-head-cell">Edit</div>
					</div>	
					<div className="table-body">
						{ renderedItems }
					</div>	
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		items : state.inventory
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSaveItem : (item) => {
			dispatch({
				type : 'SAVE_ITEM_ON_EDIT',
				item
			})			
		},

		onDeleteItem : (id) => {
			dispatch({
				type: 'DELETE_ITEM',
				id
			})
		}	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

