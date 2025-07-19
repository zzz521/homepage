import { gsap } from 'gsap';

/**
 * 动画服务类
 * 单一职责：处理页面动画效果
 */
export class AnimationService {
    /**
   * 淡入动画
   */
    static fadeIn(element: HTMLElement, duration: number = 1): Promise<void> {
        return new Promise((resolve) => {
            gsap.fromTo(element, 
                { opacity: 0 }, 
                { 
                    opacity: 1, 
                    duration,
                    onComplete: resolve,
                },
            );
        });
    }

    /**
   * 滑入动画
   */
    static slideInFromBottom(element: HTMLElement, duration: number = 1): Promise<void> {
        return new Promise((resolve) => {
            gsap.fromTo(element,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration,
                    ease: 'power2.out',
                    onComplete: resolve,
                },
            );
        });
    }

    /**
   * 滑入动画（从左侧）
   */
    static slideInFromLeft(element: HTMLElement, duration: number = 1): Promise<void> {
        return new Promise((resolve) => {
            gsap.fromTo(element,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration,
                    ease: 'power2.out',
                    onComplete: resolve,
                },
            );
        });
    }

    /**
   * 滑入动画（从右侧）
   */
    static slideInFromRight(element: HTMLElement, duration: number = 1): Promise<void> {
        return new Promise((resolve) => {
            gsap.fromTo(element,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration,
                    ease: 'power2.out',
                    onComplete: resolve,
                },
            );
        });
    }

    /**
   * 缩放动画
   */
    static scaleIn(element: HTMLElement, duration: number = 1): Promise<void> {
        return new Promise((resolve) => {
            gsap.fromTo(element,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration,
                    ease: 'back.out(1.7)',
                    onComplete: resolve,
                },
            );
        });
    }

    /**
   * 打字机效果
   */
    static typeWriter(element: HTMLElement, text: string, speed: number = 50): Promise<void> {
        return new Promise((resolve) => {
            element.textContent = '';
            let i = 0;
            const timer = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(timer);
                    resolve();
                }
            }, speed);
        });
    }
}