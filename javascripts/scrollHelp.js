
	var scrollHelp = function (win) {
	    this.win = win;
	    this.step = 50;
	    this.interval = 0;
	    this.intervalID = null;
	    this.upOrDown = "";
	    this.init();
	}
	scrollHelp.prototype = {
	    init: function () {
	        var _this = this;
            _this.win.onmousewheel = function (e) {
            	// clearInterval(_this.intervalID);
            	if(!$(window).is(":animated")){
	                e = e || window.event;
	                _this.upOrDown = e.wheelDelta > 0 ? "up" : "dw";
	                _this.scrollHander();
	                e.returnValue = false;
	            }	            
	        // }
	        } 
	    },
	    scrollHander: function () {	    	
	        var _this = this;
	        if (document.attachEvent) {
	        	var tar = document.documentElement.scrollTop + _this.step * (_this.upOrDown === "up" ? -2 : 2);
	        }else{
	        	var tar = _this.win.scrollTop + _this.step * (_this.upOrDown === "up" ? -1 : 1);
	        }

	        $('body').stop().animate({scrollTop:tar},400);
	        window.event.preventDefault();
	    }
	}