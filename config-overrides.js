const { override, fixBabelImports, addLessLoader, adjustStyleLoaders } = require('customize-cra');

module.exports = override(
  // Use babel-plugin-import for antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // Add less-loader for antd customization
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }
  }),
  // Fix PostCSS configuration
  adjustStyleLoaders(({ use }) => {
    if (use && use.find(item => item.loader === 'postcss-loader')) {
      const postcssLoader = use.find(item => item.loader === 'postcss-loader');
      if (postcssLoader && postcssLoader.options && postcssLoader.options.plugins) {
        // Move plugins into postcssOptions for newer versions of postcss-loader
        postcssLoader.options.postcssOptions = {
          plugins: postcssLoader.options.plugins
        };
        delete postcssLoader.options.plugins;
      }
    }
  })
);