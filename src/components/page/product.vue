<template>
    <div>
        <div class="text-right mt-4">
            <button class="btn btn-primary" @click="openModal" >建立新的產品</button>
        </div> 
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">分類</th>
                    <th >標題</th>
                    <th width="120" class="text-center">原價</th>
                    <th width="120">售價</th>
                    <th width="120">是否啟用</th>
                    <th width="80">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.id">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">
                        {{item.origin_price}}
                    </td>
                    <td class="text-right">
                       
                        {{item.price}}

                    </td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>    

</template>
<script>
// import $ from 'jquery'
export default {
        data(){

            return{
                products:[],

            }
        },
        methods:{
            getProducts(){

                       const api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
                       const vm= this;
                       this.$http.get(api).then((response) =>{

                            console.log(response.data);
                           
                               if(response.data.success){
                                    vm.products=response.data.products;
                               }

                    });
            },
            openModal(){

                $("#productModal").modal('show');

            }

        },
        created(){

            this.getProducts();

        }
}
</script>
<style scoped>

</style>
