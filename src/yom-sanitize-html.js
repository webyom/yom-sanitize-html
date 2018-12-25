var sanitize = require('browser-sanitize-html');
var domify = require('domify');

function defaultFn(node) {
	if (node.tagName == 'SCRIPT') {
    return false;
  }
  if (node.attributes) {
    for (let attr of node.attributes) {
      if (attr.name.indexOf('on') === 0) {
        node.removeAttribute(attr.name);
      }
    }
  }
}

module.exports = function (html, fn) {
  if (!html) {
    return '';
  }
  var el = sanitize(domify(html).cloneNode(true), fn || defaultFn);
  if (!el) {
    return '';
  }
  var div = document.createElement('div');
  div.appendChild(el);
  return div.innerHTML;
};
