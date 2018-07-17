<template>
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{'disabled' : !page_pagination.has_pre}">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="pageproduct(page_pagination.current_page-1)">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <!-- $emit('getProducts', 2) -->
          <li class="page-item" v-for="page in page_pagination.total_pages" :key="page" :class="{'active' : page_pagination.current_page===page}">
            <a class="page-link" href="#" @click.prevent="pageproduct(page)">{{page}}</a>
          </li>
          <li class="page-item" :class="{'disabled' : !page_pagination.has_next}">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="pageproduct(pagination.current_page+1)"> 
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>
<script>
export default {
     props: ['page_pagination'],
     data: function(){

            return {
                count: 0
            }
     },
     methods:{
         pageproduct(page){

            this.$emit('pageproduct',page);
         }

     }
}
</script>

<style scoped>

</style>
