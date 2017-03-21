## PC收银台
一、目录架构如下：

```
- website
    - src				#前端源码开发目录
        - css				#css目录，按照页面（模块）、通用 进行组织
            + page     	 	#对应每个页面的css 文件名和对应js文件保持一致
            + common    	#公用的样式文件 方便其它样式文件引用

        + img				#图片资源 按照用途（银行图标、帮助文档）、通用 进行组织 (公用图片置于此处)
		    + banks         #银行图标
            + help          #帮助文档的图标
                         
        - js			#JS脚本，按照common、components、data、page进行组织
            + components 	#公用组件 （弹出框、加载动画、登录、注册、绑卡、网银支付、微信/支付宝支付等）
			+ common      	#公用js
            + data		  	#公用数据 如协议数据、帮助文档数据
			+ page        	#页面js 对应每个html文件 html文件名和js名保持一致

        -  html			#HTML页面，具体的每个html页面 common中放置的公用html片 
		   + common         #公用html片

    - dist				#webpack编译打包输出目录的静态文件
        + css            	#打包后所有css在一个目录
        + js			 	#打包后所有js在一个目录
        + img		     	#打包后所有img在一个目录
		- html          	#webpack编译输出的静态vm文件
           + common         	 #公用vm片


    + node_modules			#所使用的nodejs模块
	common.js    			#字符串的扩展 webpack打包时引用 可根据需要引用或不用
    package.json			#项目配置
    webpack.config.js		#webpack配置
    README.md				#项目说明
```

二、业务说明

  1.需求文档：详见 svn://svn.midea.com/g-it-mideapay/trunk/DOC/01 项目/PC聚合收银台/02产品需求

  2.前后端接口设计：详见 svn://svn.midea.com/g-it-mideapay/trunk/DOC/01 项目/PC聚合收银台/03设计开发/PC收银台联调接口.docx

三 、更新说明: 
1. PC收银台trunk目录 svn://svn.midea.com/g-it-mideapay/trunk/DEV/web-source/projs-F2E/pcCashier  
2. PC收银台branches目录 svn://svn.midea.com/g-it-mideapay/branches/web-source/projs-F2E/pcCashier
3. 开发时，先更新PC收银台trunk目录， 从 PC收银台trunk 上拉分支到 PC收银台branches目录 ，在 branches 上开发完成后提交
4. 更新时，用trunk合并branches，检测对比无误后提交trunk。

四 、上线说明：
1. 上线文件目录： svn://svn.midea.com/g-it-mideapay/trunk/DEV/web-source/projs-F2E/pcCashier

2. 上线步骤：
            2.1 在服务器所有静态资源目录（不包括vm） static/(js|css|img)/  下新建pcCashier文件夹（如已有则不需再次新建） 

            2.2 将svn://svn.midea.com/g-it-mideapay/trunk/DEV/web-source/projs-F2E/pcCashier/dist/(js|css|img)/pcCashier/下的文件拷贝到2.1中的对应目录 

            2.3 （仅第一次更新时需要此步骤）将svn://svn.midea.com/g-it-mideapay/trunk/DEV/web-source/cashier/layout/layout.vm 拷贝替换服务器上的对应文件 /cashier/layout/layout.vm
           
            2.4 在服务器所有静态资源目录（不包括vm） /cashier/  下新建pcCashier文件夹（如已有则不需再次新建）

            2.5 将svn://svn.midea.com/g-it-mideapay/trunk/DEV/web-source/projs-F2E/pcCashier/dist/html/ 中的所有文件拷贝到 2.4中新建的目录（ /cashier/pcCashier/）下

五 、其它说明：

   1.基于兼容性考虑，本次引用jQuery文件为 1.12.1版本
   2.本次webpack打包采用的是webpack1.x版本 如需新增其它loader，请注意支持的webpack版本



"# velocitytohtml-loader" 
