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
