<template>
  <div class="home">
    {{test}}
  </div>
</template>

<script>

//import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      test: null
    }
  },
  created() {
   // axios.get('https://api.wotblitz.ru/wotb/account/list/?application_id=d58946c3ef3b4f8124a5a5712a0d7ddb&search=_FeelMySkill')
    //.then(res => this.test = res.data.data[0].account_id)
    //.catch(e => console.log(e))
    this.test = this.$store.getters.getAccountID
  }
}
</script>

<style lang="scss">

</style>
