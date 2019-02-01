<template>
  <div class="upload-data">
    <div class="row">
      <span>产品名称:</span>
      <el-input
        v-model="product.name"
        placeholder="名称"
      />
    </div>
    <div class="row">
      <div class="col">
        <span>编号:</span>
        <el-input
          v-model="product.no"
          placeholder="编号"
        />
      </div>
      <div class="col">
        <span>货号:</span>
        <el-input
          v-model="product.artNo"
          placeholder="货号"
        />
      </div>
      <div class="col">
        <span>幅宽:</span>
        <el-input
          v-model="product.width"
          placeholder="幅宽"
        />
      </div>
    </div>
    <div class="row">
      <span>描述:</span>
      <el-input
        v-model="product.info"
        placeholder="描述"
      />
    </div>
    <div class="row">
      <div class="col">
        <span>成分:</span>
        <el-input
          v-model="product.ingredient"
          placeholder="成分"
        />
      </div>
      <div class="col">
        <span>季节:</span>
        <el-input
          v-model="product.season"
          placeholder="季节"
        />
      </div>
      <div class="col">
        <span>色系:</span>
        <el-input
          v-model="product.colors"
          placeholder="色系"
        />
      </div>
    </div>
    <div class="row">
      <span>详细信息:</span>
      <el-input
        v-model="product.detail"
        :autosize="{ minRows: 2, maxRows: 4}"
        type="textarea"
        placeholder="详细信息"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UploadData',
    data() {
      return {
        product: {
          name: '',
          no: 0,
          artNo: 0,
          width: 0,
          info: '',
          ingredient: '',
          season: '',
          colors: '',
          detail: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .upload-data{
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 30px;
  }

  .row{
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 0 15px 0;
  }

  .col{
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  span{
    width: 100px;
    text-align: right;
  }

  .el-input{
    width: 80%;
    margin: 0 0 0 10px;
  }
</style>
