<template>

    <div>
    <b-navbar type="dark" variant="dark">

        <b-navbar-brand href="#">{{$store.state.menu.title}}</b-navbar-brand>
        
        <b-button size="sm" variant="outline-primary" @click="maxOrmin">
            <b-icon icon="list"></b-icon>
        </b-button>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
            
            <b-nav-item-dropdown right>

            <template v-slot:button-content>
                <em>{{$store.state.user.name}}</em>
            </template>

            <div style="padding: 20px; width: 300px">

                <el-row class="demo-avatar demo-basic">
                <el-col :span="4">
                <div class="demo-basic--circle">
                    <div class="block">
                        <el-avatar :size="70" src=""></el-avatar>
                    </div>
                </div>
                </el-col> 
                 <el-col :span="12" style="padding: 15px; margin-left: 30px; width: 60%; font-size: 8pt">
                    {{$store.state.user.email}}
                   <p style="font-size: 12pt">CSA - Work Flow </p>  
                 </el-col>
                </el-row> 
                    
            </div>
            <hr>
            <!--<b-dropdown-item href="#">Perfil</b-dropdown-item>-->
            <b-dropdown-item href="#" @click="sair">Sair</b-dropdown-item>

            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
  </b-navbar>

   <el-drawer 
    title="Notificações"
    :visible.sync="$store.state.notify.drawer "
    size="300px">
  <div style="padding: 5px">

      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Title</h4>
        <hr>
        <p class="mb-0">Content.</p>
     </div>
  
  </div>
</el-drawer>
  </div>

</template>

<style scoped>

</style>

<script>

export default {
     name: 'NavBarComponent',
  data(){
      return{
           
      }
  },
  methods:{
      sair(){        
            localStorage.removeItem('user-data');
            localStorage.removeItem('user-token');
            localStorage.removeItem('user-permission');
            //delete axios.defaults.headers.common['Authorization'];
            this.$router.push('login');
      },
     maxOrmin(){
         if(this.$store.state.menu.active){
            this.$store.state.menu.title = 'Vue/Electron'
            this.$store.state.menu.active = false
            this.$store.state.menu.width = '200px'
         }else{
             this.$store.state.menu.title = 'V.E'
             this.$store.state.menu.active = true
             this.$store.state.menu.width = '70px'
         }
     }
  }
}
</script>