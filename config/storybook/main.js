module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    staticDirs: ['../../public'],
    env: (config) => ({
        ...config,
        __IS_DEV__: true,
    }),
};
