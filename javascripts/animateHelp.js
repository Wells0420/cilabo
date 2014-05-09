var ParallaxHelp = {
		prTop 	: function(element,speed,top,sctop){
			element.css('top',(top-(sctop*speed))+'px');
		},
		prBak 	: function(element,speed,top,sctop){
			return false;
		},
		prHei 	: function(element,speed,height,sctop){
			element.css('height',(height-(sctop*speed*5))+'px');
		},
		prLeft 	: function(element,speed,left,sctop){
			element.css('margin-Left',((left-(sctop*speed))+'px'));
		},
		prFade 	: function(element,sctop,scbottom,time,sctops){
			if (sctops > sctop && sctops < scbottom && (element.css('display')=='none')) {
				element.stop().fadeIn(time);
			}else if((sctops < sctop || sctops > scbottom) &&  (element.css('display')!=='none')){
				element.stop().fadeOut(1);
			}			
		},
		prWei 	: function(element,sctop,scbottom,time,sctops){
			if (sctops > sctop && sctops < scbottom && (element.css('width')=='0px')) {
				element.stop().animate({width:347,height:247},time);
			}
		},
		sp3Ani	: function(element,sctop,scbottom,time,sctops){
			if (sctops > sctop && sctops < scbottom && (element[0].css('width')=='0px')){
				element[0].stop().animate({'width':120},time,function(){
					element[1].stop().animate({'width':107},time,function(){
						element[2].stop().animate({'width':102},time,function(){
							element[3].stop().animate({'width':124},time);
						});
					});
				});
			}
				
		},
		sp5Ani : function(element,sctop,scbottom,time,sctops){
			if (sctops > sctop && sctops < scbottom && (element[0].css('width')=='0px')){

				element[0].stop().animate({
					width:95,
					height:113,
					marginLeft:-490,
					top:192
				},time,function(){
				element[1].stop().animate({width:95,height:120,marginLeft:-380,top:185},time,function(){
				element[2].stop().animate({width:95,height:104,marginLeft:-490,top:342},time,function(){
				element[3].stop().animate({width:95,height:106,marginLeft:-380,top:340},time,function(){
				element[4].stop().animate({width:107,height:105,marginLeft:-495,top:490},time,function(){
				element[5].stop().animate({width:82,height:99,marginLeft:-373,top:497},time,function(){
				element[6].stop().animate({width:95,height:103,marginLeft:-490,top:652},time);});});});});});
			});				
			}
		},
		sp5pho : function(element,sctop,scbottom,time,sctops){
			if (sctops > sctop && sctops < scbottom && (element[0].css('display')=='none')){
				element[0].stop().fadeIn(time,function(){
				element[1].stop().fadeIn(time,function(){
				element[2].stop().fadeIn(time);});});				
			}
		},
		sp6Ani:function(e){
			setInterval(function(){
				e.fadeOut(100,function(){
					e.fadeIn (500);
				});
			}, 5000);
		},
		btnfade:function(e){
			setInterval(function(){
				e.animate({					
						width:174,
						marginLeft:420					
					},300,function(){
						setTimeout(function(){
							e.animate({width:0,
								marginLeft:520},1);								
						},3000);
					});
			}, 8000);
		}
	};