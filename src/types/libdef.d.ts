declare var __SERVER__: boolean;
declare var __WEB__: boolean;
// @ts-ignore
declare var __DEV__: boolean;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __INITIAL_STATE__: any;
  showMailChimpPopup: () => void;
}

interface Global {
  navigator: any;
  addEventListener: (event: string, cb: () => void) => void;
  showMailChimpPopup: () => void;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'react-player/lib/players/FilePlayer' {
  const v: any;
  export default v;
}
declare module 'svg-sprite-loader/runtime/sprite.build' {
  const v: any;
  export default v;
}
declare module 'video-react' {
  const v: any;
  export default v;
}
