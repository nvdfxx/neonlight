<template>
    <header>
        <div class="header__wrapper">
            <div class="header__logo">
                <router-link to="/">Neonlight</router-link>
            </div>
            <div v-if="getNickname" class="header__nick">
                {{getNickname}}
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            getNickname() {
                let getAccount = this.$store.getters.getAccount;
                console.log(getAccount)
                return getAccount ? getAccount.nickname : 'nickname'
            }
        }
    }
</script>

<style lang="scss" scoped>

    header {
        position: fixed;
        width: 100%;
        z-index: 9;
        background: #202124;
        box-shadow: 0 2px 4px rgba(0,0,0,.5);
        .header__wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #9e9e9e;
            padding-right: 20px;
            a {
                color: #9e9e9e;
                text-decoration: none;
                padding: 30px;
                display: block;
                transition: .2s;
                &:hover {
                    background: #505050;
                }
            }
        }
    }

</style>

