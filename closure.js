function parent() {
  var innerVariable = "Go to your room!";
  //console.log(inaccessible)
  return function child() {
    var inaccessible = "**sneaks out the bedroom window**";
    return innerVariable;
  }
}

var outerScope = parent;

var innerScope = outerScope();
var theFunk = funkyFunction();

innerScope();


