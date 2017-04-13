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
//searchYouTube({ key: 'AIzaSyDxNNH0iTkW6wmwxxajMt_lDiwvic_f9a8', query: 'cats', max: 10 }, function (data) { console.log(data, 'yes!!!')});
var callback = (data) => { 
  //console.log(data); 
  return data;
};

//var returnedVideos = window.searchYouTube({ key: 'AIzaSyDxNNH0iTkW6wmwxxajMt_lDiwvic_f9a8', query: 'cats', max: 10, type: 'video' }, callback);


var App = class App extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    this.onSearchEntry = this.onSearchEntry.bind(this);
    this.onVideoFetchSuccess = this.onVideoFetchSuccess.bind(this);
    console.log(props.searchYouTube);
    this.props.searchYouTube(
      { key: null, query: 'cats', max: 5, type: 'video' }, 
      this.onVideoFetchSuccess
      );
    
    // window.searchYouTube(
    //   { key: null, query: 'cats', max: 5, type: 'video' }, 
    //   this.onVideoFetchSuccess
    //   );

    this.state = {
      currentVideo: this.props.videos[0],
      videos: this.props.videos
    };

  }

  onVideoFetchSuccess(videos) {
    
    // this.setState({
    //   videos: videos.items,
    // });

    // this.setState({
    //   currentVideo: this.state.videos[0]
    // });

  }

  onVideoListEntryClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  onSearchEntry (query) {
    //console.log(query);
    // do an ajax request with this query

    this.props.searchYouTube(
      { key: null, query: query, max: 5, type: 'video' }, 
      this.onVideoFetchSuccess
      );
    // var params = { key: null, query: query, max: 10, type: 'video' };
    // setTimeout(window.searchYouTube, 1000, )
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