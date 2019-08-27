<template>
    <div class="home">
        <my-header></my-header>
        <el-container>
            <my-slide :isCollapse="isCollapse"></my-slide>
            <el-main>
                <div class='bread_container' id="bread_container">
                    <span @click="handleLefeMenu" class="bars"> 
                        <i :class="isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold' "></i>
                    </span>
                    <el-breadcrumb class="breadcrumb" separator="/">
                        <el-breadcrumb-item 
                            v-for='(title,index) in matchedArr'
                            :key='index'
                            >
                            {{title}}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>

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
     
      return {
        router:slide,
        isCollapse:false,
        
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
      handleLefeMenu(){
		    this.$store.dispatch('setLeftCollapse');  // 折叠菜单
			this.$store.dispatch('handleLeftMenu');  // 改变菜单宽度 180->35/35-180
            this.isCollapse=!this.isCollapse;
		},
      
  }
}
</script>
<style lang='scss' scoped>
	.bread_container{
		background-color: #eaebec;
		width: 100%;
        display:flex;
        align-items:center;
		.bars{
			float: left;
            margin: 0px 10px;
			cursor: pointer;
		}
		.breadcrumb{
			height: 30px;
			line-height: 30px;
			.breadbutton{
				float:left;
				margin:4px 5px 0 0;
				
			}
		}
	}
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