import React, {Component} from 'react';

class SearchBar extends Component{
  constructor (props){
    super(props);

    this.state = {term : ''};
  }

  render (){
    return (
      <div className="search-bar">
        <input id = "searchInput" type="text"
          value = {this.state.term}
          onChange= {event => this.onChangeHandler(event.target.value)}/>
      </div>
    );
  }

  onChangeHandler(term){
    this.setState({term});
    this.props.onSearch(term);
  }
}

export default SearchBar;
