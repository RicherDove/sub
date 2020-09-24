const path=require('path');
function resolve(dir) {
  return path.join(__dirname,dir);
}

module.exports={
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('components',resolve('./src/components'))
    .set('css', resolve('./src/assets/css'))
    .set('router',resolve('./src/router'))
    .set('views',resolve('./src/views'))
  }
}