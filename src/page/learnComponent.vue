<template>
    <div id="jumbotron">
        <!-- 3. 將 component 放入需要的地方 -->
        <navbar>
            <!-- 這段 code 將會被插入在上面我們設計的地方（ nav 右邊）  -->
            <div slot="right">
                <div class="form-group">
                    <input type="text" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" class="form-control">
                </div>
                <button type="submit" class="btn btn-success">Sign in</button>
            </div>    
        </navbar>
        <!-- 駝峰式命名使用 -->
        <jumbotron />
        <!-- 嘗試載入 Hello -->
        <container :items="items" />
    </div>
</template>

<script>
// 1. 引用 component
import navbar from '../components/navbar.vue'
// 駝峰式命名示範
import jumbotron from '../components/jumbotron.vue'
// 可以嘗試把昨天以前的範例載入這個新頁面使用看看！
import container from '../components/container.vue'

export default {
    // 2. 在 vue 宣告使用
    components: {
        navbar,
        jumbotron,
        container
    },
    data() {
        return {
            items: [
                {
                    title: 'Heading',
                    info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                    btntext: 'View details »'
                },
                {
                    title: 'Heading',
                    info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                    btntext: 'View details »'
                },
                {
                    title: 'Heading',
                    info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                    btntext: 'View details »'
                },
            ]

        }
    }

}
</script>
<style>
@import '/static/css/bootstrap.css';
</style>
