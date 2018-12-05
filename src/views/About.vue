<template>
    <div class="about">
        <h1 :class="winrateClass">{{winrate}}%</h1>
        <div class="battles">
            <div class="battles__item bi-all">
                <span>
                    {{stats.battles}}
                </span>
                <span>
                    Всего боев
                </span>
            </div>
            <div class="battles__item bi-wins">
                <span>
                    {{stats.wins}}
                </span>
                <span>
                    Побед
                </span>
            </div>
            <div class="battles__item bi-losses">
                <span>
                    {{stats.losses}}
                </span>
                <span>
                    Поражений
                </span>
            </div>
        </div>
        <div class="damage">
            <div class="damage__item">
                <span>{{avgDmg}}</span>
                <span>Средний урон</span>
            </div>
            <div class="damage__item">
                <span>{{damageCoefficient}}</span>
                <span>Коэффициент урона</span>
            </div>
            <div class="damage__item">
                <span>{{avgXP}}</span>
                <span>Средний опыт</span>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                //stats: {},
                winrateClass: ''
            }
        },
        computed: {
            stats() {
                let getAccount = this.$store.getters.getAccount;
                console.log(getAccount);
                return getAccount ? getAccount.statistics.all : {}
            },
            winrate() {
                let battles = this.stats.battles;
                let wins = this.stats.wins;
                let losses = this.stats.losses;

                let winrate =  (wins / battles * 100).toFixed(2);

                if ((winrate >= 42) && (winrate < 47)) {
                    this.winrateClass = 'red'
                }

                if ((winrate >= 47) && (winrate < 50)) {
                    this.winrateClass = 'yellow'
                }

                if ((winrate >= 52) && (winrate < 60)) {
                    this.winrateClass = 'green'
                }

                if ((winrate >= 60) && (winrate < 70)) {
                    this.winrateClass = 'blue'
                }

                if (winrate >= 70) {
                    this.winrateClass = 'purple'
                }

                return winrate
            },
            avgDmg() {
                return (this.stats.damage_dealt / this.stats.battles).toFixed(0)
            },
            damageCoefficient() {
                return (this.stats.damage_dealt / this.stats.damage_received).toFixed(2)
            },
            avgXP() {
                return (this.stats.xp / this.stats.battles).toFixed(0)
            }
        },
        created() {
            /*this.$nextTick(() => {
                let getAccount = this.$store.getters.getAccount;
            console.log(getAccount);
            this.stats = getAccount ? getAccount.statistics.all : {}
            })*/
            
        }
    }
</script>

<style lang="scss" scoped>

    @import '../scss/global.scss';

    h1 {
        font-size: 60px;
    }

    .battles {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        .battles__item {
            display: flex;
            flex-direction: column;
            margin: 0 40px;
            font-size: 20px;
            span:first-child {
                font-size: 48px;
            }
        }
    }

    .damage {
        display: flex;
        justify-content: center;
        .damage__item {
            display: flex;
            flex-direction: column;
            margin: 0 40px;
            font-size: 20px;
            span:first-child {
                font-size: 48px;
            }
        }
    }

    .red {color: $red}
    .yellow {color: $yellow}
    .green {color: $green}
    .blue {color: $blue}
    .purple {color: $purple}


</style>


