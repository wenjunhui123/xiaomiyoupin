<template>
  <div class="login">
    <el-dialog title="登录" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
      <el-input v-model="account" placeholder="请输入账号"></el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <span slot="footer" class="dialog-footer" width="80%">
        <el-button @click="ingist">注 册</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import search from "../../api/search";
export default {
  data() {
    return {
      dialogVisible: true,
      account: "",
      password: ""
    };
  },
 
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    sure() {
      search.login(this.account, this.password).then(
        result => {
          if (parseInt(result.code) === 0) {
            this.$message("恭喜您，登录成功");
            this.dialogVisible = false;
            this.$store.commit("loginShow", false);
            this.$store.commit("personalShow", true);
            this.$store.commit("accountMu", this.account);
            this.$router.push("/personal");
            return;
          }
          this.dialogVisible = true;
          this.$message("账号或者密码不匹配，请重新输入");
        },
        error => {
          this.$message(error);
        }
      );

      this.dialogVisible = false;
      this.$store.dispatch("personalShowAction", false);
    },
    ingist() {
      search.registry(this.account, this.password).then(
        result => {
          if (parseInt(result.code) === 0) {
            this.$message("注册成功");
            this.dialogVisible = false;
            this.$store.commit("loginShow", false);
            this.$store.commit("personalShow", true);
            this.$store.commit("accountMu", this.account);
            this.$router.push("/personal");
            return;
          }
          this.$message("该账户已经注册，请重新输入");
        },
        error => {
          window.console.log(error);
          this.$message(error);
        }
      );
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://shop.io.mi-img.com/app/shop/img?id=shop_dfa89d9….png&w=750&h=1334);
  background-size: 100% auto;
  background-repeat: no-repeat;
  z-index: 200;
  .el-dialog {
    width: 80%;
    height: 100%;
  }
}
</style>