if (typeof Object.assign != 'function') {
	const {assign} = require('./object-assign.js')
	Object.assign = assign;
}
