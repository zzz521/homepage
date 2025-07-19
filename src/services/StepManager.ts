import type { IIntroStep, IStepManager } from '@/types';

/**
 * 抽象步骤管理器
 * 遵循开闭原则，可以通过继承扩展不同类型的步骤管理
 */
export abstract class AbstractStepManager implements IStepManager {
    protected _currentStep: number = 0;
    protected _steps: IIntroStep[] = [];

    constructor(steps: IIntroStep[]) {
        this._steps = steps;
    }

    get currentStep(): number {
        return this._currentStep;
    }

    get totalSteps(): number {
        return this._steps.length;
    }

    get currentStepData(): IIntroStep | null {
        return this._steps[this._currentStep] || null;
    }

    nextStep(): void {
        if (this.canGoNext()) {
            this._currentStep++;
            this.onStepChange();
        }
    }

    prevStep(): void {
        if (this.canGoPrev()) {
            this._currentStep--;
            this.onStepChange();
        }
    }

    goToStep(step: number): void {
        if (step >= 0 && step < this.totalSteps) {
            this._currentStep = step;
            this.onStepChange();
        }
    }

    canGoNext(): boolean {
        return this._currentStep < this.totalSteps - 1;
    }

    canGoPrev(): boolean {
        return this._currentStep > 0;
    }

  // 抽象方法，子类必须实现
  protected abstract onStepChange(): void;
}

/**
 * 介绍页面步骤管理器
 * 单一职责：专门处理介绍页面的步骤逻辑
 */
export class IntroductionStepManager extends AbstractStepManager {
    private _onStepChangeCallback?: (step: number, stepData: IIntroStep) => void;

    constructor(steps: IIntroStep[], onStepChange?: (step: number, stepData: IIntroStep) => void) {
        super(steps);
        this._onStepChangeCallback = onStepChange;
    }

    protected onStepChange(): void {
        const stepData = this.currentStepData;
        if (stepData && this._onStepChangeCallback) {
            this._onStepChangeCallback(this._currentStep, stepData);
        }
    }

    /**
   * 设置步骤变化回调
   */
    setOnStepChangeCallback(callback: (step: number, stepData: IIntroStep) => void): void {
        this._onStepChangeCallback = callback;
    }
}