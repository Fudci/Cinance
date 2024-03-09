module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', 'jsx', 'tsx'],
        alias: {
          '@pages': './src/Pages',
          '@atom': './src/Atom',
          '@assets': './src/Assets',
          '@helpers': './src/Helpers',
          '@molecules': './src/Molecules',
          '@navigators': './src/Navigators',
          '@organisms': './src/Organisms',
          '@redux': './src/Redux',
          '@services': './src/Services',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
