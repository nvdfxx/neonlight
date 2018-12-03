<template>
  <div class="home">
    <form @submit.prevent="getAccountIDfromNickname">
      <input type="text" placeholder="Enter nickname" v-model="nickname">
    </form>
    <div class="nickname-list">
      <ul v-if="nicknames.length > 0">
        <li>{{nicknames[0].nickname}}</li>
        <li class="nickname-list__item" :key="i" v-for="{item,i} in nicknames">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      nickname: '',
      nicknames: []
    }
  },
  computed: {
    getAccountID() {
      return this.$store.getters.getAccountID
    }
  },
  methods: {
    getAccountIDfromNickname() {
      axios.get(`https://api.wotblitz.ru/wotb/account/list/?application_id=d58946c3ef3b4f8124a5a5712a0d7ddb&search=${this.nickname}`)
      .then(res => {
        this.nicknames = res.data.data
        console.log(this.nicknames)
      })
      .catch(e => console.log(e))
    }
  },
  created() {
    
  }
}
</script>

<style lang="scss">

</style>
