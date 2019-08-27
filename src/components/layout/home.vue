<template>
    <div class="home">
        <my-header></my-header>
        <el-container>
            <my-slide></my-slide>
            <el-main>
                <bread></bread>

                <contentMain></contentMain>  
            </el-main>
        </el-container>
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import myHeader from '@/components/layout/header'
import mySlide from '@/components/layout/slide'
import contentMain from '@/components/layout/contentMain'
import bread from '@/components/layout/bread'
import slide from '@/router/slidePath.js'

export default {
        //import引入的组件需要注入到对象中才能使用
        components: {
            myHeader,
            mySlide,
            contentMain,
            bread
        },
       
    data() {
     
      return {
        
        
        
      }
  },
  computed:{
     
  },
  mounted(){
  },
  methods:{
      
  }
}
</script>
<style lang='scss' scoped>
	
.home{
    height:100%;
    width:100%;
    padding:0;
    margin:0;
}
</style>
<style lang='scss'>
.el-container{
    height:100%;
    width:100%;
}

</style>