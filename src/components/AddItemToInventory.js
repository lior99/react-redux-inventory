import React from 'react';
import getGuid from '../Utils/Utils';
import { connect } from 'react-redux';
import { addItemToInventory }  from '../actions/actions';

class AddItemToInventory extends React.Component {
	constructor(){
		super();
	}

	handleSubmit(e){
		e.preventDefault();

		const newItem = {
			id : getGuid(),
			description : this.desc.value,
			quantity : this.quantity.value,
			price : this.price.value,
			image : this.image.value,
			editable : false
		}

		this.props.onAdddItemToInventory(newItem);

		// reset form		
		this.mainForm.reset();
	}

	render() {
		return (
			<form className="add-new-item-form" ref={ (form) => this.mainForm = form } onSubmit={ this.handleSubmit.bind(this) }>
				<div>
					<label htmlFor="">Description:</label>
					<input type="text" required ref={(input) => this.desc = input} className="input-form"/>
				</div>

				<div>
					<label htmlFor="">Quantity:</label>
					<input type="number" required ref={(input) => this.quantity = input} className="input-form"/>
				</div>

				<div>
					<label htmlFor="">Price:</label>
					<input type="number" required ref={(input) => this.price = input} className="input-form"/>
				</div>

				<div>
					<label htmlFor="">Image:</label>
					<input type="text" ref={(input) => this.image = input} className="input-form"/>
				</div>

				<div className="form-button"> 
					<input type="submit" value="Add item" />
				</div>
			</form>
		)
	}
}

const mapDispatchToState = (dispatch) => {
	return {
		onAdddItemToInventory : (newItem) => {
			dispatch(addItemToInventory(newItem));
		}
	  }
}

export default connect(null, mapDispatchToState)(AddItemToInventory);
