import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import * as actions from '../actions/index';
// import actions

class CharacterListView extends React.Component {
	componentDidMount() {
		// call our action
		this.props.onFetchChar();
	}

	render() {
		if (this.props.fetching) {
			// return something here to indicate that you are fetching data
		}
		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
			</div>
		);
	}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
	return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.loading
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onFetchChar: () => {
			dispatch(actions.fetchCharacters());
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CharacterListView);
