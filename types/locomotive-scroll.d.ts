declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: Element | HTMLElement;
      name?: string;
      offset?: [number, number] | number;
      repeat?: boolean;
      smooth?: boolean;
      initPosition?: { x: number; y: number };
      direction?: 'vertical' | 'horizontal';
      gestureDirection?: 'vertical' | 'horizontal';
      reloadOnContextChange?: boolean;
      lerp?: number;
      class?: string;
      scrollbarContainer?: false | string;
      scrollbarClass?: string;
      scrollingClass?: string;
      draggingClass?: string;
      smoothClass?: string;
      initClass?: string;
      getSpeed?: boolean;
      getDirection?: boolean;
      scrollFromAnywhere?: boolean;
      smartphone?: {
        smooth?: boolean;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
        breakpoint?: number;
      };
      tablet?: {
        smooth?: boolean;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
        breakpoint?: number;
      };
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      on(event: string, callback: (args: any) => void): void;
      off(event: string, callback: (args: any) => void): void;
      update(): void;
      start(): void;
      stop(): void;
      scrollTo(
        target: string | HTMLElement | number,
        options?: {
          offset?: number;
          callback?: () => void;
          duration?: number;
          easing?: [number, number, number, number];
          disableLerp?: boolean;
        }
      ): void;
      setScroll(x: number, y: number): void;
      destroy(): void;
    }
  }
  