<template>
  <div class="product-list">
    <el-table :data="tableData">
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.image">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
      />
      <el-table-column
        prop="no"
        label="编号"
      />
      <el-table-column
        prop="artNo"
        label="货号"
      />
      <el-table-column
        prop="colors"
        label="色系"
      />
      <el-table-column
        prop="price"
        label="厂家价格"
      />
      <el-table-column
        prop="create"
        label="创建日期"
      />
      <el-table-column
        prop="update"
        label="更新日期"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="editItem(scope.row.id)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            @click="deleteItem(scope.row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'ProductList',
    data() {
      return {
        tableData: [{
          id: 1,
          image: 'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
          name: '时尚布',
          no: 'T666',
          artNo: '11',
          colors: '红色，白色，藏蓝',
          price: 20.00,
          create: '2019-01-29 19:13:05',
          update: '2019-01-29 19:13:05'
        }]
      }
    },
    methods: {
      editItem(id) {
        console.log(id)
        this.$router.push('/upload-data')
      },
      deleteItem(id) {
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-list{
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding: 30px;
    box-sizing: border-box;
  }

  img{
    width: 50px;
    height: 50px;
  }
</style>
