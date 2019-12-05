<template>
<div>
    
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>
   
    <!-- <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.effectiveTime }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    </el-table> -->

    <el-table :data="showTableData" highlight-current-row v-loading="listLoading" border height="350px" @selection-change="handleSelectionChange" style="width: 100%;">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="name" label="姓名" width="180" sortable show-overflow-tooltip></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="150" sortable></el-table-column>
			<el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
			<el-table-column prop="address" label="球队" width="" sortable show-overflow-tooltip></el-table-column>
      <el-table-column prop="effectiveTime" label="效力时间" width="110" sortable></el-table-column>
			<el-table-column label="操作" width="200">
				<template slot-scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.tableData.length">
        </el-pagination>
        <!--编辑界面-->
      <el-dialog :title="titleMap[dialogStatus]" :visible.sync="editFormVisible" class="editdialog" @close="resetForm('editForm')">
        <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="editForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
          </el-form-item>
          <el-form-item label="效力时间" prop="effectiveTime">
            <el-input placeholder="选择日期" v-model="editForm.effectiveTime"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input type="textarea" v-model="editForm.address" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="editFormVisible = false">取消</el-button>
          <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
        </div>
		</el-dialog>
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
    titleMap: {
        addEquipment:'新增',
        editEquipment: '编辑'
    },
    //新增和编辑弹框标题
    dialogStatus: "",
    filters: {
        name: ''
    },
    listLoading: false,
    editFormVisible: false,//编辑界面是否显示
    editLoading: false,
    editFormRules: {
        name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        age: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        effectiveTime: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        address: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
    },
    tableData: [{
          effectiveTime: '20',
          name: '科比·布莱恩特',
          nickname:'小飞侠',
          age:'38',
          address: '洛杉矶湖人'
        }, {
          effectiveTime: '10',
          name: '勒布朗·詹姆斯',
          nickname:'小皇帝',
          age:'34',
          address: '克利夫兰骑士'
        }, {
          effectiveTime: '13',
          name: '德怀恩·韦德',
          nickname:'闪电侠',
          age:'36',
          address: '迈阿密热火'
        }, {
          effectiveTime: '12',
          name: '迈克尔·乔丹',
          nickname:'上帝',
          age:'55',
          address: '芝加哥公牛'
        }, {
          effectiveTime: '10',
          name: '易建联',
          nickname:'易帝',
          age:'35',
          address: '广东宏建'
        }, {
          effectiveTime: '1',
          name: '林书豪',
          nickname:'林疯狂',
          age:'31',
          address: '北京首钢'
        }, {
          effectiveTime: '9',
          name: '姚明',
          nickname:'小巨人',
          age:'38',
          address: '休斯顿火箭'
        }, {
          effectiveTime: '10',
          name: '斯蒂芬·库里',
          nickname:'神射手',
          age:'31',
          address: '金州勇士'
        }, {
          effectiveTime: '8',
          name: '卡哇伊·莱昂纳德',
          nickname:'机器人',
          age:'28',
          address: '洛杉矶快船'
        }, {
          effectiveTime: '6',
          name: '扬尼斯·阿德托昆博',
          nickname:'字母歌',
          age:'25',
          address: '雄鹿'
        },{
          effectiveTime: '8',
          name: '詹姆斯·哈登',
          nickname:'大胡子',
          age:'28',
          address: '休斯顿火箭'
        },
    ],
        multipleSelection: [],
        editForm: {
            id: 0,
            name: '',
            //sex: -1,
            age: 0,
            effectiveTime: '',
            address: ''
        },
        currentPage:1,
        totalCount:1000,
        pagesize:10,
		
};
},
//监听属性 类似于data概念
computed: {
     showTableData() {
      return (this.tableData||[]).slice((this.currentPage - 1) * this.pagesize,
            this.currentPage * this.pagesize
      );
    }
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
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        this.currentPage = val;
       
    },
     handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getUsers(){
          console.log('getusers')
      },
      handleAdd(){
        let _this=this
        
        _this.editFormVisible = true;
        _this.dialogStatus = "addEquipment";
        
      },
      handleDel(){
          console.log('handleDel')
      },
     handleEdit: function (index, row) {
        let _this=this
        _this.editFormVisible = true;
        _this.dialogStatus = "editEquipment"
        //console.log(this.editFormVisible,111)
        this.$nextTick(() => {
          _this.editForm = Object.assign({}, row);
        })
    },
    resetForm(formName){
      
      this.$refs[formName].resetFields(); 
    
    },
    editSubmit(){
        console.log('editSubmit')
        this.editFormVisible = false;
    }
},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.toolbar {
	background: #fff;
	padding: 10px;
	//border:1px solid #dfe6ec;
	margin: 0 0 10px 0;
	.el-form-item {
		margin-bottom: 10px;
	}
}
.el-pagination{
    background:#fff;
}
.el-table{
    overflow:auto;
    max-height:475px;
}
.el-table::before{
    content:none;
}
.editdialog{
  .el-input{
      width:300px;
  }
  .el-textarea{
      width:300px;
  }
}
</style>