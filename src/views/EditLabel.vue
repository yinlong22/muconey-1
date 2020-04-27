<template>
    <Layout>
        <div class="navBar">
            <router-link to="/labels">
            <Icon class="leftIcon" name="left"/>
            </router-link>
            <span>编辑标签</span>
            <span class="rightItem"/>
        </div>
        <div class="form-wrapper">
            <FormItem :value="tag.name"
                      @update:value="update"
                      field-name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="button-wrapper">
            <router-link to="/labels">
            <Button class="button" @click="remove">删除标签</Button>
            </router-link>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import tagListModel from '@/models/tagListModel'
    import FormItem from '@/components/Money/FormItem.vue'

    @Component({
        components: {FormItem}
    })
    export default class EditLabel extends Vue {
        tag?: { id: string; name: string } = undefined//？意思是tag 默认值为空

        created() {
            const id = this.$route.params.id//params可以拿到route里所有的参数
            tagListModel.fetch
            const tags = tagListModel.data
            const tag = tags.filter(t => t.id === id)[0]
            if (tag) {
                this.tag = tag
            } else {
                this.$router.replace('/404')
            }
        }

        update(name: string) {
            if (this.tag) {
                tagListModel.update(this.tag.id, name)
            }
        }

        remove() {
            if (this.tag) {
                tagListModel.remove(this.tag.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navBar {
        text-align: center;
        font-size: 19px;
        padding: 13px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .title {

        }

        .leftIcon {
            color: brown;
            width: 25px;
            height: 25px;
        }

        .rightItem {
            width: 25px;
            height: 25px;
        }
    }

    .form-wrapper {
        background: white;
        margin-top: 9px;
    }

    .button-wrapper {
        text-align: center;
        padding: 18px;
        margin-top: 36px;
    }
</style>