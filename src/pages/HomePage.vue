<template>
  <div class="top-wrapper">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My Introduction Site'
    }
  }
}
</script>

<style scoped>
.top-wrapper {
  min-height: 75vh;
  background-image: url(~@/assets/main.jpg);
}

.title{
  padding-top: 250px;
  font-size: 60px;
}
</style>
