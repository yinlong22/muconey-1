<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">记账
            <Icon name="money"/>
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">标签
            <Icon name="label"/>
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">统计
            <Icon name="statistics"/>
        </router-link>
    </nav>
</template>

<script lang="ts">

    export default {
        name: 'Nav'
    }
</script>
<style lang="scss" scoped>//scoped作用：类名只在当前目录下生效，避免class名称重复
@import "~@/assets/style/reset.scss";
nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;
    > .item{
        padding: 2px 0;
        width: 33.3333333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        .icon{
            width: 32px;
            height: 32px;
        }
    }
    > .item.selected{
        color:$color-highlight;
    }//router-link标签被选中时变色
}
</style>