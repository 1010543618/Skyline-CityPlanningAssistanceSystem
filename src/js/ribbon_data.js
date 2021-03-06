export default {
  selected: 0, //默认第几个是选择的
  tabs: [
    {
      "title": "主页",
      "groups": [
        {
          "title": "选择",
          "tools": [
            {
              "name": "selectObj",
              "text": "选择",
              "iconCls": "icon-choose icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "execute(1022,0)",
                  "text": "属性",
                  "iconCls": "icon-attribute icon-small",
                },
                {
                  "name": "information",
                  "text": "信息",
                  "iconCls": "icon-information icon-small",
                  "group": "work_area",
                },
                {
                  "name": "areaSelection",
                  "text": "区域选择",
                  "iconCls": "icon-area icon-small",
                  "group": "work_area",
                }
              ]
            }
          ]
        },
        {
          "title": "视图",
          "tools": [
            {
              "name": "timeSlider",
              "text": "时间滑块",
              "iconCls": "icon-time icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "sun",
              "text": "太阳",
              "iconCls": "icon-sun icon-large",
              "iconAlign": "top",
              "size": "large",
              "selected": true
            }
          ]
        },
        {
          "title": "模式",
          "tools": [
            {
              "name": "shadow",
              "text": "阴影",
              "iconCls": "icon-shadow icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "undergroundMode",
              "text": "地下模式",
              "iconCls": "icon-underground icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "添加",
          "tools": [
            {
              "name": "execute(1013,8)",
              "text": "特征图层",
              "iconCls": "icon-layer icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1014,2)",
              "text": "栅格图层",
              "iconCls": "icon-grid icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1016,0)",
              "text": "兴趣点",
              "iconCls": "icon-savorPoint icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1018,0)",
              "text": "创建组",
              "iconCls": "icon-group icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "剪切板",
          "tools": [
            {
              "name": "paste",
              "text": "粘贴",
              "iconCls": "icon-paste icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "execute(1031,0)",
                  "text": "复制",
                  "iconCls": "icon-copy icon-small",
                },
                {
                  "name": "execute(1032,0)",
                  "text": "剪切",
                  "iconCls": "icon-shear icon-small",
                },
                {
                  "name": "execute(1033,0)",
                  "text": "删除",
                  "iconCls": "icon-delete icon-small",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "分析",
      "groups": [
        {
          "title": "测量工具",
          "tools": [
            {
              "name": "HorizontalMeasure",
              "text": "水平距离",
              "iconCls": "icon-horizontal icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "spaceMeasure",
              "text": "空间距离",
              "iconCls": "icon-space icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "verticalDistance",
              "text": "垂直距离",
              "iconCls": "icon-vertical icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "terrainArea",
              "text": "地形面积",
              "iconCls": "icon-area icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "threeDArea",
              "text": "3D面积",
              "iconCls": "icon-threeDarea icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            }
          ]
        },
        {
          "title": "地形分析",
          "tools": [
            {
              "type": "toolbar",
              "tools": [
                {
                  "type": 'menubutton',
                  "name": "cpas-menu",
                  "text": "等高线图",
                  "iconCls": "icon-denggao icon-large",
                  "iconAlign": "left",
                  "size": "large",
                  "menuItems":[{
                    name:'execute(1038,0)',
                    text:'分层设色图',
                  },{
                    name:'execute(1039,0)',
                    text:'等高线',
                  }
                  ,{
                    name:'execute(1040,0)',
                    text:'分层设色图和等高线',
                  },{
                    separator:true
                  }
                  ,{
                    name:'execute(1041,0)',
                    text:'等高线调色板',
                  }]
                },
                {
                  "type": 'menubutton',
                  "name": "cpas-menu",
                  "text": "坡度图",
                  "iconCls": "icon-Slope icon-large",
                  "iconAlign": "left",
                  "size": "large",
                  "menuItems":[{
                    name:'execute(1092,0)',
                    text:'坡度颜色图',
                  },{
                    name:'execute(1093,0)',
                    text:'坡度箭头',
                  }
                  ,{
                    name:'execute(1094,0)',
                    text:'坡度箭头和颜色图',
                  },{
                    separator:true
                  }
                  ,{
                    name:'execute(1098,0)',
                    text:'坡度图调色板',
                  }]
                },
                {
                  "type": "label",
                  "text": '',
                  "css": {'clear':'both'}
                },
                {
                  "type": "label",
                  "text": '地形图',
                  "css": {'width': '100%',
                    'margin-top': '8px',
                    'border-top': '1px dotted'}
                },
              ]
            },
            {
              "name": "execute(1042,0)",
              "text": "路径分析",
              "iconCls": "icon-path icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1043,0)",
              "text": "剖面分析",
              "iconCls": "icon-poumian icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1044,0)",
              "text": "淹没分析",
              "iconCls": "icon-yanmofenxi icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "视域",
          "tools": [
            {
              "name": "execute(1046,0)",
              "text": "视线分析",
              "iconCls": "icon-sight icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(2117,0)",
              "text": "3D视域",
              "iconCls": "icon-threeD icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1047,0)",
              "text": "视域分析",
              "iconCls": "icon-perspective icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "检测",
          "tools": [
            {
              "name": "collision",
              "text": "碰撞检测",
              "iconCls": "icon-pengzhuang icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        }
      ]
    },
    {
      "title": "导航",
      "groups": [
        {
          "title": "导航模式",
          "tools": [
            {
              "name": "dragMode",
              "text": "拖动模式",
              "iconCls": "icon-drag icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "nav"
            },
            {
              "name": "Slide",
              "text": "滑动模式",
              "iconCls": "icon-huadong icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "nav"
            },
            {
              "name": "turn",
              "text": "转弯模式",
              "iconCls": "icon-zhuangwan icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "nav"
            }
          ]
        },
        {
          "title": "地图模式",
          "tools": [
            {
              "name": "threeDMode",
              "text": "3D导航",
              "iconCls": "icon-threeD_ icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "pattern"
            },
            {
              "name": "twoDMode",
              "text": "2D导航",
              "iconCls": "icon-twoD icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "pattern"
            },
            {
              "name": "northMode",
              "text": "指北导航",
              "iconCls": "icon-zhibeidaohang icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "pattern"
            }
          ]
        },
        {
          "title": "导航到",
          "tools": [
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "execute(1055,5)",
                  "text": "全球",
                  "iconCls": "",
                },
                {
                  "name": "execute(1055,4)",
                  "text": "国家",
                  "iconCls": "",
                },
                {
                  "name": "execute(1055,3)",
                  "text": "省份",
                  "iconCls": "",
                }
              ]
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "execute(1055,2)",
                  "text": "城市",
                  "iconCls": "",
                },
                {
                  "name": "execute(1055,1)",
                  "text": "街道",
                  "iconCls": "",
                },
                {
                  "name": "execute(1055,0)",
                  "text": "房屋",
                  "iconCls": "",
                }
              ]
            },
            {
              "name": "execute(1056,0)",
              "text": "北",
              "iconCls": "icon-zhibeizhen icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "跟踪模式",
          "tools": [
            {
              "name": "rotate",
              "text": "环绕模式",
              "iconCls": "icon-huanrao icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "round"
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "name": "OvalRotate",
                  "text": "椭圆环绕",
                  "iconCls": "icon-tuoyuan icon-small",
                  "group": "round"
                },
                {
                  "name": "ArcPattern",
                  "text": "弧形环绕",
                  "iconCls": "icon-Arc icon-small",
                  "group": "round"
                },
                {
                  "name": "LinePattern",
                  "text": "直线模式",
                  "iconCls": "icon-line icon-small",
                  "group": "round"
                }
              ]
            }
          ]
        },
        {
          "title": "观测对象模式",
          "tools": [
            {
              "name": "execute(1057,4)",
              "text": "对象后方",
              "iconCls": "icon-houmian icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1057,5)",
              "text": "对象上方",
              "iconCls": "icon-up icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1057,6)",
              "text": "对象下方",
              "iconCls": "icon-down icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1057,7)",
              "text": "对象右侧",
              "iconCls": "icon-right icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1057,8)",
              "text": "对象左侧",
              "iconCls": "icon-left icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1057,9)",
              "text": "从后上方",
              "iconCls": "icon-houshang icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1057,10)",
              "text": "驾驶视角",
              "iconCls": "icon-jiashi icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "execute(1057,11)",
              "text": "地面视点",
              "iconCls": "icon-dimain icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        }
      ]
    },
    {
      "title": "视图",
      "groups": [
        {
          "title": "基本操作",
          "tools": [
            {
              "name": "zoomIn()",
              "text": "放大",
              "iconCls": "icon-zoomIn icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "zoomOut()",
              "text": "缩小",
              "iconCls": "icon-zoomOut icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "FullImage()",
              "text": "全图",
              "iconCls": "icon-all icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "zoomIn2DMap()",
              "text": "鹰眼",
              "iconCls": "icon-Eye icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "控件",
          "tools": [
            {
              "name": "NavigationCtl",
              "text": "导航控件",
              "iconCls": "icon-kongjian icon-large",
              "iconAlign": "top",
              "size": "large",
              "selected": true
            },
            {
              "name": "CenterSign",
              "text": "中心十字",
              "iconCls": "icon-shizi icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "StatusBar",
              "text": "状态栏",
              "iconCls": "icon-zhuangtai icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "ScaleBar",
              "text": "比例尺",
              "iconCls": "icon-bili icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "GraphicHUD",
              "text": "图形HUD",
              "iconCls": "icon-hud icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        }
      ]
    },
    {
      "title": "对象",
      "groups": [
        {
          "title": "标签",
          "tools": [
            {
              "name": "execute(1012,0)",
              "text": "文本",
              "iconCls": "icon-wenben icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,1)",
              "text": "图片",
              "iconCls": "icon-tupian icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            }
          ]
        },
        {
          "title": "2D对象",
          "tools": [
            {
              "name": "execute(1012,4)",
              "text": "折线",
              "iconCls": "icon-zhexian icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,5)",
              "text": "多边形",
              "iconCls": "icon-duobianxing icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,6)",
              "text": "矩形",
              "iconCls": "icon-juxing icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,7)",
              "text": "正多边形",
              "iconCls": "icon-zhengduobian icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,9)",
              "text": "圆形",
              "iconCls": "icon-yuan icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,10)",
              "text": "椭圆",
              "iconCls": "icon-tuoyuan icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,11)",
              "text": "弧形",
              "iconCls": "icon-hu icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,8)",
              "text": "2D箭头",
              "iconCls": "icon-jiantou icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            }
          ]
        },
        {
          "title": "3D对象",
          "tools": [
            {
              "name": "execute(1012,13)",
              "text": "三维模型",
              "iconCls": "icon-sanweimoxing icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,14)",
              "text": "建筑物",
              "iconCls": "icon-object icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,21)",
              "text": "球体",
              "iconCls": "icon-qiu icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,24)",
              "text": "三维箭头",
              "iconCls": "icon-sanweijiantou icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,20)",
              "text": "圆柱体",
              "iconCls": "icon-yuanzhu icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            }
          ]
        },
        {
          "title": "动态对象",
          "tools": [
            {
              "name": "execute(1012,26)",
              "text": "地面对象",
              "iconCls": "icon-dimian icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "execute(1012,27)",
              "text": "空中对象",
              "iconCls": "icon-kongzhong icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            }
          ]
        }
      ]
    },
    {
      "title": "图层编辑",
      "groups": [
        {
          "title": "图层",
          "tools": [
            {
              "name": "execute(1022,0)",
              "text": "图层属性",
              "iconCls": "icon-attribute icon-large",
              "iconAlign": "top",
              "size": "large"
            },
            {
              "name": "execute(1086,0)",
              "text": "属性表",
              "iconCls": "icon-shuxingbiao icon-large",
              "iconAlign": "top",
              "size": "large"
            }
          ]
        },
        {
          "title": "选择",
          "tools": [
            {
              "name": "selectLayerF",
              "text": "选择",
              "iconCls": "icon-choose icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "aeraSelectF",
              "text": "区域选择",
              "iconCls": "icon-area icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "lineSelect",
              "text": "画线选择",
              "iconCls": "icon-line icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "pointSelect",
              "text": "画点选择",
              "iconCls": "icon-huapoint icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "ObjSelect",
              "text": "对象选择",
              "iconCls": "icon-objectC icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            }
          ]
        }
      ]
    },
    {
      "title": "演示汇报",
      "groups": [
        {
          "title": "演示工具",
          "tools": [
            {
              "name": "createPresentation()",
              "text": "新建演示",
              "iconCls": "icon-chuangjianyanshi icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "兴趣点",
          "tools": [
            {
              "name": "Presentation(1099,0)",
              "text": "加兴趣点",
              "iconCls": "icon-jiaxingqudian icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            },
            {
              "name": "Presentation(1101,0,this)",
              "text": "记录轨迹",
              "iconCls": "icon-jiluguiji icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "操作",
          "tools": [
            {
              "name": "Presentation(1102,0)",
              "text": "添加标题",
              "iconCls": "icon-tianjiabiaoti icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "Presentation(1111,0)",
              "text": "编辑工具",
              "iconCls": "icon-bianjigongju icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "播放漫游路线",
          "tools": [
            {
              "name": "Presentation(1112,0)",
              "text": "播放",
              "iconCls": "icon-bofang icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "type": "label",
                  "text": "<a>运行算法&nbsp;&nbsp;</a><select id=\"algorithm\"><option>飞行到</option><option>曲线</option></select>"
                },
                {
                  "type": "label",
                  "text": "<a>运行模式&nbsp;&nbsp;</a><select id=\"flyMode\"><option>标准</option><option>自动播放</option></select>"
                },
                {
                  "type": "label",
                  "text": "<a>运行速度&nbsp;&nbsp;</a><select id=\"PlaySpeed\"><option>非常慢</option><option>慢行</option><option selected=\"selected\">常规</option><option>快速</option><option>非常快</option></select>"
                }
              ]
            }
          ]
        },
        {
          "title": "播放漫游路线",
          "tools": [
            {
              "name": "Presentation(1116,0)",
              "text": "创建视频",
              "iconCls": "icon-chuangjianshipin1 icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "type": "toolbar",
              "dir": "v",
              "tools": [
                {
                  "type": "label",
                  "text": "<a>帧数&nbsp;&nbsp;</a><input id=\"Frames\" value=\"25\" type=\"text\">"
                },
                {
                  "type": "label",
                  "text": "<a>尺寸&nbsp;&nbsp;</a><select id=\"FrameSize\"><option>当前尺寸</option><option>320*200</option><option>320*240</option><option>384*288</option><option>640*480</option><option>768*576</option><option>720*480</option><option>1280*720</option><option>1920*1080</option></select>"
                },
                {
                  "type": "label",
                  "text": "<input id=\"BestQuality\" checked=\"checked\" type=\"checkbox\">&nbsp;&nbsp;&nbsp;<a>最佳质量</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "title": "工具",
      "groups": [
        {
          "title": "实用工具",
          "tools": [
            {
              "name": "execute(1067,0)",
              "text": "地图截图",
              "iconCls": "icon-ditijietu icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "excavation()",
              "text": "地形开挖",
              "iconCls": "icon-dixingkaiwa icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "work_area",
            }
          ]
        },
        {
          "title": "查看对象",
          "tools": [
            {
              "name": "showAllObj()",
              "text": "全部显示",
              "iconCls": "icon-xianshiquanbu icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "show",
            },
            {
              "name": "hiddenAllObj()",
              "text": "全部隐藏",
              "iconCls": "icon-yinchangquanbu icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "show",
            },
            {
              "name": "showPipeline()",
              "text": "只看管线",
              "iconCls": "icon-zhikan icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "show",
            }
          ]
        },
        {
          "title": "标注",
          "tools": [
            {
              "name": "heightLabel",
              "text": "高度标注",
              "iconCls": "icon-choose icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "mark",
            },
            {
              "name": "coordLabel",
              "text": "坐标标注",
              "iconCls": "icon-area icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "mark",
            },
            {
              "name": "SlopeLable",
              "text": "坡度标注",
              "iconCls": "icon-objectC icon-large",
              "iconAlign": "top",
              "size": "large",
              "group": "mark",
            },
            {
              "name": "clearLabel()",
              "text": "清除标注",
              "iconCls": "icon-close icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        }
      ]
    },
    {
      "title": "辅助功能",
      "groups": [
        {
          "title": "规划方案对比",
          "tools": [
            {
              "name": "comparison",
              "text": "开启多方案对比",
              "iconCls": "icon-comparison icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "comptable",
              "text": "对比分析统计表",
              "iconCls": "icon-shuxingbiao icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "用地红线",
          "tools": [
            {
              "name": "show_rl",
              "text": "显示红线",
              "iconCls": "icon-showrl icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "rl_ana",
              "text": "红线检测",
              "iconCls": "icon-anarl icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        },
        {
          "title": "视频监控",
          "tools": [
            {
              "name": "show_monitor",
              "text": "查看摄像头",
              "iconCls": "icon-showcamera icon-large",
              "iconAlign": "top",
              "size": "large",
            },
            {
              "name": "prev_monitor",
              "text": "上一个",
              "iconCls": "icon-next icon-large",
              "iconAlign": "top",
              "size": "large",
            },{
              "name": "next_monitor",
              "text": "下一个",
              "iconCls": "icon-prev icon-large",
              "iconAlign": "top",
              "size": "large",
            }
          ]
        }
      ]
    }
  ]
}