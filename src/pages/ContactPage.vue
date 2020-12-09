<template>
  <div>
    <h1 class="section-index">Contact</h1>
    <p class="msg">{{ msg }}</p>
    <ul>
      <li>
        {{ mail }}
        <div class="li-footer"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'お問い合わせはSNSかメールでお気軽にご連絡ください',
      mail: 'ryutarodesuyooo@gmail.com'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-left: 30px;
  width: 150px;
}
</style>
