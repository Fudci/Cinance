module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          pages: './src/Pages',
          atom: './src/Atom',
          assets: './src/Assets',
          helpers: './src/Helpers',
          molecules: './src/Molecules',
          navigators: './src/Navigators',
          organisms: './src/Organisms',
        },
      },
    ],
  ],
};
