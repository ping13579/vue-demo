<template>
<div class="footer">
  {{msgs}}
</div>
</template>

<script>

export default {
    name: 'footer',
    props: [ ],
    data() {
        return {
            msgs:" 底部组件 create by cfp"
        }
    }

}
</script>
<style>
.footer{
  text-align:center;
  padding-top:10px;
  border-top:1px solid #eee;
  margin-top:80px;
}
</style>
