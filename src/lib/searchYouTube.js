var searchQueue = [];
var running = false;

var searchYouTube = (options, callback) => {
      //Get youtbe videos
  searchQueue.push({options: options, callback: callback});
  if(!running){
    running = true;
    runSearchQueue();
  }
};

var runSearchQueue = () => {
  if(searchQueue.length > 0){
    var search = searchQueue.pop();
    var url = 'https://www.googleapis.com/youtube/v3/search'; 
    var data = {key: window.YOUTUBE_API_KEY, q: search.options.query, maxResults: search.options.max, part: 'snippet', videoEmbeddable: 'true', type: 'video'};
    
    if(search.options.key !== null && search.options.key !== undefined){
      data.key = options.key;
    }

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: url,
      type: 'GET',
      data: data,
      contentType: 'application/json',
      success: function (data) {
        console.log(data);
        search.callback(data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('recast: Failed to retrieve videos', data);
      }
    });
  }

  setTimeout(runSearchQueue, 1000);
};


// var searchYouTube = (options, callback) => {
//   var url = 'https://www.googleapis.com/youtube/v3/search'; 
//   var data = {key: window.YOUTUBE_API_KEY, q: options.query, maxResults: options.max, part: 'snippet', videoEmbeddable: 'true', type: 'video'};
  
//   if (options.key !== null && options.key !== undefined) {
//     data.key = options.key;
//   }

//   $.ajax({
//     // This is the url you should use to communicate with the parse API server.
//     url: url,
//     type: 'GET',
//     data: data,
//     contentType: 'application/json',
//     success: function (data) {
//       console.log(data);
//       callback(data);
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('recast: Failed to retrieve videos', data);
//     }
//   });
// };

window.searchYouTube = searchYouTube;
window.runSearchQueue = runSearchQueue;
