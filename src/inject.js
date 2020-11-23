// this is the code which will be injected into a given page...

(function () {
  removeElementById("suggested-follows");
  removeElementsByClassName("upgrade");
  removeElementsByClassName("upsell");
  removeElementsByClassName("promo");
})();

function removeElementById(id) {
  var el = document.getElementById(id);
  //el.parentNode.removeChild(el);
  el.innerHTML = '';
}
function removeElementsByClassName(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}