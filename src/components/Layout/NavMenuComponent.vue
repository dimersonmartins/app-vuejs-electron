<template>
    <div>
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="$store.state.menu.active">
          
        <router-link to="dashboard" style="text-decoration: none;">
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>             
          </el-menu-item>
        </router-link>

        <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">Configurações</span>
            </template>
            <!-- v-if="$gatePermission(5)" -->
        <el-menu-item-group title="Acesso">
             <router-link to="configuracoes-usuario" style="text-decoration: none;">
                <el-menu-item index="3-1">Usuários</el-menu-item>
             </router-link>
        </el-menu-item-group>
           
        </el-submenu>

      </el-menu>
    </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
export default {
    name: "NavMenuComponent",
     data() {
      return {
      
      }
    },

    methods: {

    }
}
</script>