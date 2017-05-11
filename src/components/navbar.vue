<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link :to="{name:'hello'}">Project name</router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <form class="navbar-form navbar-right">
          <slot name='right'>
            <!-- 包裹在 slot 裡面的這段 code 是預設 -->
          </slot>
        </form>
      </div>
      <!--/.navbar-collapse -->
    </div>
  </nav>
</template>
<script>
export default {
  name: ' navbar',
}
</script>
