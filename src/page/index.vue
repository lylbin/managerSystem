<template>
    <div class=''>This is 首页
        <button type="button" class="layui-btn" @click="conso">一个标准的按钮</button>
        <i class="layui-icon layui-icon-face-smile"></i>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
     
},
//方法集合
methods: {
    conso(){
        //layer.msg('这是首页'); 
        layer.confirm('这是首页，测试layui', {
            btn: ['按钮一', '按钮二', '按钮三'] //可以无限个按钮
            ,btn3: function(index, layero){
                //按钮【按钮三】的回调
                layer.msg('按钮3')
            }
            }, function(index, layero){
            //按钮【按钮一】的回调
                layer.msg('按钮1')
            }, function(index){
            //按钮【按钮二】的回调
                layer.msg('按钮2')
            });
                }
        },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>