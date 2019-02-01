<template>
  <el-menu
    mode="vertical"
    :router="true"
    :background-color="bgColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
  >
    <el-row
      v-for="item in menu"
      :key="item.index"
    >
      <el-menu-item
        v-if="!item.submenu || item.submenu.length === 0"
        :index="item.index"
      >
        <template slot="title">
          <i :class="item.icon" />
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
      <el-submenu
        v-else
        :index="item.index"
      >
        <template slot="title">
          <i :class="item.icon" />
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="sub of item.submenu"
            :key="sub.index"
            :index="sub.index"
          >
            <i :class="sub.icon" />
            {{ sub.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-row>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      bgColor: {
        type: String,
        default() {
          return '#c9d4de'
        }
      },
      textColor: {
        type: String,
        default() {
          return '#ffffff'
        }
      },
      activeTextColor: {
        type: String,
        default() {
          return '#9cbeda'
        }
      }
    },
    data() {
      return {
        // menu数据结构:
        //  index 唯一标志&跳转url（router模式下使用）
        //  title 菜单内容
        //  icon 菜单图标
        menu: [{
          index: '/product-list',
          title: '产品列表',
          icon: 'el-icon-menu'
        }, {
          index: '/store-info',
          title: '店铺信息',
          icon: 'el-icon-tickets'
        }, {
          index: '3',
          title: '广告设置',
          icon: 'el-icon-picture',
          url: '/store-info'
        }, {
          index: '4',
          title: '账号信息',
          icon: 'el-icon-setting',
          url: '/store-info'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu{
    height: 100vh;
  }

  i{
    color: #ffffff;
  }
</style>

<style lang="scss">
  .el-submenu__title i{
    color: #ffffff;

    &:active{
      color: #9cbeda;
    }
  }
</style>
