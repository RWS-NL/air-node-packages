module.exports = function webpack({ config }) {
  config.module.rules.push(
    {
      test: /\.stories\.tsx$/,
      loaders: [ require.resolve('@storybook/source-loader') ],
      enforce: 'pre',
    }
  );

  return config;
};