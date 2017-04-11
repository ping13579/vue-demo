<template>

  <div class="demoOne">
    <comHeader title="头部组件" back="true"></comHeader>
    <div class='demoDiv'>
       <span>show {{mesg}}</span>
       <p v-if="seen">Now you see me</p>
       <p v-else>
         Now you cannot see me
       </p>
       <div>
         a={{a}},b={{b}}
       </div>
       <p>{{fullName}}</p>
       <p class='test' :class="{'cla1':isA,'cla2':isB}">测试class绑定</p>
       <p class='test' :class="['cla1', isA ? 'cla2' : '']">测试class绑定-三元表达式</p>
       <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">测试style样式绑定-对象语法</div>
       <div v-bind:style="styleObject">测试style样式绑定-样式对象</div>

       <p v-show="see">Now you see me</p>
    </div>

     <a :href='url'>Next v-for</a>
  </div>
</template>

<script>

import comHeader from '../components/header.vue';

export default {
  name: 'demoOne',
  data () {
    return {
      mesg: '本页面学习的是v-if 及计算属性',
      seen: false,
      see:true,
      a: 1,
      url:'/demoTwo',
      firstName : 'foo',
      lastName : 'Bar',
      isA: true,
      isB: false,
      activeColor: 'red',
      fontSize: 20,
      styleObject: {
        color: 'blue',
        fontSize: '13px'
      }
    }
  },
  components: {
      comHeader
  },
  computed:{
    b:function(){
      return this.a + 3
    },
    fullName :{
      //getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.demoDiv{
  width:300px;
  background:#eee;
  margin:0 auto;
}
a {
  color: #42b983;
  text-decoration: underline;
}
.cla1{
  color:red;
}
.cla2{
  color:green;
}
</style>
