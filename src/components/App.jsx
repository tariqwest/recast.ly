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
    this.state = {
      currentVideo: this.props.videos[0]
    };
  }

  onVideoListEntryClick (event) {
    console.log(event);

    // this.setState({
    //   currentVideo: video
    // });
  }

  render() {


    return ( 
      <div>
        <Nav />
          <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.props.videos} onClick={this.onVideoListEntryClick} />
      </div>
    </div>
    );
  }
};

window.App = App;