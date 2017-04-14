// var App = (props) => {

// console.log(props)

// return (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData} />
//     </div>
//   </div>
// )};

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;

/**********REFACTOR***********/

var App = class App extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    this.onSearchEntry = this.onSearchEntry.bind(this);
    this.onVideoFetchSuccess = this.onVideoFetchSuccess.bind(this);
    this.searchYouTube = props.searchYouTube;
    this.searchYouTube(
      { key: null, query: 'up yours', max: 5, type: 'video' }, 
      this.onVideoFetchSuccess
      );
    this.state = {
      currentVideo: this.props.videos[0],
      videos: this.props.videos
    };

  }

  onVideoFetchSuccess(youtubeSearchResults) {
    if(youtubeSearchResults.items.length > 0){
      this.setState({
        videos: youtubeSearchResults.items,
      });

      this.setState({
        currentVideo: this.state.videos[0]
      });
    }

  }

  onVideoListEntryClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  onSearchEntry (query) {
    this.searchYouTube(
      { key: null, query: query, max: 5, type: 'video' }, 
      this.onVideoFetchSuccess
      );
  }

  render() {


    return ( 
      <div>
        <Nav onSearchEntry={this.onSearchEntry} />
          <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} videoListEntryClickHandler={this.onVideoListEntryClick} />
      </div>
    </div>
    );
  }
};

window.App = App;