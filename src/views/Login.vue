<template>
  <div class="login">
    <div class="login-container">
      <el-row class="flex-space">
        账号：
        <el-input
          v-model="account"
          prefix-icon="el-icon-mobile-phone"
          placeholder="输入手机号"
        />
      </el-row>
      <el-row class="flex-space">
        密码：
        <el-input
          v-model="pwd"
          prefix-icon="el-icon-edit"
          placeholder="输入密码"
        />
      </el-row>
      <el-row class="flex-right">
        <Sliding @slidingValidation="getVerification" />
      </el-row>
      <el-row>
        <el-button
          class="commit"
          @click="submit"
        >
          确定
        </el-button>
        <el-button>
          重置
        </el-button>
      </el-row>
    </div>
    <TriangleBackground />
  </div>
</template>

<script>
  import { Message } from 'element-ui'
  import Sliding from '../components/SlidingValidation'
  import TriangleBackground from '../components/TriangleBackground'

  export default {
    name: 'Login',
    components: {
      Sliding,
      TriangleBackground
    },
    data() {
      return {
        account: '',
        pwd: '',
        verification: false
      }
    },
    watch: {
    },
    created() {
    },
    methods: {
      submit() {
        if (this.verification) {
          // TODO account data submit
          this.$router.push('/index')
        } else {
          Message({
            message: '滑动验证失败',
            type: 'error'
          })
        }
      },
      getVerification(val) {
        this.verification = val
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .login-container{
    width: 300px;
    box-sizing: border-box;
    z-index: 2;
  }

  .el-row{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #666666;
  }

  .el-input{
    width: 250px;
    margin: 10px 0 10px 2px;
  }

  .flex-space{
    justify-content: space-between;
  }

  .flex-right{
    justify-content: flex-end;
  }

  .commit{
    margin: 0 0 0 50px;
  }
</style>
