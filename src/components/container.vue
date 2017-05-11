<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4" v-for="item in items">
        <h2>{{item.title}}</h2>
        <p>{{item.info}}</p>
        <p>
          <a class="btn btn-default" href="#" role="button">{{item.btntext}}</a>
        </p>
      </div>
      <hr>
      <footer>
        <p>© 2016 Company, Inc.</p>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'container',
  props:{
    items:Array
  }
}
</script>
