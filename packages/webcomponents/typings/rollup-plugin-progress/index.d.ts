declare module 'rollup-plugin-progress' {
    type PluginProgressOptions = {
      clearLine?: boolean;
    }
  
    function progress(options?: PluginProgressOptions): void;
  
    export default progress;
  }