<h1>前言</h1>
<p>大概16年的时候我们队react进行了简单的学习：<a id="cb_post_title_url" class="postTitle2" href="https://www.cnblogs.com/yexiaochai/p/5515264.html">从DOM操作看Vue&amp;React的前端组件化，顺带补齐React的demo</a>，当时我们只是站在框架角度在学习，随着近几年前端的变化，想写个hello world似乎变得复杂起来，我们今天便一起来看看现代化的前端，应该如何做一个页面，今天我们学习react首先说一下React的体系圈</p>
<p>无论Vue还是React整个体系圈十分的完备，就一个中级前端想要提高自己，完全就可以学习其中一个体系，便可以收获很多东西，从而突破自身</p>
<p>从工程化角度来说，前端脚手架，性能优化，构建等等一系列的工作可以使用webpack处理，这里又会涉及到SSR相关工作，稍微深入一点便会踏进node的领域，可以越挖越深</p>
<p>从前端框架角度来说，如何使用React这种框架解决大型项目的目录设计，小项目拆分，代码组织，UI组件，项目与项目之间的影响，路由、数据流向等等问题处理完毕便会进步很大一步</p>
<p>从大前端角度来说，使用React处理Native领域的问题，使用React兼容小程序的问题，一套代码解决多端运行的策略，比如兼容微信小程序，随便某一点都值得我们研究几个月</p>
<p>从规范来说，我们可以看看React如何组织代码的，测试用例怎么写，怎么维护github，怎么做升级，甚至怎么写文档，都是值得学习的</p>
<p>从后期来说，如何在这个体系上做监控、做日志、做预警，如何让<strong>业务与框架更好的融合</strong>都是需要思考的</p>
<p>react体系是非常完善的，他不只是一个框架，而是一个庞大的技术体系，优秀的解决方案，基于此，我们十分有必要基于React或者Vue中的一个进行深入学习</p>
<p>也正是因为这个庞大的体系，反而导致我们有时只是想写一个hello world，都变得似乎很困难，于是我们今天就先来使用标准的知识写一个demo试试</p>
<p><span style="font-size: 15px;"><strong>文章对应代码地址：<a href="https://github.com/yexiaochai/react-demo" target="_blank">https://github.com/yexiaochai/react-demo</a></strong></span></p>
<p><span style="font-size: 15px;"><strong><strong>演示地址：<a href="https://yexiaochai.github.io/react-demo/build/index.html" target="_blank">https://yexiaochai.github.io/react-demo/build/index.html</a><a href="https://github.com/yexiaochai/react-demo" target="_blank"><br /></a></strong></strong></span></p>
<h1>脚手架</h1>
<p>现在的框架已经十分完备了，而且把市场教育的很好，一个框架除了输出源码以外，还需要输出对应脚手架，直接引入框架源文件的做法已经不合适了，如果我们开发react项目，便可以直接使用框架脚手架创建项目，就react来说，暂时这个脚手架<a href="https://github.com/react-community/create-react-native-app/" target="_blank">create-react-app</a>比较常用，他有以下特点：</p>
<p>① 基本配置为你写好了，如果按照规范来可做到零配置</p>
<p>② 继承了React、JSX、ES6、Flow的支持，这个也是类React框架的标准三件套</p>
<p>③ 因为现在进入了前端编译时代，服务器以及热加载必不可少，一个命令便能运行</p>
<p>首先，我们一个命令安装依赖：</p>
<div class="cnblogs_code">
<pre>npm install -g create-react-app</pre>
</div>
<p>然后就可以使用脚手架创建项目了：</p>
<div class="cnblogs_code">
<pre>create-react-app react-demo</pre>
</div>
<div class="cnblogs_code">
<pre><span style="color: #000000;">├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
└── yarn.lock</span></pre>
</div>
<p>直接浏览器打开的方法也不适用了，这里开发环境使用一个node服务器，执行代码运行起来：</p>
<div class="cnblogs_code">
<pre>npm start</pre>
</div>
<p>系统自动打开一个页面，并且会热更新，看一个项目首先看看其package.json：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">{
  </span>"name": "demo"<span style="color: #000000;">,
  </span>"version": "0.1.0"<span style="color: #000000;">,
  </span>"private": <span style="color: #0000ff;">true</span><span style="color: #000000;">,
  </span>"dependencies"<span style="color: #000000;">: {
    </span>"react": "^16.6.3"<span style="color: #000000;">,
    </span>"react-dom": "^16.6.3"<span style="color: #000000;">,
    </span>"react-scripts": "2.1.1"<span style="color: #000000;">
  },
  </span>"scripts"<span style="color: #000000;">: {
    </span>"start": "react-scripts start"<span style="color: #000000;">,
    </span>"build": "react-scripts build"<span style="color: #000000;">,
    </span>"test": "react-scripts test"<span style="color: #000000;">,
    </span>"eject": "react-scripts eject"<span style="color: #000000;">
  },
  </span>"eslintConfig"<span style="color: #000000;">: {
    </span>"extends": "react-app"<span style="color: #000000;">
  },
  </span>"browserslist"<span style="color: #000000;">: [
    </span>"&gt;0.2%"<span style="color: #000000;">,
    </span>"not dead"<span style="color: #000000;">,
    </span>"not ie &lt;= 11"<span style="color: #000000;">,
    </span>"not op_mini all"<span style="color: #000000;">
  ]
}</span></pre>
</div>
<p>所以当我们执行npm run start的时候事实上是执行node_modules/react-script目录下对应脚本，可以看到项目目录本身连webpack的配置文件都没有，所有的配置全部在react-scripts中，如果对工程配置有什么定制化需求，执行</p>
<div class="cnblogs_code">
<pre>npm run eject</pre>
</div>
<p>就将node_modules中对应配置拷贝出来了，可随意修改：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">config
├── env.js
├── jest
│   ├── cssTransform.js
│   └── fileTransform.js
├── paths.js
├── webpack.config.dev.js
├── webpack.config.prod.js
└── webpackDevServer.config.js
scripts
├── build.js
├── start.js
└── test.js</span></pre>
</div>
<p>也可以安装个服务器，可以直接运行build文件中的代码：</p>
<div class="cnblogs_code">
<pre>npm install -g pushstate-<span style="color: #000000;">server
pushstate</span>-server build</pre>
</div>
<p>我们的代码开始比较简单，只写一个hello world就行了，所以把多余的目录文件全部删除之，修改下index.js代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">├── README.md
├── build
│   ├── asset</span>-<span style="color: #000000;">manifest.json
│   ├── index.html
│   ├── precache</span>-<span style="color: #000000;">manifest.ced1e61ba13691d3414ad116326a23a5.js
│   ├── service</span>-<span style="color: #000000;">worker.js
│   └── static
│       └── js
│           ├── </span>1<span style="color: #000000;">.794557b9.chunk.js
│           ├── </span>1<span style="color: #000000;">.794557b9.chunk.js.map
│           ├── main.931cdb1a.chunk.js
│           ├── main.931cdb1a.chunk.js.map
│           ├── runtime</span>~<span style="color: #000000;">main.229c360f.js
│           └── runtime</span>~<span style="color: #000000;">main.229c360f.js.map
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package.json
├── public
│   └── index.html
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   └── index.js
└── yarn.lock</span></pre>
</div>
<div class="cnblogs_code">
<pre><span style="color: #000000;">import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>hello world<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>, document.getElementById('root'));</pre>
</div>
<p>这个代码不难，我想关键是，这个代码写完了，突然就开服务器了，突然就打包成功了，突然就可以运行了，这个对于一些同学有点玄幻，这里就有必要说一下这里的webpack了</p>
<h1>webpack</h1>
<p>我们说框架的脚手架，其实说白了就是工程化一块的配置，最初几年的工程化主要集中在压缩和优化、到requireJS时代后工程化变得必不可少，当时主要依赖grunt和gulp这类工具，后续为了把重复的工作杀掉工程化就越走越远了，但是和最初其实变化不大，都是一点一点的将各种优化往上加，加之最近两年typescript一击es6新语法需要编译进行，我们就进入了编译时代</p>
<p>webpack已经进入了4.X时代，一般一个团队会有一个同事（可能是架构师）对webpack特别熟悉，将脚手架进行更改后，就可以很长时间不改一下，这个同事有时候主要就做这么一件事情，所以我们偶尔会称他为webpack配置工程师，虽然是个笑话，从侧门也可以看出，webpack至少不是个很容易学习的东西，造成这个情况的原因还不是其本身有多难，主要是最初文档不行，小伙伴想实现一个功能的时候连去哪里找插件，用什么合适的插件只能一个个的试，所以文档是工程化中很重要的一环</p>
<p>这里再简单介绍下webpack，webpack是现在最常用的JavaScript程序的静态模块打包器（module bundler），他的特点就是以模块（module）为中心，我们只要给一个入口文件，他会根据这个入口文件找到所有的依赖文件，最后捆绑到一起，这里盗个图：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201811/294743-20181114163536424-470269648.png" alt="" width="500" /></p>
<p>这里几个核心概念是：</p>
<p>① 入口 - 指示webpack应该以哪个模块（一般是个js文件），作为内部依赖图的开始</p>
<p>② 输出 - 告诉将打包后的文件输出到哪里，或者文件名是什么</p>
<p>③ loader - 这个非常关键，这个让webpack能够去处理那些非JavaScript文件，或者是自定义文件，转换为可用的文件，比如将jsx转换为js，将less转换为css</p>
<p>test就是正则标志，标识哪些文件会被处理；use表示用哪个loader&nbsp;</p>
<p>④ 插件（plugins）</p>
<p>插件被用于转换某些类型的模块，适用于的范围更广，包括打包优化、压缩、重新定义环境中的变量等等，这里举一个小例子进行说明，react中的jsx这种事实上是浏览器直接不能识别的，但是我们却可以利用webpack将之进行一次编译：</p>
<div class="cnblogs_code">
<pre><span style="color: #008000;">//</span><span style="color: #008000;"> 原 JSX 语法代码</span>
<span style="color: #0000ff;">return</span> &lt;h1&gt;Hello,Webpack&lt;/h1&gt;

<span style="color: #008000;">//</span><span style="color: #008000;"> 被转换成正常的 JavaScript 代码</span>
<span style="color: #0000ff;">return</span> React.createElement('h1', <span style="color: #0000ff;">null</span>, 'Hello,Webpack')</pre>
</div>
<p>这里我们来做个小demo介绍webpack的低阶使用，我们先建立一个文件夹webpack-demo，先建立一个文件src/index.html</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;!</span><span style="color: #ff00ff;">DOCTYPE html</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;</span><span style="color: #800000;">html</span><span style="color: #0000ff;">&gt;</span>
  <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">head</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">meta </span><span style="color: #ff0000;">charset</span><span style="color: #0000ff;">="utf-8"</span><span style="color: #0000ff;">&gt;</span>
  <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">head</span><span style="color: #0000ff;">&gt;</span>
  <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">body</span><span style="color: #0000ff;">&gt;</span>
  <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">body</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">html</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>然后我们建立一个js文件src/index.js以及src/data.js以及style.css</p>
<div class="cnblogs_code">
<pre>import data from './data'<span style="color: #000000;">
console.log(data);</span></pre>
</div>
<div class="cnblogs_code">
<pre>export <span style="color: #0000ff;">default</span><span style="color: #000000;"> {
    name: </span>'叶小钗'<span style="color: #000000;">
}</span></pre>
</div>
<div class="cnblogs_code">
<pre><span style="color: #800000;">* </span>{<span style="color: #ff0000;">
    font-size</span>:<span style="color: #0000ff;"> 16px</span>;
}</pre>
</div>
<div class="cnblogs_code">
<pre><span style="color: #000000;">.
├── package.json
└── src
    ├── data.js
    ├── index.html
    ├── index.js
    └── style.css</span></pre>
</div>
<p>这个时候轮到我们的webpack登场，以及会用到的几个加载器（这里不讲安装过程）：</p>
<div class="cnblogs_code">
<pre>npm install webpack webpack-cli webpack-serve html-webpack-plugin html-loader css-loader style-loader file-loader url-loader --save-dev</pre>
</div>
<p>① webpack-cli是命令行工具，有了他我们就需要在他的规则下写配置即可，否则我们要自己在node环境写很多文件操作的代码</p>
<p>② loader结尾的都是文件加载器，读取对应的文件需要对应的加载器，比如你自己定义一个.tpl的文件，如果没有现成的loader，你就只能自己写一个</p>
<p>③ 其中还有个node服务器，方便我们调试</p>
<p>因为我们这里的import是es6语法，浏览器不能识别，所以需要安装babel解析语言：</p>
<div class="cnblogs_code">
<pre>npm install babel-core babel-preset-env babel-loader --save-dev</pre>
</div>
<p>然后我们在package.json中加入一行代码：</p>
<div class="cnblogs_code">
<pre>"babel"<span style="color: #000000;">: {
    </span>"presets": ["env"<span style="color: #000000;">]
}</span></pre>
</div>
<p>这个时候就可以创建webpack文件了：</p>
<div class="cnblogs_code" onclick="cnblogs_code_show('276a7ddd-ec2f-4e47-85a9-ff2531f6ae6b')"><img id="code_img_closed_276a7ddd-ec2f-4e47-85a9-ff2531f6ae6b" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_276a7ddd-ec2f-4e47-85a9-ff2531f6ae6b" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('276a7ddd-ec2f-4e47-85a9-ff2531f6ae6b',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_276a7ddd-ec2f-4e47-85a9-ff2531f6ae6b" class="cnblogs_code_hide">
<pre><span style="color: #008080;">  1</span> const { resolve } = require('path'<span style="color: #000000;">)
</span><span style="color: #008080;">  2</span> const HtmlWebpackPlugin = require('html-webpack-plugin'<span style="color: #000000;">)
</span><span style="color: #008080;">  3</span> 
<span style="color: #008080;">  4</span> <span style="color: #008000;">//</span><span style="color: #008000;"> 使用 WEBPACK_SERVE 环境变量检测当前是否是在 webpack-server 启动的开发环境中</span>
<span style="color: #008080;">  5</span> const dev =<span style="color: #000000;"> Boolean(process.env.WEBPACK_SERVE)
</span><span style="color: #008080;">  6</span> 
<span style="color: #008080;">  7</span> module.exports =<span style="color: #000000;"> {
</span><span style="color: #008080;">  8</span>   <span style="color: #008000;">/*</span>
<span style="color: #008080;">  9</span> <span style="color: #008000;">  webpack 执行模式
</span><span style="color: #008080;"> 10</span> <span style="color: #008000;">  development：开发环境，它会在配置文件中插入调试相关的选项，比如 moduleId 使用文件路径方便调试
</span><span style="color: #008080;"> 11</span> <span style="color: #008000;">  production：生产环境，webpack 会将代码做压缩等优化
</span><span style="color: #008080;"> 12</span>   <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 13</span>   mode: dev ? 'development' : 'production'<span style="color: #000000;">,
</span><span style="color: #008080;"> 14</span> 
<span style="color: #008080;"> 15</span>   <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 16</span> <span style="color: #008000;">  配置 source map
</span><span style="color: #008080;"> 17</span> <span style="color: #008000;">  开发模式下使用 cheap-module-eval-source-map, 生成的 source map 能和源码每行对应，方便打断点调试
</span><span style="color: #008080;"> 18</span> <span style="color: #008000;">  生产模式下使用 hidden-source-map, 生成独立的 source map 文件，并且不在 js 文件中插入 source map 路径，用于在 error report 工具中查看 （比如 Sentry)
</span><span style="color: #008080;"> 19</span>   <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 20</span>   devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map'<span style="color: #000000;">,
</span><span style="color: #008080;"> 21</span> 
<span style="color: #008080;"> 22</span>   <span style="color: #008000;">//</span><span style="color: #008000;"> 配置页面入口 js 文件</span>
<span style="color: #008080;"> 23</span>   entry: './src/index.js'<span style="color: #000000;">,
</span><span style="color: #008080;"> 24</span> 
<span style="color: #008080;"> 25</span>   <span style="color: #008000;">//</span><span style="color: #008000;"> 配置打包输出相关</span>
<span style="color: #008080;"> 26</span> <span style="color: #000000;">  output: {
</span><span style="color: #008080;"> 27</span>     <span style="color: #008000;">//</span><span style="color: #008000;"> 打包输出目录</span>
<span style="color: #008080;"> 28</span>     path: resolve(__dirname, 'dist'<span style="color: #000000;">),
</span><span style="color: #008080;"> 29</span> 
<span style="color: #008080;"> 30</span>     <span style="color: #008000;">//</span><span style="color: #008000;"> 入口 js 的打包输出文件名</span>
<span style="color: #008080;"> 31</span>     filename: 'index.js'
<span style="color: #008080;"> 32</span> <span style="color: #000000;">  },
</span><span style="color: #008080;"> 33</span> 
<span style="color: #008080;"> 34</span> <span style="color: #000000;">  module: {
</span><span style="color: #008080;"> 35</span>     <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 36</span> <span style="color: #008000;">    配置各种类型文件的加载器，称之为 loader
</span><span style="color: #008080;"> 37</span> <span style="color: #008000;">    webpack 当遇到 import ... 时，会调用这里配置的 loader 对引用的文件进行编译
</span><span style="color: #008080;"> 38</span>     <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 39</span> <span style="color: #000000;">    rules: [
</span><span style="color: #008080;"> 40</span> <span style="color: #000000;">      {
</span><span style="color: #008080;"> 41</span>         <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 42</span> <span style="color: #008000;">        使用 babel 编译 ES6 / ES7 / ES8 为 ES5 代码
</span><span style="color: #008080;"> 43</span> <span style="color: #008000;">        使用正则表达式匹配后缀名为 .js 的文件
</span><span style="color: #008080;"> 44</span>         <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 45</span>         test: /\.js$/<span style="color: #000000;">,
</span><span style="color: #008080;"> 46</span> 
<span style="color: #008080;"> 47</span>         <span style="color: #008000;">//</span><span style="color: #008000;"> 排除 node_modules 目录下的文件，npm 安装的包不需要编译</span>
<span style="color: #008080;"> 48</span>         exclude: /node_modules/<span style="color: #000000;">,
</span><span style="color: #008080;"> 49</span> 
<span style="color: #008080;"> 50</span>         <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 51</span> <span style="color: #008000;">        use 指定该文件的 loader, 值可以是字符串或者数组。
</span><span style="color: #008080;"> 52</span> <span style="color: #008000;">        这里先使用 eslint-loader 处理，返回的结果交给 babel-loader 处理。loader 的处理顺序是从最后一个到第一个。
</span><span style="color: #008080;"> 53</span> <span style="color: #008000;">        eslint-loader 用来检查代码，如果有错误，编译的时候会报错。
</span><span style="color: #008080;"> 54</span> <span style="color: #008000;">        babel-loader 用来编译 js 文件。
</span><span style="color: #008080;"> 55</span>         <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 56</span>         use: ['babel-loader', 'eslint-loader'<span style="color: #000000;">]
</span><span style="color: #008080;"> 57</span> <span style="color: #000000;">      },
</span><span style="color: #008080;"> 58</span> 
<span style="color: #008080;"> 59</span> <span style="color: #000000;">      {
</span><span style="color: #008080;"> 60</span>         <span style="color: #008000;">//</span><span style="color: #008000;"> 匹配 html 文件</span>
<span style="color: #008080;"> 61</span>         test: /\.html$/<span style="color: #000000;">,
</span><span style="color: #008080;"> 62</span>         <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 63</span> <span style="color: #008000;">        使用 html-loader, 将 html 内容存为 js 字符串，比如当遇到
</span><span style="color: #008080;"> 64</span> <span style="color: #008000;">        import htmlString from './template.html';
</span><span style="color: #008080;"> 65</span> <span style="color: #008000;">        template.html 的文件内容会被转成一个 js 字符串，合并到 js 文件里。
</span><span style="color: #008080;"> 66</span>         <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 67</span>         use: 'html-loader'
<span style="color: #008080;"> 68</span> <span style="color: #000000;">      },
</span><span style="color: #008080;"> 69</span> 
<span style="color: #008080;"> 70</span> <span style="color: #000000;">      {
</span><span style="color: #008080;"> 71</span>         <span style="color: #008000;">//</span><span style="color: #008000;"> 匹配 css 文件</span>
<span style="color: #008080;"> 72</span>         test: /\.css$/<span style="color: #000000;">,
</span><span style="color: #008080;"> 73</span> 
<span style="color: #008080;"> 74</span>         <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 75</span> <span style="color: #008000;">        先使用 css-loader 处理，返回的结果交给 style-loader 处理。
</span><span style="color: #008080;"> 76</span> <span style="color: #008000;">        css-loader 将 css 内容存为 js 字符串，并且会把 background, @font-face 等引用的图片，
</span><span style="color: #008080;"> 77</span> <span style="color: #008000;">        字体文件交给指定的 loader 打包，类似上面的 html-loader, 用什么 loader 同样在 loaders 对象中定义，等会下面就会看到。
</span><span style="color: #008080;"> 78</span>         <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 79</span>         use: ['style-loader', 'css-loader'<span style="color: #000000;">]
</span><span style="color: #008080;"> 80</span> <span style="color: #000000;">      }
</span><span style="color: #008080;"> 81</span> 
<span style="color: #008080;"> 82</span> <span style="color: #000000;">    ]
</span><span style="color: #008080;"> 83</span> <span style="color: #000000;">  },
</span><span style="color: #008080;"> 84</span> 
<span style="color: #008080;"> 85</span>   <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 86</span> <span style="color: #008000;">  配置 webpack 插件
</span><span style="color: #008080;"> 87</span> <span style="color: #008000;">  plugin 和 loader 的区别是，loader 是在 import 时根据不同的文件名，匹配不同的 loader 对这个文件做处理，
</span><span style="color: #008080;"> 88</span> <span style="color: #008000;">  而 plugin, 关注的不是文件的格式，而是在编译的各个阶段，会触发不同的事件，让你可以干预每个编译阶段。
</span><span style="color: #008080;"> 89</span>   <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 90</span> <span style="color: #000000;">  plugins: [
</span><span style="color: #008080;"> 91</span>     <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 92</span> <span style="color: #008000;">    html-webpack-plugin 用来打包入口 html 文件
</span><span style="color: #008080;"> 93</span> <span style="color: #008000;">    entry 配置的入口是 js 文件，webpack 以 js 文件为入口，遇到 import, 用配置的 loader 加载引入文件
</span><span style="color: #008080;"> 94</span> <span style="color: #008000;">    但作为浏览器打开的入口 html, 是引用入口 js 的文件，它在整个编译过程的外面，
</span><span style="color: #008080;"> 95</span> <span style="color: #008000;">    所以，我们需要 html-webpack-plugin 来打包作为入口的 html 文件
</span><span style="color: #008080;"> 96</span>     <span style="color: #008000;">*/</span>
<span style="color: #008080;"> 97</span>     <span style="color: #0000ff;">new</span><span style="color: #000000;"> HtmlWebpackPlugin({
</span><span style="color: #008080;"> 98</span>       <span style="color: #008000;">/*</span>
<span style="color: #008080;"> 99</span> <span style="color: #008000;">      template 参数指定入口 html 文件路径，插件会把这个文件交给 webpack 去编译，
</span><span style="color: #008080;">100</span> <span style="color: #008000;">      webpack 按照正常流程，找到 loaders 中 test 条件匹配的 loader 来编译，那么这里 html-loader 就是匹配的 loader
</span><span style="color: #008080;">101</span> <span style="color: #008000;">      html-loader 编译后产生的字符串，会由 html-webpack-plugin 储存为 html 文件到输出目录，默认文件名为 index.html
</span><span style="color: #008080;">102</span> <span style="color: #008000;">      可以通过 filename 参数指定输出的文件名
</span><span style="color: #008080;">103</span> <span style="color: #008000;">      html-webpack-plugin 也可以不指定 template 参数，它会使用默认的 html 模板。
</span><span style="color: #008080;">104</span>       <span style="color: #008000;">*/</span>
<span style="color: #008080;">105</span>       template: './src/index.html'<span style="color: #000000;">,
</span><span style="color: #008080;">106</span> 
<span style="color: #008080;">107</span>       <span style="color: #008000;">/*</span>
<span style="color: #008080;">108</span> <span style="color: #008000;">      因为和 webpack 4 的兼容性问题，chunksSortMode 参数需要设置为 none
</span><span style="color: #008080;">109</span> <span style="color: #008000;">      https://github.com/jantimon/html-webpack-plugin/issues/870
</span><span style="color: #008080;">110</span>       <span style="color: #008000;">*/</span>
<span style="color: #008080;">111</span>       chunksSortMode: 'none'
<span style="color: #008080;">112</span> <span style="color: #000000;">    })
</span><span style="color: #008080;">113</span> <span style="color: #000000;">  ]
</span><span style="color: #008080;">114</span> }</pre>
</div>
<span class="cnblogs_code_collapse">webpack.config.js</span></div>
<p>然后执行webpack命令便构建好了我们的文件：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">.
├── dist
│   ├── index.html
│   ├── index.js
│   └── index.js.map
├── package</span>-<span style="color: #000000;">lock.json
├── package.json
├── src
│   ├── data.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── webpack.config.js</span></pre>
</div>
<p>可以看到，只要找到我们的入口文件index.js，便能轻易的将所有的模块打包成一个文件，包括样式文件，我们关于webpack的介绍到此为止，更详细的介绍请看这里：https://juejin.im/entry/5b63eb8bf265da0f98317441</p>
<p>我们脚手架中的webpack配置实现相对比较复杂，我们先学会基本使用，后面点再来怎么深入这块，因为现有的配置肯定不能满足我们项目的需求</p>
<h1>页面实现</h1>
<p>这里为了更多的解决大家工作中会遇到到问题，我们这里实现两个页面：</p>
<p>① 首页，包括城市列表选择页面</p>
<p>② 列表页面，并且会实现滚动刷新等效果</p>
<p>页面大概长这个样子（因为这个页面之前我就实现过，所以样式部分我便直接拿过来使用即可，大家关注逻辑实现即可）：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181229182407209-172581852.png" alt="" width="200" /></p>
<p>我们这里先捡硬骨头坑，直接就来实现这里的列表页面，这里是之前的页面，<a href="http://yexiaochai.github.io/mvc/webapp/bus/list.html" target="_blank">大家可以点击对比看看</a></p>
<h2>组件拆分</h2>
<p>react两个核心第一是摆脱dom操作，第二是组件化开发，这两点在小型项目中意义都不是十分大，只有经历过多人维护的大项目，其优点才会体现出来，我们这里第一步当然也是拆分页面</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181230134740147-1255485815.png" alt="" width="500" /></p>
<p>这里每一个模块都是一个组件，从通用性来说我们可以将之分为：</p>
<p>① UI组件，与业务无关的组件，只需要填充数据，比如这里的header组件和日历组件以及其中的列表模块也可以分离出一个组件，但看业务耦合大不大</p>
<p>② 页面组件，页面中的元素</p>
<p>工欲善其事必先利其器，所以我们这里先来实现几个组件模块，这里首先是对于新人比较难啃的日历模块，我们代码过程中也会给大家说目录该如何划分</p>
<h2>日历组件</h2>
<p>日了组件是相对比较复杂的组件了，单单这个组件又可以分为：</p>
<p>① 月组件，处理月部分</p>
<p>② 日部分，处理日期部分</p>
<p>能够将这个组件做好，基本对组件系统会有个初步了解了，我们这里首先来实现日历-日部分，这里我们为项目建立一个src/ui/calendar目录，然后创建我们的文件：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">.
├── index.js
└── ui
    └── calendar
        └── calendar.js</span></pre>
