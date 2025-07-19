<template>
    <div 
        ref="stepElement"
        :class="['intro-step', { 'active': isActive }]"
        :style="{ background: step.background }"
    >
        <div class="step-content">
            <h1 ref="titleElement" class="step-title">
                {{ step.title }}
            </h1>
            <p ref="descElement" class="step-description">
                {{ step.content }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AnimationService } from '@/services/AnimationService';
import type { IIntroStep } from '@/types';
import { nextTick, ref, watch } from 'vue';

interface Props {
    step: IIntroStep;
    isActive: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    next: [];
    prev: [];
}>();

const stepElement = ref<HTMLElement>();
const titleElement = ref<HTMLElement>();
const descElement = ref<HTMLElement>();

// 监听激活状态变化，执行动画
watch(() => props.isActive, async (isActive) => {
    if (isActive && stepElement.value && titleElement.value && descElement.value) {
        await nextTick();
        
        // 根据步骤配置的动画类型执行不同动画
        switch (props.step.animation) {
            case 'fadeIn':
                await AnimationService.fadeIn(titleElement.value, 0.8);
                await AnimationService.fadeIn(descElement.value, 0.8);
                break;
            case 'slideInFromLeft':
                await AnimationService.slideInFromLeft(titleElement.value, 0.8);
                await AnimationService.slideInFromLeft(descElement.value, 0.8);
                break;
            case 'slideInFromRight':
                await AnimationService.slideInFromRight(titleElement.value, 0.8);
                await AnimationService.slideInFromRight(descElement.value, 0.8);
                break;
            case 'scaleIn':
                await AnimationService.scaleIn(titleElement.value, 0.8);
                await AnimationService.scaleIn(descElement.value, 0.8);
                break;
            default:
                await AnimationService.fadeIn(titleElement.value, 0.8);
                await AnimationService.fadeIn(descElement.value, 0.8);
        }
    }
});
</script>

<style lang="scss" scoped>
.intro-step {
    @apply absolute inset-0 flex items-center justify-center;
    @apply opacity-0 pointer-events-none;
    @apply transition-opacity duration-500;

    &.active {
        @apply opacity-100 pointer-events-auto;
    }

    .step-content {
        @apply text-center text-white max-w-4xl px-8;

        .step-title {
            @apply text-6xl font-bold mb-8;
            @apply opacity-0; // 初始隐藏，等待动画
        }

        .step-description {
            @apply text-xl leading-relaxed;
            @apply opacity-0; // 初始隐藏，等待动画
        }
    }
}
</style>