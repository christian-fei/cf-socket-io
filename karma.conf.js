module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
      'src/**/*.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: false
  })
}
