// Configures karma to fail testing when coverage dips below a desired threshold
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false,
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      reports: ["html", "lcovonly", "test-summary"],
      fixWebpackSourcePaths: true,
      thresholds: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
    reporters: ["progress", "kjhtml", "coverage-istanbul"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    restartOnFileChange: true,
  });
};
