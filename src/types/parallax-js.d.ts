/* eslint-disable */

declare module 'parallax-js' {
  type CallbackFunction = (...args: any) => any;

  interface Options {
    relativeInput: boolean;
    clipRelativeInput: boolean;
    hoverOnly: boolean;
    inputElement: null | HTMLElement | string;
    calibrateX: boolean;
    calibrateY: boolean;
    invertX: boolean;
    invertY: boolean;
    limitX: boolean | number;
    limitY: boolean | number;
    scalarX: number;
    scalarY: number;
    frictionX: number;
    frictionY: number;
    originX: number;
    originY: number;
    precision: number;
    selector: null | string;
    pointerEvents: boolean;
    onReady: null | CallbackFunction;
  }

  declare class Parallax<E extends HTMLElement> {
    constructor(scene: E, options?: Partial<Options>): Parallax & Options;

    element: E;

    enable(): void;

    disable(): void;

    destroy(): void;

    version(): string;

    relativeInput: boolean;
    clipRelativeInput: boolean;
    hoverOnly: boolean;
    inputElement: null | HTMLElement | string;
    calibrateX: boolean;
    calibrateY: boolean;
    invertX: boolean;
    invertY: boolean;
    limitX: boolean | number;
    limitY: boolean | number;
    scalarX: number;
    scalarY: number;
    frictionX: number;
    frictionY: number;
    originX: number;
    originY: number;
    precision: number;
    selector: null | string;
    pointerEvents: boolean;
    onReady: null | CallbackFunction;
  }

  export default Parallax;
}
