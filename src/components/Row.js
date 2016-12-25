import React, { Component } from 'react';
import getGuid from '../Utils/Utils';

export default class Row extends Component {
	constructor() {
		super();

		this.editItem = this.editItem.bind(this);
		this.cancel = this.cancel.bind(this);
		this.save = this.save.bind(this);
		this.deleteItem = this.deleteItem.bind(this);

		this.state = {
			editable : false,
		}
	}

	componentWillMount() {
		this.state = {
			item : this.props.item
		}
	}

	editItem(e) {
		const key = e.target.dataset.itemKey;
		this.setState({editable:true});
	}

	save(e) {
		const id = e.target.dataset.itemKey;
		const item = {
			id,
			description : this.description.value,
			quantity : this.quantity.value,
			price : this.price.value,
			image : this.image.value
		}

		this.setState({editable:false});
		this.props.updateItem(item);
	}

	cancel(e) {
		const key = e.target.dataset.itemKey;
		this.setState({editable:false});
	}


	deleteItem(e) {
		const key = e.target.dataset.itemKey;
		this.props.deleteItem(key);
	}

	render() {
		const { item, index } = this.props;
		let inEditMode = '';
		let normalMode = '';

		const rowClassName = this.props.item.quantity > 0 ? 'row' : 'row out-of-stock';

		if (typeof this.state.editable === 'undefined' || !this.state.editable) {
			inEditMode = 'btn hide';
			normalMode = 'btn show';
		}
		else {
			inEditMode = 'btn show';
			normalMode = 'btn hide';
		}


		const imageToRender = (item) => {
			if (!item.image) {
				return <span>Image</span>
			}
			else {
				const shortImageUrl =  item.image.substring(0,50);
				return <span>{ shortImageUrl }</span>
			}
		}

		const imageClassName = (item) => {
			if (this.state.editable){
				return 'hide';
			}
			else {
				return 'show short-image'
			}
		}

		return (
			<div className={rowClassName}>
				<div className="item">{ index+1 }</div>
				<div className="item">
					<span className={ this.state.editable ? 'show' : 'hide'}>
						<input type="text" required defaultValue={item.description} ref={(input) => this.description = input} />
					</span>
					<span className={ !this.state.editable ? 'show' : 'hide'}>
						{ item.description }
					</span>
				</div>
				<div className="item">
					<span className={this.state.editable ? 'show' : 'hide'}>
						<input type="number" required className="small-input" defaultValue={item.quantity} ref={(input) => this.quantity = input}/>	
					</span>
					<span className={!this.state.editable ? 'show' : 'hide'}>
						{ item.quantity }
					</span>
				</div>
				<div className="item">
					<span className={this.state.editable ? 'show' : 'hide'}>
						<input type="number" required className="small-input" defaultValue={item.price} ref={(input) => this.price = input}/>	
					</span>
					<span className={!this.state.editable ? 'show' : 'hide'}>
						{ item.price }
					</span>
				</div>
				<div className="item">
					<span className={this.state.editable ? 'show' : 'hide'}>
						<input type="text" defaultValue={item.image} ref={(input) => this.image = input}/>	
					</span>
					<span className={ imageClassName(item) }>
						{ imageToRender(item) }
					</span>
				</div>
				<div className="item">
					<button className={normalMode} data-item-key={item.id} onClick={this.deleteItem}>Delete</button>
					<button className={normalMode} data-item-key={item.id} onClick={ this.editItem }>Edit</button>
					<button className={inEditMode} data-item-key={item.id} onClick={ this.save }>Save</button>
					<button className={inEditMode} data-item-key={item.id} onClick={ this.cancel }>Cancel</button>
				</div>
			</div>
		)
	}
}