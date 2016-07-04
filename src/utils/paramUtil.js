/*
*url里参数操作方法，不要依赖该util，尽量直接使用路由的参数获取方法
*Created by yuanlong on 2016/05/20.
*/

export default {

	get (name) {
		// 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
        if(location.href.indexOf("?")==-1 || location.href.indexOf(name+'=')==-1){
            return '';
        }
        // 获取链接中参数部分
        var queryString = location.href.substring(location.href.indexOf("?")+1);
        // 分离参数对 ?key=value&key2=value2
        var parameters = queryString.split("&");
        var pos, paraName, paraValue;
        for(var i=0; i<parameters.length; i++){
            // 获取等号位置
            pos = parameters[i].indexOf('=');
            if(pos == -1) { continue; }
            // 获取name 和 value
            paraName = parameters[i].substring(0, pos);
            paraValue = decodeURI(parameters[i].substring(pos + 1));//解码 防止乱码
            // 如果查询的name等于当前name，就返回当前值，同时，将链接中的+号还原成空格
            if(paraName == name) {
                return unescape(paraValue.replace(/\+/g, " "));
            }
        }
        return '';
	},

	create (paramObj) {
		var params = '';
        if (!Utils.isObject(paramObj)) {
            return '';
        }
        //只有当paramObj是对象直接量才会执行
        for (var p in paramObj) {
            if (paramObj.hasOwnProperty(p)) {
                if(paramObj[p] === 0 || paramObj[p] === false || paramObj[p]){
                    if (params !== '') {
                        params += '&';
                    }
                    params += p + '=' + encodeURIComponent(paramObj[p]);
                }
            }
        }
        return params;
	},

	remove (parameter) {
		var url=document.location.href;
        var urlparts= url.split('?');
        if (urlparts.length>=2){
            var urlBase=urlparts.shift();
            var queryString=urlparts.join("?");

            var prefix = encodeURIComponent(parameter)+'=';
            var pars = queryString.split(/[&;]/g);
            for (var i= pars.length; i>0; i--){

            }
            if (pars[i].lastIndexOf(prefix, 0)!==-1){
                pars.splice(i, 1);
            }
            url = urlBase+'?'+pars.join('&');
            window.history.pushState('',document.title,url);
        }
        return url;
	}

}