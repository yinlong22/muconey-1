<template>
    <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
    </ul>
</template>

<script lang="ts">
    export default {
        name: 'Types'
    }
</script>

<style lang="scss" scoped>
    .types {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 25px;
        align-items: center;

        > li {
            width: 50%;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after { //选中后的效果
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 5px;
                background: #333;
            }
        }
    }
</style>