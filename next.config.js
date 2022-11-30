const AutoExport = require('webpack-auto-export');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));

    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });

    config.plugins.push(
      new AutoExport({
        extension: '.ts',
        baseDir: './src',
        exportType: 'detect',
        paths: [
          'components',
          'components/layouts',
          'components/shared',
          'components/views',
          'constants',
          'containers',
          'hooks',
          'services',
          'types',
          'utils',
        ],
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
