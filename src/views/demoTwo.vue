<template>
  <div class="demoTwo">
    <div class='demoDiv'>
       <p>{{mesg}}</p>
       <ul>
         <li v-for="(item,index) of items">
            {{index}}-- {{ item.message }}
         </li>
       </ul>
       <ul>
          <li v-for="(value,key) in object">
             {{key}}--{{value}}
          </li>
       </ul>
       <div>
         <span class='span' v-for="n in 10">{{ n }}</span>
       </div>

       <!--<button v-on:click='counter += 1'>增加 1</button> -->
       <button v-on:click.once='greet'>增加 1</button>
       <p>这个按钮被点击了{{counter}}次</p>

       <a href='http://www.baidu.com' @click.stop.prevent='stopHref'>
         <p class='stop' >阻止a -href的默认事件--@click.stop.prevent</p>
       </a>

       <input type='text' @keyup.enter='submit' v-model='input1' placeholder='键盘输入完成并按下enter 键添加进'>
       <p>{{subTxt}} </p>

       <input type='text' v-model='subTxt1' placeholder='直接设置v-model，无需按enter'>
       <p>{{subTxt1}} </p>

       <span>textarea message is:</span>
       <p>{{ textarea }}</p>
       <br>
       <textarea v-model="textarea" placeholder="add multiple lines"></textarea>
        <br>
       <input type="checkbox" id="checkbox" v-model="checked">
       <label for="checkbox">{{ checked }}</label>

       <br>
       <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
       <label for="jack">Jack</label>
       <input type="checkbox" id="john" value="John" v-model="checkedNames">
       <label for="john">John</label>
       <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
       <label for="mike">Mike</label>
       <br>
       <span>Checked names: {{ checkedNames }}</span>

       <br>

       <div>
         <select v-model="selected">
           <option>A</option>
           <option>B</option>
           <option>C</option>
         </select>
         <span>Selected: {{ selected }}</span>
       </div>

       <div>
         <input type="radio" id="one" value="One" v-model="picked">
         <label for="one">One</label>
         <br>
         <input type="radio" id="two" value="Two" v-model="picked">
         <label for="two">Two</label>
         <br>
         <span>Picked: {{ picked }}</span>


       </div>
    </div>
     <a :href='url'>Next v-for</a>
  </div>
</template>

<script>
export default {
  name: 'demoTwo',
  data () {
    return {
      mesg: '本页面学习的是各类操作。for、点击事件、表单提交等等',
      seen: false,
      a: 1,
      url:'/demoTwo',
      firstName : 'foo',
      lastName : 'Bar',
      object:{
        firstName: 'werr',
        lastName: 'sefse',
        eeeeee: 'w2133'
      },
      items: [
        {message: '0000' },
        {message: '1111' },
        {message: '2222' },
        {message: '3333' }
      ],
      counter:0,
      subTxt: '',
      subTxt1:'',
      textarea:'',
      input1:'',
      checked: false,
      checkedNames:[],
      selected: null,
      picked:''
    }
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
  },
  methods:{
    greet:function(){
      this.counter += 1;
    },
    stopHref:function(){
      alert('ef_stop')
    },
    submit:function(){
      this.subTxt = this.input1 +'   成功';
      this.input1 ='';
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.demoDiv{
  width:800px;
  background:#eee;
  margin:0 auto;
}
a {
  color: #42b983;
  text-decoration: underline;
}
.span{
  margin:0 5px;
  display:inline-block;
}
input{
  width:300px;
  height:30px;
  line-height:30px;
  border:none;
}
input[type='checkbox'],input[type='radio']{
  width:30px;
}
</style>
