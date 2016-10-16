<template>
    <div class="index-list">
        <h1>Demo List</h1>
        <ul class="list">
            <li v-for="item in listDemo">
                <a  v-link="{name: item.name}">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
    .list{
        padding: 8px 0;
    }

</style>
<script>
    module.exports = {
        data:function () {
            return {
                listDemo: require('./router-map.mjs')()
            }
        },
        computed:{

        },
        methods: {
            say: function (msg) {
                alert(msg)
            }
        }
    }
</script>