import { merge } from 'webpack-merge';

module.exports = (config: any, context: any) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.mp4$/,
          use: 'file-loader?name=videos/[name].[ext]',
        },
      ],
    },
  });
};
