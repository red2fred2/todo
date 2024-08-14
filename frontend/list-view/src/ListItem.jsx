import './ListItem.css';
import xButtonImage from './xButton.svg';

console.log(xButtonImage);

function Xbutton(props) {
	return (
		<button className="ListItemXButton" type="image">
			<img src={xButtonImage} viewBox="0 0 50 50" alt="X"/>
		</button>
	)
}

function ListItem(props) {
	return (
		<div className="ListItem">
			{props.name}
			<Xbutton />
		</div>
	);
}

export default ListItem;
