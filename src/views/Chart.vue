<template>
<Layout>
<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import echarts from 'echarts'
    import {Component} from 'vue-property-decorator'
    Vue.prototype.$echarts=echarts

    @Component
    export default class Chart extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>