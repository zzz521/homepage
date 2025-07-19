<template>
    <div class="app-container">
        <router-view />
    </div>
</template>

<script setup lang="ts">
// 移除了原来的Header组件，因为现在通过路由来管理页面
</script>

<style lang="scss">
.app-container {
    @apply h-screen w-full;
}

// 全局样式重置
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#app {
    height: 100%;
}
</style>
