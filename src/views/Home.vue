<template>
  <div class="home">
    <form @submit.prevent="getAccountIDfromNickname">
      <div class="form-inner">
        <div class="form-item">
          <input type="text" placeholder="Enter nickname" v-model="nickname">
        </div>
        <div class="form-item">
          <button type="submit">Find</button>
        </div>
      </div>
    </form>
    <div class="nickname-list">
      <ul v-if="nicknames.length > 0">
        <li class="nickname-list__item" :key="i" v-for="(item,i) in nicknames" @click="goToStats(item.account_id, item.nickname)">
          {{item.nickname}}
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
    },
    goToStats(id, nickname) {
      this.$store.dispatch('setAccountID', id);
      this.$store.dispatch('setNickname', nickname);
      this.$router.push('/about')
    }
  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped>

  .form-inner {
    display: flex;
    .form-item:first-child {
      flex: auto;
    }
  }

  form {
    input[type="text"] {
      height: 48px;
      box-sizing: border-box;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 16px;
      outline: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      padding: 0 5px;
      width: 100%;
      transition: .3s;
      &:focus {
        border-color: rgba(255, 255, 255, 0.7)
      }
    }
    button {
      display: inline-block;
      height: 48px;
      width: 100px;
      font-size: 18px;
      text-transform: uppercase;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.4);
      color: #fff;
      outline: none;
      cursor: pointer;
      margin-left: 20px;
      transition: .2s;
      &:hover {
        background: rgba(255, 255, 255, 0.7);
        color: #202124;
      }
    }
  }

  .nickname-list ul {
    list-style: none;
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
    .nickname-list__item {
      display: block;
      width: 25%;
      padding: 10px;
      border: 1px solid rgba(255,255,255,.4);
      margin: 0 2.5% 10px;
      transition: .3s;
      &:hover {
        background: rgba(255,255,255,.7);
        color: #202124;
        cursor: pointer;
      }
    }
  }



</style>
