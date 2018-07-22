<template>
    <div>
   
    <navbar></navbar>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
          <Sidebar></Sidebar>
          
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <router-view></router-view>
        </main>
      </div>
    </div>

    </div>
</template>
<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Alert from './AlertMessage';
export default {
    
  name: 'Dashboad',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
   
  },
   components:{
       Sidebar,
       Navbar,
       Alert ,
        
    },
  methods:{
    signout(){
       const api=`${process.env.APIPATH}/logout`;
       const vm= this;
       this.$http.post(api).then((response) =>{

                        console.log(response.data);
                        if(response.data.success){

                            vm.$router.push('/login');
                        }

         });

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
