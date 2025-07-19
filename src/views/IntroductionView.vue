<template>
    <div class="introduction-view">
        <div ref="stepContainer" class="step-container">
            <IntroStep
                v-for="(step, index) in steps"
                :key="step.id"
                :step="step"
                :isActive="index === currentStep"
                :class="{ 'active': index === currentStep }"
                @next="handleNext"
                @prev="handlePrev"
            />
        </div>
        
        <!-- 步骤指示器 -->
        <div class="step-indicators">
            <div
                v-for="(step, index) in steps"
                :key="`indicator-${step.id}`"
                :class="['indicator', { 'active': index === currentStep }]"
                @click="goToStep(index)"
            />
        </div>

        <!-- 导航按钮 -->
        <div class="navigation-buttons">
            <button
                v-if="canGoPrev"
                class="nav-btn prev-btn"
                @click="handlePrev"
            >
                上一步
            </button>
            
            <button
                v-if="canGoNext"
                class="nav-btn next-btn"
                @click="handleNext"
            >
                下一步
            </button>
            
            <button
                v-if="isLastStep"
                class="nav-btn enter-btn"
                @click="goToHomepage"
            >
                进入主页
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import IntroStep from '@/components/IntroStep.vue';
import { IntroductionStepManager } from '@/services/StepManager';
import type { IIntroStep } from '@/types';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const stepContainer = ref<HTMLElement>();
const currentStep = ref(0);

// 介绍步骤数据
const steps: IIntroStep[] = [
    {
        id: 'welcome',
        title: '欢迎来到Geek空间',
        content: '一个专为开发者和科技爱好者打造的资源汇聚地。在这里，你可以发现各种实用工具、创新网站和技术资源，让你的数字生活更加高效便捷。',
        animation: 'fadeIn',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
        id: 'features',
        title: '丰富的功能体验',
        content: '我们精心整理了自主开发的实用工具和网络上的优质资源。每一个链接都经过严格筛选，确保为你提供最有价值的内容。',
        animation: 'slideInFromLeft',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
        id: 'categories',
        title: '智能分类管理',
        content: '所有资源都按照功能和用途进行了细致分类。无论你是在寻找开发工具、设计资源还是学习材料，都能快速定位到目标内容。',
        animation: 'slideInFromRight',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
        id: 'ready',
        title: '开启探索之旅',
        content: '一切准备就绪！现在就让我们一起进入这个充满可能性的数字世界，发现更多精彩内容吧！',
        animation: 'scaleIn',
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
];

// 创建步骤管理器
const stepManager = new IntroductionStepManager(steps, (step, stepData) => {
    currentStep.value = step;
});

// 计算属性
const canGoNext = computed(() => stepManager.canGoNext());
const canGoPrev = computed(() => stepManager.canGoPrev());
const isLastStep = computed(() => currentStep.value === steps.length - 1);

// 方法
const handleNext = (): void => {
    stepManager.nextStep();
};

const handlePrev = (): void => {
    stepManager.prevStep();
};

const goToStep = (step: number): void => {
    stepManager.goToStep(step);
};

const goToHomepage = (): void => {
    router.push('/homepage');
};

// 监听滚轮事件
const handleWheel = (event: WheelEvent): void => {
    event.preventDefault();
    if (event.deltaY > 0 && canGoNext.value) {
        handleNext();
    } else if (event.deltaY < 0 && canGoPrev.value) {
        handlePrev();
    }
};

onMounted(() => {
    // 添加滚轮监听
    window.addEventListener('wheel', handleWheel, { passive: false });
});

// 清理事件监听
onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel);
});
</script>

<style lang="scss" scoped>
.introduction-view {
    @apply relative h-screen w-full overflow-hidden;

    .step-container {
        @apply relative h-full w-full;
    }

    .step-indicators {
        @apply fixed right-8 top-1/2 transform -translate-y-1/2 z-10;
        @apply flex flex-col space-y-3;

        .indicator {
            @apply w-3 h-3 rounded-full bg-white bg-opacity-50 cursor-pointer;
            @apply transition-all duration-300 hover:bg-opacity-75;

            &.active {
                @apply bg-white bg-opacity-100 scale-125;
            }
        }
    }

    .navigation-buttons {
        @apply fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10;
        @apply flex space-x-4;

        .nav-btn {
            @apply px-6 py-3 rounded-full bg-white bg-opacity-20 text-white;
            @apply border border-white border-opacity-30 backdrop-blur-sm;
            @apply transition-all duration-300 hover:bg-opacity-30 hover:scale-105;
            @apply font-medium;

            &.enter-btn {
                @apply bg-gradient-to-r from-purple-500 to-pink-500;
                @apply border-none hover:from-purple-600 hover:to-pink-600;
            }
        }
    }
}
</style>