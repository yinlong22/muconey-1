<template>
    <Layout>
        <div class="tags">
            <router-link v-for="tag in tags" :key="tag.id" class="tag" :to="`/labels/edit/${tag.id}`"><span>
                {{tag.name}}</span>
                <icon name="right"/>
            </router-link>
        </div>
        <div class="createTags-wrapper">
            <Button class="createTags"
                    @click="createTag">新建标签
            </Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import Button from '@/components/Money/Button.vue'
    import store from '@/store/index2'

    @Component({
        components: {Button}
    })
    export default class Labels extends Vue {
        tags = store.tagList

        createTag() {
            const name = window.prompt('请输入标签名')
            if (name) {
                store.createTag(name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
            min-height: 46px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e8;

            svg {
                width: 20px;
                height: 20px;
                color: brown;
                margin-right: 18px;
            }
        }
    }

    .createTags {
        background: darkseagreen;
        color: whitesmoke;
        border-radius: 6px;
        border: none;
        height: 36px;
        padding: 0 16px;

        &-wrapper {
            text-align: center;
            padding: 18px;
            margin-top: 28px;
        }
    }
</style>