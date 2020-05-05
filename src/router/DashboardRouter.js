import IndexDashboard from '@/components/Layout/ContainerComponent'
//import UsuarioConfiguracaoComponent from  '@/components/Configuracoes/Usuario/IndexComponent.vue'
//import IndexDashboardComponent from  '@/components/Dashboard/IndexComponent.vue'

export default {

  path      : '/', component : IndexDashboard, name : 'index',
  children :[

     // {path : 'dashboard',  component : IndexDashboardComponent, name : 'dashboard'},
     // {path : 'configuracoes-usuario',  component : UsuarioConfiguracaoComponent, name : 'UsuarioConfiguracaoComponent'}
  ]

}
