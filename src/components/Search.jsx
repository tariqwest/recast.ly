var Search = (props) => {

  var searchEntryHandlerHelper = () => {
    var query = $('input').val();
    if (query.length >= 3) {
      props.onSearchEntry(query);
    }
  };
  return (

    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={searchEntryHandlerHelper} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search" onClick={searchEntryHandlerHelper}></span>
      </button>
    </div> 
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
