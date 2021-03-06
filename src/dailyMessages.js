/*!

Name: Daily Messages
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: June 19, 2015
Last Updated: June 19, 2015
Licensed under the MIT license

*/

;(function($) {

    $.fn.dailyMessages = function(options) {
    
    	//return if no element was bound
		//so chained events can continue
		if(!this.length) { 
			return this; 
		}

		//define default parameters
        var defaults = {
            monday: null,
            tuesday: null,
            wednesday: null,
            thursday: null,
            friday: null,
            saturday: null,
            sunday: null,
            success: function() {}
        }
        
        //define plugin
        var plugin = this;

        //define settings
        plugin.settings = {}
 
        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        var s = plugin.settings,
        	el = $(this),
        	date = new Date(),
        	day = date.getDay(),
        	days = [
        		'Monday',
        		'Tuesday',
        		'Wednesday',
        		'Thursday',
        		'Friday',
        		'Saturday',
        		'Sunday'
        	],
        	today = days[day - 1].toLowerCase();
        	
        if(today in s) {
        	
        	el.text(s[today]);
        
			// run success callback
			s.success.call(this);
			
		} else {
		
			// run error callback
			s.error.call(this, '"'+s[today]+'" is not a valid day.');
			
		}

    }

})(jQuery);