</div>
<div class="cnblogs_code">
<pre><span style="color: #000000;">import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './ui/calendar/calendar';

ReactDOM.render(</span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">Calendar</span><span style="color: #0000ff;">/&gt;</span>, document.getElementById('root'));</pre>
</div>
<div class="cnblogs_code">
<pre><span style="color: #000000;">import React from 'react';

export default class Calendar extends React.Component {

    render() {
        return (
            </span><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>日历<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span><span style="color: #000000;">
        )
    }
}</span></pre>
</div>
<p>这个时候再执行以下命令便会编译运行：</p>
<div class="cnblogs_code">
<pre>npm run start</pre>
</div>
<p>虽然不知为什么，但是我们的代码运行了，大概就是这么一个情况：），接下来我们开始来完善我们的代码，日历组件，我们外层至少得告诉日历年和月，日历才好做展示，那么这里出现了第一个问题，我们怎么将属性数据传给组件呢？这里我们来简单描述下react中的state与props</p>
<p>state是react中的状态属性，定义一个正确的状态是写组件的第一步，state需要代表组件UI的完整状态集，任何UI的改变都应该从state体现出来，判断组件中一个变量是不是该作为state有以下依据：</p>
<p>① 这个变量是否是从父组件获取，如果是，那么他应该是一个属性</p>
<p>② 这个变量是否在组件的整个生命周期不会变化，如果是，那么他也是个属性</p>
<p>③ 这个变量是否是通过其他状态或者属性计算出来的，如果是，那么他也不是一个状态</p>
<p>④ 状态需要在组件render时候被用到</p>
<p>这里的主要区别是state是可变的，而props是只读的，如果想要改变props，只能通过父组件修改，就本章内容，我们将年月等设置为属性，这里先忽略样式的处理，简单几个代码，轮廓就出来了，这里有以下变化：</p>
<p>① 新增common文件夹，放了工具类函数</p>
<p>② 新增static目录存放css，这里的css我们后续会做特殊处理，这里先不深入</p>
<p>于是，我们目录变成了这样：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">.
├── README.md
├── package</span>-<span style="color: #000000;">lock.json
├── package.json
├── public
│   ├── index.html
│   └── static
│       └── css
│           ├── global.css
│           └── index.css
├── src
│   ├── common
│   │   └── utils.js
│   ├── index.js
│   └── ui
│       └── calendar
│           ├── calendar.js
│           ├── day.js
│           └── month.js</span></pre>
</div>
<p>我们将calendar代码贴出来看看：</p>
<div class="cnblogs_code">
<pre>import React from 'react'<span style="color: #000000;">;
import dateUtils from </span>'../../common/utils'<span style="color: #000000;">
export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> class Calendar extends React.Component {
    render() {
        let year </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
        let month </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
        let weekDayArr </span>= ['日', '一', '二', '三', '四', '五', '六'<span style="color: #000000;">];
        </span><span style="color: #008000;">//</span><span style="color: #008000;">获取当前日期数据</span>
        let displayInfo = dateUtils.getDisplayInfo(<span style="color: #0000ff;">new</span> Date(year, month, 0<span style="color: #000000;">));
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;ul className="cm-calendar "&gt;
                &lt;ul className="cm-calendar-hd"&gt;<span style="color: #000000;">
                    {
                        weekDayArr.map((data, i) </span>=&gt;<span style="color: #000000;"> {
                            </span><span style="color: #0000ff;">return</span> &lt;li className="cm-item--disabled"&gt;{data}&lt;/li&gt;
<span style="color: #000000;">                        })
                    }
                </span>&lt;/ul&gt;
            &lt;/ul&gt;
<span style="color: #000000;">        )
    }
}</span></pre>
</div>
<p>样式基本出来了：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181230171749985-400330384.png" alt="" /></p>
<p>这个时候我们需要将月组件实现了，这里贴出来第一阶段的完整代码：</p>
<div class="cnblogs_code">
<pre>import React from 'react'<span style="color: #000000;">;
import ReactDOM from </span>'react-dom'<span style="color: #000000;">;
import Calendar from </span>'./ui/calendar/calendar'<span style="color: #000000;">;

