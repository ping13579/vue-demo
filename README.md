 * 　　 へ　　　　　／|
 * 　　/＼7　　　 ∠＿/
 * 　 /　│　　 ／　／
 * 　│　Z ＿,＜　／　　  /`ヽ
 * 　│　　　　　ヽ　　  /　　〉
 * 　 Y　　　　　`　    /　　/
 * 　ｲ●　､　●　⊂⊃  〈　　/
 * 　()　 へ　　　　|　＼ 〈
 * 　　ｰ ､_　 ィ　 │ ／ ／
 * 　 / へ　　 /　ﾉ＜| ＼＼
 * 　 ヽ_ﾉ　　(_／　 │／／
 * 　　7　　　　　　　|／
 * 　　＞―r￣￣`ｰ―＿

 ## 代码神兽、、、

要是采用我的工程只需要git clone  仓库地址。

然后cd 到目录下。再执行

```
$ npm install
$ npm run dev
```
组件运用及sass写法

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h5>{{explain}}</h5>
    <ul>
      <li># 全局安装 vue-cli</li>
      <li>$ npm install --global vue-cli</li>
      <li># 创建一个基于 webpack 模板的新项目</li>
      <li>$ vue init webpack my-project</li>
      <li># 安装依赖，走你</li>
      <li>$ cd my-project</li>
      <li>$ npm install</li>
      <li>$ npm run dev</li>
    </ul>
    <h2> -- 说明 -- </h2>
    <ul>
      <li>1、电脑上已安装node 及item。 </li>
      <li>2、cd 到打算放置vue 的文件夹下。</li>
      <li>3、执行以上命令。npm install 的时候可能会出现卡掉进行不下去。此时可停止安装。执行 npm install -g 命令即可</li>
      <li>4、再执行npm run dev即可。</li>
      <li>5、打开文件后会出现js文件报错。点击灯泡标识，转换js格式。注：本人用的是webstrom 编辑器。</li>
    </ul>
    <a :href='url' class='clickBtn'>Go Next</a>
    <comFooter></comFooter>
  </div>
</template>

<script>
import comFooter from '../components/footer.vue';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My Vue 项目',
      explain: '本项目是根据vue官网建立的，让我们脚踏实地的一步一步学习vue吧。。',
      url: '/demoList'
    }
  },
  components: {
      comFooter
  },
}
</script>

<style lang='scss'>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  width:500px;
  text-align:left;
  margin:0 auto;
  background:#eee;
  padding:20px 0;
  li {
    line-height:30px;
    margin: 0 20px;
  }
}

a {
  color: #42b983;
}
.clickBtn{
  margin-top:30px;
  display:block;
  text-decoration: underline;
}
</style>
```
mint-ui 使用说明
```
//安装
# Vue 1.x
npm install mint-ui@1 -S
# Vue 2.0
npm install mint-ui -S

// 引入全部组件
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);

// 按需引入部分组件
import { Cell, Checklist } from 'minu-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);

、、切勿忘记引入样式

import 'mint-ui/lib/style.css';
样式引入可在公共地方。本项目在main.js里引入。。每次调用都不用特意再调用。。
```


   -- 说明 --
 ```
1、电脑上已安装node 及item。
2、cd 到打算放置vue 的文件夹下。
3、执行以上命令。npm install 的时候可能会出现卡掉进行不下去。此时可停止安装。执行 npm install -g 命令即可
4、再执行npm run dev即可。
5、打开文件后会出现js文件报错。点击灯泡标识，转换js格式。注：本人用的是webstrom 编辑器。
6、下次再打开工程报错如： 'process-nextick-args'  此时重新 npm install node 即可（此坑研究了好久。终于解决。心好累啊。）。
7、本工程用的 webpack+vue+sass 搭建。项目是我自己根据网上资料自己搭建的 里面都是一些案例。
   其中用到了路由，组件，vue基础语句等等。。
8、工程启动时间比较，  需要三四分钟才能在浏览器看到效果（这是一个bug）。。启动完成后能实时刷新不必担心后续的延迟效果。
```
