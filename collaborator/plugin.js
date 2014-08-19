define(function() {
	'use strict'

    return {
        load: function(requiredModule, req, loader, config) {
			req([requiredModule], function (module) {
				loader(module);
			});
        }
    }
});