<template>
    <div class="home">
        <my-header @collapseFun="handelCollapse"></my-header>
        <el-container>
            <my-slide :isCollapse="isCollapse"></my-slide>
            <el-main>
               <el-breadcrumb class="breadcrumb" separator="/">
                    <el-breadcrumb-item 
                        v-for='(title,index) in matchedArr'
                        :key='index'
                        >
                        {{title}}
                    </el-breadcrumb-item>
                </el-breadcrumb>
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
import slide from '@/router/slidePath.js'
export default {
        //import引入的组件需要注入到对象中才能使用
        components: {
            myHeader,
            mySlide,
            contentMain
        },
       
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        router:slide,
        isCollapse:false,
        tableData: Array(20).fill(item)
      }
  },
  computed:{
      matchedArr(){
			let temp = [],temps = [];
			this.$route.matched.filter((item,index,self) => {
				if(item.meta.title){
					const title = item.meta.title;
				    temp.push(title);
				}
			});
			temp.filter((item,index,self) => {
				if(!temps.includes(item)){
					temps.push(item);
				}
			})
			return temps;
		}
  },
  mounted(){
  },
  methods:{

      handelCollapse(val){
          this.isCollapse=val;
      }
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

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .breadcrumb{
			height: 30px;
			line-height: 30px;
			.breadbutton{
				float:left;
				margin:4px 5px 0 0;
				
			}
		}
</style>
<style lang='scss'>
.el-container{
    height:100%;
}
.el-menu{
    height:100%;
    background-color:rgb(121, 212, 255);
  }
</style>