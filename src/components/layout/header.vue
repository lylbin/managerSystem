<template>
    <el-header>
       <div :class="isCollapse ? 'logo min-logo':'logo' " style="float:left">
          <img src="@/assets/logo.png" alt="logo">
          <span>后台管理系统</span>
        </div>
      <!-- <el-radio-group v-model="isCollapse" style="">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <!-- <i class="el-icon-s-fold"  v-if="!isCollapse"></i> -->

      <div class="userInfo">
          <span>{{username}}</span>
          <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="toUserinfo">个人信息</el-dropdown-item>
              <el-dropdown-item @click.native="toChangePwd">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
          
      </div>
  </el-header>

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
            username:"陌雨成画",
            
            isCollapse:false,
            changeBarDirection:false
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
      
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    //方法集合
    methods: {
        toUserinfo(){
          this.$router.push('../user/userinfo')
        },
        toChangePwd(){
          this.$router.push('../user/changePwd')
        },
        loginOut(){
          this.$router.push('../login')
        }
    },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.userInfo{
  float:right;
  margin-right:20px;
}
.logo{
  width:200px;
  transition:width 0.5s linear;
  img{
    height:60px;
    vertical-align: middle;
  }
  span{
    vertical-align: middle;
  }
}
.min-logo{
  width:60px;
  transition:width 0.3s;
}
.el-header {
    width:100%;
    height:60px;
    padding:0;
    margin:0;
    background-color: #B3C0D1;
    color: #333;
    line-height: 59px;
    text-align:left;
  }
</style>
