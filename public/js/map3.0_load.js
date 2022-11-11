/*
 * @Author: 杨宏业
 * @Date: 2022-11-11 18:45:45
 * @LastEditTime: 2022-11-11 18:50:19
 * @FilePath: \Workspace\vuedemo\public\js\map3.0_load.js
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
 */
var offmapcfg = {
    'imgext': '.jpg', //瓦片图的后缀 ------ 根据需要修改，一般是 .png .jpg
    'customstyle': '', //自定义样式的地址，为空默认在 offlinemap/custom/v2/mapstyle 文件
    'tiles_dir': '', //图片瓦片图的地址，为空默认在 offlinemap/tiles/ 目录
    'tiles_road_dir': '', //图片路网的地址，为空默认在 offlinemap/tiles_road/ 目录
    'tiles_satellite_dir': '', //卫星图的地址，为空默认在 offlinemap/tiles_satellite/ 目录
    'tiles_v_dir': '', //矢量瓦片图的地址，为空默认在 offlinemap/tiles_v/ 目录
};

//
var JS__FILE__ = document.currentScript ? document.currentScript.src : document.scripts[document.scripts.length - 1].src;
offmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/") + 1); //地图API主目录
(function() {
    window.BMap_loadScriptTime = (new Date).getTime();
    //加载地图API主文件
    document.write('<script type="text/javascript" src="' + offmapcfg.home + 'map3.0.min.js"></script>');
})();