if (typeof Object.assign != 'function') {
	const {assign} = require('./polyfills/object-assign.js')
	Object.assign = assign;
}
