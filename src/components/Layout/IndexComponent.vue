<template>
    <div>
        <nav-bar-component/>  

        <el-container>
          
                <el-aside :width="this.$store.state.menu.width">
                    <nav-menu-component/>
                </el-aside>
                
                <el-container>
                    <el-main>
                      <ContainerComponent/>
                    </el-main>
                </el-container>

        </el-container>

    </div>
</template>

<script>
import NavBarComponent from './NavBarComponent.vue'
import ContainerComponent from './ContainerComponent.vue'
import NavMenuComponent from './NavMenuComponent.vue'
export default {
    name: 'IndexComponent',
    components: {
    NavBarComponent,
    ContainerComponent,
    NavMenuComponent
  },
 data() {
      return {
       
      };
    },
   methods: {

    }
}
</script>