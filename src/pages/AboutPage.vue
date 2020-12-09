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
      msg: `Ruby, Vue.jsがメインのエンジニア。
      営業職だったが自分の市場価値に疑問を持ち
      「会社に依存せず『個』の実力をつける。」べくエンジニアに転職。
      プログラミング学習に苦労しつつも、現在はフリーランスとして働いています。`,
      github: 'https://github.com/mikamiryuugo',
      qiita: 'https://qiita.com/ryuuuuuuuuuu',
      profiles: [
        {id: 1, title: '2012年04月~2017年9月：メーカー営業', description: '大手法人への自社製品の提案・販売を行う。'},
        {id: 2, title: '2017年10月~2018年5月：会員制Webサイト開発', description: 'Webエンジニアに転職。業界未経験のためテスターで現場参画。次第に開発も携わるようになる。'},
        {id: 3, title: '2018年6月~2019年6月：モチベーションマネジメントシステム開発', description: 'プログラマーとして参画。Rubyを使ったバックエンドを中心に、jQueryでのフロントエンド開発にも携わる。'},
        {id: 4, title: '2019年7月~2020年6月：決済システム開発', description: 'Rubyでのバックエンドメインでさらに実務経験を積む。'},
        {id: 5, title: '2020年7月~2020年12月：予約システム開発', description: 'Vue.jsを使ったフロントエンド実装でスキルの幅を広げる。RailsでのAPI開発も行う。'}
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
