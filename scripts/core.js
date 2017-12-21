var HOLD = HOLD || {};

HOLD.namespace = function(str, mode) {
	if(typeof(str) !== 'string') {
		throw TypeError();
	}

	mode = mode || 'error'; // Also you can set `notice`

	var levels = str.split('.'), path = this;

	if(levels[0] === 'HOLD') {
		levels.shift();
	}

	for(var i = 0, to = levels.length - 1; i < to; i++) {
		path = ((!path[levels[i]]) ? (path[levels[i]] = {}) : (path[levels[i]])) ;
	}

	if(path[levels[levels.length - 1]] && mode === 'notice') {
		console.warn('Hey, existing node has been rewritten.');
	}
	else if(path[levels[levels.length - 1]] && mode === 'error') {
		throw new Error('Ooops, looks like node already exists.');
	}
	else if(!path[levels[levels.length - 1]]) {
		path = path[levels[levels.length - 1]] = {};
	}

	return path;
}

HOLD.require = function(filepath) {

	if(typeof(filepath) !== 'string') {
		throw TypeError();
	}

	var scriptTag = document.createElement('script');
	scriptTag.setAttribute('src', filepath);
	document.body.appendChild(scriptTag);

	return true;
}

// Extentions
HOLD.require('extentions/datapicker/picker.js');

// Scripts
HOLD.require('scripts/router.js');
HOLD.require('scripts/ui.js');
HOLD.require('scripts/game.js');
