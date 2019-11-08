<template>
  <div class="login">
   <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="80%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer" width="80%">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
      return {
        dialogVisible: true,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
  components: {
  }
}
</script>

<style lang='less' scoped>
.login{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: lightgray;
  z-index: 200;
  .el-dialog{
    width: 80%;
    height: 100%;
    .dialog{
      
    }
  }
}
</style>