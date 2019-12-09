const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@font-family': 'Lato, sans-serif',
      '@primary-color': '#2A289A',
      '@menu-dark-color': 'white',
      '@layout-sider-background': '#2A289A',
      '@layout-header-background': '#2A289A',
      '@layout-body-background': 'transparent',
      '@menu-dark-item-active-bg': '#255C99',
      '@layout-header-height': '48px'
    }
  })
);
