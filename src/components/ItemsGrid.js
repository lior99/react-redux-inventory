import React from 'react';
import { connect } from 'react-redux';

class ItemsGrid extends React.Component {
	render() {
		const { items }  = this.props;

		const gridItems = items.map(item => {
			const text = item.quantity === 0 ? ' - out of stock' : '';

			const imageLink = !item.image ? 'https://placeholdit.imgix.net/~text?txtsize=33&txt=missing image&w=150&h=150' : item.image;

			return (
				<div className="grid-box-item" key={ item.id }>
					<img src={ imageLink } alt={ item.descrption } />
					<div className="item-description">
						{ item.description }
					</div>
					<div>
						Price : { item.price }
					</div>
					<div>
						Quanity : { item.quantity } { text }
					</div>
				</div>
			)
		})

		return (
			<div className="grid-container-for-items">
				{ gridItems }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		items : state.inventory
	}
}


export default connect(mapStateToProps)(ItemsGrid);