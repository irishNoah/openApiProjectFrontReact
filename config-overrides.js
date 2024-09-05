// config-overrides.js
module.exports = function override(config, env) {
    // babel-loader가 최신 자바스크립트 문법을 처리할 수 있도록 설정
    const babelLoader = config.module.rules.find(rule => Array.isArray(rule.oneOf))
      .oneOf.find(r => r.loader && r.loader.includes('babel-loader'));
  
    if (babelLoader) {
      babelLoader.options.presets.push('@babel/preset-env');
    }
  
    return config;
  };
// config-overrides.js
module.exports = function override(config, env) {
    // babel-loader가 최신 자바스크립트 문법을 처리할 수 있도록 설정
    const babelLoader = config.module.rules.find(rule => Array.isArray(rule.oneOf))
      .oneOf.find(r => r.loader && r.loader.includes('babel-loader'));
  
    if (babelLoader) {
      babelLoader.options.presets.push('@babel/preset-env');
    }
  
    return config;
  };
    