ReactDOM.render(
    </span>&lt;Calendar year="2018" month="12"/&gt;, 
    document.getElementById('root'<span style="color: #000000;">)
);</span></pre>
</div>
<div class="cnblogs_code" onclick="cnblogs_code_show('964fb97a-9c8b-427f-a369-3b09fc8b64a9')"><img id="code_img_closed_964fb97a-9c8b-427f-a369-3b09fc8b64a9" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_964fb97a-9c8b-427f-a369-3b09fc8b64a9" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('964fb97a-9c8b-427f-a369-3b09fc8b64a9',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_964fb97a-9c8b-427f-a369-3b09fc8b64a9" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> let isDate = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (date) {
</span><span style="color: #008080;"> 2</span>     <span style="color: #0000ff;">return</span> date &amp;&amp;<span style="color: #000000;"> date.getMonth;
</span><span style="color: #008080;"> 3</span> <span style="color: #000000;">};
</span><span style="color: #008080;"> 4</span> 
<span style="color: #008080;"> 5</span> <span style="color: #008000;">//</span><span style="color: #008000;">兼容小程序日期</span>
<span style="color: #008080;"> 6</span> let getDate = <span style="color: #0000ff;">function</span><span style="color: #000000;">(year, month, day) {
</span><span style="color: #008080;"> 7</span>     <span style="color: #0000ff;">if</span>(!day) day = 1<span style="color: #000000;">;
</span><span style="color: #008080;"> 8</span>     <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(year, month, day);
</span><span style="color: #008080;"> 9</span> <span style="color: #000000;">}
</span><span style="color: #008080;">10</span> 
<span style="color: #008080;">11</span> let isLeapYear = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (year) {
</span><span style="color: #008080;">12</span>     <span style="color: #008000;">//</span><span style="color: #008000;">传入为时间格式需要处理</span>
<span style="color: #008080;">13</span>     <span style="color: #0000ff;">if</span> (isDate(year)) year =<span style="color: #000000;"> year.getFullYear()
</span><span style="color: #008080;">14</span>     <span style="color: #0000ff;">if</span> ((year % 4 == 0 &amp;&amp; year % 100 != 0) || (year % 400 == 0)) <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
</span><span style="color: #008080;">15</span>     <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">false</span><span style="color: #000000;">;
</span><span style="color: #008080;">16</span> <span style="color: #000000;">};
</span><span style="color: #008080;">17</span> 
<span style="color: #008080;">18</span> let getDaysOfMonth = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (date) {
</span><span style="color: #008080;">19</span>     <span style="color: #0000ff;">var</span> month = date.getMonth() + 1; <span style="color: #008000;">//</span><span style="color: #008000;">注意此处月份要加1</span>
<span style="color: #008080;">20</span>     <span style="color: #0000ff;">var</span> year =<span style="color: #000000;"> date.getFullYear();
</span><span style="color: #008080;">21</span>     <span style="color: #0000ff;">return</span> [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][parseInt(month) - 1<span style="color: #000000;">];
</span><span style="color: #008080;">22</span> <span style="color: #000000;">}
</span><span style="color: #008080;">23</span> 
<span style="color: #008080;">24</span> let getBeginDayOfMouth = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (date) {
</span><span style="color: #008080;">25</span>     <span style="color: #0000ff;">var</span> month =<span style="color: #000000;"> date.getMonth();
</span><span style="color: #008080;">26</span>     <span style="color: #0000ff;">var</span> year =<span style="color: #000000;"> date.getFullYear();
</span><span style="color: #008080;">27</span>     <span style="color: #0000ff;">var</span> d = getDate(year, month, 1<span style="color: #000000;">);
</span><span style="color: #008080;">28</span>     <span style="color: #0000ff;">return</span><span style="color: #000000;"> d.getDay();
</span><span style="color: #008080;">29</span> <span style="color: #000000;">}
</span><span style="color: #008080;">30</span> 
<span style="color: #008080;">31</span> let getDisplayInfo = <span style="color: #0000ff;">function</span><span style="color: #000000;">(date) {
</span><span style="color: #008080;">32</span>     <span style="color: #0000ff;">if</span> (!<span style="color: #000000;">isDate(date)) {
</span><span style="color: #008080;">33</span>       date =<span style="color: #000000;"> getDate(date)
</span><span style="color: #008080;">34</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">35</span>     <span style="color: #0000ff;">var</span> year =<span style="color: #000000;"> date.getFullYear();
</span><span style="color: #008080;">36</span> 
<span style="color: #008080;">37</span>     <span style="color: #0000ff;">var</span> month =<span style="color: #000000;"> date.getMonth();
</span><span style="color: #008080;">38</span>     <span style="color: #0000ff;">var</span> d =<span style="color: #000000;"> getDate(year, month);
</span><span style="color: #008080;">39</span> 
<span style="color: #008080;">40</span>     <span style="color: #008000;">//</span><span style="color: #008000;">这个月一共多少天</span>
<span style="color: #008080;">41</span>     <span style="color: #0000ff;">var</span> days =<span style="color: #000000;"> getDaysOfMonth(d);
</span><span style="color: #008080;">42</span> 
<span style="color: #008080;">43</span>     <span style="color: #008000;">//</span><span style="color: #008000;">这个月是星期几开始的</span>
<span style="color: #008080;">44</span>     <span style="color: #0000ff;">var</span> beginWeek =<span style="color: #000000;"> getBeginDayOfMouth(d);
</span><span style="color: #008080;">45</span> 
<span style="color: #008080;">46</span>     <span style="color: #0000ff;">return</span><span style="color: #000000;"> {
</span><span style="color: #008080;">47</span> <span style="color: #000000;">      year: year,
</span><span style="color: #008080;">48</span> <span style="color: #000000;">      month: month,
</span><span style="color: #008080;">49</span> <span style="color: #000000;">      days: days,
</span><span style="color: #008080;">50</span> <span style="color: #000000;">      beginWeek: beginWeek
</span><span style="color: #008080;">51</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">52</span> <span style="color: #000000;">  }
</span><span style="color: #008080;">53</span> 
<span style="color: #008080;">54</span>   let isOverdue = <span style="color: #0000ff;">function</span><span style="color: #000000;"> isOverdue(year, month, day) {
</span><span style="color: #008080;">55</span>     let date = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(year, month, day);
</span><span style="color: #008080;">56</span>     let now = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date();
</span><span style="color: #008080;">57</span>     now = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(now.getFullYear(), now.getMonth(), now.getDate());
</span><span style="color: #008080;">58</span>     <span style="color: #0000ff;">return</span> date.getTime() &lt;<span style="color: #000000;"> now.getTime();
</span><span style="color: #008080;">59</span> <span style="color: #000000;">  }
</span><span style="color: #008080;">60</span>   
<span style="color: #008080;">61</span>   let isToday = <span style="color: #0000ff;">function</span><span style="color: #000000;"> isToday(year, month, day, selectedDate) {
</span><span style="color: #008080;">62</span>     let date = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(year, month, day);
</span><span style="color: #008080;">63</span>     <span style="color: #0000ff;">return</span> date.getTime() ==<span style="color: #000000;"> selectedDate;
</span><span style="color: #008080;">64</span> <span style="color: #000000;">  }
</span><span style="color: #008080;">65</span> 
<span style="color: #008080;">66</span> let dateUtils =<span style="color: #000000;"> {
</span><span style="color: #008080;">67</span> <span style="color: #000000;">    isLeapYear,
</span><span style="color: #008080;">68</span> <span style="color: #000000;">    getDaysOfMonth,
</span><span style="color: #008080;">69</span> <span style="color: #000000;">    getBeginDayOfMouth,
</span><span style="color: #008080;">70</span> <span style="color: #000000;">    getDisplayInfo,
</span><span style="color: #008080;">71</span> <span style="color: #000000;">    isOverdue,
</span><span style="color: #008080;">72</span> <span style="color: #000000;">    isToday
</span><span style="color: #008080;">73</span> <span style="color: #000000;">};
</span><span style="color: #008080;">74</span> 
<span style="color: #008080;">75</span> export <span style="color: #0000ff;">default</span> dateUtils;</pre>
</div>
<span class="cnblogs_code_collapse">utils.js</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('1a553ebd-30ee-4f05-bba0-f23a2f01da11')"><img id="code_img_closed_1a553ebd-30ee-4f05-bba0-f23a2f01da11" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_1a553ebd-30ee-4f05-bba0-f23a2f01da11" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('1a553ebd-30ee-4f05-bba0-f23a2f01da11',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_1a553ebd-30ee-4f05-bba0-f23a2f01da11" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> import dateUtils from '../../common/utils'
<span style="color: #008080;"> 3</span> import CalendarMonth from './month'
<span style="color: #008080;"> 4</span> 
<span style="color: #008080;"> 5</span> 
<span style="color: #008080;"> 6</span> export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class Calendar extends React.Component {
</span><span style="color: #008080;"> 7</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;"> 8</span>         let year = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
</span><span style="color: #008080;"> 9</span>         let month = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
</span><span style="color: #008080;">10</span>         let weekDayArr = ['日', '一', '二', '三', '四', '五', '六'<span style="color: #000000;">];
</span><span style="color: #008080;">11</span>         <span style="color: #008000;">//</span><span style="color: #008000;">获取当前日期数据</span>
<span style="color: #008080;">12</span>         let displayInfo = dateUtils.getDisplayInfo(<span style="color: #0000ff;">new</span> Date(year, month, 0<span style="color: #000000;">));
</span><span style="color: #008080;">13</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;">14</span>             &lt;ul className="cm-calendar "&gt;
<span style="color: #008080;">15</span>                 &lt;ul className="cm-calendar-hd"&gt;
<span style="color: #008080;">16</span> <span style="color: #000000;">                    {
</span><span style="color: #008080;">17</span>                         weekDayArr.map((data, index) =&gt;<span style="color: #000000;"> {
</span><span style="color: #008080;">18</span>                             <span style="color: #0000ff;">return</span> &lt;li key={index} className="cm-item--disabled"&gt;{data}&lt;/li&gt;
<span style="color: #008080;">19</span> <span style="color: #000000;">                        })
</span><span style="color: #008080;">20</span> <span style="color: #000000;">                    }
</span><span style="color: #008080;">21</span>                 &lt;/ul&gt;
<span style="color: #008080;">22</span>                 &lt;CalendarMonth year={year} month={month}/&gt;
<span style="color: #008080;">23</span>             &lt;/ul&gt;
<span style="color: #008080;">24</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">25</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">26</span> }</pre>
</div>
<span class="cnblogs_code_collapse">calendar.js</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('b0daec5f-7d32-4b81-8f60-5078213495df')"><img id="code_img_closed_b0daec5f-7d32-4b81-8f60-5078213495df" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_b0daec5f-7d32-4b81-8f60-5078213495df" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('b0daec5f-7d32-4b81-8f60-5078213495df',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_b0daec5f-7d32-4b81-8f60-5078213495df" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> import dateUtils from '../../common/utils'
<span style="color: #008080;"> 3</span> import CalendarDay from './day'
<span style="color: #008080;"> 4</span> 
<span style="color: #008080;"> 5</span> export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class CalendarMonth extends React.Component {
</span><span style="color: #008080;"> 6</span> 
<span style="color: #008080;"> 7</span>     <span style="color: #008000;">//</span><span style="color: #008000;">获取首次空格</span>
<span style="color: #008080;"> 8</span> <span style="color: #000000;">    _renderBeginDayOfMouth(beforeDays) {
</span><span style="color: #008080;"> 9</span>         let html =<span style="color: #000000;"> [];
</span><span style="color: #008080;">10</span>         <span style="color: #0000ff;">for</span> (let i = 0; i &lt; beforeDays; i++<span style="color: #000000;">) {
</span><span style="color: #008080;">11</span>             html.push(&lt;li key={i} className="cm-item--disabled"&gt;&lt;/li&gt;);
<span style="color: #008080;">12</span> <span style="color: #000000;">        }
</span><span style="color: #008080;">13</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> html;
</span><span style="color: #008080;">14</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">15</span> 
<span style="color: #008080;">16</span>     <span style="color: #008000;">//</span><span style="color: #008000;">和_renderBeginDayOfMouth类似可以重构掉</span>
<span style="color: #008080;">17</span> <span style="color: #000000;">    _renderDays(year, month, days) {
</span><span style="color: #008080;">18</span>         let html =<span style="color: #000000;"> [];
</span><span style="color: #008080;">19</span>         <span style="color: #0000ff;">for</span>(let i = 0; i &lt; days; i++<span style="color: #000000;">) {
</span><span style="color: #008080;">20</span> <span style="color: #000000;">            html.push(    
</span><span style="color: #008080;">21</span>                 &lt;CalendarDay key={i} year={year} month={month} day={i} /&gt;
<span style="color: #008080;">22</span> <span style="color: #000000;">            )
</span><span style="color: #008080;">23</span> <span style="color: #000000;">        }
</span><span style="color: #008080;">24</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> html;
</span><span style="color: #008080;">25</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">26</span> 
<span style="color: #008080;">27</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;">28</span>         let year = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
</span><span style="color: #008080;">29</span>         let month = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
</span><span style="color: #008080;">30</span>         let displayInfo = dateUtils.getDisplayInfo(<span style="color: #0000ff;">new</span> Date(year, parseInt(month) - 1), 1<span style="color: #000000;">);
</span><span style="color: #008080;">31</span> <span style="color: #000000;">console.log(displayInfo)
</span><span style="color: #008080;">32</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;">33</span>             &lt;ul className="cm-calendar-bd "&gt;
<span style="color: #008080;">34</span>                 &lt;h3 className="cm-month calendar-cm-month js_month"&gt;{year + '-' + month}&lt;/h3&gt;
<span style="color: #008080;">35</span>                 
<span style="color: #008080;">36</span>                 &lt;ul className="cm-day-list"&gt;
<span style="color: #008080;">37</span>                     { <span style="color: #0000ff;">this</span><span style="color: #000000;">._renderBeginDayOfMouth( displayInfo.beginWeek) }
</span><span style="color: #008080;">38</span>                     { <span style="color: #0000ff;">this</span><span style="color: #000000;">._renderDays(year, month, displayInfo.days) }
</span><span style="color: #008080;">39</span>                 &lt;/ul&gt;
<span style="color: #008080;">40</span>             &lt;/ul&gt;
<span style="color: #008080;">41</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">42</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">43</span> }</pre>
</div>
<span class="cnblogs_code_collapse">month.js</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('deb331c9-a329-462e-9a6b-ee6e715537e0')"><img id="code_img_closed_deb331c9-a329-462e-9a6b-ee6e715537e0" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_deb331c9-a329-462e-9a6b-ee6e715537e0" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('deb331c9-a329-462e-9a6b-ee6e715537e0',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_deb331c9-a329-462e-9a6b-ee6e715537e0" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> import dateUtils from '../../common/utils'
<span style="color: #008080;"> 3</span> 
<span style="color: #008080;"> 4</span> export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class CalendarDay extends React.Component {
</span><span style="color: #008080;"> 5</span> 
<span style="color: #008080;"> 6</span> 
<span style="color: #008080;"> 7</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;"> 8</span>         let year = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
</span><span style="color: #008080;"> 9</span>         let month = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
</span><span style="color: #008080;">10</span>         let day = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.day;
</span><span style="color: #008080;">11</span> 
<span style="color: #008080;">12</span>         let klass = dateUtils.isOverdue(year, parseInt(month) - 1, day) ? 'cm-item--disabled' : ''<span style="color: #000000;">;
</span><span style="color: #008080;">13</span> 
<span style="color: #008080;">14</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;">15</span>             &lt;li year={year} month={month} day={day}  &gt;
<span style="color: #008080;">16</span>                 &lt;div className="cm-field-wrapper "&gt;
<span style="color: #008080;">17</span>                     &lt;div className="cm-field-title"&gt;{day + 1}&lt;/div&gt;
<span style="color: #008080;">18</span>                 &lt;/div&gt;
<span style="color: #008080;">19</span>             &lt;/li&gt;
<span style="color: #008080;">20</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">21</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">22</span> }</pre>
</div>
<span class="cnblogs_code_collapse">day.js</span></div>
<p>这段代码的效果是：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181230185154407-1559956527.png" alt="" width="200" /></p>
<p>基础框架结构出来后，我们就需要一点一点向上面加肉了，首先我们加一个选中日期，需要一点特效，这里稍微改下代码，具体各位去GitHub上面看代码了，这段代码就不贴出来了，<span style="color: #ff6600;">因为我们这里是写demo，这个日历组件功能完成60%即可，不会全部完成</span>，这里我们做另一个操作，就是在页面上添加一个上一个月下一个月按钮，并且点击日历时候在控制台将当前日期打印出来即可，这里是效果图：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181230192907982-593418820.png" alt="" width="200" /></p>
<p>这个时候我们首先为左右两个按钮添加事件，这里更改下代码变成了这个样子，这里贴出阶段代码，完整代码请大家在git上查看</p>
<div class="cnblogs_code" onclick="cnblogs_code_show('2e7a853d-755f-4ef9-bce6-1544066d9907')"><img id="code_img_closed_2e7a853d-755f-4ef9-bce6-1544066d9907" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_2e7a853d-755f-4ef9-bce6-1544066d9907" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('2e7a853d-755f-4ef9-bce6-1544066d9907',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_2e7a853d-755f-4ef9-bce6-1544066d9907" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> import ReactDOM from 'react-dom'<span style="color: #000000;">;
</span><span style="color: #008080;"> 3</span> import Calendar from './ui/calendar/calendar'<span style="color: #000000;">;
</span><span style="color: #008080;"> 4</span> 
<span style="color: #008080;"> 5</span> <span style="color: #000000;">class CalendarMain extends React.Component {
</span><span style="color: #008080;"> 6</span> <span style="color: #000000;">    constructor(props) {
</span><span style="color: #008080;"> 7</span> <span style="color: #000000;">        super(props);
</span><span style="color: #008080;"> 8</span>         let today = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date().getTime();
</span><span style="color: #008080;"> 9</span>         <span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {
</span><span style="color: #008080;">10</span>             month: 12<span style="color: #000000;">,
</span><span style="color: #008080;">11</span> <span style="color: #000000;">            selectdate: today
</span><span style="color: #008080;">12</span> <span style="color: #000000;">        };
</span><span style="color: #008080;">13</span> <span style="color: #000000;">      }
</span><span style="color: #008080;">14</span> <span style="color: #000000;">    preMonth() {
</span><span style="color: #008080;">15</span>         <span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
</span><span style="color: #008080;">16</span>             month: <span style="color: #0000ff;">this</span>.state.month - 1
<span style="color: #008080;">17</span> <span style="color: #000000;">        });
</span><span style="color: #008080;">18</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">19</span> <span style="color: #000000;">    nextMonth() {
</span><span style="color: #008080;">20</span>         <span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
</span><span style="color: #008080;">21</span>             month: <span style="color: #0000ff;">this</span>.state.month + 1
<span style="color: #008080;">22</span> <span style="color: #000000;">        });
</span><span style="color: #008080;">23</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">24</span> <span style="color: #000000;">    ondayclick(year, month, day) {
</span><span style="color: #008080;">25</span> 
<span style="color: #008080;">26</span>         <span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
</span><span style="color: #008080;">27</span>             selectdate: <span style="color: #0000ff;">new</span> Date(year, parseInt(month) - 1<span style="color: #000000;">, day).getTime()
</span><span style="color: #008080;">28</span> <span style="color: #000000;">        })
</span><span style="color: #008080;">29</span> 
<span style="color: #008080;">30</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">31</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;">32</span>         <span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
<span style="color: #008080;">33</span>         let selectdate = <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.selectdate;;
</span><span style="color: #008080;">34</span>         let month = <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.month;
</span><span style="color: #008080;">35</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;">36</span>             &lt;div className="calendar-wrapper-box"&gt;
<span style="color: #008080;">37</span>                 &lt;div className="box-hd"&gt;
<span style="color: #008080;">38</span>                     &lt;span className="fl icon-back js_back " onClick={<span style="color: #0000ff;">this</span>.preMonth.bind(<span style="color: #0000ff;">this</span>)}  &gt;&lt;/span&gt;
<span style="color: #008080;">39</span>                     &lt;span className="fr icon-next js_next" onClick={<span style="color: #0000ff;">this</span>.nextMonth.bind(<span style="color: #0000ff;">this</span>)} &gt;&lt;/span&gt;
<span style="color: #008080;">40</span>                 &lt;/div&gt;
<span style="color: #008080;">41</span>                 &lt;Calendar ondayclick={<span style="color: #0000ff;">this</span>.ondayclick.bind(<span style="color: #0000ff;">this</span>)} year="2018" month={month} selectdate={selectdate} /&gt;
<span style="color: #008080;">42</span>             &lt;/div&gt;
<span style="color: #008080;">43</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">44</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">45</span> <span style="color: #000000;">}
</span><span style="color: #008080;">46</span> 
<span style="color: #008080;">47</span> <span style="color: #000000;">ReactDOM.render(
</span><span style="color: #008080;">48</span>     &lt;CalendarMain /&gt;
<span style="color: #008080;">49</span> 
<span style="color: #008080;">50</span> <span style="color: #000000;">    ,
</span><span style="color: #008080;">51</span>     document.getElementById('root'<span style="color: #000000;">)
</span><span style="color: #008080;">52</span> );</pre>
</div>
<span class="cnblogs_code_collapse">index.js</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('c9e68efc-db47-4ebd-99cc-5d2d14874cf7')"><img id="code_img_closed_c9e68efc-db47-4ebd-99cc-5d2d14874cf7" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_c9e68efc-db47-4ebd-99cc-5d2d14874cf7" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('c9e68efc-db47-4ebd-99cc-5d2d14874cf7',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_c9e68efc-db47-4ebd-99cc-5d2d14874cf7" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> let isDate = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (date) {
</span><span style="color: #008080;"> 2</span>     <span style="color: #0000ff;">return</span> date &amp;&amp;<span style="color: #000000;"> date.getMonth;
</span><span style="color: #008080;"> 3</span> <span style="color: #000000;">};
</span><span style="color: #008080;"> 4</span> 
<span style="color: #008080;"> 5</span> <span style="color: #008000;">//</span><span style="color: #008000;">兼容小程序日期</span>
<span style="color: #008080;"> 6</span> let getDate = <span style="color: #0000ff;">function</span><span style="color: #000000;">(year, month, day) {
</span><span style="color: #008080;"> 7</span>     <span style="color: #0000ff;">if</span>(!day) day = 1<span style="color: #000000;">;
</span><span style="color: #008080;"> 8</span>     <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(year, month, day);
</span><span style="color: #008080;"> 9</span> <span style="color: #000000;">}
</span><span style="color: #008080;">10</span> 
<span style="color: #008080;">11</span> let isLeapYear = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (year) {
</span><span style="color: #008080;">12</span>     <span style="color: #008000;">//</span><span style="color: #008000;">传入为时间格式需要处理</span>
<span style="color: #008080;">13</span>     <span style="color: #0000ff;">if</span> (isDate(year)) year =<span style="color: #000000;"> year.getFullYear()
</span><span style="color: #008080;">14</span>     <span style="color: #0000ff;">if</span> ((year % 4 == 0 &amp;&amp; year % 100 != 0) || (year % 400 == 0)) <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
</span><span style="color: #008080;">15</span>     <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">false</span><span style="color: #000000;">;
</span><span style="color: #008080;">16</span> <span style="color: #000000;">};
</span><span style="color: #008080;">17</span> 
<span style="color: #008080;">18</span> let getDaysOfMonth = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (date) {
</span><span style="color: #008080;">19</span>     <span style="color: #0000ff;">var</span> month = date.getMonth() + 1; <span style="color: #008000;">//</span><span style="color: #008000;">注意此处月份要加1</span>
<span style="color: #008080;">20</span>     <span style="color: #0000ff;">var</span> year =<span style="color: #000000;"> date.getFullYear();
</span><span style="color: #008080;">21</span>     <span style="color: #0000ff;">return</span> [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][parseInt(month) - 1<span style="color: #000000;">];
</span><span style="color: #008080;">22</span> <span style="color: #000000;">}
</span><span style="color: #008080;">23</span> 
<span style="color: #008080;">24</span> let getBeginDayOfMouth = <span style="color: #0000ff;">function</span><span style="color: #000000;"> (date) {
</span><span style="color: #008080;">25</span>     <span style="color: #0000ff;">var</span> month =<span style="color: #000000;"> date.getMonth();
</span><span style="color: #008080;">26</span>     <span style="color: #0000ff;">var</span> year =<span style="color: #000000;"> date.getFullYear();
</span><span style="color: #008080;">27</span>     <span style="color: #0000ff;">var</span> d = getDate(year, month, 1<span style="color: #000000;">);
</span><span style="color: #008080;">28</span>     <span style="color: #0000ff;">return</span><span style="color: #000000;"> d.getDay();
</span><span style="color: #008080;">29</span> <span style="color: #000000;">}
</span><span style="color: #008080;">30</span> 
<span style="color: #008080;">31</span> let getDisplayInfo = <span style="color: #0000ff;">function</span><span style="color: #000000;">(date) {
</span><span style="color: #008080;">32</span>     <span style="color: #0000ff;">if</span> (!<span style="color: #000000;">isDate(date)) {
</span><span style="color: #008080;">33</span>       date =<span style="color: #000000;"> getDate(date)
</span><span style="color: #008080;">34</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">35</span>     <span style="color: #0000ff;">var</span> year =<span style="color: #000000;"> date.getFullYear();
</span><span style="color: #008080;">36</span> 
<span style="color: #008080;">37</span>     <span style="color: #0000ff;">var</span> month =<span style="color: #000000;"> date.getMonth();
</span><span style="color: #008080;">38</span>     <span style="color: #0000ff;">var</span> d =<span style="color: #000000;"> getDate(year, month);
</span><span style="color: #008080;">39</span> 
<span style="color: #008080;">40</span>     <span style="color: #008000;">//</span><span style="color: #008000;">这个月一共多少天</span>
<span style="color: #008080;">41</span>     <span style="color: #0000ff;">var</span> days =<span style="color: #000000;"> getDaysOfMonth(d);
</span><span style="color: #008080;">42</span> 
<span style="color: #008080;">43</span>     <span style="color: #008000;">//</span><span style="color: #008000;">这个月是星期几开始的</span>
<span style="color: #008080;">44</span>     <span style="color: #0000ff;">var</span> beginWeek =<span style="color: #000000;"> getBeginDayOfMouth(d);
</span><span style="color: #008080;">45</span> 
<span style="color: #008080;">46</span>     <span style="color: #0000ff;">return</span><span style="color: #000000;"> {
</span><span style="color: #008080;">47</span> <span style="color: #000000;">      year: year,
</span><span style="color: #008080;">48</span> <span style="color: #000000;">      month: month,
</span><span style="color: #008080;">49</span> <span style="color: #000000;">      days: days,
</span><span style="color: #008080;">50</span> <span style="color: #000000;">      beginWeek: beginWeek
</span><span style="color: #008080;">51</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">52</span> <span style="color: #000000;">  }
</span><span style="color: #008080;">53</span> 
<span style="color: #008080;">54</span>   let isOverdue = <span style="color: #0000ff;">function</span><span style="color: #000000;"> isOverdue(year, month, day) {
</span><span style="color: #008080;">55</span>     let date = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(year, month, day);
</span><span style="color: #008080;">56</span>     let now = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date();
</span><span style="color: #008080;">57</span>     now = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(now.getFullYear(), now.getMonth(), now.getDate());
</span><span style="color: #008080;">58</span>     <span style="color: #0000ff;">return</span> date.getTime() &lt;<span style="color: #000000;"> now.getTime();
</span><span style="color: #008080;">59</span> <span style="color: #000000;">  }
</span><span style="color: #008080;">60</span>   
<span style="color: #008080;">61</span>   let isToday = <span style="color: #0000ff;">function</span><span style="color: #000000;"> isToday(year, month, day, selectedDate) {
</span><span style="color: #008080;">62</span>     let date = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(year, month, day);
</span><span style="color: #008080;">63</span>     let d = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(selectedDate);
</span><span style="color: #008080;">64</span>     d = <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date(d.getFullYear(), d.getMonth(), d.getDate());
</span><span style="color: #008080;">65</span>     selectedDate =<span style="color: #000000;"> d.getTime();
</span><span style="color: #008080;">66</span>     <span style="color: #0000ff;">return</span> date.getTime() ==<span style="color: #000000;"> selectedDate;
</span><span style="color: #008080;">67</span> <span style="color: #000000;">  }
</span><span style="color: #008080;">68</span> 
<span style="color: #008080;">69</span> let dateUtils =<span style="color: #000000;"> {
</span><span style="color: #008080;">70</span> <span style="color: #000000;">    isLeapYear,
</span><span style="color: #008080;">71</span> <span style="color: #000000;">    getDaysOfMonth,
</span><span style="color: #008080;">72</span> <span style="color: #000000;">    getBeginDayOfMouth,
</span><span style="color: #008080;">73</span> <span style="color: #000000;">    getDisplayInfo,
</span><span style="color: #008080;">74</span> <span style="color: #000000;">    isOverdue,
</span><span style="color: #008080;">75</span> <span style="color: #000000;">    isToday
</span><span style="color: #008080;">76</span> <span style="color: #000000;">};
</span><span style="color: #008080;">77</span> 
<span style="color: #008080;">78</span> export <span style="color: #0000ff;">default</span> dateUtils;</pre>
</div>
<span class="cnblogs_code_collapse">utils.js</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('3a9312f0-133c-48db-b37c-988b6d37f094')"><img id="code_img_closed_3a9312f0-133c-48db-b37c-988b6d37f094" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_3a9312f0-133c-48db-b37c-988b6d37f094" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('3a9312f0-133c-48db-b37c-988b6d37f094',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_3a9312f0-133c-48db-b37c-988b6d37f094" class="cnblogs_code_hide">
<pre>import React from 'react'<span style="color: #000000;">;
import dateUtils from </span>'../../common/utils'<span style="color: #000000;">
import CalendarMonth from </span>'./month'<span style="color: #000000;">


export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> class Calendar extends React.Component {
    render() {
        let year </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
        let month </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
        let weekDayArr </span>= ['日', '一', '二', '三', '四', '五', '六'<span style="color: #000000;">];
        </span><span style="color: #008000;">//</span><span style="color: #008000;">获取当前日期数据</span>
        let displayInfo = dateUtils.getDisplayInfo(<span style="color: #0000ff;">new</span> Date(year, month, 0<span style="color: #000000;">));
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;ul className="cm-calendar "&gt;
                &lt;ul className="cm-calendar-hd"&gt;<span style="color: #000000;">
                    {
                        weekDayArr.map((data, index) </span>=&gt;<span style="color: #000000;"> {
                            </span><span style="color: #0000ff;">return</span> &lt;li key={index} className="cm-item--disabled"&gt;{data}&lt;/li&gt;
<span style="color: #000000;">                        })
                    }
                </span>&lt;/ul&gt;
                &lt;CalendarMonth ondayclick={<span style="color: #0000ff;">this</span>.props.ondayclick} selectdate={<span style="color: #0000ff;">this</span>.props.selectdate} year={year} month={month}/&gt;
            &lt;/ul&gt;
<span style="color: #000000;">        )
    }
}</span></pre>
</div>
<span class="cnblogs_code_collapse">calendar.js</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('62546f4b-89c6-4338-882b-ddde46ab9bb2')"><img id="code_img_closed_62546f4b-89c6-4338-882b-ddde46ab9bb2" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_62546f4b-89c6-4338-882b-ddde46ab9bb2" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('62546f4b-89c6-4338-882b-ddde46ab9bb2',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_62546f4b-89c6-4338-882b-ddde46ab9bb2" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> import dateUtils from '../../common/utils'
<span style="color: #008080;"> 3</span> import CalendarDay from './day'
<span style="color: #008080;"> 4</span> 
<span style="color: #008080;"> 5</span> export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class CalendarMonth extends React.Component {
</span><span style="color: #008080;"> 6</span> 
<span style="color: #008080;"> 7</span>     <span style="color: #008000;">//</span><span style="color: #008000;">获取首次空格</span>
<span style="color: #008080;"> 8</span> <span style="color: #000000;">    _renderBeginDayOfMouth(beforeDays) {
</span><span style="color: #008080;"> 9</span>         let html =<span style="color: #000000;"> [];
</span><span style="color: #008080;">10</span>         <span style="color: #0000ff;">for</span> (let i = 0; i &lt; beforeDays; i++<span style="color: #000000;">) {
</span><span style="color: #008080;">11</span>             html.push(&lt;li key={i} className="cm-item--disabled"&gt;&lt;/li&gt;);
<span style="color: #008080;">12</span> <span style="color: #000000;">        }
</span><span style="color: #008080;">13</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> html;
</span><span style="color: #008080;">14</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">15</span> 
<span style="color: #008080;">16</span>     <span style="color: #008000;">//</span><span style="color: #008000;">和_renderBeginDayOfMouth类似可以重构掉</span>
<span style="color: #008080;">17</span> <span style="color: #000000;">    _renderDays(year, month, days) {
</span><span style="color: #008080;">18</span>         let html =<span style="color: #000000;"> [];
</span><span style="color: #008080;">19</span>         <span style="color: #0000ff;">for</span>(let i = 1; i &lt;= days; i++<span style="color: #000000;">) {
</span><span style="color: #008080;">20</span> <span style="color: #000000;">            html.push(    
</span><span style="color: #008080;">21</span>                 &lt;CalendarDay ondayclick={<span style="color: #0000ff;">this</span>.props.ondayclick}  selectdate={<span style="color: #0000ff;">this</span>.props.selectdate}  key={i} year={year} month={month} day={i} /&gt;
<span style="color: #008080;">22</span> <span style="color: #000000;">            )
</span><span style="color: #008080;">23</span> <span style="color: #000000;">        }
</span><span style="color: #008080;">24</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> html;
</span><span style="color: #008080;">25</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">26</span> 
<span style="color: #008080;">27</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;">28</span>         let year = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
</span><span style="color: #008080;">29</span>         let month = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
</span><span style="color: #008080;">30</span>         
<span style="color: #008080;">31</span>         let name = <span style="color: #0000ff;">new</span> Date(year, parseInt(month) - 1, 1<span style="color: #000000;">);
</span><span style="color: #008080;">32</span>         name = name.getFullYear() + '-' + (name.getMonth() + 1<span style="color: #000000;">);
</span><span style="color: #008080;">33</span> 
<span style="color: #008080;">34</span>         let displayInfo = dateUtils.getDisplayInfo(<span style="color: #0000ff;">new</span> Date(year, parseInt(month) - 1), 1<span style="color: #000000;">);
</span><span style="color: #008080;">35</span> <span style="color: #000000;">console.log(displayInfo)
</span><span style="color: #008080;">36</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;">37</span>             &lt;ul className="cm-calendar-bd "&gt;
<span style="color: #008080;">38</span>                 &lt;h3 className="cm-month calendar-cm-month js_month"&gt;{name}&lt;/h3&gt;
<span style="color: #008080;">39</span>                 
<span style="color: #008080;">40</span>                 &lt;ul className="cm-day-list"&gt;
<span style="color: #008080;">41</span>                     { <span style="color: #0000ff;">this</span><span style="color: #000000;">._renderBeginDayOfMouth( displayInfo.beginWeek) }
</span><span style="color: #008080;">42</span>                     { <span style="color: #0000ff;">this</span><span style="color: #000000;">._renderDays(year, month, displayInfo.days) }
</span><span style="color: #008080;">43</span>                 &lt;/ul&gt;
<span style="color: #008080;">44</span>             &lt;/ul&gt;
<span style="color: #008080;">45</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">46</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">47</span> }</pre>
</div>
<span class="cnblogs_code_collapse">month.js</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('8ffb69e5-bce4-4cf6-9b8b-fc529ae1b9f8')"><img id="code_img_closed_8ffb69e5-bce4-4cf6-9b8b-fc529ae1b9f8" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_8ffb69e5-bce4-4cf6-9b8b-fc529ae1b9f8" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('8ffb69e5-bce4-4cf6-9b8b-fc529ae1b9f8',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_8ffb69e5-bce4-4cf6-9b8b-fc529ae1b9f8" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> import dateUtils from '../../common/utils'
<span style="color: #008080;"> 3</span> 
<span style="color: #008080;"> 4</span> export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class CalendarDay extends React.Component {
</span><span style="color: #008080;"> 5</span> <span style="color: #000000;">    onClick(e) {
</span><span style="color: #008080;"> 6</span>         let year = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
</span><span style="color: #008080;"> 7</span>         let month = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
</span><span style="color: #008080;"> 8</span>         let day = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.day;
</span><span style="color: #008080;"> 9</span> 
<span style="color: #008080;">10</span>         <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.ondayclick(year, month, day)
</span><span style="color: #008080;">11</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">12</span> 
<span style="color: #008080;">13</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;">14</span>         let year = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.year;
</span><span style="color: #008080;">15</span>         let month = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.month;
</span><span style="color: #008080;">16</span>         let day = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.day;
</span><span style="color: #008080;">17</span>         let selectdate = <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.selectdate;
</span><span style="color: #008080;">18</span> 
<span style="color: #008080;">19</span>         let klass = dateUtils.isOverdue(year, parseInt(month) - 1, day) ? 'cm-item--disabled' : ''<span style="color: #000000;">;
</span><span style="color: #008080;">20</span>         
<span style="color: #008080;">21</span>         <span style="color: #0000ff;">if</span>(dateUtils.isToday(year, parseInt(month) - 1<span style="color: #000000;">, day, selectdate))
</span><span style="color: #008080;">22</span>             klass += ' active '
<span style="color: #008080;">23</span> 
<span style="color: #008080;">24</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;">25</span>             &lt;li onClick={<span style="color: #0000ff;">this</span>.onClick.bind(<span style="color: #0000ff;">this</span>)} className={klass} year={year} month={month} day={day}  &gt;
<span style="color: #008080;">26</span>                 &lt;div className="cm-field-wrapper "&gt;
<span style="color: #008080;">27</span>                     &lt;div className="cm-field-title"&gt;{day }&lt;/div&gt;
<span style="color: #008080;">28</span>                 &lt;/div&gt;
<span style="color: #008080;">29</span>             &lt;/li&gt;
<span style="color: #008080;">30</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">31</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">32</span> }</pre>
</div>
<span class="cnblogs_code_collapse">day.js</span></div>
<p>至此，我们日历一块的基本代码完成，完成度应该有60%，我们继续接下来的组件编写</p>
<h2>header组件</h2>
<p>日历组件结束后，我们来实现另一个UI类组件-header组件，我们这里实现的header算是比较中规中矩的头部组件，复杂的情况要考虑hybrid情况，那就会很复杂了，话不多说，我们先在ui目录下建立一个header目录，写下最简单的代码后，我们的index：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">ReactDOM.render(
    </span>&lt;Header title="我是标题" /&gt;
<span style="color: #000000;">    ,
    document.getElementById(</span>'root'<span style="color: #000000;">)
);</span></pre>
</div>
<p>然后是我们的header组件:</p>
<div class="cnblogs_code">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class Header extends React.Component {
</span><span style="color: #008080;"> 3</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;"> 4</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;"> 5</span>             &lt;div class="cm-header"&gt;
<span style="color: #008080;"> 6</span>                 &lt;span class=" cm-header-icon fl  js_back"&gt;
<span style="color: #008080;"> 7</span>                     &lt;i class="icon-back"&gt;&lt;/i&gt;
<span style="color: #008080;"> 8</span>                 &lt;/span&gt;
<span style="color: #008080;"> 9</span>                 &lt;h1 class="cm-page-title js_title"&gt;
<span style="color: #008080;">10</span>                     {<span style="color: #0000ff;">this</span><span style="color: #000000;">.props.title}
</span><span style="color: #008080;">11</span>                 &lt;/h1&gt;
<span style="color: #008080;">12</span>             &lt;/div&gt;
<span style="color: #008080;">13</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">14</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">15</span> }</pre>
</div>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181231144328619-286658644.png" alt="" width="200" /></p>
<p>于是header部分的框架就出来了，这个时候我们来将之加强，这里也不弄太强，就将后退的事件加上，以及左边按钮加上对应的按钮和事件，这里改造下index和header代码：</p>
<div class="cnblogs_code" onclick="cnblogs_code_show('10044bab-4fb0-4d86-b494-30f505d65aef')"><img id="code_img_closed_10044bab-4fb0-4d86-b494-30f505d65aef" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_10044bab-4fb0-4d86-b494-30f505d65aef" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('10044bab-4fb0-4d86-b494-30f505d65aef',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_10044bab-4fb0-4d86-b494-30f505d65aef" class="cnblogs_code_hide">
<pre>import React from 'react'<span style="color: #000000;">;
import ReactDOM from </span>'react-dom'<span style="color: #000000;">;
import Calendar from </span>'./ui/calendar/calendar'<span style="color: #000000;">;
import Header from </span>'./ui/header/header'<span style="color: #000000;">;

class CalendarMain extends React.Component {
    constructor(props) {
        super(props);
        let today </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date().getTime();
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {
            month: </span>12<span style="color: #000000;">,
            selectdate: today
        };
    }
    preMonth() {
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
            month: </span><span style="color: #0000ff;">this</span>.state.month - 1<span style="color: #000000;">
        });
    }
    nextMonth() {
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
            month: </span><span style="color: #0000ff;">this</span>.state.month + 1<span style="color: #000000;">
        });
    }
    ondayclick(year, month, day) {

        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
            selectdate: </span><span style="color: #0000ff;">new</span> Date(year, parseInt(month) - 1<span style="color: #000000;">, day).getTime()
        })

    }
    render() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        let selectdate = <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.selectdate;;
        let month </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.month;
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;div className="calendar-wrapper-box"&gt;
                &lt;div className="box-hd"&gt;
                    &lt;span className="fl icon-back js_back " onClick={<span style="color: #0000ff;">this</span>.preMonth.bind(<span style="color: #0000ff;">this</span>)}  &gt;&lt;/span&gt;
                    &lt;span className="fr icon-next js_next" onClick={<span style="color: #0000ff;">this</span>.nextMonth.bind(<span style="color: #0000ff;">this</span>)} &gt;&lt;/span&gt;
                &lt;/div&gt;
                &lt;Calendar ondayclick={<span style="color: #0000ff;">this</span>.ondayclick.bind(<span style="color: #0000ff;">this</span>)} year="2018" month={month} selectdate={selectdate} /&gt;
            &lt;/div&gt;
<span style="color: #000000;">        )
    }
}

class HeaderMain extends React.Component {
    constructor(props) {
        super(props);

        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {
            title: </span>'我是标题'<span style="color: #000000;">
        };

        </span><span style="color: #008000;">//</span><span style="color: #008000;">这里定义，右边按钮规则</span>
        <span style="color: #0000ff;">this</span>.state.right =<span style="color: #000000;"> [
            {
                tagname: </span>'search'<span style="color: #000000;">,
                callback: </span><span style="color: #0000ff;">function</span><span style="color: #000000;">() {
                    console.log(</span>'搜索'<span style="color: #000000;">)
                }
            },
            {
                tagname: </span>'tips'<span style="color: #000000;">,
                value: </span>'说明'<span style="color: #000000;">,
                callback: </span><span style="color: #0000ff;">function</span><span style="color: #000000;">() {
                    alert(</span>'我是按钮'<span style="color: #000000;">)
                }
            }
        ]

    }
    onBackaction() {
        console.log(</span>'返回'<span style="color: #000000;">)
    }
    render() {
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;Header right={<span style="color: #0000ff;">this</span>.state.right} title={<span style="color: #0000ff;">this</span>.state.title} backaction={<span style="color: #0000ff;">this</span>.onBackaction.bind(<span style="color: #0000ff;">this</span>)} /&gt;
<span style="color: #000000;">        )
    }
}

class PageMain extends React.Component {
    constructor(props) {
        super(props);
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {};
    }
    render() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        let selectdate = <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.selectdate;;
        let month </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.month;
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;HeaderMain /&gt;
<span style="color: #000000;">        )
    }
}

