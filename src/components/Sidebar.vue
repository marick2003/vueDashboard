<template>
    <div>
       <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>管理員</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <!-- <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  <span class="sr-only">(current)</span>
                  
                </a> -->
                <router-link to="/admin/product" class="nav-link">
                 產品列表
                 </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  訂單列表
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  優惠卷
                </a>
              </li>
             
          
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>模擬功能</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  <router-link to="../customer_oder" class="nav-link">
                 模擬訂單
                 </router-link>
                 
                </a>
              </li>

            </ul>
          </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>
