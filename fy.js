/*
	极速测试体验，用于审查元素时直接执行的
	1. 随便打开一个网页
	2. 右键-审查元素
	3. 粘贴入一下代码：
		var head= document.getElementsByTagName('head')[0];  var script= document.createElement('script');  script.type= 'text/javascript';  script.src= 'https://res.zvo.cn/translate/inspector_v2.js';  head.appendChild(script); 
	4. Enter 回车键 ， 执行
	5. 在当前网页的左上角，就出现了一个大大的切换语言了	
	
	使用的是 v2.x 版本进行的翻译
 */
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.type= 'text/javascript'; 
script.src= 'https://res.zvo.cn/translate/translate.js'; 
script.onload = script.onreadystatechange = function() {
	translate.storage.set('to','');

	//SELECT 修改 onchange 事件
	translate.selectLanguageTag.selectOnChange = function(event){
			var language = event.target.value;
			translate.changeLanguage(language);		
	}
	
	translate.service.use('client.edge');
	translate.listener.start();	//开启html页面变化的监控，对变化部分会进行自动翻译。注意，这里变化区域，是指使用 translate.setDocuments(...) 设置的区域。如果未设置，那么为监控整个网页的变化
	translate.execute();
	document.getElementById('translate').style.position = 'fixed';
	document.getElementById('translate').style.color = 'red';
	document.getElementById('translate').style.left = '10px';
	document.getElementById('translate').style.top = '10px';
	document.getElementById('translate').style.zIndex = '9999999999999';

	setInterval(function() {
		try{
			if(document.getElementById('translateSelectLanguage') == null){
				return;
			}
			document.getElementById('translateSelectLanguage').style.fontSize = '2rem';
			document.getElementById('translateSelectLanguage').style.borderWidth = '0.5rem';
			document.getElementById('translateSelectLanguage').style.borderColor = 'red';
		}catch(e){
			//select数据是通过接口返回的
		}
	},1000);

}
head.appendChild(script); 
