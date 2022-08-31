module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-custom-selectors"),
    require("postcss-custom-media"),
    require("cssnano")({
      preset: "default",
    }),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
        "nesting-rules": true,
      },
    }),
  ],
};
