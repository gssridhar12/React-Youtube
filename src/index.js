//imports
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = "AIzaSyAxVmU-UZJHjeTa1ksowRhc-MXi4OCrNBo";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos : [], selectedVideo : null};

    this.videoSearch();
  }

  videoSearch(term){
    YTSearch({key : API_KEY, term : term}, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)} , 500);
    return (
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video= {this.state.selectedVideo}/>
        <VideoList videos = {this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    ) ;
  }

}

// render react app
ReactDOM.render(<App />, document.querySelector('.container'));
