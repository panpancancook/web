<template>
  <div class="upload-image">
    <el-upload
      action=""
      list-type="picture-card"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImage">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'UploadImage',
    data() {
      return {
        dialogVisible: false,
        dialogImage: ''
      }
    },
  }
</script>

<style lang="scss">
  .upload-image{
    display: flex;
  }
</style>
