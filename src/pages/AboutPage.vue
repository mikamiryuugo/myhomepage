<template>
  <div>
    <h1 class="section-index">About</h1>
    <p class="msg" style="white-space:pre-wrap; word-wrap:break-word;">{{ msg }}</p>
    <div class="container">
      <div class="left-field">
        <img
          src="@/assets/me.jpg"
          class="myicon"
        />
        <a
        v-bind:href="this.github"
        target="_blank"
        class="tips"
        >
        <img
          src="@/assets/GitHub-Mark-120px-plus.png"
          class="icon"
        />
        </a>
        <a
        v-bind:href="this.qiita"
        target="_blank"
        class="tips"
        >
        <img
          src="@/assets/qiita-square.png"
          class="icon"
        />
        </a>
      </div>
      <div class="right-field">
        <ul class="items">
          <li
            v-for="profile in profiles"
            v-bind:key="profile.id"
          >
            <p class="caption">{{ profile.title }}</p>
            <p class="text">{{ profile.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `フリーのWebエンジニアとして活動中。
      公式LINEの構築・ホームページ作成事業も行なっています。`,
      github: 'https://github.com/mikamiryuugo',
      qiita: 'https://qiita.com/ryuuuuuuuuuu',
      profiles: [
        {id: 1, title: '2012年~2017年：メーカー営業', description: '青山学院大学卒業後、化学メーカーに入社。大手法人への自社製品の提案・販売を行う。'},
        {id: 2, title: '2018年~：Web系エンジニア', description: '主にサーバーサイドの開発エンジニアとして様々な案件に参画'},
        {id: 3, title: '2020年~：ホームページ制作', description: '店舗のホームページの受託を開始'},
        {id: 4, title: '2023年~：公式LINE構築', description: '公式LINE構築事業を開始'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: list-item;
  text-align: left;
  margin-bottom: 10px;
}
.left-field {
  padding: 1px;
}
.right-field{
  margin: 0 auto;
  width: 70%;
}
.myicon {
  display: block;
  border-radius: 50%;
  width: 180px;
  margin: 10px auto;
}
.tips{
  margin: 5px;
  border: 0px;
}
.icon {
  height: 40px;
}
.caption {
  font-size: 1.1em;
  font-weight: bold;
}
.text {
  font-size: 1em;
}
</style>
