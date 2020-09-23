<!-- 菜单树 -->
<template>
  <div class="menus-tree">
    <el-table :data="model.menus" border max-height="100%" ref="table">
      <el-table-column prop="id" label="id" type="selection" fixed></el-table-column>
      <el-table-tree-column fixed :expand-all="!!1" :remote="remote" file-icon="icon icon-file"
                            folder-icon="icon icon-folder" prop="label" label="title" width="320" class-name="123"
                            header-align="center">
      </el-table-tree-column>

      <el-table-column prop="description" label="Description" :show-overflow-tooltip="true" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'promiseManage',
    data () {
      return {
        model: {
          menus: flatTree.filter(f => f['parent_id'] == null)
        }

      }
    },
    methods: {
      remote (row, callback) {
        callback(flatTree.filter(f => f['parent_id'] == row['id']))
      },
      formatter (row, column) {
        return ' ---  ' + row.label
      },
      cl () {
        this.$refs.table.$emit('clearTreeCloumn')
      }
    }
  }
  var flatTree = [{
    'id': 1,
    'label': 'System',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 3,
    'description': 'System Manager'
  }, {
    'id': 2,
    'label': 'base',
    'parent_id': 1,
    'depth': 1,
    'child_num': 5,
    'description': 'Base Manager',
  }, {
    'id': 3,
    'label': 'Menus',
    'parent_id': 2,
    'depth': 2,
    'child_num': 0,
    'description': 'menu manager',
  }, {
    'id': 4,
    'label': 'Roles',
    'parent_id': 2,
    'depth': 2,
    'child_num': 0,
    'description': 'Role Manager',
  }, {
    'id': 5,
    'label': 'Users',
    'parent_id': 2,
    'depth': 2,
    'child_num': 0,
    'description': 'User Manager',
  }, {
    'id': 6,
    'label': 'Customs',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 2,
    'description': 'Custom Manager',
  }, {
    'id': 7,
    'label': 'CustomList',
    'parent_id': 6,
    'depth': 1,
    'child_num': 0,
    'description': 'CustomList',
  }, {
    'id': 8,
    'label': 'Templates',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 1,
    'description': 'Template Manager',
  }, {
    'id': 9,
    'label': 'TemplateList',
    'parent_id': 8,
    'depth': 1,
    'child_num': 0,
    'description': 'Template Manager',
  }, {
    'id': 10,
    'label': 'Bussiness',
    'parent_id': null,
    'url': null,
    'depth': 0,
    'child_num': 2,
    'description': 'Bussiness Manager',
  },
    {
      'id': 11,
      'label': 'BussinessList',
      'parent_id': 10,
      'url': null,
      'depth': 1,
      'child_num': 2,
      'description': 'BussinessList',
      'children': []
    }, {
      'id': 12,
      'label': 'Currencies',
      'parent_id': 11,
      'depth': 2,
      'child_num': 0,
      'description': 'Currencies',
    }, {
      'id': 13,
      'label': 'Dealtypes',
      'parent_id': 11,
      'depth': 2,
      'child_num': 0,
      'description': 'Dealtypes',
    }, {
      'id': 14,
      'label': 'Products',
      'parent_id': 10,
      'url': null,
      'depth': 1,
      'child_num': 2,
      'description': 'Products'
    }, {
      'id': 15,
      'label': 'ProductTypes',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductTypes',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }, {
      'id': 16,
      'label': 'ProductList',
      'parent_id': 14,
      'depth': 2,
      'child_num': 0,
      'description': 'ProductList',
    }]
</script>
<style type="text/css">

  .icon-file {
    padding-right: 7px;
    padding-left: 18px
  }

  .icon-folder,
  .icon-folder-open {
    padding-left: 7px;
    padding-right: 7px
  }
</style>
