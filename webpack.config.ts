import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = (env.mode || process.env.NODE_ENV || 'development') as BuildMode;
    const isDev = mode === 'development';
    const port = Number(env.port || process.env.NODE_PORT || 3000);

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    })

    return config;

};
