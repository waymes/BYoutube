import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Keys from './Keys';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: [1,2,3],
      selectedVideo: null,
      searchText: ''
    };
  }

  componentDidMount() {
    this.makeSearch('');
  }

  makeSearch(term) {
    YTSearch({key: Keys.youtubeApiKey, term: term}, videos => {
      this.setState({ videoList: videos, selectedVideo: videos[0], searchText: term });
    });
  }

  render() {
    const { videoList, selectedVideo, searchText } = this.state;
    const videoSearch = _.debounce(term => this.makeSearch(term), 500);
    console.log(videoList);
    return (
      <div className='container-fluid'>
        <SearchBar onSearchChange={videoSearch} />
        <div className="row">
          {selectedVideo
            ? <VideoDetail video={selectedVideo} searchText={searchText} />
            : 'Loading...'
          }
          <VideoList videos={videoList} onVideoSelect={video => this.setState({ selectedVideo: video })} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));