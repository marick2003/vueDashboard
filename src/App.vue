<template>
  <div id="app">
   
    <router-view/>
     
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    // const api=`${process.env.APIPATH}/api/user/check`;
    // console.log(process.env.APIPATH,process.env.CUSTOMPATH);
    // this.$http.post(api).then((response) =>{
    //  // console.log(response.data);
    // });

  }
}
</script>

<style lang="scss">
 @import "./assets/all";


</style>
