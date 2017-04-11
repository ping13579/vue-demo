<template>
  <div class="demoList">
    <comHeader title="头部组件" back="true"></comHeader>
    <ul>
      <li><a :href='url1'>demoOne-if</a></li>
      <li><a :href='url2'>demoTwo-for</a></li>
      <li><a :href='url3'>demoThree-on</a></li>
      <li><a :href='url4'>demoFour-bind</a></li>
      <li><a :href='url5'>demoFive-model</a></li>
    </ul>
    <button class='showToast' v-on:click='showToast'>toast test</button>
    <comFooter></comFooter>
  </div>
</template>

<script>

import comHeader from '../components/header.vue';
import comFooter from '../components/footer.vue';
import { Indicator,Toast,MessageBox } from 'mint-ui';

export default {
  name: 'demoList',
  data () {
    return {
      url1: '/demoOne',
      url2: '/demoTwo',
      url3: '/demoThree',
      url4: '/demoFour',
      url5: '/demoFive'
    }
  },
  components: {
      comHeader,comFooter,Indicator,Toast,MessageBox
  },
  methods:{
      showToast:function(){
        Toast('sdffffd');
        Indicator.open('Loading...');
        MessageBox({
          title: '弹框测试',
          message: '点击按钮即可关闭',
          confirmButtonText:'我知道了'
        });
      },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

ul {
  width:300px;
  list-style-type: none;
  padding: 0;
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
  text-decoration: underline;
}

</style>
