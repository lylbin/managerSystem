<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" >
    <el-form-item label="用户名">
      <el-input v-model="sizeForm.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="账号">
      <el-input v-model="sizeForm.account" disabled ></el-input>
    </el-form-item>
    
    <el-form-item label="性别">
      <el-radio-group v-model="sizeForm.sex" size="medium">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="用户权限">
      <el-radio-group v-model="sizeForm.resource" size="medium">
        <el-radio border label="普通用户"></el-radio>
        <el-radio border label="管理员"></el-radio>
      </el-radio-group>
    </el-form-item>
    
    <el-form-item label="签名">
      <el-input type="textarea" v-model="sizeForm.sign" :autosize="{ minRows: 2, maxRows: 10}"></el-input>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">编辑</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
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
      sizeForm: {
        name: "陌雨成画",
        account:'E99BEFE53E733BC586F65EFDC613155',
        region: "",
        sex:"男",
        resource: "普通用户", 
        sign:'' 
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.el-input{
    width:300px;
}
.el-textarea{
    width:300px;
}
</style>