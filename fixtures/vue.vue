<template>
    <div class="box">
        <span class="inner">{{ title }}</span>
    </div>
</template>

<script setup>
const title = 'demo';
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    color: v-bind(title);

    :deep(.inner) {
        margin: 0;
    }
}
</style>

<style module>
.mod {
    color: red;
}
</style>
