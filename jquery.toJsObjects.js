/*
 * jQuery toJsObjects 0.1
 *
 * Copyright (c) 2009 
 * AUTHOR : Rafael Martins <rafael.mws@gmail.com>
 * Dual licensed under the MIT and GPL  licenses.
 *
 */

$.fn.toJsObjects = function(properties){
	try	{
		objects = [];
		this.each(function(index){
			var obj = {};
			for(i=0; i < properties.length; i ++){
				obj[properties[i]] = $(this).attr(properties[i]);
			}
			obj.index = index;
			objects.push(objeto);
		});
		return objects	
	}
	catch(exception){
		console.log(exception);
	}
};
