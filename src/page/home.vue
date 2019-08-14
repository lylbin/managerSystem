<template>
    <div class="home">
        <!-- <el-header>Header</el-header> -->
        <my-header></my-header>
        <el-container>
            <!-- <el-aside width="200px">Aside</el-aside> -->
            <my-slide></my-slide>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import myHeader from '@/components/layout/header'
import mySlide from '@/components/layout/slide'

export default {
        //import引入的组件需要注入到对象中才能使用
        components: {
            myHeader,
            mySlide
        },
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

        },
}
</script>
<style lang='scss' scoped>
.home{
    height:100%;
}
    .el-container{
        
       width: 100%; 
       height:100%;
    }
    .el-header, .el-footer {
        padding: 0;
        z-index: 2;
        height:60px;
        background-color: #545c64;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>