<template>
    <div>
        <Layout>
            <div class="tags">
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>玩</li>
                </ul>
                <div class="new">
                    <button>新建标签</button>
                </div>
            </div>
            <div>
                <label class="notes">
                    <span class="name">备注</span>
                    <input type="text" placeholder="在这里输入备注">
                </label>
            </div>
            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>
            <div class="numberPad">
                <div class="output">100</div>
                <div class="button">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    // import Nav from '@/components/Nav.vue'
    export default {
        name: 'Money',
        // components:{Nav} /已通过全局引入(在main.ts里)
    }
</script>

<style lang="scss" scoped>
    //空格.是tags里面的，没有.是当前tags
    .tags {
        font-size: 16px;
        padding: 16px;

        > .current {
            display: flex;

            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                border-radius: ($h/2);
                padding: 0 16px;
                margin-right: 12px;
                line-height: $h;
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

    .notes {
        background: #f5f5f5;
        font-size: 16px;
        margin-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }

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

            &.selected::after { //after选中后的效果
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