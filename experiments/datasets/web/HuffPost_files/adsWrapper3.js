if (!window.ATW3_AdObj){
	try {
		if (parent.window.ATW3_AdObj){
			var ATW3_AdObj=parent.window.ATW3_AdObj;
		}
		else {
			var ATW3_AdObj=new Object();
			parent.window.ATW3_AdObj=ATW3_AdObj;
		}
	}
	catch (e){
		var ATW3_AdObj=new Object();
	}
}
 var atw3Ping=function(f,s,t){
	var w=window;
	var fail=function(){
		if (w.removeEventListener){w.removeEventListener("message",atw3Listen,false)}
		else if (w.attachEvent){w.detachEvent("onmessage",atw3Listen)}
		var xx=(/allowedSizes=(.*?);/.test(s))?(RegExp.$1).split(','):'';
		if (xx)s=s.replace(/allowedSizes=.*?;/,"size="+xx[0]+";");
		if (s.indexOf('size=')==-1)s=s.replace(/\/0\/-1\//, "\/0\/-1\/size=300x250;");
		s=s.replace(/noperf=1;/,"noperf=1;artexc=art_exp;");
		document.write("<script type='text/javascript' src='"+s+"'></script>");
  	};
	var r=0;
	var atw3Listen=function(e){
		if (!r){
			if (!e){
				fail();
			}
			else if (e.source===f.contentWindow){
				if (e.data==="fifgood") {
					f.contentWindow.postMessage('url2='+s,e.origin);
				}
				else 
				{
					fail();
				}
				r=1;
			}
		}
	}
	if (w.addEventListener){w.addEventListener("message",atw3Listen,false)}
	else if (w.attachEvent){w.attachEvent("onmessage",atw3Listen)}
	setTimeout(function(){setTimeout(atw3Listen,t);},1);
}
var atw3Resize=function(iframeId,divId){
	var atw3GetSize=function(w,d){
		var f,fi,wi='0',h='0',z=0,c=0,a=0,aD1='',col;
		try {
			f=w.frameElement;
			fi=d.getElementById(iframeId);
			if (fi)f=fi;
			aD1=f.contentDocument.documentElement.innerHTML;
		}
		catch (e){
			return '0x0';
		}
		col=((aD1.indexOf('AOL - HTML - Blank HTML Ad')!=-1)||(aD1.indexOf('ATCollapse.gif')!=-1));
		if (!col){
			if (/ACE_AR(.*?)possible_size(.*?)[,}]/i.test(aD1))a=1
			else	if (/ACE_AR(.*?)Size(.*?)['"](.*?)['"]/i.test(aD1)){
				if (unescape(RegExp.$3).indexOf(',')>0)a=1;
			}
			if (!a){
				if ((/aolSize=["']([\d]*?)\|([\d]*)["']/i.test(aD1))&&(unescape(RegExp.$2)>1)){
					wi=unescape(RegExp.$1);
					h=unescape(RegExp.$2);
					a=1;
					if (wi=='6'&&h=='2'){
						wi='300';
						h='250';
					}
				}
				else if (/ACE_AR(.*?)Size(.*?)[,}]/i.test(aD1)){
					var as=unescape(RegExp.$2).replace(/[^\d\+]/g,"");
					wi=parseInt(as.substring(0,3),10);
					h=parseInt(as.substring(3,as.length),10);
					if (!(isNaN(wi)||isNaN(h))){a=1;} 
	 			}
				if (!a) {
					var di=d.getElementById(divId),wi2;
					if (!di){
						di=f.contentDocument.getElementById(divId);
					}
					if (di){
						wi=di.clientWidth;
						wi2=f.contentDocument.body.scrollWidth;
						if (wi2>wi){
							wi=wi2;
						}
						h=di.clientHeight;
						if (h==0){
							h=f.contentDocument.body.scrollHeight;
						}
					}
					else {
						wi=f.contentDocument.body.scrollWidth;
						h=f.contentDocument.body.scrollHeight;
					}
					if (f.atwSizes){
						var s=f.atwSizes.split(','),l=s.length,lD=100,ma=0,di;
						for (var i=0;i<l;i++){
							x=s[i].split('x');
							di=Math.abs(x[0]-wi)+Math.abs(x[1]-h);
							if (di<lD){
								lD=di;
								ma=i;
							}
						}
						var zz=s[ma].split('x');
						wi=zz[0];
						h=zz[1];
					}
				}
			}
		}
		else {
			wi='collapse';
		}
		return (wi+'x'+h);
	}
	var sz=atw3GetSize(self,self.document);
	if (sz!='0x0'){
		var	wh=sz.split('x'),
			wi=wh[0],
			h=wh[1],
			prev=self,
			cur=parent,
			atTop=false,
			c=0;
		if (wi=='collapse'){
			wi=0;
			h=0;
		}
		try {
			f=self.frameElement;
			var fi=self.document.getElementById(iframeId);
			if (fi)f=fi;
			f.width=wi;
			f.height=h;
			f.style.width=wi+'px';
			f.style.height=h+'px';
		}
		catch(e){}
		while (!atTop&&c<5){
			try {
				atTop=(cur==top);
				var f=cur.document.getElementsByTagName('iframe'),l=f.length;
				for (var i=0;i<l;i++){
					if (f[i].contentWindow==prev&&(f[i].width<=wi||f[i].height<=h||wi==0)){
						f[i].width=wi;
						f[i].height=h;
						f[i].style.width=wi+'px';
						f[i].style.height=h+'px';
					}
				}
				prev=cur;
				cur=cur.parent;
				c++;
			}
			catch(e){
				return 0;
			}
		}
	}
}
function atw3GDPRDelay(v){
	var gdpr='',s='';
	if (v&&v.indexOf('timeout')>-1&&atw3UAC.gdprRet=='noCall'){
		atw3UAC.gdprRet='noCallTimeout3';
	}
	clearTimeout(atw3UAC.GDPRTimeout);
	if (atw3UAC.gdprSrc){
		if ((atw3UAC.gdprRet.toString().indexOf('noC')==-1)&&(atw3UAC.gdpr=='0'||atw3UAC.gdpr=='1')){
			gdpr+='gdpr='+atw3UAC.gdpr+';';
			if (atw3UAC.gdpr&&atw3UAC.gdpr!='0'){
				if (atw3UAC.gdprC!=undefined)gdpr+='euconsent='+atw3UAC.gdprC+';'
			}
		}
		s=atw3UAC.gdprSrc.replace(/noperf=1;/,'noperf=1;'+gdpr);
		window.document.open();
		var iStr="<html><body marginTop=0 marginWidth=0 marginHeight=0 marginLeft=0><script type='text/javascript' src='"+s+"'></script></body></html>";
		window.document.write(iStr)
		window.document.close();
		atw3UAC.gdprSrc='';
	}
}
function atw3GDPR(ifV){
	atw3UAC.gdprRet='noCall';
	try {
		atw3UAC.GDPRTimeout=setTimeout(function(){atw3GDPRDelay('timeout')},500);
		if (ifV!=2&&parent.window.__cmp){
			parent.window.__cmp('getConsentData',null,function(r,s){
				if (s){
					atw3UAC.gdpr=r.gdprApplies?'1':'0';
					atw3UAC.gdprC=r.consentData;
					atw3UAC.gdprRet='success3p';
					atw3GDPRDelay();
				}
				else {
					atw3UAC.gdprRet='noCMPFail3p';
					atw3GDPRDelay();
				} 
			});
		}
		else if (ifV==2){
			var f=window,cmpF;
			while(!cmpF){
				try {
					if(f.frames["__cmpLocator"]){
						cmpF=f;
					}
				} 
				catch(e){}
				if(f===window.top){
					break;
				}
				f=f.parent;
			}
			var cmpCallbacks={};
			window.__cmp=function(cmd,arg,callback){
				var id=Math.random()+"";
				if (cmpF){
					var msg={
						__cmpCall: 
						{
							command:cmd,
							parameter:arg,
							callId:id
						}
					};
					cmpCallbacks[id]=callback;
					cmpF.postMessage(msg,'*');
				}
				else {
					atw3UAC.gdprRet='noCMP3C';
					atw3GDPRDelay();
				}
			}
 			window.addEventListener("message",function(e){
				var msgIsStr=typeof e.data==="string",json=e.data;
				if (msgIsStr) {
					try {
						json=JSON.parse(e.data);
			           } 
					catch (e){}
				}
				if(json.__cmpReturn) {
					var i=json.__cmpReturn;
					cmpCallbacks[i.callId](i.returnValue,i.success);
					delete cmpCallbacks[i.callId];
				} 
			}, false);
			window.__cmp('getConsentData',null,function(r,s){
				if (s){
					atw3UAC.gdpr=r.gdprApplies?'1':'0';
					atw3UAC.gdprC=r.consentData;
					atw3UAC.gdprRet='success3C';
					atw3GDPRDelay();
				}
				else {
					atw3UAC.gdprRet='noCMPFail3C';
					atw3GDPRDelay();
				} 
			});
		}
		else if (window.__cmp){
			window.__cmp('getConsentData',null,function(r,s){
				if (s){
					atw3UAC.gdpr=r.gdprApplies?'1':'0';
					atw3UAC.gdprC=r.consentData;
					atw3UAC.gdprRet='success3';
					atw3GDPRDelay();
				}
				else {
					atw3UAC.gdprRet='noCMPFail3';
					atw3GDPRDelay();
				}
			});
		}
		else {
			atw3UAC.gdprRet='noCMP3';
			atw3GDPRDelay();
		}
	}
	catch(e){
		atw3UAC.gdprRet='noCMPCatch3';
		atw3GDPRDelay();
	}
}
function atw3CutURL(v,s){
	var r='',p,n;
	if (v.indexOf('ncid=')>-1){
		n=v.match(/(?:.*?)&ncid=(.*?)(?:[&#\/]|$)/);
		r+='kvncid='+escape(RegExp.$1)+';';
	}
	v=v.match(/(?:https?\:){0,1}\/\/(.*?)(?:[?#]|$)/);
	p=RegExp.$1;
	if (p.length>150)p=p.substr(0,150);
	r+=s+escape(p)+';';
	r=r.replace(/\/;$/,';');
	r=r.replace(/\//g,'%2F');
	return r;
}
function html3AdWH(m,w,h){
var u='',pg='',d=document,s,wi=window,pr=location.protocol,ugc='',dt=new Date(),ifV=2,al=1,gdpr='';
try {
	var ur=wi.top.location.href; 
	if (!ur||ur==='undefined'){
		ifV=2;
	}
	else if (wi.top!==wi.self){
		ifV=1;
	}
	else {
		ifV=0;
	}
}
catch (e){}
atw3GDPR(ifV);
if (m)m=m.toString()
else if (!wi.atwPlId)return 0;
if (wi.atwMOAT=='1'&&!ATW3_AdObj.moat){
	ATW3_AdObj.moat=1;
	var sc=d.createElement("script"),hd=d.getElementsByTagName("head")[0];
 	sc.src='//o.aolcdn.com/os/moat/prod/moatuac.js';
	hd.appendChild(sc);
}
if (wi.AMP_LISTENING==true&&wi.atwStyle){
	try {
		var st=d.createElement('link'),hd=d.getElementsByTagName("head")[0];
		st.href=atwStyle;
		st.type='text/css';
		st.rel='stylesheet';
		if (hd)hd.append(st);
	}
	catch(e){}
}
if (!pr||pr.indexOf('http')<0){pr='http:';}
try {
	u=top.location.href;
	if (!u||u=="undefined"){u=d.referrer;}
}
catch (e){u=d.referrer;}
u=u||"";
if (u){pg=atw3CutURL(u.toLowerCase(),'kvpg=');}
var uac=u.search(/atw3UAC=/i),n,n1,src;
if (uac>0&&!ATW3_AdObj.uac){
	n=u.substring(uac+8,u.length).replace(/&.*$/,'').split(/\||;/);
	if (n[1]&&n[1]=='s')src='https://s.aolcdn.com/ads/'
	else src='//scdn.uc.atwola.com/ads/';
	n1=unescape(n[0]);
	if(/^[0-9A-Za-z]+$/.test(unescape(n1)))d.write('<script type="text/javascript" src="'+src+n1+'.js"></scr','ipt>')
	ATW3_AdObj.uac=1;
}
else{
	var ipU=u.search(/atw3IP=/i),ip='',mn,crU=u.search(/atw3CrPr=/i),cr,cr1='',exU=u.search(/atw3Exc=/i),exc='',ln=u.length;
	if (ipU>0)ip='ip='+u.substring(ipU+7,ln).replace(/&.*$/,'')+';';
	if (!(/^[a-z0-9\.=;]+$/.test(unescape(ip))))ip='';
	if (exU>0)exc=u.substring(exU+8,ln).replace(/&.*$/,'');
	var ht='',nt='5113.1',pl='221794',ot='',tp='J',nv=navigator,ua=nv.userAgent.toLowerCase(),ie=(nv.appName=="Microsoft Internet Explorer"),dyn='',inc='',chn='',dev=(typeof wi.onorientationchange!='undefined')?'1':'2';
	if (wi.atwCo&&wi.atwCo.toLowerCase()=='uk'){nt='1065.1';pl='2590140'}
	if ((ua.indexOf('mobile')>-1)||(/android|iphone|ipad|playbook|hp-tablet|kindle|silk|webos|blackberry|opera mini/i).test(navigator.appVersion))dev='1';
	if (!dev)dev='2';
	if (wi.s_265&&wi.s_265.channel)chn='kvoch='+escape(wi.s_265.channel)+';'
	if (!wi.ATW3_AdObj.scr){
		ATW3_AdObj.scr=dt.getTime()%0x3b9aca00;
		ATW3_AdObj.tile=1;
	}
	else ATW3_AdObj.tile++;
	var scr=ATW3_AdObj.scr,tile=ATW3_AdObj.tile;
	mn=(/(\?|&)atw3[Mm][Nn]=(.*?)(&|$)/.test(u))?(RegExp.$2).split(/\||;/):'';
	if (!(/^[0-9A-Za-z,-]+$/.test(unescape(mn))))mn='';
	if (mn){
		var mL=mn.length,wxh=w+'x'+h,num,all=0;
		for (var i=0;i<mL;i=i+2){
			num=mn[i+1];
			if (num.indexOf('a')>0){
				num=num.replace('a','');
				all=1;
			}
			else {
				all=0;
			}
			if (num.indexOf('only')>-1){
				num=num.replace('only','');
				only=1;
			} 
			else {
				only=0; 
			}
			if ((ATW3_AdObj.tile==num)||(wxh==num)){
				m=mn[i];
				if (!all)mn[i+1]='';
				if (only)mn[i+1]='only';
			}
			else if (only){m='0';}
		}
	}
	if (m=='0'){ATW3_AdObj.tile++;return 0}
	if (wi.atwHtNmAT){
		v=atwHtNmAT;
		ht=(/^https?/i.test(v))?v:((/^\/\//.test(v))?pr+v:pr+'//'+v);
		if (ht.charAt(ht.length-1)=='/')ht=ht.substring(0,ht.length-1);
	}
	if (wi.atwType==''){tp='J'}
	else if (wi.atwType){tp=atwType.toUpperCase()}
	kv=(/(\?|&)atw3[Kk][Vv]=(.*?)(&|$)/.test(u))?escape(RegExp.$2):'';
	if (!(/^[0-9A-Za-z,;-=_]+$/.test(unescape(kv))))kv='';
	if (kv&&kv[kv.length-1]!=';')kv+=';'
	if (wi.atwOthAT){
		v=atwOthAT;
		if (v.charAt(v.length-1)!=';')v+=';'
		var x=v.split(';'),l=x.length,y;
		for (i=0;i<l-1;i++){
			if (x[i].charAt(x[i].length-1)!='='){
				y=x[i].split('=');
				ot+=encodeURIComponent(y[0])+"="+encodeURIComponent(y[1])+';';
			}
		}
	}
	else if (ATW3_AdObj&&ATW3_AdObj.adsATOth)ot=ATW3_AdObj.adsATOth;
	ot+=kv;
	if (ot.indexOf('kvugc')==-1){
		try { 
			if (parent.window.adSetUGC)ugc=parent.window.adSetUGC
			else if (wi.adSetUGC)ugc=wi.adSetUGC;
		}
		catch (e){if (wi.adSetUGC){ugc=wi.adSetUGC;}}
		if (!ugc){
			if (ot.indexOf('cmsid')==-1)ugc='0'
			else ugc='1'
		}
		ot+='kvugc='+ugc+';';
	}
	if (wi.atwNetId){nt=atwNetId}
	var nt1=u.search(/atwNt=/i);
	if (nt1>0)nt=u.substring(nt1+6,ln).replace(/&.*$/,'');
	if (wi.atwPlId&&(!m||(m&&m=='useplacementid'))){pl=atwPlId;m=pl;al=0;}
	else if (wi.atwPlId&&m){pl=atwPlId}
	if (exc=='blank')inc='artexc=all;'
	if (w=='RR'||w=='rr'){
		dyn='r';
		wi.atwSizes='300x250,300x600,300x1050';
		w='300';
		h='250';
	}
	else if (w=='LB'||w=='lb'){
		wi.atwSizes='728x90,948x250,970x66,970x90,950x252,970x250,940x230';
		w='728';
		h='90';
	}
	else if (w=='MM'||w=='mm'){
		wi.atwSizes='300x250,320x480,320x50';
		w='300';
		h='250';
	}
	 if (wi.atwPolar=='1'){
		wi.atwSizes='300x250,6x2';
		w='300';
		h='250';
	}
	var s1='',s2='';
	if (wi.atwSizes){
		if (tp!='FILELESS'&&tp!='IMAGE'&&tp!='AFIF'){
			tp='J';
		}
		if (ifV==2&&tp!='AFIF'&&wi.atwPolar!='1'&&!wi.ampPg&&!wi.atwMultiSize){
			s2+="size="+w+"x"+h+";";
		}
		else if (dyn!='r'&&wi.atwSendSizes!='no')s2+="allowedSizes="+wi.atwSizes+";";
	}
	else if (dyn!='r')s2+="size="+w+"x"+h+";";
	if ((atw3UAC.gdprRet.toString().indexOf('noC')==-1)&&(atw3UAC.gdpr=='0'||atw3UAC.gdpr=='1')){
		gdpr='gdpr='+atw3UAC.gdpr+';';
		if (atw3UAC.gdpr&&atw3UAC.gdpr!='0'){
			if (atw3UAC.gdprC!=undefined)gdpr+='euconsent='+atw3UAC.gdprC+';'
		}
	}
	s1=gdpr+ot.toLowerCase()+ip+pg+'kvmn='+m+';kv3puac=1;kvgrp='+scr+';kvismob='+dev+';'+chn+'extmirroring=0;kvtile='+tile+';aduho='+(-1*dt.getTimezoneOffset())+';';
	if (al)s2+='alias='+m+';';
	s2+='noperf=1;noaddonpl=y;ifv='+ifV+';'+s1+inc+'grp='+scr;
	if (ht)s=ht
	else {
		s=pr+'//';
		if (wi.atwCo&&wi.atwCo.toLowerCase()!='us')s+='uk.';
		s+='at.atwola.com';
	}
	s+="/addyn/3.0/"+nt+"/"+pl+"/0/-1/";
	s+=s2;
	if (crU>0){
		cr=u.substring(crU+9,ln).replace(/&.*$/,'').split(/\||;/);
		cr1=cr[0];
     	if ((/^http[s]{0,1}:\/(\/ibw\.aol\.com\/|\/ibw\-qai\.aol\.com\/|\/sales\.oath\.com\/|\/sales\-qa\.oath\.com\/)(.*?)/.test(cr1))&&(/^[0-9A-Za-z\/.:_\-]+$/.test(unescape(cr1)))){
			if ((dyn=='r'&&(cr[1]==300&&(cr[2]==250||cr[2]==600||cr[2]==1050)))||(cr[1]==w&&cr[2]==h)||(cr[3]==tile)){
				if (tp!='J'&&tp!='FILELESS'&&tp!='AFIF')s=cr1+'.html'
				else s=cr1+'.js'
			}
		}
	}
	if (m!='0'){
		if (tp!='IMAGE'){
			if (tp=='J'||(tp=='AFIF'&&(!wi.atwFIF||ifV!=2||!wi.postMessage))){
				var divId='atwAdJS'+Math.floor(Math.random()*10000);
				if (ifV==1&&wi.atwResize&&wi.atwSizes){
					d.write("<div id='"+divId+"' style='display:inline-block;'>");
				}
				if (atw3UAC.gdprRet=='noCall'&&ifV>=1){
					atw3UAC.gdprSrc=s;
				}
				else {
					d.write("<script type='text/javascript' src='"+s+"'></script>");
				}
				if (ifV==1&&wi.atwResize&&wi.atwSizes){
					if (wi.addEventListener){wi.frameElement.addEventListener("load",function(){atw3Resize('',divId);},false)}
					else if (wi.attachEvent){wi.frameElement.attachEvent("onload",function(){atw3Resize('',divId);})}
					d.write('</div>');
					self.atwSizes=wi.atwSizes;
				}
			 }
			 else if (tp=='FILELESS'){
				var pd='',r=Math.floor(Math.random()*10000),iframeId='atwFilelessI'+r,divId='atwFilelessDiv'+r,divId2='atwFilelessInnerDiv'+r;
				if (wi.atwDiv){
					pd=document.getElementById(atwDiv);
				}
				if (pd){
					var dd=document.createElement('div');
					dd.id=divId;
					pd.appendChild(dd);
					var f=document.createElement('iframe');
					f.width=w;
					f.height=h;
					f.title='Ad';
					f.marginWidth=0;
					f.marginHeight=0;
					f.setAttribute('allowtransparency','true');
					f.frameBorder=0;
					f.scrolling="no";
					f.id=iframeId;
					f.name=f.id;
					dd.appendChild(f);
				}
				else {
					d.write("<div id='"+divId+"'><iframe id='"+iframeId+"' name='"+iframeId+"' width="+w+" height="+h+" title=Ad scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe></div>");
				}
				f.atwSizes=wi.atwSizes;
				var i2=(f.contentWindow)?f.contentWindow:(f.contentDocument.document)?f.contentDocument.document:f.contentDocument;
				i2.document.open();
				var iStr='<html><head><title>Aol Advertisement</title></head><body';
				if (wi.atwResize&&wi.atwSizes){
					iStr+=' onload=parent.atw3Resize("'+iframeId+'","'+divId2+'");';
				}
				iStr+='><script type="text/javascript">\n';
				iStr+='var inDapIF=true;inFIF=true;\n';
				iStr+='</script>\n';
				iStr+='<div id="'+divId2+'"><script type="text/javascript" src="'+s+'"></script>\n';	
				iStr+='</div></body></html>';
				i2.document.write(iStr);
				i2.document.close(); 
			 }
			 else if (tp=='AFIF'&&wi.atwFIF&&ifV==2){
				var af=document.createElement("iframe");
				af.src=wi.atwFIF+'#url2='+s;
				af.width=0;
				af.height=0; 
				af.style.width="0px";
				af.style.height="0px";
				af.style.display='none';
				document.body.appendChild(af);
				if (wi.postMessage){
					atw3Ping(af,s,200);
				}
			}
			else{
				s=s.replace(/addyn/,'adiframe')
				d.write("<iframe src='"+s+"' width="+w+" height="+h+" scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe>")
			}
		}
		else{
			d.write("<a href='"+s.replace(/addyn/,"adlink")+"' target=_blank><img src='"+s.replace(/addyn/,"adserv")+"' width="+w+" height="+h+" border=0 alt='advertisement'></a>")
		}
	}
	atwHtNmAT='';atwType='';atwOthAT='';atwNetId='';atwPlId='',atwSizes='',atwDiv='';atwMN='';atwWidth='';atwHeight='';atwStyle='';ampPg='',atwMultiSize='';
	ATW3_AdObj.uac=0;
}
}
var ampPg='';
function atw3AmpResize(){
	var a=self.document.documentElement.innerHTML,w,h,n=a.indexOf('\<\!--');
	if (n>0){
		var x=a.substr(n,a.length);
		var sc,z,re,arr=[],l;
		re=/aolTXT(.*?)[1-9]=["'](.*?)["']/ig;
		while (z=re.exec(x)){
			arr.push(z[1]);
			arr.push(z[2]);
		}
		l=arr.length;
		for (var i=0;i<l;i=i+2){
			if (arr[i+1]){
				if (arr[i]=='js'||arr[i]=='JS'){
					sc=document.createElement('script');
					sc.type='text/javascript';
					sc.src=arr[i+1];
					document.body.appendChild(sc);
				}
				else if (arr[i]=='imp'||arr[i]=='IMP'){
					sc=document.createElement('img');
					sc.src=arr[i+1];
				}
			}
		}
	}
	if (atwsizes){
		if ((/aolSize=["']([\d]*?)\|([\d]*)["']/i.test(a))&&(unescape(RegExp.$2)>1)){
			w=parseInt(unescape(RegExp.$1));
			h=parseInt(unescape(RegExp.$2));
			if (w&&h)window.context.requestResize(w,h);
		}
	}
}
function atw3AmpStyle(){
	var x=atwOthAT.toLowerCase().indexOf('cssfile='),y=atwOthAT.indexOf(';',x+1);
	if (y==-1){y=atwOthAT.length}
	atwStyle=atwOthAT.substring(x+8,y);
	atwOthAT=atwOthAT.substring(0,x)+atwOthAT.substring(y+1,atwOthAT.length);
}
if (window.AMP_LISTENING==true){
	try {
		ampPg=document.getElementById('c');
		if ((ampPg)&&(typeof atwdiv!='undefined')){
			atwMN=atwmn;
			atwDiv=atwdiv;
			atwPlId=atwplid;	
			atwOthAT=atwothat;
			atwCo=atwco;
			atwMOAT=atwmoat;
			atwHtNmAT=atwhtnmat;
			atwNetId=atwnetid;
			atwWidth=atwwidth;
			atwHeight=atwheight;
			atwPolar=atwpolar;
			atwSizes=atwsizes;
			if (window.atwOthAT&&window.atwOthAT.toLowerCase().indexOf('cssfile=')>-1)atw3AmpStyle();
			if (window.addEventListener){window.addEventListener("load",function(){atw3AmpResize();},false)}
			else if (window.attachEvent){window.attachEvent("onload",function(){atw3AmpResize();})}
		}
	}
	catch(e){}
}
window.atw3UAC=window.atw3UAC||{};
if (!window.atwWidth)atwWidth='300';
if (!window.atwHeight)atwHeight='250';
if (window.atwMN||window.atwPlId)html3AdWH(window.atwMN,atwWidth,atwHeight);