import { defineConfig } from '@rspack/cli';
import TerserPlugin from 'terser-webpack-plugin';

export default defineConfig({
  mode: 'production',
  entry: './src/main.tsx',
  devtool: false,
  target: ['web', 'es2022'],
  output: {
    path: 'rspack-dist',
    filename: 'rspack.js',
    clean: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  optimization: {
    minimizer: [
      process.env.SWC &&
        new TerserPlugin({
          minify: TerserPlugin.swcMinify,
        }),
      process.env.ESBUILD &&
        new TerserPlugin({
          minify: TerserPlugin.esbuildMinify,
        }),
    ].filter(Boolean),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                jsx: true,
              },
              transform: {
                react: {
                  pragma: 'React.createElement',
                  pragmaFrag: 'React.Fragment',
                  throwIfNamespace: true,
                  development: false,
                  useBuiltins: false,
                },
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
  experiments: {
    css: true,
  },
});
