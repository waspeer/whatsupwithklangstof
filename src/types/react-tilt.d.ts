declare module 'react-tilt' {
  interface Options {
    reverse?: boolean; // reverse the tilt direction
    max?: number; // max tilt rotation (degrees)
    perspective?: number; // Transform perspective, the lower the more extreme the tilt gets.
    scale?: number; // 2 = 200%, 1.5 = 150%, etc..
    speed?: number; // Speed of the enter/exit transition
    transition?: boolean; // Set a transition on enter/exit.
    axis?: 'X' | 'Y'; // What axis should be disabled. Can be X or Y.
    reset?: boolean; // If the tilt effect has to be reset on exit.
    easing?: string; // Easing on enter/exit.
  }

  declare function Tilt(Options?: options): JSX.Element;

  export default Tilt;
}
