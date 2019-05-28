declare module 'rollup-plugin-url' {
    type PluginURLOptions = {
      limit?: number;
      include?: string[];
      exclude?: string[];
      publicPath?: string;
      emitFile?: boolean;
      fileName?: string;
      sourceDir?: string;
      destDist?: string;
    }
  
    function url(options?: PluginURLOptions): void;
  
    export default url;
  }