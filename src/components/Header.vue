<template>
    <div class="header-render">
        <h1 class="header-title">
            Geek空间
        </h1>
        <p ref="desc" class="header-desc" />

        <svg width="24" height="24" class="header-btn">
            <use href="#icon-ArrowDown" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import TypeIt from 'typeit';
import { onMounted, ref } from 'vue';

const desc = ref<HTMLElement>();

const initHeaderDesc = () => {
    if (desc.value) {
        new TypeIt(desc.value, {
            strings: [
                '凡是过往, 皆为序章；凡是未来, 皆有可期。',
                '愿你所想, 如你所愿。',
            ],
            speed: 100,
            loop: true,
            breakLines: false,
        }).go();
    }
};

onMounted(() => {
    initHeaderDesc();
});
</script>

<style lang="scss">
.header-render {
    @apply relative h-full flex flex-col items-center justify-center;

    .header-title {
        @apply text-5xl;
    }

    .header-desc {
        @apply mt-4 text-gray-900;
    }

    .header-btn {
        @apply cursor-pointer absolute animate-[btn-pulse_1.5s_infinite];
        // animation: btn-pulse 1.5s infinite;
    }

    @keyframes btn-pulse {
        0%,
        100% {
            opacity: 0.4;
            bottom: 20px;
        }
        50% {
            opacity: 1;
            bottom: 36px;
        }
    }
}
</style>
