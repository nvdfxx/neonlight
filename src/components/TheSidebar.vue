<template>
    <div id="sidebar">
        <div class="navbar-list__wrapper">
            <ul class="navbar-list">
                <li class="navbar-item"
                    v-for="route in getRoutes"
                    :key="route.name">
                    <router-link class="navbar-link" :to="route.path">{{route.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            getRoutes() {
                return this.$router.options.routes
            }
        }
    }
</script>

<style lang="scss" scoped>

    #sidebar {
        width: 300px;
        background: #171517;
        padding-top: 30px;
        ul {
            margin: 0;
            padding: 0;
            li {
                a {
                    color: #fff;
                    transition: .2s;
                    text-decoration: none;
                    display: block;
                    padding: 15px;
                    text-transform: uppercase;
                    &:hover {
                        background: #353535;
                        color: #fff;
                    }
                    &.router-link-exact-active {
                        background: #6d6d6d;
                    }
                }
            }
        }
    }

</style>