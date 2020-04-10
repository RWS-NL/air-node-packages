/// <reference types="react-scripts" />

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'rollup-plugin-progress' {
  export default function progress(...args: any[]): void;
}

declare module 'rollup-plugin-postcss' {
  interface PostCssArgs extends Record<PropertyKey, any> {
    modules: boolean;
    minimize: boolean;
    inject: {
      insertAt: string;
    };
  }

  export default function postcss(args: Partial<PostCssArgs>): void;
}

declare module 'rollup-plugin-peer-deps-external' {
  export default function external(...args: any[]): void;
}

declare module 'rollup-plugin-cleaner' {
  interface CleanerArgs extends Record<PropertyKey, any> {
    targets: string[];
  }

  export default function cleaner(args: Partial<CleanerArgs>): void;
}

declare module '@svgr/rollup' {
  export default function svgr(...args: any[]): void;
}

declare module '@rollup/plugin-url' {
  export default function url(...args: any[]): void;
}
