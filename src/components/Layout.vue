<template>
    <div class="nav-wrapper">
        <div class="content">
<!--     插槽slot：用户在layout内传进来的-->
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Layout'
    }
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        overflow: auto;
        flex-grow: 1;//尽量把所有高度给content
    }
</style>