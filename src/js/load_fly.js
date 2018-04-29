export default function($skyline_layout){
  // if (!$.isFunction(SGWorld.Open)) {
  //   var msg = '<div>\
  //     <p>1.本系统只支持IE内核浏览器，请使用IE9以上版本的浏览器访问本站；</p>\
  //     <p>2.您的计算机没有安装Skyline插件，请先</p><a href="Project/Plugin/TerraExplorer Pro.zip">下载</a><a>并安装Skyline插件。</p>\
  //     </div>'
  //   $.messager.alert('提示',msg);
  // }
  
  // 直接通过id就能调用该dom
  $skyline_layout.layout('panel', 'west')
    .append('<object id="TerraExplorerInformationWindow" classid="CLSID:3a4f9193-65a8-11d5-85c1-0001023952c1" style="width: 100%;height: calc(100% - 5px);"></object>')
  $skyline_layout.layout('panel', 'center')
    .append('<object id="TerraExplorer3DWindow" classid="CLSID:3a4f9192-65a8-11d5-85c1-0001023952c1" style="width: 100%;height: calc(100% - 5px);"></object>')
  $('body').append('<object id="SGWorld" classid="CLSID:3a4f9197-65a8-11d5-85c1-0001023952c1" style="visibility:hidden;"></object>')
  SGWorld.Open(this.FLY_PATH)

}