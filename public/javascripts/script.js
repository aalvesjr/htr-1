$(function(){
  // USING MODERNIZR
  if (!Modernizr.inputtypes.search) {
    $("html").addClass("no-search-input");
  }
});
