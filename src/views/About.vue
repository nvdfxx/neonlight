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
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                stats: {},
                ToLB: null,
                accCreatedAt: null,
                winrateClass: ''
            }
        },
        computed: {
            getAccountID() {
                return this.$store.getters.getAccountID
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
            }
        },
        created() {
            axios.get(`https://api.wotblitz.ru/wotb/account/info/?application_id=d58946c3ef3b4f8124a5a5712a0d7ddb&account_id=${this.getAccountID}`)
            .then(res => {
                this.stats = res.data.data[this.getAccountID].statistics.all;
                this.ToLB = res.data.data[this.getAccountID].last_battle_time;
                this.accCreatedAt = res.data.data[this.getAccountID].created_at;
                console.log(this.stats)
            })
            .catch(e => console.error(e))
        }
    }
</script>

<style lang="scss" scoped>

    h1 {
        font-size: 60px;
    }

    .battles {
        display: flex;
        justify-content: center;
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

    .red {color: #f44336}
    .yellow {color: #ffd600}
    .green {color: #00c853}
    .blue {color: #1976d2}
    .purple {color: #d500f9}


</style>