ReactDOM.render(
    </span>&lt;PageMain /&gt;, document.getElementById('root')
);</pre>
</div>
<span class="cnblogs_code_collapse">index.js</span></div>
<div class="cnblogs_code">
<pre>import React from 'react'<span style="color: #000000;">;
export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> class Header extends React.Component {

    _renderRight() {
        let html </span>=<span style="color: #000000;"> [];
        let arr </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.right;
        </span><span style="color: #0000ff;">if</span>(!arr) <span style="color: #0000ff;">return</span><span style="color: #000000;">;

        </span><span style="color: #0000ff;">for</span>(let i = 0, len = arr.length; i &lt; len; i++<span style="color: #000000;">) {
            let item </span>=<span style="color: #000000;"> arr[i];
            html.push(   
                </span>&lt;span onClick={item.callback} key={i} className={item.value ? 'cm-header-btn fr' : 'cm-header-icon fr'} &gt;<span style="color: #000000;">
                    {item.value </span>? item.value : &lt;i className={'icon-' + item.tagname}&gt;&lt;/i&gt;}
                &lt;/span&gt;
<span style="color: #000000;">            )
        }
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> html;
    }

    onClick() {
        </span><span style="color: #0000ff;">if</span>(<span style="color: #0000ff;">this</span><span style="color: #000000;">.props.backaction) {
            </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.props.backaction();
        }
    }

    render() {
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;div className="cm-header"&gt;<span style="color: #000000;">
                {</span><span style="color: #0000ff;">this</span><span style="color: #000000;">._renderRight()}
                </span>&lt;span className=" cm-header-icon fl  js_back" onClick={<span style="color: #0000ff;">this</span>.onClick.bind(<span style="color: #0000ff;">this</span>)} &gt;
                    &lt;i className="icon-back"&gt;&lt;/i&gt;
                &lt;/span&gt;
                &lt;h1 className="cm-page-title js_title"&gt;<span style="color: #000000;">
                    {</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.props.title}
                </span>&lt;/h1&gt;
            &lt;/div&gt;
<span style="color: #000000;">        )
    }
}</span></pre>
</div>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181231153524720-1543451189.png" alt="" /></p>
<p>就这样按钮和点击时候的事件回调都做好了，这里图标有点丑这个事情大家就别关注了，注意这里是一种规则，设定了规则后按照规则写代码后续会极大提高工作效率，到此我们header部分的代码就完成了，很是轻松加愉快啊！！！</p>
<h2>列表组件</h2>
<p>列表组件这里涉及到部分业务代码了，因为存在请求后端数据了，于是我们就比较尴尬了，因为我一点点都不想去为了写一个demo而去写建立数据库或者写代码，于是我们这里使用mock搞定数据部分，工欲善其事必先利其器，我们这里首先将数据部分解决掉（PS：因为原来项目的接口不能访问，所以直接胡乱mock数据，这样也许会造成之前做的日历没有多大的意义，事实上数据应该是用日期参数请求的）</p>
<p>现在想做假数据已经有很多成熟的平台了，比如这个：<a href="https://www.easy-mock.com" target="_blank">https://www.easy-mock.com</a>，使用起来非常简单，大家去看看他的教程就行，我们这里直接使用之：</p>
<p>现在访问这个url就能看到我们的列表数据：<a href="https://www.easy-mock.com/mock/5c29d45956db174d47ce162a/example_copy/train/list#!method=get" target="_blank">https://www.easy-mock.com/mock/5c29d45956db174d47ce162a/example_copy/train/list#!method=get</a></p>
<p>在react中我们使用fetch获取数据，这里直接上代码了：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">fetch(
    </span>'https://www.easy-mock.com/mock/5c29d45956db174d47ce162a/example_copy/train/list'<span style="color: #000000;">
)
.then(res </span>=&gt;<span style="color: #000000;"> res.json())
.then(data </span>=&gt;<span style="color: #000000;"> {
        console.log(data)
})</span></pre>
</div>
<p>这样就会将我们的数据打印到控制台，但是实际项目中我们不会这样请求数据，而会对他进行两层封装，第一层封装隐藏fetch，让我们无论是ajax或者fetch都可以，第二层是要给他加上缓存功能比如我们的localstorage，包括一些公告参数处理撒的，所以我们会在我们的目录中新增data目录专门用来处理数据请求部分，甚至我们会为没一个数据请求建立一个&ldquo;实体&rdquo;，让各个页面重复调用，我这里偷懒就直接将之前微信小程序的请求模块和换成模块拿过来使用即可：</p>
<div class="cnblogs_code">
<pre>import listModel from './data/demo'<span style="color: #000000;">;
listModel.setParam({
    a: </span>1<span style="color: #000000;">,
    b: </span>'aa'<span style="color: #000000;">
});

listModel.execute(</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (data) {
    console.log(data)
})</span></pre>
</div>
<div class="cnblogs_code" onclick="cnblogs_code_show('2d27f899-c78d-46f0-a84d-38c67d53c431')"><img id="code_img_closed_2d27f899-c78d-46f0-a84d-38c67d53c431" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_2d27f899-c78d-46f0-a84d-38c67d53c431" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('2d27f899-c78d-46f0-a84d-38c67d53c431',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_2d27f899-c78d-46f0-a84d-38c67d53c431" class="cnblogs_code_hide">
<pre>export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class Model {
  constructor() {
    </span><span style="color: #0000ff;">this</span>.url = ''<span style="color: #000000;">;
    </span><span style="color: #0000ff;">this</span>.param =<span style="color: #000000;"> {};
    </span><span style="color: #0000ff;">this</span>.validates =<span style="color: #000000;"> [];
    </span><span style="color: #0000ff;">this</span>.type = 'GET'<span style="color: #000000;">;
  }
  pushValidates(handler) {
    </span><span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> handler === 'function'<span style="color: #000000;">) {
      </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.validates.push(handler);
    }
  }
  setParam(key, val) {
    </span><span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> key === 'object'<span style="color: #000000;">) {
      Object.assign(</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.param, key);
    } </span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
      </span><span style="color: #0000ff;">this</span>.param[key] =<span style="color: #000000;"> val;
    }
  }
  </span><span style="color: #008000;">//</span><span style="color: #008000;">@override</span>
