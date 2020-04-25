<template>
    <div id="app">
        <!--只要你路径是router里的路径，就展示在view里的component-->
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~@/assets/style/reset.scss";
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
        font-family:$font-hei;
        color: #333;
    }
</style>
