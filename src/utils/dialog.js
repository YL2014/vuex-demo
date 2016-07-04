
export default {
	alert (option) {
		var title = option.title || "";
        var content = option.content;
        var okValue = option.okValue || '确定';
        if(document.getElementById('customerAlertTrue')){
            return;
        }
        var template = '<div class="hhl_mask"></div>'
            +'<div class="hhl_dialog">'
            +'<div class="hhl_dialog_hd">'
            +'<div class="hhl_dialog_title">'+title+'</div>'
            +'</div>'
            +'<div class="hhl_dialog_bd">'+content+'</div>'
            +'<div class="hhl_dialog_ft">'
            +'<a href="javascript:;" class="hhl_btn_dialog primary" id="customerAlertTrue">'+okValue+'</a>'
            +'</div>'
            +'</div>';
        var customerAlert = document.createElement('div');
        customerAlert.className = "hhl_dialog_alert";
        customerAlert.innerHTML = template;
        document.body.appendChild(customerAlert);
        document.getElementById('customerAlertTrue').addEventListener('click', function(){
            document.body.removeChild(customerAlert);
            if(option.callback){
                option.callback();
            }
        }, false);
	},
	showTip (msg) {
		this.alert({
			title: '',
			content: msg
		})
	},
	confirm ({option}) {
		var title = option.title || "";
        var content = option.content;
        var okValue = option.okValue || '确定';
        var cancelValue = option.cancelValue || '取消';
        var template =  '<div class="my_mask"></div>'
            +'<div class="my_dialog">'
            +'<div class="my_dialog_hd">'
            +'<div class="my_dialog_title">'+title+'</div>'
            +'</div>'
            +'<div class="my_dialog_bd">'+content+'</div>'
            +'<div class="my_dialog_ft">'
            +'<a href="javascript:;" class="my_btn_dialog default" id="customerConfirmFalse">'+cancelValue+'</a>'
            +'<a href="javascript:;" class="my_btn_dialog primary" id="customerConfirmTrue">'+okValue+'</a>'
            +'</div>'
            +'</div>';
        var customerConfirm = document.createElement('div');
        customerConfirm.className = "my_dialog_confirm";
        customerConfirm.innerHTML = template;
        document.body.appendChild(customerConfirm);
        document.getElementById('customerConfirmTrue').addEventListener('click', function(){
            option.success();
            document.body.removeChild(customerConfirm);
        }, false);
        document.getElementById('customerConfirmFalse').addEventListener('click', function(){
            if(option.cancel){
                option.cancel();
            }
            document.body.removeChild(customerConfirm);
        }, false);
	}
}