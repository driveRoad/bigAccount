module.exports = {
  egg: true,
  framework: 'react',
  entry: {
    include: ['app/web/page',
      { layout: 'app/web/framework/layout/layout.jsx?loader=false' }
    ],
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js',
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  cssModule: {
    include: 'app/web/page/css/module'
  },
  dll: ['eventsource-polyfill','react', 'react-dom'],
  loaders: {
    urlimage: {
      test: /\.(ico|png|jpe?g|gif|svg)(\?.*)?$/,
    }
  },
  plugins: {
    hot:false
  },
  hot:false,
  done() {
    console.log('---webpack compile finish---');
  }
};
