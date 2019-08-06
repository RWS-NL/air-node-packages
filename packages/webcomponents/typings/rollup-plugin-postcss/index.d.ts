declare module 'rollup-plugin-postcss' {

    type FunctionType = (...args: any[]) => void;
  
    type PostCssPluginOptions = {
      extensions?: string[];
      plugins?: any[];
      inject?: boolean | any;
      extract?: boolean | string;
      modules?: boolean | any;
      autoModules?: boolean;
      namedExports?: boolean | FunctionType;
      minimize?: boolean | any;
      sourceMap?: boolean | 'inline';
      parser?: string | FunctionType;
      stringifier?: string | FunctionType;
      syntax?: string | FunctionType;
      exec?: boolean;
      config?: boolean | {
        path: string;
        ctx: any;
      };
      name?: any[] | any[][];
      loaders?: any[];
      onImport?: (id: any) => void;
    }
  
    function postcss(options?: PostCssPluginOptions): void;
  
    export default postcss;
  }