<span style="color: #000000;">  buildurl() {
    </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">this</span><span style="color: #000000;">.url;
  }
  onDataSuccess() {
  }
  </span><span style="color: #008000;">//</span><span style="color: #008000;">执行数据请求逻辑</span>
<span style="color: #000000;">  execute(onComplete, onError) {
    let scope </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">;
    let _success </span>= <span style="color: #0000ff;">function</span><span style="color: #000000;"> (data) {
      let _data </span>=<span style="color: #000000;"> data;
      </span><span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> data == 'string') _data =<span style="color: #000000;"> JSON.parse(data);

      </span><span style="color: #008000;">//</span><span style="color: #008000;"> @description 开发者可以传入一组验证方法进行验证</span>
      <span style="color: #0000ff;">for</span> (let i = 0, len = scope.validates.length; i &lt; len; i++<span style="color: #000000;">) {
        </span><span style="color: #0000ff;">if</span> (!<span style="color: #000000;">scope.validates[i](data)) {
          </span><span style="color: #008000;">//</span><span style="color: #008000;"> @description 如果一个验证不通过就返回</span>
          <span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> onError === 'function'<span style="color: #000000;">) {
            </span><span style="color: #0000ff;">return</span> onError.call(scope || <span style="color: #0000ff;">this</span><span style="color: #000000;">, _data, data);
          } </span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
            </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">false</span><span style="color: #000000;">;
          }
        }
      }

      </span><span style="color: #008000;">//</span><span style="color: #008000;"> @description 对获取的数据做字段映射</span>
      let datamodel = <span style="color: #0000ff;">typeof</span> scope.dataformat === 'function' ?<span style="color: #000000;"> scope.dataformat(_data) : _data;

      </span><span style="color: #0000ff;">if</span><span style="color: #000000;"> (scope.onDataSuccess) scope.onDataSuccess.call(scope, datamodel, data);
      </span><span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> onComplete === 'function'<span style="color: #000000;">) {
        onComplete.call(scope, datamodel, data);
      }
    };
    </span><span style="color: #0000ff;">this</span><span style="color: #000000;">._sendRequest(_success);
  }

  _getParamStr(s) {
    let str </span>= '', f = <span style="color: #0000ff;">false</span><span style="color: #000000;">;
    
    </span><span style="color: #0000ff;">for</span> (let k <span style="color: #0000ff;">in</span> <span style="color: #0000ff;">this</span><span style="color: #000000;">.param) {
      f </span>= <span style="color: #0000ff;">true</span><span style="color: #000000;">;
      str </span>= str + k + '=' + (<span style="color: #0000ff;">typeof</span> <span style="color: #0000ff;">this</span>.param[k] === 'object' ? JSON.stringify(<span style="color: #0000ff;">this</span>.param[k]) : <span style="color: #0000ff;">this</span>.param[k])  +<span style="color: #000000;"> s;
    }
    </span><span style="color: #0000ff;">if</span>(f) str = str.substr(0, str.length - 1<span style="color: #000000;">);
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> str;
  }

  </span><span style="color: #008000;">//</span><span style="color: #008000;">删除过期缓存</span>
<span style="color: #000000;">  _sendRequest(callback) {
    let url </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.buildurl();
    let param </span>=<span style="color: #000000;"> {
      method: </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.type,
      headers: {
        </span>'Content-Type': 'application/json;charset=UTF-8'<span style="color: #000000;">
      },
      mode: </span>'cors'<span style="color: #000000;">,
      cache: </span>'no-cache'<span style="color: #000000;">
    };
    </span><span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">this</span>.type === 'POST'<span style="color: #000000;">) {
      param.body </span>= JSON.stringify(<span style="color: #0000ff;">this</span><span style="color: #000000;">.param);
    } </span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
      </span><span style="color: #0000ff;">if</span> (url.search(/\?/) === -1<span style="color: #000000;">) {
        url </span>+= '?' + <span style="color: #0000ff;">this</span>._getParamStr('&amp;'<span style="color: #000000;">)
      } </span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
        url </span>+= '&amp;' + <span style="color: #0000ff;">this</span>._getParamStr('&amp;'<span style="color: #000000;">)
      }
    }

    fetch(url, param)
      .then(res </span>=&gt;<span style="color: #000000;"> res.json())
      .then((data) </span>=&gt;<span style="color: #000000;"> {
        callback </span>&amp;&amp;<span style="color: #000000;"> callback(data);
      })

    </span><span style="color: #008000;">//</span><span style="color: #008000;">小程序模块</span>
    <span style="color: #008000;">//</span><span style="color: #008000;"> wx.request({</span>
    <span style="color: #008000;">//</span><span style="color: #008000;">   url: this.buildurl(),</span>
    <span style="color: #008000;">//</span><span style="color: #008000;">   data: this.param,</span>
    <span style="color: #008000;">//</span><span style="color: #008000;">   success: function success(data) {</span>
    <span style="color: #008000;">//</span><span style="color: #008000;">     callback &amp;&amp; callback(data);</span>
    <span style="color: #008000;">//</span><span style="color: #008000;">   }</span>
    <span style="color: #008000;">//</span><span style="color: #008000;"> });</span>
<span style="color: #000000;">
  }
}</span></pre>
</div>
<span class="cnblogs_code_collapse">view code</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('d57eae49-b87c-4524-bbe9-b0c37c531fea')"><img id="code_img_closed_d57eae49-b87c-4524-bbe9-b0c37c531fea" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_d57eae49-b87c-4524-bbe9-b0c37c531fea" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('d57eae49-b87c-4524-bbe9-b0c37c531fea',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_d57eae49-b87c-4524-bbe9-b0c37c531fea" class="cnblogs_code_hide">
<pre><span style="color: #008000;">//</span><span style="color: #008000;">处理微信小程序兼容</span>
let wx =<span style="color: #000000;"> {
  getStorageSync: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (key) {
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> localStorage.getItem(key)
  },
  setStorage: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (o) {
    let k </span>=<span style="color: #000000;"> o.key;
    let v </span>=<span style="color: #000000;"> JSON.stringify(o.data)
    let callback </span>=<span style="color: #000000;"> o.callback;
    localStorage.setItem(k, v);
    callback </span>&amp;&amp;<span style="color: #000000;"> callback();
  },
  getStorage: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (key, callback) {
    let data </span>=<span style="color: #000000;"> localStorage.getItem(key);
    callback(data);
  }
}

export </span><span style="color: #0000ff;">default</span><span style="color: #000000;"> class Store {
  constructor(opts) {
    </span><span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> opts === 'string') <span style="color: #0000ff;">this</span>.key =<span style="color: #000000;"> opts;
    </span><span style="color: #0000ff;">else</span> Object.assign(<span style="color: #0000ff;">this</span><span style="color: #000000;">, opts);

    </span><span style="color: #008000;">//</span><span style="color: #008000;">如果没有传过期时间,则默认30分钟</span>
    <span style="color: #0000ff;">if</span> (!<span style="color: #0000ff;">this</span>.lifeTime) <span style="color: #0000ff;">this</span>.lifeTime = 1<span style="color: #000000;">;

    </span><span style="color: #008000;">//</span><span style="color: #008000;">本地缓存用以存放所有localstorage键值与过期日期的映射</span>
    <span style="color: #0000ff;">this</span>._keyCache = 'SYSTEM_KEY_TIMEOUT_MAP'<span style="color: #000000;">;

  }
  </span><span style="color: #008000;">//</span><span style="color: #008000;">获取过期时间,单位为毫秒</span>
<span style="color: #000000;">  _getDeadline() {
    </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">this</span>.lifeTime * 60 * 1000<span style="color: #000000;">;
  }

  </span><span style="color: #008000;">//</span><span style="color: #008000;">获取一个数据缓存对象,存可以异步,获取我同步即可</span>
<span style="color: #000000;">  get(sign) {
    let key </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.key;
    let now </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date().getTime();
    </span><span style="color: #0000ff;">var</span> data =<span style="color: #000000;"> wx.getStorageSync(key);
    </span><span style="color: #0000ff;">if</span> (!data) <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">null</span><span style="color: #000000;">;
    data </span>=<span style="color: #000000;"> JSON.parse(data);
    </span><span style="color: #008000;">//</span><span style="color: #008000;">数据过期</span>
    <span style="color: #0000ff;">if</span> (data.deadLine &lt;<span style="color: #000000;"> now) {
      </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.removeOverdueCache();
      </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">null</span><span style="color: #000000;">;
    }

    </span><span style="color: #0000ff;">if</span><span style="color: #000000;"> (data.sign) {
      </span><span style="color: #0000ff;">if</span> (sign === data.sign) <span style="color: #0000ff;">return</span><span style="color: #000000;"> data.data;
      </span><span style="color: #0000ff;">else</span> <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">null</span><span style="color: #000000;">;
    }
    </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">null</span><span style="color: #000000;">;
  }

  </span><span style="color: #008000;">/*</span><span style="color: #008000;">产出页面组件需要的参数
  sign 为格式化后的请求参数，用于同一请求不同参数时候返回新数据，比如列表为北京的城市，后切换为上海，会判断tag不同而更新缓存数据，tag相当于签名
  每一键值只会缓存一条信息
  </span><span style="color: #008000;">*/</span><span style="color: #000000;">
  set(data, sign) {
    let timeout </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date();
    let time </span>= timeout.setTime(timeout.getTime() + <span style="color: #0000ff;">this</span><span style="color: #000000;">._getDeadline());
    </span><span style="color: #0000ff;">this</span><span style="color: #000000;">._saveData(data, time, sign);
  }
  _saveData(data, time, sign) {
    let key </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.key;
    let entity </span>=<span style="color: #000000;"> {
      deadLine: time,
      data: data,
      sign: sign
    };
    let scope </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">;

    wx.setStorage({
      key: key,
      data: JSON.stringify(entity),
      success: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
        </span><span style="color: #008000;">//</span><span style="color: #008000;">每次真实存入前,需要往系统中存储一个清单</span>
<span style="color: #000000;">        scope._saveSysList(key, entity.deadLine);
      }
    });
  }
  _saveSysList(key, timeout) {
    </span><span style="color: #0000ff;">if</span> (!key || !timeout || timeout &lt; <span style="color: #0000ff;">new</span> Date().getTime()) <span style="color: #0000ff;">return</span><span style="color: #000000;">;
    let keyCache </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">._keyCache;
    wx.getStorage({
      key: keyCache,
      complete: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (data) {
        let oldData </span>=<span style="color: #000000;"> {};
        </span><span style="color: #0000ff;">if</span> (data.data) oldData =<span style="color: #000000;"> JSON.parse(data.data);
        oldData[key] </span>=<span style="color: #000000;"> timeout;
        wx.setStorage({
          key: keyCache,
          data: JSON.stringify(oldData)
        });
      }
    });
  }
  </span><span style="color: #008000;">//</span><span style="color: #008000;">删除过期缓存</span>
