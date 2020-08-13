<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <el-button type="primary" @click="getMessage">按钮</el-button>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="creatTime"
      label="时间">
    </el-table-column>
  </el-table>
   </div>
</template>

<script>
import {info} from '@/api/index'
export default {
  name: 'testPage',
  props: {
    msg: String
  },
  data(){
      return{
          tableData:[]
      }
  },
  methods:{
       getMessage(){
           let that = this
           info().then(res =>{
               const { code , data = {} } = res.data
               if(code === 'D0000'){
                  that.tableData = data.list;
               }
              
               
           })
       }
  },
  mounted(){
    // this.getMessage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
