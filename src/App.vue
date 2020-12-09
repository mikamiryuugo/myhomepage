<template>
  <div id="app">
    <main>
      <div class="top-wrapper">
        <router-link v-bind:to="section.path" class="btn item" v-for="section in sections" :key="section.id">
          <!-- クリックしたpathにとび、そのコンポーネントが下にあるrouter-viewに描画される。
          (router-viewコンポーネントによって、ルーティングで定義されたコンポーネントが描画される)
         「ルーティング制御によって表示したいコンテンツの場所」に、<router-view>タグを記述する。
          ＊最初はHomePage.vueが表示、index.jsに書いたpathが"/"だから。-->
          <p class="caption">
            <span v-bind:class="section.icon"></span>
            {{ section.title }}
          </p>
        </router-link>
      </div>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My Introduction',
      sections: [
        {id: 1, title: 'About', link: 'about', icon: 'fas fa-user', path: '/about'},
        {id: 2, title: 'Skills', link: 'skill', icon: 'fas fa-list-ul', path: '/skill'},
        {id: 3, title: 'Contact', link: 'contact', icon: 'fas fa-envelope', path: '/contact'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Noto Sans JP', 'Vollkorn', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p {
  margin: 0;
}
.container {
  padding: 0 15px;
  margin: 5px auto;
}
.btn {
  padding: 8px 10px;
  display: inline-block;
  opacity: 0.8;
  border: solid #24292D 1px;
  border-radius: 4px;
  transition: all 1s;
}
.btn:hover {
  opacity: 1;
}
.caption {
  font-size: 1.1em;
  font-weight: bold;
}
.top-wrapper {
  width: 100%;
  padding: 20px 0 50px 0;
  background-size: cover;
  color: white;
  border-bottom: 2px solid #dee7ec;
}
.item {
  width: 21%;
  margin: 6px;
  border: 1px solid #dee7ec;
  border-radius: 4px;
  color: #ffffff;
  background-image: linear-gradient(#6795fd 0%, #67ceff 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px #5e7fca;
}
.item:active{
  transform: translateY(4px);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-bottom: none;
}
.item:hover {
  background-color:rgba(255, 255, 255, 0.3);
}
.section {
    width:90%;
    margin: 0 auto;
    padding: 10px;
    border: solid #b0c4de 0px;
}
.section::after {
    content: "";
    display: block;
    clear: both;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 5px 8px;
}
</style>
