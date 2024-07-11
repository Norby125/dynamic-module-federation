const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'remote',
  exposes: {
    './Component': '././src/app/app.component.ts',
  },
  shared: share({
    '@angular-architects/module-federation': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/animations': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/cdk': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/common': {
      singleton: true,
      strictVersion: true,
      requiredVersion: '^18.0.0',
      includeSecondaries: {
        skip: ['@angular/common/http/testing']
      }
    },
    '@angular/compiler': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/flex-layout': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/material': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/material-moment-adapter': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    '@angular/platform-browser-dynamic': { singleton: true, strictVersion: true, requiredVersion: '^18.0.0' },
    rxjs: { singleton: true, strictVersion: true, requiredVersion: 'auto' }
  })
});