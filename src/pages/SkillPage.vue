<template>
  <div>
    <h1 class="section-index">Skill</h1>
    <p class="msg">{{ msg }}</p>
    <div class="container">
      <ul class="items">
        <li
          v-for="profile in profiles"
          v-bind:key="profile.id"
        >
          <div class="left-field">
            <img
              v-bind:src="profile.icon1"
              class="icon"
            />
            <img
              v-bind:src="profile.icon2"
              class="icon"
            />
            <img
              v-bind:src="profile.icon3"
              class="icon"
            />
          </div>
          <div class="right-field">
            <p class="caption">{{ profile.title }}</p>
            <p class="text">{{ profile.description }}</p>
          </div>
          <div class="li-footer"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      profiles: [
        {id: 1, title: 'Ruby', icon1: require('@/assets/ruby.svg'), description: '３年~。Web、API、バッチ開発可能。'},
        {id: 2, title: 'HTML5/CSS3/JavaScript', icon1: require('@/assets/html-5.svg'), icon2: require('@/assets/css-3.svg'), icon3: require('@/assets/javascript.svg'), description: '基本的に問題なし。'},
        {id: 3, title: 'PostgreSQL/MySQL', icon1: require('@/assets/postgresql.svg'), icon2: require('@/assets/mysql.svg'), description: '基本的に問題なし。'},
        {id: 4, title: 'Ruby on Rails', icon1: require('@/assets/rails.svg'), description: '３年~'},
        {id: 5, title: 'Vue.js/jQuery', icon1: require('@/assets/vue.svg'), icon2: require('@/assets/jquery.svg'), description: '６ヶ月~/ ２年'},
        {id: 6, title: 'Docker/CircleCI', icon1: require('@/assets/docker.svg'), icon3: require('@/assets/circleci.svg'), description: '基本的に問題なし'}
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.left-field{
  text-align: right;
}
.left-field {
  padding: 1px;
  float: left;
  width: 265px;
}
.right-field{
  min-width: 275px;
  text-align: left;
}
.li-footer {
  clear: both;
}
.icon {
  height: 40px;
  margin: 0 5px;
}
</style>