<span style="color: #000000;">  removeOverdueCache() {
    let now </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date().getTime();
    let keyCache </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">._keyCache;
    wx.getStorage({
      key: keyCache,
      success: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (data) {
        </span><span style="color: #0000ff;">if</span> (data &amp;&amp; data.data) data =<span style="color: #000000;"> JSON.parse(data.data);
        </span><span style="color: #0000ff;">for</span> (let k <span style="color: #0000ff;">in</span><span style="color: #000000;"> data) {
          </span><span style="color: #0000ff;">if</span> (data[k] &lt;<span style="color: #000000;"> now) {
            </span><span style="color: #0000ff;">delete</span><span style="color: #000000;"> data[k];
            wx.removeStorage({
              key: k,
              success: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () { }
            });
          }
        }
        wx.setStorage({
          key: keyCache,
          data: JSON.stringify(data)
        });
      }
    });
  }

}</span></pre>
</div>
<span class="cnblogs_code_collapse">View Code</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('a05b4e43-7a2b-4474-ba6c-98829e417f89')"><img id="code_img_closed_a05b4e43-7a2b-4474-ba6c-98829e417f89" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_a05b4e43-7a2b-4474-ba6c-98829e417f89" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('a05b4e43-7a2b-4474-ba6c-98829e417f89',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_a05b4e43-7a2b-4474-ba6c-98829e417f89" class="cnblogs_code_hide">
<pre><span style="color: #008080;">  1</span> import Model from './abstractmodel'<span style="color: #000000;">;
</span><span style="color: #008080;">  2</span> import Store from './abstractstore'<span style="color: #000000;">;
</span><span style="color: #008080;">  3</span> 
<span style="color: #008080;">  4</span> <span style="color: #000000;">class DemoModel extends Model {
</span><span style="color: #008080;">  5</span> <span style="color: #000000;">  constructor() {
</span><span style="color: #008080;">  6</span> <span style="color: #000000;">    super();
</span><span style="color: #008080;">  7</span>     let scope = <span style="color: #0000ff;">this</span><span style="color: #000000;">;
</span><span style="color: #008080;">  8</span>     <span style="color: #0000ff;">this</span>.domain = 'https://www.easy-mock.com/mock/5c29d45956db174d47ce162a/example_copy'<span style="color: #000000;">;
</span><span style="color: #008080;">  9</span>     <span style="color: #0000ff;">this</span>.param =<span style="color: #000000;"> {
</span><span style="color: #008080;"> 10</span> <span style="color: #000000;">      head: {
</span><span style="color: #008080;"> 11</span>         version: '1.0.1'<span style="color: #000000;">,
</span><span style="color: #008080;"> 12</span>         ct: 'ios'
<span style="color: #008080;"> 13</span> <span style="color: #000000;">      }
</span><span style="color: #008080;"> 14</span> <span style="color: #000000;">    };
</span><span style="color: #008080;"> 15</span> 
<span style="color: #008080;"> 16</span>     <span style="color: #008000;">//</span><span style="color: #008000;">如果需要缓存,可以在此设置缓存对象</span>
<span style="color: #008080;"> 17</span>     <span style="color: #0000ff;">this</span>.cacheData = <span style="color: #0000ff;">null</span><span style="color: #000000;">;
</span><span style="color: #008080;"> 18</span> 
<span style="color: #008080;"> 19</span>     <span style="color: #0000ff;">this</span>.pushValidates(<span style="color: #0000ff;">function</span><span style="color: #000000;"> (data) {
</span><span style="color: #008080;"> 20</span>       <span style="color: #0000ff;">return</span><span style="color: #000000;"> scope._baseDataValidate(data);
</span><span style="color: #008080;"> 21</span> <span style="color: #000000;">    });
</span><span style="color: #008080;"> 22</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 23</span> 
<span style="color: #008080;"> 24</span>   <span style="color: #008000;">//</span><span style="color: #008000;">首轮处理返回数据，检查错误码做统一验证处理</span>
<span style="color: #008080;"> 25</span> <span style="color: #000000;">  _baseDataValidate(data) {
</span><span style="color: #008080;"> 26</span>     <span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> data === 'string') data =<span style="color: #000000;"> JSON.parse(data);
</span><span style="color: #008080;"> 27</span>     <span style="color: #0000ff;">if</span> (data.errno === 0<span style="color: #000000;">) {
</span><span style="color: #008080;"> 28</span>       <span style="color: #0000ff;">if</span> (data.data) data =<span style="color: #000000;"> data.data;
</span><span style="color: #008080;"> 29</span>       <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">true</span><span style="color: #000000;">;
</span><span style="color: #008080;"> 30</span> <span style="color: #000000;">    }
</span><span style="color: #008080;"> 31</span>     <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">false</span><span style="color: #000000;">;
</span><span style="color: #008080;"> 32</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 33</span> 
<span style="color: #008080;"> 34</span> <span style="color: #000000;">  dataformat(data) {
</span><span style="color: #008080;"> 35</span>     <span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">typeof</span> data === 'string') data =<span style="color: #000000;"> JSON.parse(data);
</span><span style="color: #008080;"> 36</span>     <span style="color: #0000ff;">if</span> (data.data) data =<span style="color: #000000;"> data.data;
</span><span style="color: #008080;"> 37</span>     <span style="color: #0000ff;">if</span> (data.data) data =<span style="color: #000000;"> data.data;
</span><span style="color: #008080;"> 38</span>     <span style="color: #0000ff;">return</span><span style="color: #000000;"> data;
</span><span style="color: #008080;"> 39</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 40</span> 
<span style="color: #008080;"> 41</span> <span style="color: #000000;">  buildurl() {
</span><span style="color: #008080;"> 42</span>     <span style="color: #0000ff;">return</span> <span style="color: #0000ff;">this</span>.domain + <span style="color: #0000ff;">this</span><span style="color: #000000;">.url;
</span><span style="color: #008080;"> 43</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 44</span> 
<span style="color: #008080;"> 45</span> <span style="color: #000000;">  getSign() {
</span><span style="color: #008080;"> 46</span>     <span style="color: #0000ff;">return</span> JSON.stringify(<span style="color: #0000ff;">this</span><span style="color: #000000;">.param);
</span><span style="color: #008080;"> 47</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 48</span> <span style="color: #000000;">  onDataSuccess(fdata, data) {
</span><span style="color: #008080;"> 49</span>     <span style="color: #0000ff;">if</span> (<span style="color: #0000ff;">this</span>.cacheData &amp;&amp; <span style="color: #0000ff;">this</span><span style="color: #000000;">.cacheData.set)
</span><span style="color: #008080;"> 50</span>       <span style="color: #0000ff;">this</span>.cacheData.set(fdata, <span style="color: #0000ff;">this</span><span style="color: #000000;">.getSign());
</span><span style="color: #008080;"> 51</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 52</span> 
<span style="color: #008080;"> 53</span>   <span style="color: #008000;">//</span><span style="color: #008000;">如果有缓存直接读取缓存,没有才请求</span>
<span style="color: #008080;"> 54</span> <span style="color: #000000;">  execute(onComplete, ajaxOnly) {
</span><span style="color: #008080;"> 55</span>     let data = <span style="color: #0000ff;">null</span><span style="color: #000000;">;
</span><span style="color: #008080;"> 56</span>     <span style="color: #0000ff;">if</span> (!ajaxOnly &amp;&amp; <span style="color: #0000ff;">this</span>.cacheData &amp;&amp; <span style="color: #0000ff;">this</span><span style="color: #000000;">.cacheData.get) {
</span><span style="color: #008080;"> 57</span>       data = <span style="color: #0000ff;">this</span>.cacheData.get(<span style="color: #0000ff;">this</span><span style="color: #000000;">.getSign());
</span><span style="color: #008080;"> 58</span>       <span style="color: #0000ff;">if</span><span style="color: #000000;"> (data) {
</span><span style="color: #008080;"> 59</span> <span style="color: #000000;">        onComplete(data);
</span><span style="color: #008080;"> 60</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;">;
</span><span style="color: #008080;"> 61</span> <span style="color: #000000;">      }
</span><span style="color: #008080;"> 62</span> <span style="color: #000000;">    }
</span><span style="color: #008080;"> 63</span> <span style="color: #000000;">    super.execute(onComplete);
</span><span style="color: #008080;"> 64</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 65</span> 
<span style="color: #008080;"> 66</span> <span style="color: #000000;">}
</span><span style="color: #008080;"> 67</span> 
<span style="color: #008080;"> 68</span> <span style="color: #000000;">class ListStore extends Store {
</span><span style="color: #008080;"> 69</span> <span style="color: #000000;">  constructor() {
</span><span style="color: #008080;"> 70</span> <span style="color: #000000;">    super();
</span><span style="color: #008080;"> 71</span>     <span style="color: #0000ff;">this</span>.key = 'DEMO_LIST'<span style="color: #000000;">;
</span><span style="color: #008080;"> 72</span>     <span style="color: #008000;">//</span><span style="color: #008000;">30分钟过期时间</span>
<span style="color: #008080;"> 73</span>     <span style="color: #0000ff;">this</span>.lifeTime = 30<span style="color: #000000;">;
</span><span style="color: #008080;"> 74</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 75</span> <span style="color: #000000;">}
</span><span style="color: #008080;"> 76</span> 
<span style="color: #008080;"> 77</span> <span style="color: #000000;">class ListModel extends DemoModel {
</span><span style="color: #008080;"> 78</span> <span style="color: #000000;">  constructor() {
</span><span style="color: #008080;"> 79</span> <span style="color: #000000;">    super();
</span><span style="color: #008080;"> 80</span>     <span style="color: #0000ff;">this</span>.url = '/train/list'<span style="color: #000000;">;
</span><span style="color: #008080;"> 81</span>     <span style="color: #0000ff;">this</span>.type = 'GET'<span style="color: #000000;">;
</span><span style="color: #008080;"> 82</span>     <span style="color: #008000;">//</span><span style="color: #008000;"> this.type = 'POST';</span>
<span style="color: #008080;"> 83</span> 
<span style="color: #008080;"> 84</span>     <span style="color: #0000ff;">this</span>.cacheData = <span style="color: #0000ff;">new</span><span style="color: #000000;"> ListStore;
</span><span style="color: #008080;"> 85</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 86</span>   <span style="color: #008000;">//</span><span style="color: #008000;">每次数据访问成功，错误码为0时皆会执行这个回调</span>
<span style="color: #008080;"> 87</span> <span style="color: #000000;">  onDataSuccess(fdata, data) {
</span><span style="color: #008080;"> 88</span> <span style="color: #000000;">    super.onDataSuccess(fdata, data);
</span><span style="color: #008080;"> 89</span>     <span style="color: #008000;">//</span><span style="color: #008000;">开始执行自我逻辑</span>
<span style="color: #008080;"> 90</span>     let o =<span style="color: #000000;"> {
</span><span style="color: #008080;"> 91</span>       _indate: <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date().getTime()
</span><span style="color: #008080;"> 92</span> <span style="color: #000000;">    };
</span><span style="color: #008080;"> 93</span>     <span style="color: #008000;">//</span><span style="color: #008000;"> for (let k in fdata) {</span>
<span style="color: #008080;"> 94</span>     <span style="color: #008000;">//</span><span style="color: #008000;">   o[k] = typeof fdata[k];</span>
<span style="color: #008080;"> 95</span>     <span style="color: #008000;">//</span><span style="color: #008000;"> }</span>
<span style="color: #008080;"> 96</span>     <span style="color: #008000;">//</span><span style="color: #008000;">执行数据上报逻辑</span>
<span style="color: #008080;"> 97</span>     console.log('执行数据上报逻辑'<span style="color: #000000;">, o);
</span><span style="color: #008080;"> 98</span> <span style="color: #000000;">  }
</span><span style="color: #008080;"> 99</span> <span style="color: #000000;">}
</span><span style="color: #008080;">100</span> 
<span style="color: #008080;">101</span> let listModel = <span style="color: #0000ff;">new</span><span style="color: #000000;"> ListModel()
</span><span style="color: #008080;">102</span> 
<span style="color: #008080;">103</span> export <span style="color: #0000ff;">default</span> listModel</pre>
</div>
<span class="cnblogs_code_collapse">View Code</span></div>
<p>这里data目录是，然后可以看到数据请求成功，并且localstrage中有数据了：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">data
├── abstractmodel.js
├── abstractstore.js
└── demo.js</span></pre>
</div>
<p>有了数据后，我们来完善我们的列表，因为数据原因，我们这里便不做滚动分页功能了，一般来说列表类组件特点还是比较突出的：需要提供一个数据请求模块以及一个数据处理器，最后加一个模板就可以完成所有功能了，这里还是先来实现列表部分代码，这个列表组件因为涉及的业务比较多而且每个页面的列表变化也比较大，我们暂且将之放到ui目录，后续看看这块怎么处理一下，我们依然先在这里建立list目录：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">class PageMain extends React.Component {
    constructor(props) {
        super(props);
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {};
    }
    render() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;div class="page-list cm-page"&gt;
                &lt;HeaderMain /&gt;
                &lt;div className="calendar-bar-wrapper js_calendar_wrapper"&gt;
                &lt;/div&gt;
                &lt;List /&gt;
            &lt;/div&gt;
<span style="color: #000000;">        )
    }
}
ReactDOM.render(
    </span>&lt;PageMain /&gt;, document.getElementById('root')
);</pre>
</div>
<div class="cnblogs_code" onclick="cnblogs_code_show('78a78de9-60e7-4cc0-a91b-2bfea3a69152')"><img id="code_img_closed_78a78de9-60e7-4cc0-a91b-2bfea3a69152" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_78a78de9-60e7-4cc0-a91b-2bfea3a69152" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('78a78de9-60e7-4cc0-a91b-2bfea3a69152',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_78a78de9-60e7-4cc0-a91b-2bfea3a69152" class="cnblogs_code_hide">
<pre><span style="color: #008080;"> 1</span> import React from 'react'<span style="color: #000000;">;
</span><span style="color: #008080;"> 2</span> export <span style="color: #0000ff;">default</span><span style="color: #000000;"> class List extends React.Component {
</span><span style="color: #008080;"> 3</span> 
<span style="color: #008080;"> 4</span> <span style="color: #000000;">    render() {
</span><span style="color: #008080;"> 5</span>         <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
</span><span style="color: #008080;"> 6</span>             &lt;ul class="bus-list js_bus_list "&gt;
<span style="color: #008080;"> 7</span>                 &lt;li data-index="0" data-dstation="上海南" class="bus-list-item "&gt;
<span style="color: #008080;"> 8</span>                     &lt;div class="bus-seat"&gt;
<span style="color: #008080;"> 9</span>                         &lt;span class=" fl"&gt;K1805 | 其它&lt;/span&gt;&lt;span class=" fr"&gt;2小时7分 &lt;/span&gt;
<span style="color: #008080;">10</span>                     &lt;/div&gt;
<span style="color: #008080;">11</span>                     &lt;div class="detail"&gt;
<span style="color: #008080;">12</span>                         &lt;div class="sub-list set-out"&gt;
<span style="color: #008080;">13</span>                             &lt;span class="bus-go-off"&gt;04:22&lt;/span&gt; &lt;span class="start"&gt;&lt;span class="icon-circle s-icon1"&gt;
<span style="color: #008080;">14</span>                             &lt;/span&gt;上海南&lt;/span&gt; &lt;span class="fr price"&gt;￥28.5起&lt;/span&gt;
<span style="color: #008080;">15</span>                         &lt;/div&gt;
<span style="color: #008080;">16</span>                         &lt;div class="sub-list"&gt;
<span style="color: #008080;">17</span>                             &lt;span class="bus-arrival-time"&gt;06:29&lt;/span&gt; &lt;span class="end"&gt;&lt;span class="icon-circle s-icon2"&gt;
<span style="color: #008080;">18</span>                             &lt;/span&gt;杭州&lt;/span&gt; &lt;span class="fr "&gt;2598张&lt;/span&gt;
<span style="color: #008080;">19</span>                         &lt;/div&gt;
<span style="color: #008080;">20</span>                     &lt;/div&gt;
<span style="color: #008080;">21</span>                     &lt;div class="bus-seats-info"&gt;
<span style="color: #008080;">22</span>                         &lt;span&gt;硬座(555) &lt;/span&gt;
<span style="color: #008080;">23</span>                         &lt;span&gt;硬卧(1653) &lt;/span&gt;
<span style="color: #008080;">24</span>                         &lt;span&gt;软卧(56) &lt;/span&gt;
<span style="color: #008080;">25</span>                         &lt;span&gt;无座(334) &lt;/span&gt;
<span style="color: #008080;">26</span>                     &lt;/div&gt;
<span style="color: #008080;">27</span>                 &lt;/li&gt;
<span style="color: #008080;">28</span>                 &lt;li data-index="1" data-dstation="上海南" class="bus-list-item "&gt;
<span style="color: #008080;">29</span>                     &lt;div class="bus-seat"&gt;
<span style="color: #008080;">30</span>                         &lt;span class=" fl"&gt;K1511 | 其它&lt;/span&gt;&lt;span class=" fr"&gt;1小时49分 &lt;/span&gt;
<span style="color: #008080;">31</span>                     &lt;/div&gt;
<span style="color: #008080;">32</span>                     &lt;div class="detail"&gt;
<span style="color: #008080;">33</span>                         &lt;div class="sub-list set-out"&gt;
<span style="color: #008080;">34</span>                             &lt;span class="bus-go-off"&gt;04:56&lt;/span&gt; &lt;span class="start"&gt;&lt;span class="icon-circle s-icon1"&gt;
<span style="color: #008080;">35</span>                             &lt;/span&gt;上海南&lt;/span&gt; &lt;span class="fr price"&gt;￥24.5起&lt;/span&gt;
<span style="color: #008080;">36</span>                         &lt;/div&gt;
<span style="color: #008080;">37</span>                         &lt;div class="sub-list"&gt;
<span style="color: #008080;">38</span>                             &lt;span class="bus-arrival-time"&gt;06:45&lt;/span&gt; &lt;span class="end"&gt;&lt;span class="icon-circle s-icon2"&gt;
<span style="color: #008080;">39</span>                             &lt;/span&gt;杭州东&lt;/span&gt; &lt;span class="fr "&gt;34张&lt;/span&gt;
<span style="color: #008080;">40</span>                         &lt;/div&gt;
<span style="color: #008080;">41</span>                     &lt;/div&gt;
<span style="color: #008080;">42</span>                     &lt;div class="bus-seats-info"&gt;
<span style="color: #008080;">43</span>                         &lt;span&gt;硬座(8) &lt;/span&gt;
<span style="color: #008080;">44</span>                         &lt;span&gt;硬卧(24) &lt;/span&gt;
<span style="color: #008080;">45</span>                         &lt;span&gt;软卧(2) &lt;/span&gt;
<span style="color: #008080;">46</span>                         &lt;span&gt;无座(0) &lt;/span&gt;
<span style="color: #008080;">47</span>                     &lt;/div&gt;
<span style="color: #008080;">48</span>                 &lt;/li&gt;
<span style="color: #008080;">49</span>             &lt;/ul&gt;
<span style="color: #008080;">50</span> <span style="color: #000000;">        )
</span><span style="color: #008080;">51</span> <span style="color: #000000;">    }
</span><span style="color: #008080;">52</span> }</pre>
</div>
<span class="cnblogs_code_collapse">list文件</span></div>
<p>这样一来，我们轻易的就将页面做出来了：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201812/294743-20181231190921974-261047047.png" alt="" /></p>
<p>接下来我们使用组件完成其功能，这里我们将代码做一层分离，将列表组件分成两部分，第一部分是不变放在UI中的部分，另一部分是我们要求传入的模板组件，因为每个页面的列表展示都是不一样的，于是我们先实现外层列表，这里就相当于要传递一个组件给另一个组件使用，我们简单的尝试了下可行性：</p>
<div class="cnblogs_code" onclick="cnblogs_code_show('f210270b-8722-46d8-969d-54bab8badee7')"><img id="code_img_closed_f210270b-8722-46d8-969d-54bab8badee7" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_f210270b-8722-46d8-969d-54bab8badee7" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('f210270b-8722-46d8-969d-54bab8badee7',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_f210270b-8722-46d8-969d-54bab8badee7" class="cnblogs_code_hide">
<pre><span style="color: #008000;">//</span><span style="color: #008000;">业务列表项目，因为每个页面列表展示皆不一样，所以将这段代码外放</span>
<span style="color: #000000;">class ListItem extends React.Component {
    constructor(props) {
        super(props);
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {};
    }
    render() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;li data-index="0" data-dstation="上海南" class="bus-list-item "&gt;
                &lt;div class="bus-seat"&gt;
                    &lt;span class=" fl"&gt;K1805 | 其它&lt;/span&gt;&lt;span class=" fr"&gt;2小时7分 &lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="detail"&gt;
                    &lt;div class="sub-list set-out"&gt;
                        &lt;span class="bus-go-off"&gt;04:22&lt;/span&gt; &lt;span class="start"&gt;&lt;span class="icon-circle s-icon1"&gt;
                        &lt;/span&gt;上海南&lt;/span&gt; &lt;span class="fr price"&gt;￥28.5起&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div class="sub-list"&gt;
                        &lt;span class="bus-arrival-time"&gt;06:29&lt;/span&gt; &lt;span class="end"&gt;&lt;span class="icon-circle s-icon2"&gt;
                        &lt;/span&gt;杭州&lt;/span&gt; &lt;span class="fr "&gt;2598张&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="bus-seats-info"&gt;
                    &lt;span&gt;硬座(555) &lt;/span&gt;
                    &lt;span&gt;硬卧(1653) &lt;/span&gt;
                    &lt;span&gt;软卧(56) &lt;/span&gt;
                    &lt;span&gt;无座(334) &lt;/span&gt;
                &lt;/div&gt;
            &lt;/li&gt;
<span style="color: #000000;">        )
    }
}

class PageMain extends React.Component {
    constructor(props) {
        super(props);
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {};
    }
    render() {

        let _ListItem </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.props.list;

        let list </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> _ListItem();

        </span><span style="color: #0000ff;">debugger</span><span style="color: #000000;">;

        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;div class="page-list cm-page"&gt;
                &lt;HeaderMain /&gt;
<span style="color: #000000;">                {list.render()}
                </span>&lt;div className="calendar-bar-wrapper js_calendar_wrapper"&gt;
                &lt;/div&gt;
                &lt;List /&gt;
            &lt;/div&gt;
<span style="color: #000000;">        )
    }
}
ReactDOM.render(
    </span>&lt;PageMain list={ListItem} /&gt;, document.getElementById('root')
);</pre>
</div>
<span class="cnblogs_code_collapse">View Code</span></div>
<p>证明是可行的，其实React早就知道我们有这种骚操作，所以衍生了高阶组件的概率，这里我们简单介绍下</p>
<p>PS：大家可以看到，我们文中的例子都不是生拉硬套的要应用某个知识点是确实有这种需求</p>
<h2>高阶组件-继承的应用</h2>
<p>参考：<a href="https://github.com/sunyongjian/blog/issues/25" target="_blank">https://github.com/sunyongjian/blog/issues/25</a></p>
<p>高阶组件只是名字比较高阶罢了，其实跟我们上面代码的例子差不多，每个React组件事实上都是一个js对象，我们可以实例化一下他，完成任何骚操作，但是出于规范化和代码可控（<span style="color: #ff6600; font-size: 12px;">在不非常熟悉底层代码的时候，随意使用骚操作，可能会出莫名其妙的BUG，但是也是因为莫名其妙的BUG会导致你更熟悉框架，BUG带来的框架理解有时候优于机械源码阅读，所以在非核心项目上，我们非常建议你骚操作</span>）</p>
<div class="cnblogs_code">
<pre><span style="color: #800000;">一个高阶组件只是一个包装了另一个React组件的React组件</span></pre>
</div>
<p>上面的说法有点不好理解，这里换个方式说，所谓高阶组件，就是我们有一个组件，这个时候我们会给他传递各种参数，其中一个参数是另一个React组件，并且我们需要在父组件中使用他：</p>
<div class="cnblogs_code">
<pre>const EnhancedComponent = higherOrderComponent(WrappedComponent); </pre>
</div>
<p>这个例子依旧不够清晰，我们再举个例子：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000;">class A extends React.Component {
    render() {
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;div&gt;我是组件A&lt;/div&gt;
<span style="color: #000000;">        )
    }
}
const AContainer </span>= WrappedComponent =&gt;<span style="color: #000000;"> {
    console.log(</span>'simpleHoc'<span style="color: #000000;">);
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> class extends React.Component {
        render() {
            </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
                </span>&lt;h1&gt;<span style="color: #000000;">
                    我是组件A的爸爸
                </span>&lt;WrappedComponent  {...<span style="color: #0000ff;">this</span>.props} /&gt;
                &lt;/h1&gt;
<span style="color: #000000;">            )
        }
    }
}
let Parent </span>=<span style="color: #000000;"> AContainer(A);
ReactDOM.render(
    </span>&lt;Parent /&gt;, document.getElementById('root')
);</pre>
</div>
<p>这里会输出（这里说爸爸可能不太合适，这里应该是个组合关系）：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">h1</span><span style="color: #0000ff;">&gt;</span>我是组件A的爸爸<span style="color: #0000ff;">&lt;</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;</span>我是组件A<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">div</span><span style="color: #0000ff;">&gt;&lt;/</span><span style="color: #800000;">h1</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>这里核心概念还是这里使用了一个继承解决这个问题：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">return</span><span style="color: #000000;"> class extends React.Component {
    render() {
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;ul class="bus-list js_bus_list "&gt;
                &lt;WrappedComponent  {...<span style="color: #0000ff;">this</span>.props} /&gt;
            &lt;/ul&gt;
<span style="color: #000000;">        )
    }
}</span></pre>
</div>
<p>所以，高阶组件其实并不神秘，就是实现了一个用于继承的组件，然后在子组件里面做业务性操作，在之前属于非常常规的操作，<span style="color: #ff6600;">这里推荐看一点老一点的东西，脱离框架的东西，类比帮助大家了解高阶组件</span>：<a href="https://www.cnblogs.com/yexiaochai/p/3888373.html" target="_blank">https://www.cnblogs.com/yexiaochai/p/3888373.html</a>，于是这里我们稍微改造下我们的list组件的框架结构：</p>
<p><span style="color: #ff6600;">PS：这里一定要注意，一个项目或者几个项目中，列表的大体HTML结构一定是非常一致的，这里是个规则约定，规则先与代码，先于框架</span></p>
<div class="cnblogs_code" onclick="cnblogs_code_show('88f9ffc4-4829-4dba-af66-6a23c41ced67')"><img id="code_img_closed_88f9ffc4-4829-4dba-af66-6a23c41ced67" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_88f9ffc4-4829-4dba-af66-6a23c41ced67" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('88f9ffc4-4829-4dba-af66-6a23c41ced67',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_88f9ffc4-4829-4dba-af66-6a23c41ced67" class="cnblogs_code_hide">
<pre>import React from 'react'<span style="color: #000000;">;

let ListContainer </span>= WrappedComponent =&gt;<span style="color: #000000;"> {
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> class extends React.Component {
        render() {
            </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
                </span>&lt;ul class="bus-list js_bus_list "&gt;
                    &lt;WrappedComponent  {...<span style="color: #0000ff;">this</span>.props} /&gt;
                &lt;/ul&gt;
<span style="color: #000000;">            )
        }
    }
}

export </span><span style="color: #0000ff;">default</span> ListContainer;</pre>
</div>
<span class="cnblogs_code_collapse">View Code</span></div>
<div class="cnblogs_code" onclick="cnblogs_code_show('38cb4816-65fc-4579-baf8-3a76a0af7aa8')"><img id="code_img_closed_38cb4816-65fc-4579-baf8-3a76a0af7aa8" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_38cb4816-65fc-4579-baf8-3a76a0af7aa8" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('38cb4816-65fc-4579-baf8-3a76a0af7aa8',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_38cb4816-65fc-4579-baf8-3a76a0af7aa8" class="cnblogs_code_hide">
<pre>import React from 'react'<span style="color: #000000;">;
import ReactDOM from </span>'react-dom'<span style="color: #000000;">;
import Calendar from </span>'./ui/calendar/calendar'<span style="color: #000000;">;
import Header from </span>'./ui/header/header'<span style="color: #000000;">;
import ListContainer from </span>'./ui/list/list'<span style="color: #000000;">;
import listModel from </span>'./data/demo'<span style="color: #000000;">;

listModel.setParam({
    a: </span>1<span style="color: #000000;">,
    b: </span>'aa'<span style="color: #000000;">
});

listModel.execute(</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> (data) {
    console.log(data)
})

class CalendarMain extends React.Component {
    constructor(props) {
        super(props);
        let today </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> Date().getTime();
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {
            month: </span>12<span style="color: #000000;">,
            selectdate: today
        };
    }
    preMonth() {
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
            month: </span><span style="color: #0000ff;">this</span>.state.month - 1<span style="color: #000000;">
        });
    }
    nextMonth() {
        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
            month: </span><span style="color: #0000ff;">this</span>.state.month + 1<span style="color: #000000;">
        });
    }
    ondayclick(year, month, day) {

        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.setState({
            selectdate: </span><span style="color: #0000ff;">new</span> Date(year, parseInt(month) - 1<span style="color: #000000;">, day).getTime()
        })

    }
    render() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        let selectdate = <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.selectdate;;
        let month </span>= <span style="color: #0000ff;">this</span><span style="color: #000000;">.state.month;
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;div className="calendar-wrapper-box"&gt;
                &lt;div className="box-hd"&gt;
                    &lt;span className="fl icon-back js_back " onClick={<span style="color: #0000ff;">this</span>.preMonth.bind(<span style="color: #0000ff;">this</span>)}  &gt;&lt;/span&gt;
                    &lt;span className="fr icon-next js_next" onClick={<span style="color: #0000ff;">this</span>.nextMonth.bind(<span style="color: #0000ff;">this</span>)} &gt;&lt;/span&gt;
                &lt;/div&gt;
                &lt;Calendar ondayclick={<span style="color: #0000ff;">this</span>.ondayclick.bind(<span style="color: #0000ff;">this</span>)} year="2018" month={month} selectdate={selectdate} /&gt;
            &lt;/div&gt;
<span style="color: #000000;">        )
    }
}

