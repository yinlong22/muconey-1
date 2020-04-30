<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新建标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
                :class="{selected: selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag.name}}
                <!--如果selectedTags上push的有（tag）class属性上就加selected选中属性-->
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator'
    import {mixins} from 'vue-class-component'
    import TagHelper from '@/mixins/TagHelper'

    @Component({})
    export default class Tags extends mixins(TagHelper) {
        selectedTags: string[] = []

        get tagList() {
            return this.$store.state.tagList
        }

        created() {
            this.$store.commit('fetchTags')
        }

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            if (index >= 0) {
                this.selectedTags.splice(index, 1)
            } else {
                this.selectedTags.push(tag)//点击后执行这个函数，当选中后，tag会被push到selectedTags上
            }
            this.$emit('update:value', this.selectedTags)
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        flex-grow: 1;
        font-size: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                border-radius: ($h/2);
                padding: 0 16px;
                margin-right: 12px;
                line-height: $h;
                margin-top: 3px;

                &.selected {
                    background: cadetblue;
                    color: whitesmoke;
                }
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 3px;
            }
        }
    }
</style>