module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // paths: {
    //   "interfaces/*": ["src/ts-interfaces/*"],
    //   "sharedFiles/*": ["shared/*"],
    //   "sharedComponents/*": ["src/components/SharedComponents/*"],
    // },
  };
};
