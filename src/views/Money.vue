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
                <input type="text">
                </label>
            </div>
            <div>
                <ul class="type">
                    <li class="selected">支出</li>
                    <li class="selected">收入</li>
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

</style>