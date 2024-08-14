import './ListItem.css';
import xButtonImage from './xButton.svg';

function Xbutton(props) {
	return (
		<button className="ListItemXButton" type="image">
			<img src={xButtonImage} viewBox="0 0 50 50" alt="X"/>
		</button>
	)
}

function ListItem(props) {
	return (
		<li className="ListItem">
			{props.name}
			<Xbutton />
		</li>
	);
}

export default ListItem;
