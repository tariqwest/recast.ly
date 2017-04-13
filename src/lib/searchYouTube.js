var searchYouTube = (options, callback) => {
      //Get youtbe videos
  var url = 'https://www.googleapis.com/youtube/v3/search'; 
  var data = {key: options.key, q: options.query, maxResults: options.max, part: 'snippet', videoEmbeddable: 'true', type: 'video'};
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: url,
    type: 'GET',
    data: data,
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      callback(data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('recast: Failed to retrieve videos', data);
    }
  });
};

window.searchYouTube = searchYouTube;