class HeaderMain extends React.Component {
    constructor(props) {
        super(props);

        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {
            title: </span>'我是标题'<span style="color: #000000;">
        };

        </span><span style="color: #008000;">//</span><span style="color: #008000;">这里定义，右边按钮规则</span>
        <span style="color: #0000ff;">this</span>.state.right =<span style="color: #000000;"> [
            {
                </span><span style="color: #008000;">//</span><span style="color: #008000;">希望代码执行时候的作用域</span>
                view: <span style="color: #0000ff;">this</span><span style="color: #000000;">,
                tagname: </span>'search'<span style="color: #000000;">,
                callback: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
                    console.log(</span><span style="color: #0000ff;">this</span><span style="color: #000000;">)
                    console.log(</span>'搜索'<span style="color: #000000;">)
                }
            },
            {
                view: </span><span style="color: #0000ff;">this</span><span style="color: #000000;">,
                tagname: </span>'tips'<span style="color: #000000;">,
                value: </span>'说明'<span style="color: #000000;">,
                callback: </span><span style="color: #0000ff;">function</span><span style="color: #000000;"> () {
                    alert(</span>'我是按钮'<span style="color: #000000;">)
                }
            }
        ]

    }
    onBackaction() {
        console.log(</span>'返回'<span style="color: #000000;">)
    }
    render() {
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;Header right={<span style="color: #0000ff;">this</span>.state.right} title={<span style="color: #0000ff;">this</span>.state.title} backaction={<span style="color: #0000ff;">this</span>.onBackaction.bind(<span style="color: #0000ff;">this</span>)} /&gt;
<span style="color: #000000;">        )
    }
}

</span><span style="color: #008000;">//</span><span style="color: #008000;">业务列表项目，因为每个页面列表展示皆不一样，所以将这段代码外放</span>
<span style="color: #000000;">class ListItem extends React.Component {
    constructor(props) {
        super(props);
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {};
    }
    render() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;li data-index="0" data-dstation="上海南" class="bus-list-item "&gt;
                &lt;div class="bus-seat"&gt;
                    &lt;span class=" fl"&gt;K1805 | 其它&lt;/span&gt;&lt;span class=" fr"&gt;2小时7分 &lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="detail"&gt;
                    &lt;div class="sub-list set-out"&gt;
                        &lt;span class="bus-go-off"&gt;04:22&lt;/span&gt; &lt;span class="start"&gt;&lt;span class="icon-circle s-icon1"&gt;
                        &lt;/span&gt;上海南&lt;/span&gt; &lt;span class="fr price"&gt;￥28.5起&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div class="sub-list"&gt;
                        &lt;span class="bus-arrival-time"&gt;06:29&lt;/span&gt; &lt;span class="end"&gt;&lt;span class="icon-circle s-icon2"&gt;
                        &lt;/span&gt;杭州&lt;/span&gt; &lt;span class="fr "&gt;2598张&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="bus-seats-info"&gt;
                    &lt;span&gt;硬座(555) &lt;/span&gt;
                    &lt;span&gt;硬卧(1653) &lt;/span&gt;
                    &lt;span&gt;软卧(56) &lt;/span&gt;
                    &lt;span&gt;无座(334) &lt;/span&gt;
                &lt;/div&gt;
            &lt;/li&gt;
<span style="color: #000000;">        )
    }
}

class PageMain extends React.Component {
    constructor(props) {
        super(props);
        </span><span style="color: #0000ff;">this</span>.state =<span style="color: #000000;"> {};
    }
    render() {
        let List </span>=<span style="color: #000000;"> ListContainer(ListItem);
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> today = new Date(today.getFullYear(), today.getMonth(), 1);</span>
        <span style="color: #0000ff;">return</span><span style="color: #000000;"> (
            </span>&lt;div class="page-list cm-page"&gt;
                &lt;HeaderMain /&gt;
                &lt;div className="calendar-bar-wrapper js_calendar_wrapper"&gt;
                &lt;/div&gt;
                &lt;List /&gt;
            &lt;/div&gt;
<span style="color: #000000;">        )
    }
}

ReactDOM.render(
    </span>&lt;PageMain list={ListItem} /&gt;, document.getElementById('root')
);</pre>
</div>
<span class="cnblogs_code_collapse">View Code</span></div>
<p>由此，基本框架就出来了：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201901/294743-20190102121317314-1332454109.png" alt="" width="200" /></p>
<p>我们这里继续完善这个组件即可，这里具体代码各位github上看吧：<a href="https://github.com/yexiaochai/react-demo" target="_blank">https://github.com/yexiaochai/react-demo</a></p>
<p>PS：事实上，我们index.js里面代码已经很多了，应该分离开，但是我们代码已经接近尾声就懒得分离了，<span style="color: #ff6600;">大家实际工作中一定要分离</span></p>
<p>我们代码稍作改造后就变成了这个样子（<span style="color: #ff6600; font-size: 12px;">由于只是demo，对于一些需要计算展示比如筛选硬座票数等未做实现</span>）：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201901/294743-20190102174006302-2084611765.png" alt="" width="300" /></p>
<p>至此，我们的demo就结束了，如果有必要可以添加各种筛选条件，比如这里的排序：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201901/294743-20190102174238548-2136978772.png" alt="" /></p>
<p>比如这里的筛选：</p>
<p><img src="https://img2018.cnblogs.com/blog/294743/201901/294743-20190102174304320-492138760.png" alt="" /></p>
<p>但是我们这里由于是简单的demo加之本篇博客篇幅已经很长了，我们这里就不做实现了，反正也是操作数据，就此，我们业务部分代码结束了，接下来我们来做一点工程化的操作</p>
<h2>组件样式问题</h2>
<p>可以看到，之前我们的组件样式，全部被我们柔和到了global.css或者index.css中了，对于有些工厂作业做的很好的公司，会具体分出重构工程师（写css的）和程序工程师（写js的）两个岗位，一般是重构同事将css直接交给js同事，这样做起来效率会很高，所以多数情况下，我们全局会有一个样式文件，业务页面会有一个样式文件，这其实没什么大问题，可能出现的问题请大家阅读下这篇文章：<a id="cb_post_title_url" class="postTitle2" href="https://www.cnblogs.com/yexiaochai/p/4165386.html">【前端优化之拆分CSS】前端三剑客的分分合合</a>，这里其实已经涉及到了一个工作习惯他要求我们做页面的时候就分成模块，做模块的时候要考虑模块的css，这样做也会有一个弊端就是全局性的东西就比较难过了，所以一个大项目的样式相关工作最好由一个资深一点的同事设计规则和公共的点，其次不然很容易各自为战，我们这里完成一个简单的工作，将列表部分的代码从global中分离出来，我们先找到对应的样式代码：</p>
<div class="cnblogs_code" onclick="cnblogs_code_show('702bf5a1-7e1c-4e85-ba23-9a964f91a6f3')"><img id="code_img_closed_702bf5a1-7e1c-4e85-ba23-9a964f91a6f3" class="code_img_closed" src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="" /><img id="code_img_opened_702bf5a1-7e1c-4e85-ba23-9a964f91a6f3" class="code_img_opened" style="display: none;" onclick="cnblogs_code_hide('702bf5a1-7e1c-4e85-ba23-9a964f91a6f3',event)" src="http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="" />
<div id="cnblogs_code_open_702bf5a1-7e1c-4e85-ba23-9a964f91a6f3" class="cnblogs_code_hide">
<pre><span style="color: #800000;">.page-list </span>{<span style="color: #ff0000;"> padding-bottom</span>:<span style="color: #0000ff;"> 45px</span>; }<span style="color: #800000;">


.page-list .icon-setout </span>{<span style="color: #ff0000;">
  margin</span>:<span style="color: #0000ff;"> 0 5px</span>;<span style="color: #ff0000;">
  border-color</span>:<span style="color: #0000ff;"> #00B358</span>;
}<span style="color: #800000;">

.page-list .icon-arrival </span>{<span style="color: #ff0000;">
  margin</span>:<span style="color: #0000ff;"> 0 5px</span>;<span style="color: #ff0000;">
  border-color</span>:<span style="color: #0000ff;"> #f06463</span>;
}<span style="color: #800000;">

.page-list .icon-sec </span>{<span style="color: #ff0000;">
  position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;">
  top</span>:<span style="color: #0000ff;"> -4px</span>;<span style="color: #ff0000;">
  display</span>:<span style="color: #0000ff;"> inline-block</span>;<span style="color: #ff0000;">
  width</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
  height</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
  vertical-align</span>:<span style="color: #0000ff;"> middle</span>;<span style="color: #ff0000;">
  border-left</span>:<span style="color: #0000ff;"> 1px solid</span>;<span style="color: #ff0000;">
  border-bottom</span>:<span style="color: #0000ff;"> 1px solid</span>;<span style="color: #ff0000;">
  -webkit-transform</span>:<span style="color: #0000ff;"> rotate(-45deg)</span>;<span style="color: #ff0000;">
  transform</span>:<span style="color: #0000ff;"> rotate(-45deg)</span>;<span style="color: #ff0000;">
  -webkit-box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
  box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
  margin-left</span>:<span style="color: #0000ff;"> 5px</span>;
}<span style="color: #800000;">

.page-list .active .icon-sec </span>{<span style="color: #ff0000;">
  top</span>:<span style="color: #0000ff;"> 1px</span>;<span style="color: #ff0000;">
  -webkit-transform</span>:<span style="color: #0000ff;"> rotate(135deg)</span>;<span style="color: #ff0000;">
  transform</span>:<span style="color: #0000ff;"> rotate(135deg)</span>;
}<span style="color: #800000;">

.page-list .active .icon-setout, .page-list .active .icon-arrival  </span>{<span style="color: #ff0000;">
  border-color</span>:<span style="color: #0000ff;"> #fff</span>;
}<span style="color: #800000;">

.page-list .bus-tabs.list-filter </span>{<span style="color: #ff0000;">
  position</span>:<span style="color: #0000ff;">  fixed</span>;<span style="color: #ff0000;">
  left</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
  bottom</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
  height</span>:<span style="color: #0000ff;"> 36px</span>;<span style="color: #ff0000;">
  line-height</span>:<span style="color: #0000ff;"> 36px</span>;<span style="color: #ff0000;">
  background-color</span>:<span style="color: #0000ff;"> #fcfcfc</span>;
}<span style="color: #800000;">

.page-list .bus-tabs.list-filter .tabs-item </span>{<span style="color: #ff0000;">
  border-right</span>:<span style="color: #0000ff;"> 1px solid #d2d2d2</span>;<span style="color: #ff0000;">
  border-top</span>:<span style="color: #0000ff;"> 1px solid #d2d2d2</span>;
}<span style="color: #800000;">



.page-list .bus-tabs.list-filter .tabs-item.active </span>{<span style="color: #ff0000;">
  color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
  background-color</span>:<span style="color: #0000ff;"> #00b358</span>;
}<span style="color: #800000;">

.page-list .bus-tabs.list-filter .tabs-item .line</span>{<span style="color: #ff0000;">
  height</span>:<span style="color: #0000ff;"> 22px</span>;<span style="color: #ff0000;">
  line-height</span>:<span style="color: #0000ff;"> 22px</span>;<span style="color: #ff0000;">
  text-align</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;">
  font-size</span>:<span style="color: #0000ff;"> 12px</span>;
}<span style="color: #800000;">

.page-list .bus-tabs.list-filter .tabs-item .line:last-child</span>{<span style="color: #ff0000;">
  color</span>:<span style="color: #0000ff;"> #00b358
</span>}<span style="color: #800000;">

.page-list .bus-tabs.list-filter .tabs-item.active .line:last-child</span>{<span style="color: #ff0000;">
  color</span>:<span style="color: #0000ff;"> #fff
</span>}<span style="color: #800000;">

.page-list .bus-tabs.list-filter .tabs-item .line .icon-time</span>{<span style="color: #ff0000;">
 top</span>:<span style="color: #0000ff;"> 2px</span>;<span style="color: #ff0000;">
 margin-right</span>:<span style="color: #0000ff;"> 4px</span>;
}<span style="color: #800000;">


