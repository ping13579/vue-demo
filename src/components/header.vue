<template>
<div class="header">
    <div v-show= "back" class="th-re" @click="onBackClick">
        <i class="iconfont icon-jiantou-copy"></i>
    </div>
    {{title}}
    <a class="th-menu" @click="onMenuClick">{{menu}}</a>
</div>
</template>

<script>

export default {
    name: 'header',
    props: ['title', 'back','menu'],
    data() {
        return {
            msg:""
        }
    },
    mounted: function() {

    },
    methods: {
        onBackClick(){
            let cb = this._events['onBackClick'];
            if(cb){
                this.$emit('onBackClick');
            } else {
                this.$router.go(-1);
            }
        },
        onMenuClick(){
            this.$emit('onMenuClick');
        }
    }
}
</script>
<style>
.header{
    width:100%;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    color: #fff;
    font-size: 1rem;
    background-color: #eee;
    position: fixed;
    top:0;
}
.th-re,.th-menu{
    min-width: 2.5rem;
    text-align: center;
    color: #fff;
    position: absolute;
}
.th-re{
    left:0;
}
.th-menu{
    right: 0;
    top: 0;
    font-size: .8rem;
    padding-right:.5rem;
}
</style>
