import React from 'react';
import { Link }  from 'react-router';

const Header = () => {
		const items = [
			{
				id : 1,
				text : 'Home',
				path : '/'
			},
			{
				id : 2,
				text : 'Grid',
				path : '/grid'
			},
			/*{
				id : 3,
				text : 'Inventory',
				path : '/inventory'
			}*/
		]

		const links = items.map(menuItem => {
			return (
					<li key={menuItem.id}>
						<Link to={menuItem.path}>{menuItem.text}</Link>
					</li>
			)
		});

		return (
			<div className="header">
				<ul className="navigation-bar">
					{ links }
				</ul>
			</div>
		);
}

export default Header;
