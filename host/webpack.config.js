const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');
const { ModifyEntryPlugin } = require('@angular-architects/module-federation/src/utils/modify-entry-plugin');

const config = withModuleFederationPlugin({
  name: 'host',
  shared: share({
    '@angular-architects/module-federation': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/animations': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/cdk': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/common': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      eager: true,
      pinned: true,
      includeSecondaries: {
        skip: ['@angular/common/http/testing']
      }
    },
    '@angular/compiler': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/flex-layout': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/material': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/material-moment-adapter': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    '@angular/platform-browser-dynamic': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true },
    rxjs: { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true, pinned: true }
  })
});

// https://github.com/angular-architects/module-federation-plugin/issues/253
const plugins = config.plugins.filter((plugin) => !(plugin instanceof ModifyEntryPlugin));

module.exports = {
  ...config,
  plugins
};
