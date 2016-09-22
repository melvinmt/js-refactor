module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/*.js'
    ],
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage'],
    preprocessors: { 'src/*.js': ['coverage'] }
  });
};