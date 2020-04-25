<template>
    <div class="nav">
        <router-link to="/money">记账
        <Icon name="money"/>
        </router-link>
        <router-link to="/labels">标签
        <Icon name="label"/>
        </router-link>
        <router-link to="/statistics">统计
        <Icon name="statistics"/>
        </router-link>
    </div>
</template>

<script lang="ts">

    export default {
        name: 'Nav'
    }
</script>

<style lang="scss" scoped>//scoped作用：类名只在当前目录下生效，避免class名称重复
</style>