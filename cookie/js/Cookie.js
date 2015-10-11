define(function(){ 
	function Cookie(){ 
		this.cookies={};
		this.length=0;
		this.init();
	}
	Cookie.prototype={ 
		constructor:"Cookie",
		init:function(){ 
			var allCookies=document.cookie;
			if(allCookies!==""){ 
				var cookiesArr=allCookies.split("; ");
				this.length=cookiesArr.length
				for(var i=0,len=this.length;i<len;i++){ 
					var singleCookie=cookiesArr[i];
					var singleArr=singleCookie.split("=");
					var key=singleArr[0];
					var value=decodeURIComponent(singleArr[1]);
					this.cookies[key]=value;
				}
			};
			return this;
			
		},
		setCookie:function(key,value,maxAge,path){
			if(!(key in this.cookies)){ 
				this.length++;
			}
			this.cookies[key]=value;
			var cookieStr=key+"="+encodeURIComponent(value);
			cookieStr+=maxAge?"; max-age="+maxAge:"";
			cookieStr+=path?"; path="+path:"";
			document.cookie=cookieStr;
			return this;

		},
		getCookie:function(key){
			if(!key){ 
				return this.cookies;
			}
			if(key in this.cookies){ 
				return this.cookies[key]
			}
			return "";
		},
		deleteCookie:function(key){ 
			if(!key){ 
				for(var name in this.cookies){ 
					document.cookie=name+"=; max-age=0";
				}
				this.cookies={};
				this.length=0;
			}else{
				document.cookie=key+"=; max-age=0";
				delete this.cookies[key];
				this.length--;
			}
			return this;
		}
	}
	return new Cookie();
});