.page-list .bus-list .bus-list-item </span>{<span style="color: #ff0000;">
 position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;">
 height</span>:<span style="color: #0000ff;"> 110px</span>;<span style="color: #ff0000;">
 background-color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;"> 
 margin</span>:<span style="color: #0000ff;"> 8px 0</span>;<span style="color: #ff0000;">
 border</span>:<span style="color: #0000ff;"> 1px solid #e5e5e5</span>;<span style="color: #ff0000;">
 border-width</span>:<span style="color: #0000ff;"> 1px 0</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-list-item.disabled, .page-list .bus-list .bus-list-item.disabled  .price </span>{<span style="color: #ff0000;">
    color</span>:<span style="color: #0000ff;"> #c5c5c5</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-seat </span>{<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 32px</span>;<span style="color: #ff0000;">
    line-height</span>:<span style="color: #0000ff;"> 32px</span>;<span style="color: #ff0000;">
    padding</span>:<span style="color: #0000ff;"> 0 15px</span>;
    
}<span style="color: #800000;">


.page-list .bus-list .bus-list-item .bus-time </span>{<span style="color: #ff0000;">
 position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">
 left</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
 width</span>:<span style="color: #0000ff;"> 67px</span>;<span style="color: #ff0000;">
 height</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">
 line-height</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">
 margin</span>:<span style="color: #0000ff;"> 15px 0</span>;<span style="color: #ff0000;">
 color</span>:<span style="color: #0000ff;"> #00b358</span>;<span style="color: #ff0000;">
 text-align</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;">
 font-size</span>:<span style="color: #0000ff;"> 20px</span>;<span style="color: #ff0000;">
 font-family</span>:<span style="color: #0000ff;"> Arial</span>;
}<span style="color: #800000;">


.page-list .bus-list .bus-list-item .detail </span>{<span style="color: #ff0000;">
 margin</span>:<span style="color: #0000ff;"> 0 15px 0 15px</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-seats-info </span>{<span style="color: #ff0000;">
 margin</span>:<span style="color: #0000ff;"> 0 15px 0 15px</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-list-item .detail  .sub-list</span>{<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 26px</span>;
}<span style="color: #800000;">

.page-list .sub-list.set-out </span>{<span style="color: #ff0000;">
 font-size</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;">   
 font-weight</span>:<span style="color: #0000ff;"> 600</span>;
}<span style="color: #800000;">


.page-list .bus-list .bus-go-off,.page-list .bus-list .bus-arrival-time</span>{<span style="color: #ff0000;">
   display</span>:<span style="color: #0000ff;"> inline-block</span>;<span style="color: #ff0000;">
   width</span>:<span style="color: #0000ff;">   50px</span>; 
    
}<span style="color: #800000;">


.page-list .bus-list .bus-list-item .price </span>{<span style="color: #ff0000;">
 font-family</span>:<span style="color: #0000ff;"> Arial</span>;<span style="color: #ff0000;">
 color</span>:<span style="color: #0000ff;"> #fd8f01</span>;<span style="color: #ff0000;">
 font-size</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;">
 font-weight</span>:<span style="color: #0000ff;"> 600</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-list-item.disabled .ticket </span>{<span style="color: #ff0000;">
 display</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-list-item .ticket </span>{<span style="color: #ff0000;">
  color</span>:<span style="color: #0000ff;"> #fd8f01</span>;<span style="color: #ff0000;">
  font-size</span>:<span style="color: #0000ff;"> 12px</span>;<span style="color: #ff0000;">
  border</span>:<span style="color: #0000ff;"> 1px solid #fd8f01</span>;<span style="color: #ff0000;">
  padding</span>:<span style="color: #0000ff;"> 1px 4px</span>;<span style="color: #ff0000;">
  border-radius</span>:<span style="color: #0000ff;"> 5px</span>;<span style="color: #ff0000;">
  font-family</span>:<span style="color: #0000ff;"> Arial</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-list-item.disabled .ticket </span>{<span style="color: #ff0000;">
  color</span>:<span style="color: #0000ff;"> #c5c5c5</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-list-item .s-icon1 </span>{<span style="color: #ff0000;">
  margin</span>:<span style="color: #0000ff;"> 0 5px</span>;<span style="color: #ff0000;">
  border-color</span>:<span style="color: #0000ff;"> #00B358</span>;
}<span style="color: #800000;">

.page-list .bus-list .bus-list-item .s-icon2 </span>{<span style="color: #ff0000;">
  margin</span>:<span style="color: #0000ff;"> 0 5px</span>;<span style="color: #ff0000;">
  border-color</span>:<span style="color: #0000ff;"> #f06463</span>;
}<span style="color: #800000;">

.page-list .calendar-bar-wrapper </span>{<span style="color: #ff0000;">
  height</span>:<span style="color: #0000ff;"> 52px</span>;
}<span style="color: #800000;">

.page-list .calendar-bar </span>{<span style="color: #ff0000;">
  height</span>:<span style="color: #0000ff;"> 36px</span>;<span style="color: #ff0000;">
  line-height</span>:<span style="color: #0000ff;"> 36px</span>;<span style="color: #ff0000;">
  background-color</span>:<span style="color: #0000ff;"> #08c563</span>;<span style="color: #ff0000;">
  color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
  top</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">
  left</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
  position</span>:<span style="color: #0000ff;"> fixed</span>;
}<span style="color: #800000;">

.page-list  .calendar-bar .tabs-item </span>{<span style="color: #ff0000;">
  font-size</span>:<span style="color: #0000ff;"> 13px</span>;<span style="color: #ff0000;">
  border-right</span>:<span style="color: #0000ff;"> 1px solid #02ad56</span>;
}<span style="color: #800000;">

.page-list  .calendar-bar .tabs-item.disabled </span>{<span style="color: #ff0000;">
  color</span>:<span style="color: #0000ff;"> #01994c</span>;
}<span style="color: #800000;">


.baidubox .page-list .calendar-bar</span>{<span style="color: #ff0000;">
   top</span>:<span style="color: #0000ff;"> 0</span>;
 }<span style="color: #800000;">
 
 .baidubox .page-list .sort-bar</span>{<span style="color: #ff0000;">
   top</span>:<span style="color: #0000ff;"> 36px</span>;
 }<span style="color: #800000;">
 
 .page-list .sort-bar-wrapper </span>{<span style="color: #ff0000;">
   height</span>:<span style="color: #0000ff;"> 50px</span>;
 }<span style="color: #800000;">
 
.page-list .sort-bar </span>{<span style="color: #ff0000;">
  height</span>:<span style="color: #0000ff;"> 36px</span>;<span style="color: #ff0000;">
  line-height</span>:<span style="color: #0000ff;"> 36px</span>;<span style="color: #ff0000;">
  background-color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
  top</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">
  left</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
  position</span>:<span style="color: #0000ff;"> fixed</span>;<span style="color: #ff0000;">
  border-bottom</span>:<span style="color: #0000ff;"> 1px solid #EAEAEA</span>;
}<span style="color: #800000;">

.page-list .icon-sort </span>{<span style="color: #ff0000;">
    position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;">
    margin</span>:<span style="color: #0000ff;"> 0 0 0 8px</span>;<span style="color: #ff0000;">
    border-top</span>:<span style="color: #0000ff;"> 4px solid #c3c3c3</span>;<span style="color: #ff0000;">
    border-right</span>:<span style="color: #0000ff;"> 4px solid #c3c3c3</span>;<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> 4px solid #c3c3c3</span>;<span style="color: #ff0000;">
    border-left</span>:<span style="color: #0000ff;"> 4px solid #c3c3c3</span>;<span style="color: #ff0000;">
    bottom</span>:<span style="color: #0000ff;"> 1px</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> inline-block</span>;<span style="color: #ff0000;">
     -webkit-transform</span>:<span style="color: #0000ff;"> rotate(-225deg)</span>;<span style="color: #ff0000;">
    transform</span>:<span style="color: #0000ff;"> rotate(-225deg)</span>;
    
    
}<span style="color: #800000;">

.page-list .icon-sort.up </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> inline-block</span>;<span style="color: #ff0000;">
     -webkit-transform</span>:<span style="color: #0000ff;"> rotate(-225deg)</span>;<span style="color: #ff0000;">
    transform</span>:<span style="color: #0000ff;"> rotate(-225deg)</span>;<span style="color: #ff0000;">
       border-bottom</span>:<span style="color: #0000ff;"> 4px solid #02ad56</span>;<span style="color: #ff0000;">
    border-left</span>:<span style="color: #0000ff;"> 4px solid #02ad56</span>;
}<span style="color: #800000;">

.page-list .icon-sort.down </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> inline-block</span>;<span style="color: #ff0000;">
     -webkit-transform</span>:<span style="color: #0000ff;"> rotate(-45deg)</span>;<span style="color: #ff0000;">
    transform</span>:<span style="color: #0000ff;"> rotate(-45deg)</span>;<span style="color: #ff0000;">
       border-bottom</span>:<span style="color: #0000ff;"> 4px solid #02ad56</span>;<span style="color: #ff0000;">
    border-left</span>:<span style="color: #0000ff;"> 4px solid #02ad56</span>;
}<span style="color: #800000;">

.page-list .icon-sort::before </span>{<span style="color: #ff0000;">
    content</span>:<span style="color: #0000ff;"> ''</span>;<span style="color: #ff0000;">
    position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">
    top</span>:<span style="color: #0000ff;"> 0px</span>;<span style="color: #ff0000;">
    left</span>:<span style="color: #0000ff;"> -8px</span>;<span style="color: #ff0000;">
    width</span>:<span style="color: #0000ff;"> 18px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 2px</span>;<span style="color: #ff0000;">
    background-color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
    -webkit-transform</span>:<span style="color: #0000ff;"> rotate(-135deg)</span>;<span style="color: #ff0000;">
    transform</span>:<span style="color: #0000ff;"> rotate(-135deg)</span>;
}<span style="color: #800000;">

 .page-list.page-list--search .bus-list .bus-list-item .tobooking</span>{<span style="color: #ff0000;">
   display</span>:<span style="color: #0000ff;"> none</span>;
 }<span style="color: #800000;">
 
 .page-list.page-list--search .bus-list .bus-list-item .detail </span>{<span style="color: #ff0000;">
   margin-right</span>:<span style="color: #0000ff;"> 10px</span>;
 }<span style="color: #800000;">
 .page-list .ad-wrapper </span>{<span style="color: #ff0000;">
  display</span>:<span style="color: #0000ff;"> none</span>; 
 }<span style="color: #800000;">
 .page-list.page-list--search .ad-wrapper </span>{<span style="color: #ff0000;">
  display</span>:<span style="color: #0000ff;"> block</span>;<span style="color: #ff0000;"> 
  position</span>:<span style="color: #0000ff;"> fixed</span>;<span style="color: #ff0000;">
  bottom</span>:<span style="color: #0000ff;"> 45px</span>;<span style="color: #ff0000;">
  left</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
  width</span>:<span style="color: #0000ff;"> 100%</span>;<span style="color: #ff0000;">
  z-index</span>:<span style="color: #0000ff;"> 500</span>;
 }<span style="color: #800000;">
 
.page-list.page-list--search .ad-wrapper img </span>{<span style="color: #ff0000;">
  width</span>:<span style="color: #0000ff;"> 100%</span>;
 }<span style="color: #800000;">
 .page-list .b-tags </span>{<span style="color: #ff0000;">
     position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">
  bottom</span>:<span style="color: #0000ff;"> 15px</span>;<span style="color: #ff0000;">
  right</span>:<span style="color: #0000ff;"> 70px</span>;
 }<span style="color: #800000;">
.page-list .bus-tips </span>{<span style="color: #ff0000;">
    background</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
    padding</span>:<span style="color: #0000ff;"> 10px 15px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 33px</span>;<span style="color: #ff0000;">
    overflow</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> 1px solid #e5e5e5</span>;
}<span style="color: #800000;">
.page-list .bus-tip-text </span>{<span style="color: #ff0000;">
    margin-right</span>:<span style="color: #0000ff;"> 150px</span>;<span style="color: #ff0000;">
    word-break</span>:<span style="color: #0000ff;"> break-all</span>;<span style="color: #ff0000;">
    font-size</span>:<span style="color: #0000ff;"> 13px</span>;<span style="color: #ff0000;">
    line-height</span>:<span style="color: #0000ff;"> 17px</span>;<span style="color: #ff0000;">
    color</span>:<span style="color: #0000ff;"> #8c8c8c</span>;<span style="color: #ff0000;">
    margin</span>:<span style="color: #0000ff;"> 0</span>;
}<span style="color: #800000;">
.page-list .bus-tip-icon </span>{<span style="color: #ff0000;">
    border</span>:<span style="color: #0000ff;"> 1px solid #00b358</span>;<span style="color: #ff0000;">
    padding</span>:<span style="color: #0000ff;"> 2px 12px</span>;<span style="color: #ff0000;">
    color</span>:<span style="color: #0000ff;"> #00b358</span>;<span style="color: #ff0000;">
    border-radius</span>:<span style="color: #0000ff;"> 22px</span>;
}<span style="color: #800000;">

.page-list  .cm-modal </span>{<span style="color: #ff0000;">
  background-color</span>:<span style="color: #0000ff;"> #efefef</span>;
}<span style="color: #800000;">

.page-list .more-filter-line </span>{<span style="color: #ff0000;">
    overflow</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;">
    box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
    -webkit-box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> 1px solid #e5e5e5</span>;<span style="color: #ff0000;">
    border-top</span>:<span style="color: #0000ff;"> 1px solid #e5e5e5</span>;<span style="color: #ff0000;">
    background-color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
    margin</span>:<span style="color: #0000ff;"> 8px 0</span>;
}<span style="color: #800000;">

.page-list .more-filter-line ul</span>{<span style="color: #ff0000;">
   display</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">

.page-list .more-filter-line.active ul</span>{<span style="color: #ff0000;">
   display</span>:<span style="color: #0000ff;">  block</span>;
}<span style="color: #800000;">

.page-list .more-filter-line:first-child </span>{<span style="color: #ff0000;">
    margin-top</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
    border-top</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">

.page-list .more-filter-line:last-child </span>{<span style="color: #ff0000;">
    margin-bottom</span>:<span style="color: #0000ff;"> 0</span>;<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">

.page-list .more-filter-line .filter-time-title</span>{<span style="color: #ff0000;">
    position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;">
    font-size</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;">
    padding-right</span>:<span style="color: #0000ff;"> 30px</span>;<span style="color: #ff0000;">
    margin</span>:<span style="color: #0000ff;"> 0 10px </span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 46px</span>;<span style="color: #ff0000;">
    line-height</span>:<span style="color: #0000ff;"> 46px</span>;
}<span style="color: #800000;">

.page-list .more-filter-line.active .filter-time-title</span>{<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> 1px solid #e5e5e5</span>;
}<span style="color: #800000;">

.page-list .more-filter-line .filter-time-title::after </span>{<span style="color: #ff0000;">
    position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">
    content</span>:<span style="color: #0000ff;"> ''</span>;<span style="color: #ff0000;">
    right</span>:<span style="color: #0000ff;"> 15px</span>;<span style="color: #ff0000;">
    top</span>:<span style="color: #0000ff;"> 17px</span>;<span style="color: #ff0000;">
    width</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
    border-left</span>:<span style="color: #0000ff;"> 1px solid</span>;<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> 1px solid</span>;<span style="color: #ff0000;">
    -webkit-transform</span>:<span style="color: #0000ff;"> rotate(-45deg)</span>;<span style="color: #ff0000;">
    transform</span>:<span style="color: #0000ff;"> rotate(-45deg)</span>;<span style="color: #ff0000;">
    -webkit-box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
    box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
    border-color</span>:<span style="color: #0000ff;">  #00b358</span>;
}<span style="color: #800000;">

.page-list .more-filter-line.active .filter-time-title::after </span>{<span style="color: #ff0000;">
    top</span>:<span style="color: #0000ff;"> 21px</span>;<span style="color: #ff0000;">
    -webkit-transform</span>:<span style="color: #0000ff;"> rotate(135deg)</span>;<span style="color: #ff0000;">
    transform</span>:<span style="color: #0000ff;"> rotate(135deg)</span>;
}<span style="color: #800000;">

.page-list .more-filter-line .filter-time-title .fr</span>{<span style="color: #ff0000;">
    font-size</span>:<span style="color: #0000ff;"> 14px</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> inline-block</span>;
}<span style="color: #800000;">
.page-list .more-filter-line.active .filter-time-title .fr</span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> none </span>;
}<span style="color: #800000;">

.page-list .more-filter-line ul </span>{<span style="color: #ff0000;">
    padding</span>:<span style="color: #0000ff;"> 5px 15px </span>;
}<span style="color: #800000;">

.page-list .more-filter-line ul li</span>{<span style="color: #ff0000;">
    position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;">
   height</span>:<span style="color: #0000ff;"> 32px</span>;<span style="color: #ff0000;">
   line-height</span>:<span style="color: #0000ff;"> 32px</span>;
}<span style="color: #800000;">

.page-list .more-filter-line ul li.active</span>{<span style="color: #ff0000;">
    color</span>:<span style="color: #0000ff;"> #00b358</span>;
}<span style="color: #800000;">

.page-list .more-filter-line ul li.active::after </span>{<span style="color: #ff0000;">
    content</span>:<span style="color: #0000ff;"> ""</span>;<span style="color: #ff0000;">
    width</span>:<span style="color: #0000ff;"> 14px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 6px</span>;<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> 2px solid #00b358</span>;<span style="color: #ff0000;">
    border-left</span>:<span style="color: #0000ff;"> 2px solid #00b358</span>;<span style="color: #ff0000;">
    position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">
    top</span>:<span style="color: #0000ff;"> 50%</span>;<span style="color: #ff0000;">
    right</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
    margin-top</span>:<span style="color: #0000ff;"> -4px</span>;<span style="color: #ff0000;">
    -webkit-transform</span>:<span style="color: #0000ff;"> rotate(-45deg) translateY(-50%)</span>;<span style="color: #ff0000;">
    transform</span>:<span style="color: #0000ff;"> rotate(-45deg) translateY(-50%)</span>;
}<span style="color: #800000;">

.page-list .more-filter-line1 </span>{<span style="color: #ff0000;">
    overflow</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;">
    box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
    -webkit-box-sizing</span>:<span style="color: #0000ff;"> border-box</span>;<span style="color: #ff0000;">
    border-bottom</span>:<span style="color: #0000ff;"> 1px solid #e5e5e5</span>;<span style="color: #ff0000;">
    border-top</span>:<span style="color: #0000ff;"> 1px solid #e5e5e5</span>;<span style="color: #ff0000;">
    background-color</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
    margin</span>:<span style="color: #0000ff;"> 8px 0</span>;<span style="color: #ff0000;">
    padding</span>:<span style="color: #0000ff;"> 0 10px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 48px</span>;<span style="color: #ff0000;">
    line-height</span>:<span style="color: #0000ff;"> 48px</span>;
}<span style="color: #800000;">

.page-list .more-filter-wrapper .btn-wrapper </span>{<span style="color: #ff0000;">
 text-align</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;">
 margin</span>:<span style="color: #0000ff;"> 15px 0</span>;<span style="color: #ff0000;">
 padding-bottom</span>:<span style="color: #0000ff;"> 15px</span>;
 
}<span style="color: #800000;">

.page-list .more-filter-wrapper .btn-primary </span>{<span style="color: #ff0000;">
 border-radius</span>:<span style="color: #0000ff;"> 50px</span>;<span style="color: #ff0000;">   
 width</span>:<span style="color: #0000ff;"> 80%</span>;<span style="color: #ff0000;">
 border</span>:<span style="color: #0000ff;"> 1px solid #00b358</span>;<span style="color: #ff0000;">
 color</span>:<span style="color: #0000ff;"> #00b358</span>;<span style="color: #ff0000;">
 background-color</span>:<span style="color: #0000ff;"> #fff</span>;
}<span style="color: #800000;">

.page-list .lazy-load .bus-seat </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">
.page-list .lazy-load .detail </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">
.page-list .lazy-load .bus-seats-info </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">
.page-list .bus-list .lazy-info </span>{<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> none</span>;
}<span style="color: #800000;">

.page-list .bus-list .lazy-load .lazy-info </span>{<span style="color: #ff0000;">
    padding</span>:<span style="color: #0000ff;"> 10px 0</span>;<span style="color: #ff0000;">
    text-align</span>:<span style="color: #0000ff;"> center</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;">  block</span>;
}


<span style="color: #008000;">/*</span><span style="color: #008000;">*
 * station group
 </span><span style="color: #008000;">*/</span><span style="color: #800000;">
.page-list .bs-price </span>{<span style="color: #ff0000;">
    font-family</span>:<span style="color: #0000ff;"> Arial</span>;<span style="color: #ff0000;">
    color</span>:<span style="color: #0000ff;"> #fd8f01</span>;<span style="color: #ff0000;">
    font-size</span>:<span style="color: #0000ff;"> 16px</span>;<span style="color: #ff0000;">
    font-weight</span>:<span style="color: #0000ff;"> 600</span>;
}<span style="color: #800000;">
.page-list .bs-ellipsis </span>{<span style="color: #ff0000;">
    white-space</span>:<span style="color: #0000ff;"> nowrap</span>;<span style="color: #ff0000;">
    overflow-x</span>:<span style="color: #0000ff;"> hidden</span>;<span style="color: #ff0000;">
    text-overflow</span>:<span style="color: #0000ff;"> ellipsis</span>;
}<span style="color: #800000;">
.page-list .bs-icon-bus, .page-list .bs-icon-carpool, .page-list .bs-icon-train, .page-list .bs-icon-icline </span>{<span style="color: #ff0000;">
    width</span>:<span style="color: #0000ff;"> 31px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 31px</span>;<span style="color: #ff0000;">
    background-size</span>:<span style="color: #0000ff;"> 31px 31px</span>;<span style="color: #ff0000;">
    background-repeat</span>:<span style="color: #0000ff;"> no-repeat</span>;<span style="color: #ff0000;">
    background-position</span>:<span style="color: #0000ff;"> 0 0</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> inline-block</span>;
}<span style="color: #800000;">
.page-list .bs-icon-arrow </span>{<span style="color: #ff0000;">
    width</span>:<span style="color: #0000ff;"> 15px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 4px</span>;<span style="color: #ff0000;">
    background</span>:<span style="color: #0000ff;"> url(/webapp/bus/static/images/icon-arrow.png) 0 0 no-repeat</span>;<span style="color: #ff0000;">
    background-size</span>:<span style="color: #0000ff;"> 15px 4px</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> inline-block</span>;
}<span style="color: #800000;">
.page-list .bs-icon-bus </span>{<span style="color: #ff0000;">
    background-image</span>:<span style="color: #0000ff;"> url(/webapp/bus/static/images/icon-bus.png)</span>;
}<span style="color: #800000;">
.page-list .bs-icon-carpool </span>{<span style="color: #ff0000;">
    background-image</span>:<span style="color: #0000ff;"> url(/webapp/bus/static/images/icon-carpool.png)</span>;
}<span style="color: #800000;">
.page-list .bs-icon-train </span>{<span style="color: #ff0000;">
    background-image</span>:<span style="color: #0000ff;"> url(/webapp/bus/static/images/icon-train.png)</span>;
}<span style="color: #800000;">
.page-list .bs-icon-icline </span>{<span style="color: #ff0000;">
    background-image</span>:<span style="color: #0000ff;"> url(/webapp/bus/static/images/icon-icline.png)</span>;
}<span style="color: #800000;">
.page-list .bs-st-wrapper </span>{<span style="color: #ff0000;">
    position</span>:<span style="color: #0000ff;"> relative</span>;<span style="color: #ff0000;">
    background</span>:<span style="color: #0000ff;"> url(/webapp/bus/static/images/icon-dot.png) 5px 19px no-repeat</span>;<span style="color: #ff0000;">
    background-size</span>:<span style="color: #0000ff;"> 2px 10px</span>;
}<span style="color: #800000;">
.page-list .bs-st-end </span>{<span style="color: #ff0000;">
    margin-top</span>:<span style="color: #0000ff;"> 6px</span>;
}<span style="color: #800000;">

.page-list .bs-st-start:before, .page-list .bs-st-end:before </span>{<span style="color: #ff0000;">
    content</span>:<span style="color: #0000ff;"> ''</span>;<span style="color: #ff0000;">
    display</span>:<span style="color: #0000ff;"> inline-block</span>;<span style="color: #ff0000;">
    width</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
    height</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
    margin-right</span>:<span style="color: #0000ff;">5px</span>;<span style="color: #ff0000;">
    vertical-align</span>:<span style="color: #0000ff;"> -2px</span>;<span style="color: #ff0000;">
    border-radius</span>:<span style="color: #0000ff;"> 50% 50%</span>;
}<span style="color: #800000;">
.page-list .bs-st-start:before </span>{<span style="color: #ff0000;">
    border</span>:<span style="color: #0000ff;"> 2px solid #13bd65</span>;
}<span style="color: #800000;">
.page-list .bs-st-end:before </span>{<span style="color: #ff0000;">
    border</span>:<span style="color: #0000ff;"> 2px solid #f06463</span>;
}<span style="color: #800000;">


.page-list .sch-prem </span>{<span style="color: #ff0000;">
  margin</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
  padding</span>:<span style="color: #0000ff;"> 8px</span>;<span style="color: #ff0000;">
  border</span>:<span style="color: #0000ff;"> 1px solid #e8e8e8</span>;<span style="color: #ff0000;">
  background</span>:<span style="color: #0000ff;"> #fff</span>;<span style="color: #ff0000;">
  position</span>:<span style="color: #0000ff;"> relative</span>;
}<span style="color: #800000;">

.page-list .sch-prem .icon-wrapper </span>{<span style="color: #ff0000;">
  width</span>:<span style="color: #0000ff;"> 49px</span>;<span style="color: #ff0000;">
  float</span>:<span style="color: #0000ff;"> left</span>;<span style="color: #ff0000;">
  margin-top</span>:<span style="color: #0000ff;"> 8px</span>;
}<span style="color: #800000;">
.page-list .sch-prem .info-wrapper </span>{<span style="color: #ff0000;">
  margin</span>:<span style="color: #0000ff;"> 0 70px 0 49px</span>;
}<span style="color: #800000;">
.page-list .sch-prem .st-name </span>{<span style="color: #ff0000;">
    font-size</span>:<span style="color: #0000ff;"> 16px</span>;
}<span style="color: #800000;">
.page-list .sch-prem .st-name .bs-icon-arrow </span>{<span style="color: #ff0000;">
  margin</span>:<span style="color: #0000ff;">0 10px</span>;<span style="color: #ff0000;">
  vertical-align</span>:<span style="color: #0000ff;"> 4px</span>;
}<span style="color: #800000;">
.page-list .sch-prem .price-wrapper </span>{<span style="color: #ff0000;">
  position</span>:<span style="color: #0000ff;"> absolute</span>;<span style="color: #ff0000;">
  right</span>:<span style="color: #0000ff;"> 15px</span>;<span style="color: #ff0000;">
  width</span>:<span style="color: #0000ff;"> 70px</span>;<span style="color: #ff0000;">
  text-align</span>:<span style="color: #0000ff;"> right</span>;<span style="color: #ff0000;">
  bottom</span>:<span style="color: #0000ff;"> 8px</span>;
}<span style="color: #800000;">
.page-list .sch-prem-icline .icon-wrapper, .page-list .sch-prem-bus .icon-wrapper</span>{<span style="color: #ff0000;">
    margin-top</span>:<span style="color: #0000ff;"> 19px</span>;
}<span style="color: #800000;">
.page-list .sch-prem-icline .price-wrapper, .page-list .sch-prem-bus .price-wrapper</span>{<span style="color: #ff0000;">
    bottom</span>:<span style="color: #0000ff;"> 19px</span>;
}</pre>
</div>
<span class="cnblogs_code_collapse">View Code</span></div>
<p>新建一个style.css暂且放到ui/list目录中，其实这个list的样式跟业务代码更有关系，放里面不合适，但是我们这里做demo就无所谓了，这里分离出来后稍作改造即可：</p>
<div class="cnblogs_code">
<pre><span style="color: #008000;">//</span><span style="color: #008000;">list.js</span>
import React from 'react'<span style="color: #000000;">;
import </span>'./style.css';<span style="color: #008000;">//</span><span style="color: #008000;">这段css样式会被style标签插入到header中</span></pre>
</div>
<p>这里未做高阶使用，关于高阶的用法，我们后续有机会再介绍，接下来就是部署以及工程化相关工作了，考虑篇幅，我们后续再继续</p>
<h1>结语</h1>
<p>本文代码地址：<strong><a href="https://github.com/yexiaochai/react-demo" target="_blank">https://github.com/yexiaochai/react-demo</a></strong></p>
<p>演示地址：<a href="https://yexiaochai.github.io/react-demo/build/index.html" target="_blank">https://yexiaochai.github.io/react-demo/build/index.html</a></p>
<p>后续我们继续研究如何使用这套代码兼容小程序开发，以及一些工程化问题</p>