<template>
    <div class="tags">
        <div class="new">
            <button>新建标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag"
                :class="{selected: selectedTags.indexOf(tag)>=0}"
                @click="select(tag)">{{tag}}
                <!--如果selectedTags上push的有（tag）class属性上就加selected选中属性-->
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator'

    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: string[] | undefined
        selectedTags: string[] = []

        select(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            if (index >= 0) {
                this.selectedTags.splice(index, 1)
            } else {
                this.selectedTags.push(tag)//点击后执行这个函数，当选中后，tag会被push到selectedTags上
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
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