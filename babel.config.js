/** @type {import('@babel/core').TransformOptions} */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./app/components",
            "@contexts": "./app/contexts",
            "@config": "./app/config",
            "@i18n": "./app/i18n",
            "@models": "./app/models",
            "@navigators": "./app/navigators",
            "@screens": "./app/screens",
            "@assets": "./app/assets",
            "@hooks": "./app/hooks",
            "@services": "./app/services",
            "@storage": "./app/storage",
            "@theme": "./app/theme",
            "@utils": "./app/utils",
            "@sdk": "./app/sdk",
            "@lib": "./app/lib",
          },
        },
      ],
    ],
  }
}
