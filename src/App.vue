<template>
  <div id="app">
    <loader v-if="getAppLoading"/>
    <the-header/>
    <div class="wrapper">
        <the-sidebar/>
        <div class="content-wrapper">
            <router-view/>
        </div>
    </div>
    
    
  </div>
</template>

<script>
import loader from "./components/Loader"
import TheHeader from './components/TheHeader'
import TheSidebar from './components/TheSidebar'

export default {
  data() {
    return {};
  },
  computed: {
    getAppLoading() {
      return this.$store.getters.getAppLoading;
    }
  },
  components: {
    loader,
    TheHeader,
    TheSidebar
  }
};
</script>


<style lang="scss">

    body {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .wrapper {
        padding-top: 78px;
        display: flex;
        flex: auto;
        .content-wrapper {
            flex: auto;
            background: #202124;
            color: #fff
        }
    }


</style>
