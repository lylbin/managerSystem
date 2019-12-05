<template>
<el-aside :style="{width:sidebar.width}">
     <!-- <el-menu :default-openeds="['1']"  > -->
       
      <el-menu id="menuClass" router :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        
          <el-menu-item v-for="(item,index) in noDropdownRouters" :key="'noDropdownRouter-'+index" :index="item.name" :route="item">
            
              <i :class="item.meta.icon"></i>
              <span >{{item.meta.title}}</span>  
          </el-menu-item>          

          <el-submenu v-for="(item,index) in dropdownRouters" :key="index" :index="item.path" >
            <div ></div>
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span>{{item.meta.title}}</span>
            </template>
              <el-menu-item v-for="(citem,cindex) in item.children" :key="cindex" :index="citem.name" :route="citem">
                <i :class="citem.meta.icon"></i>
                <span>{{citem.meta.title}}</span>
              </el-menu-item>          
          </el-submenu>   
        
      </el-menu>
</el-aside>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters } from 'vuex'
import slide from '@/router/slidePath.js'
export default {
        //import引入的组件需要注入到对象中才能使用
        
        components: {},
        data() {
        //这里存放数据
        return {
          Routers:slide,
          // isCollapse:false
        };
        },
        //监听属性 类似于data概念
        computed: {
          noDropdownRouters: function () {
            return this.Routers.filter(function (Routers) {
              return Routers.noDropdown
            })
          },
          dropdownRouters: function () {
            return this.Routers.filter(function (Routers) {
              return !Routers.noDropdown
            })
          },
          ...mapGetters([
            //'permission_routers',
            'isCollapse',
            'sidebar',
            //'menuIndex'
          ]),
        },
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
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
}
</script>
<style lang='scss' scoped>
/deep/ .el-submenu__title,.el-menu-item{
  padding:0;
  color:#fff;
}
/deep/ .el-menu{
    height:100%;
    background-color:#061f3e;
    color:#fff;
  }
/deep/ .el-menu-item{
  padding:0;
}
/deep/ .el-menu-item.is-active{
  color:#409EFF
}
/deep/ .el-menu--collapse{
  width:54px;
}
/deep/ .el-submenu__title:hover,.el-menu-item:hover{
  background: #4169E1;
}
</style>
