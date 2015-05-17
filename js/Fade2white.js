/*
 * ZhaoFeng Zeng
 * zhaofeng.zeng83@gmail.com
 *
*/
;(function($,window,document,undefined){
"use strict";
var drawSquares = function(num,gap){
	var tmpArr = [],
			len = 0,
			counter = 0,
 			output = '';

 	for(var index=parseInt(num);index<16;index++){
		var tmp = index.toString(16);
		tmpArr.push('#'+tmp+tmp+tmp);
 	}
 	len = tmpArr.length;

 	for(var boxNum=len;boxNum>0;boxNum--){
		var boxWidthAndHeight = boxNum*gap*2;
		var cssstyle='top:'+counter*gap+'px;left:'+counter*gap+'px;width:'+boxWidthAndHeight+'px;height:'+boxWidthAndHeight+'px;background:'+tmpArr.shift()+';';
		var html = '<div class="children" style="'+cssstyle+'"></div>';
		counter++;
		output +=html;
 	}
 	$('#container').append(output);
}

drawSquares(0,8);

})(jQuery,window,document);

// Could you suggest and discuss ways to make this function and its output cooler and more flexible?
/*
 * 1, We could add animation when drawSquares draw square by using setTimeout,like set 100 ms for output each square. 
 * 2, We also can build a jQuery plugin to make it more flexible, we could call that plugin drawsquare. We could use it by writing following code
 *    $('#container').drawsquare({start:0,gap:15,animation:true});
 * 3, we also can add one more argument call revert(defautl set to 1), so if revert set to 2, the color will be output from 14(light) grey to 0(black).
 * 
 *
 *
 *
 *
 *
 *
 *
*/