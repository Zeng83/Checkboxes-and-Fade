/*
 * ZhaoFeng Zeng
 * zhaofeng.zeng83@gmail.com
 *
*/

;(function($,window,document,undefined){
	"use strict";

	var tableTransation = function(elem,column,row){
	  this.container = $(''+elem);
	  this.column = column;
	  this.row=row;
	};

	tableTransation.prototype = {
	  initTable:function(){// construct table
	   var htmlArr = this.fnAssembleTalbe();

	   htmlArr.push(this.fnAddSubmitButton(this.column));

	   var appendHtml = '<table>'+htmlArr.join('')+'</table>';
	   this.container.append(appendHtml);
	  },
	  fnAssembleTalbe:function(){//assemble required table columns and rows
	  	var len = this.row.length,
	  			htmlArr = [];
	  	for(var rowIndex=0;rowIndex<len;rowIndex++){
				var tmp = '<tr><td class="feature-name" data-level="0" data-id="'+rowIndex+'">'+this.row[rowIndex]+'</td>';
				for(var columnIndex=1;columnIndex<=this.column;columnIndex++){
				  tmp+='<td><input class="level"  data-power="'+columnIndex+'" type="checkbox"></td>';
				}
				tmp+='</tr>';
				htmlArr.push(tmp);
			}
			return htmlArr;
	  },
	  fnAddSubmitButton:function(column){// add submit button to the end
	  	var lastTmp = '<tr>';
			for(var columnIndex1=0;columnIndex1<=column;columnIndex1++){
			 if(columnIndex1===column){
			    lastTmp+='<td><input type="button" class="submittabledata" value="submit"></td>';  
			 }else {
			    lastTmp+='<td></td>';  
			 }
			}
			lastTmp += '</tr>';
			return lastTmp;
	  },
	  fnUpdateLevel:function(elem){ // response users click privacy check box
	  	var stopAt = elem.attr('data-power'),
		  listParent = elem.parent('td'),
		  list = listParent.parent('tr').find('input');
		  listParent.siblings('.feature-name').attr('data-level',stopAt);

		  list.prop('checked',false);
		  list.each(function(e){
		  	$(this).prop('checked',true);
		  	if($(this).attr('data-power')===stopAt){
		  		return false;
		 		}
		  });
	  },
	  fnReturnData:function(){ //show table data on the browser console
	  	var data = {};
			this.container.find('td.feature-name').each(function(e){
				data[$(this).text()]=$(this).attr('data-level');
			});
			console.log(data);
	  }
	};

	var tt = new tableTransation('#tableContainer',8,['zhao','box','investing']);
	tt.initTable();

	$('#tableContainer').delegate('.level','change',function(e){// jquery event trigger for clicking check box
	  tt.fnUpdateLevel($(this));
	});

	$('#tableContainer').delegate('.submittabledata','click',function(e){ // jquery event trigger for submit button
		tt.fnReturnData();
	});


})(jQuery,window,document);

