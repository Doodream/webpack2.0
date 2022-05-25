// webpack.config.js 에서도 require 문이 실행될 수 있습니다.
// 이부분은 webpack이 실행시켜주는 것이 아니라 node.js 런타임에서 실행됩니다.
// path를 사용하는 이유는 node.js에서 path 자체가 옳게 설정되었는지 확인 시켜줍니다.

const path = require('path');

const config = {
    // 상대경로
    entry: './src/index.js',
    output: {
        // 절대경로 : /Users/doodream17/Desktop/workspace/udemy_webpack/src/build
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }

};

module.exports = config;