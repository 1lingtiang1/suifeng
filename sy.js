js:
var d = [];
if (getItem("Mysye", "随机") == "随机"&&getMyVar("Myfl") == ''&&getMyVar("Myds") == ''&&getMyVar("Mysou") == '') {
var arr = ["鸭奈飞", "打驴动漫", "蓝光影院", "Auete", "影视工厂", "69美剧", "厂长资源", "追剧喵", "素白白", "胖虎影视", "独播库", "Chok吧", "Fositv", "Voflix", "LIBVIO", "Nike", "L0L影院", "视中心", "乐鱼影视", "万博追剧", "1080P影视", "可乐影视", "托乌视频", "饭团HD", "555电影", "瓜皮TV", "AB影院", "COKEMV", "小强迷","真不卡", "双十电影", "城市影院", "大米星球", "番茄影视", "神马影院"]; 
var suii = []; 
var num = 1;
while(suii.length < num) { 
var temp = (Math.random()*arr.length)>>0; 
suii.push(arr.splice(temp,1));
storage0.putMyVar("sui", suii);
var ssui = getMyVar("sui").replace(/\[|\]|\"|\./g,'');
setItem("m1", ssui);
      }
   }
let sui = getItem("m1");
log(sui);
let sokey = getMyVar("Mysou");
let page = MY_PAGE;

let urls = {
    "随机": {
        syurl: "",
    },
    "鸭奈飞": {
        syurl: "https://yanetflix.com/",
    },
    "打驴动漫": {
        syurl: "https://www.dqsj.cc/",
    },
    "蓝光影院": {
        syurl: "https://www.lgyy.cc/",
    },
    "Auete": {
        syurl: "https://auete.com/",
    }, 
    "影视工厂": {
        syurl: "https://www.ysgc.tv/",
    },
    "69美剧": {
        syurl: "https://www.69mj.com/",
    },
    "厂长资源": {
        syurl: "https://czspp.com/",
    },
    "追剧喵": {
        syurl: "https://zjmiao.com/",
    },
    "素白白": {
        syurl: "https://www.subaibaiys.com/",
    },
    "胖虎影视": {
        syurl: "http://www.panghuys.com/",
    },
    "独播库": {
        syurl: "http://ca.cboku.com/",
    },
    "Chok吧": {
        syurl: "https://www.chok8.com/",
    },
    "Fositv": {
        syurl: "https://fositv.com/",
    },
    "Voflix": {
        syurl: "https://www.voflix.com/",
    },
    "LIBVIO": {
        syurl: "https://www.libvio.me/",
    },
    "Nike": {
        syurl: "https://www.ajeee.com/",
    },
    "L0L影院": {
        syurl: "https://www.l0l.tv/",
    },
    "视中心": {
        syurl: "https://www.ksksy.com/",
    },
    "乐鱼影视": {
        syurl: "https://www.lyavi.com/",
    },
    "万博追剧": {
        syurl: "https://www.wbavi.com/",
    },
    "1080P影视": {
        syurl: "https://1080p.tv/",
    },
    "可乐影视": {
        syurl: "https://www.klyingshi.com/",
    },
    "托乌视频": {
        syurl: "https://www.tootw.com/",
    },
    "饭团HD": {
        syurl: "https://www.fantuanhd.com/",
    },
    "555电影": {
        syurl: "https://www.stuo-express.com/",
    },
    "瓜皮TV": {
        syurl: "https://guapitv.xyz/",
    },
    "AB影院": {
        syurl: "https://abu22.com/",
    },
    "COKEMV": {
        syurl: "https://cokemv.me/",
    },
    "小强迷": {
        syurl: "https://www.xqmi.top/",
    },
    "真不卡": {
        syurl: "https://www.zbkk.net/",
    },
    "双十电影": {
        syurl: "https://www.1010dy1.com/",
    },
    "城市影院": {
        syurl: "https://www.citydy.com/",
    },
    "大米星球": {
        syurl: "https://www.dmxq.fun/",
    },
    "番茄影视": {
        syurl: "https://www.tjomet.com/",
    },
    "神马影院": {
        syurl: "https://www.6080x.cc/",
    },
    }

let rn = Object.keys(urls);
let sele = getItem("m1", rn[0]);
let rule = urls[sele];
let syurl = rule.syurl;
MY_URL = syurl;

if (/ksksy|ysgc|lgyy|xmmi|klyingshi|o8tv|guapitv|abu22|zbkk|tjomet|stuo-expressfositv/.test(MY_URL)) {
    var 电影_url = MY_URL + 'vodshow/1-----------.html'
    } else 
if (/libvio|voflix|6080x/.test(MY_URL)) {
    var 电影_url = MY_URL + 'show/1-----------.html'
    } else 
if (/69mj|l0l|tootw|xqmi|cokemv/.test(MY_URL)) {
    var 电影_url = MY_URL + 'index.php/vod/show/id/1.html'
    } else 
if (/yanetflix|chok8/.test(MY_URL)) {
    var 电影_url = MY_URL + 'vodshow/dianying-----------.html'
    } else 
if (/dygysz|1080p/.test(MY_URL)) {
    var 电影_url = MY_URL + 'vodshow/1-----------/'
    } else 
if (/zjmiao/.test(MY_URL)) {
    var 电影_url = MY_URL + 'index.php/vod/show/id/1/'
    } else 
if (/panghuys/.test(MY_URL)) {
    var 电影_url = MY_URL + 'vodshow/1.html'
    } else 
if (/ajeee/.test(MY_URL)) {
    var 电影_url = MY_URL + 'show/Movie.html'
    } else 
if (/auete/.test(MY_URL)) {
    var 电影_url = MY_URL + 'Movie/index.html'
    } else 
if (/czspp/.test(MY_URL)) {
    var 电影_url = MY_URL + 'movie_bt'
    } else 
if (/subaibaiys/.test(MY_URL)) {
    var 电影_url = MY_URL + 'new-movie'
    } else 
if (/dqsj/.test(MY_URL)) {
    var 电影_url = MY_URL + 'index.php/vod/show/id/28.html'
    } else 
if (/cboku/.test(MY_URL)) {
    var 电影_url = MY_URL + 'vodshow/16-----------.html'
    } else 
if (/lyavi/.test(MY_URL)) {
    var 电影_url = MY_URL + 'lys/lyMovie.html'
    } else 
if (/wbavi/.test(MY_URL)) {
    var 电影_url = MY_URL + 'wbs/WbMovie.html'
    } else 
if (/fantuanhd/.test(MY_URL)) {
    var 电影_url = MY_URL + 'show/id-20.html'
    } else 
if (/1010dy1/.test(MY_URL)) {
    var 电影_url = MY_URL + 'show/1/'
    } else 
if (/citydy/.test(MY_URL)) {
    var 电影_url = MY_URL + 'show/id-1.html'
    } else 
if (/dmxq/.test(MY_URL)) {
    var 电影_url = MY_URL + 'vodshow/20-----------.html'
    } 

putMyVar("Myurl",MY_URL);
//log(getMyVar("Myurl"));
let html = request(MY_URL, {timeout:3000});
    if (html == null|!/电影|动漫|综艺|剧集/.test(html)) {
        refreshPage();
        setItem('Mysye','随机');
        clearMyVar('Mysou');
        clearMyVar('Myfl');
        clearMyVar('Myds');
        toast('无法访问，已更换随机首页')
        } else {
        var html = html;
        
//:gt(1):lt(你想留到第几个)
//log(html)

if (/auete/.test(MY_URL)) {
    var 标题1 = 'b,0&&Text'
    var 标题2 = 'b,1&&Text'
    var 标题3 = 'b,2&&Text'
    var 标题4 = 'b,3&&Text'
    var 标题5 = 'b,4&&Text'

var 列表1 = '.picture_list_container,0&&li:lt(6)'
var 列表2 = '.picture_list_container,1&&li:lt(3)'
var 列表3 = '.picture_list_container,2&&li:lt(3)'
var 列表4 = '.picture_list_container,3&&li:lt(3)'
var 列表5 = '.picture_list_container,4&&li:lt(3)'
      } else 
if (/dqsj/.test(MY_URL)) {
var 标题1 = 'h2,0&&Text'
var 标题2 = 'h2,9&&Text'
var 标题3 = 'h2,8&&Text'
var 标题4 = 'h2,10&&Text'
var 标题5 = 'h2,6&&Text'
var 标题6 = 'h2,7&&Text'

var 列表1 = '.hl-vod-list,0&&li:lt(4)'
var 列表2 = '.hl-vod-list,12&&li:lt(9)'
var 列表3 = '.hl-vod-list,11&&li:lt(9)'
var 列表4 = '.hl-vod-list,13&&li:lt(9)'
var 列表5 = '.hl-vod-list,9&&li:lt(9)'
var 列表6 = '.hl-vod-list,10&&li:lt(9)'
     } else 
if (/tjomet/.test(MY_URL)) {
var 标题1 = 'h2,0&&Text'
var 标题2 = 'h2,1&&Text'
var 标题3 = 'h2,3&&Text'
var 标题4 = 'h2,5&&Text'
var 标题5 = 'h2,7&&Text'
var 标题6 = 'h2,9&&Text'

var 列表1 = '.hl-vod-list,0&&li:lt(4)'
var 列表2 = '.hl-vod-list,1&&li:lt(9)'
var 列表3 = '.hl-vod-list,2&&li:lt(9)'
var 列表4 = '.hl-vod-list,3&&li:lt(9)'
var 列表5 = '.hl-vod-list,4&&li:lt(9)'
var 列表6 = '.hl-vod-list,5&&li:lt(9)'
     } else 
if (/ysgc/.test(MY_URL)) {
var 标题1 = '.myui-panel__head&&h3&&Text'
var 标题2 = '.myui-panel__head,1&&h3&&Text'
var 标题3 = '.myui-panel__head,5&&h3&&Text'
var 标题4 = '.myui-panel__head,13&&h3&&Text'
var 标题5 = '.myui-panel__head,11&&h3&&Text'
var 标题6 = '.myui-panel__head,7&&h3&&Text'

var 列表1 = '.myui-vodlist,0&&li:lt(4)'
var 列表2 = '.myui-vodlist,1&&li:lt(6)'
var 列表3 = '.myui-vodlist,5&&li:lt(6)'
var 列表4 = '.myui-vodlist,7&&li:lt(6)'
var 列表5 = '.myui-vodlist,6&&li:lt(6)'
var 列表6 = '.myui-vodlist,4&&li:lt(6)'
     } else 
if (/cboku/.test(MY_URL)) {
var 标题1 = 'body&&h3&&Text'
var 标题2 = 'body&&h3,1&&Text'
var 标题3 = 'body&&h3,3&&Text'
var 标题4 = 'body&&h3,4&&Text'
var 标题5 = 'body&&h3,5&&Text'
var 标题6 = 'body&&h3,2&&Text'

var 列表1 = 'body&&.myui-vodlist,0&&li:lt(4)'
var 列表2 = 'body&&.myui-vodlist,1&&li:lt(6)'
var 列表3 = 'body&&.myui-vodlist,3&&li:lt(6)'
var 列表4 = 'body&&.myui-vodlist,4&&li:lt(6)'
var 列表5 = 'body&&.myui-vodlist,5&&li:lt(6)'
var 列表6 = 'body&&.myui-vodlist,2&&li:lt(6)'
     } else 
if (/fositv/.test(MY_URL)) {
var 标题1 = 'body&&h3&&Text'
var 标题2 = 'body&&h3,1&&Text'
var 标题3 = 'body&&h3,3&&Text'
var 标题4 = 'body&&h3,5&&Text'
var 标题5 = 'body&&h3,7&&Text'
var 标题6 = 'body&&h3,9&&Text'

var 列表1 = 'body&&.myui-vodlist,0&&li:lt(4)'
var 列表2 = 'body&&.myui-vodlist,1&&li:lt(6)'
var 列表3 = 'body&&.myui-vodlist,2&&li:lt(6)'
var 列表4 = 'body&&.myui-vodlist,3&&li:lt(6)'
var 列表5 = 'body&&.myui-vodlist,4&&li:lt(6)'
var 列表6 = 'body&&.myui-vodlist,5&&li:lt(6)'
     } else 
if (/yanetflix|lgyy|voflix|ajeee|guapitv|panghuys|1080p/.test(MY_URL)) {
var 标题1 = 'h2,0&&Text'
var 标题2 = 'h2,1&&Text'
var 标题3 = 'h2,2&&Text'
var 标题4 = 'h2,3&&Text'
var 标题5 = 'h2,4&&Text'
var 标题6 = 'h2,5&&Text'

var 列表1 = '.module,0&&a:lt(4)'
var 列表2 = '.module,1&&.tab-list&&a:lt(9)'
var 列表3 = '.module,2&&.tab-list&&a:lt(9)'
var 列表4 = '.module,3&&.tab-list&&a:lt(9)'
var 列表5 = '.module,4&&.tab-list&&a:lt(9)'
var 列表6 = '.module,5&&.tab-list&&a:lt(9)'
     } else 
if (/o8tv|stuo-express/.test(MY_URL)) {
var 标题1 = 'h2,1&&Text'
var 标题2 = 'h2,2&&Text'
var 标题3 = 'h2,8&&Text'
var 标题4 = 'h2,9&&Text'
var 标题5 = 'h2,10&&Text'
var 标题6 = 'h2,3&&Text'

var 列表1 = '.module,1&&a:lt(6)'
var 列表2 = '.module,2&&.tab-list&&a:lt(6)'
var 列表3 = '.module,8&&.tab-list&&a:lt(6)'
var 列表4 = '.module,9&&.tab-list&&a:lt(6)'
var 列表5 = '.module,10&&.tab-list&&a:lt(6)'
var 列表6 = '.module,3&&.tab-list&&a:lt(6)'
     } else 
if (/dmxq/.test(MY_URL)) {
var 标题1 = 'h2,3&&Text'
var 标题2 = 'h2,2&&Text'
var 标题3 = 'h2,8&&Text'
var 标题4 = 'h2,10&&Text'
var 标题5 = 'h2,9&&Text'
var 标题6 = 'h2,6&&Text'

var 列表1 = '.module,3&&.tab-list&&a:lt(6)'
var 列表2 = '.module,2&&.tab-list&&a:lt(6)'
var 列表3 = '.module,8&&.tab-list&&a:lt(6)'
var 列表4 = '.module,10&&.tab-list&&a:lt(6)'
var 列表5 = '.module,9&&.tab-list&&a:lt(6)'
var 列表6 = '.module,6&&.tab-list&&a:lt(6)'
     } else 
if (/zjmiao|l0l/.test(MY_URL)) {
var 标题1 = 'h2,0&&Text'
var 标题2 = 'h2,1&&Text'
var 标题3 = 'h2,2&&Text'
var 标题4 = 'h2,4&&Text'
var 标题5 = 'h2,3&&Text'

var 列表1 = '.list-a,0&&li:lt(4)'
var 列表2 = '.list-a,1&&li:lt(9)'
var 列表3 = '.list-a,2&&li:lt(9)'
var 列表4 = '.list-a,4&&li:lt(9)'
var 列表5 = '.list-a,3&&li:lt(9)'
var 列表6 = '.list-a,4&&li:lt(9)'
     } else 
if (/lyavi|wbavi/.test(MY_URL)) {
var 标题1 = 'h2,0&&Text'
var 标题2 = 'h2,1&&Text'
var 标题3 = 'h2,3&&Text'
var 标题4 = 'h2,7&&Text'
var 标题5 = 'h2,5&&Text'
var 标题6 = 'h2,9&&Text'
var 列表1 = '.module-list,0&&.module-item:lt(4)'
var 列表2 = '.module-main,0&&.module-item:lt(9)'
var 列表3 = '.module-main,1&&.module-item:lt(9)'
var 列表4 = '.module-main,3&&.module-item:lt(9)'
var 列表5 = '.module-main,2&&.module-item:lt(9)'
var 列表6 = '.module-main,4&&.module-item:lt(9)'
     } else 
if (/69mj/.test(MY_URL)) {
var 标题1 = 'h2,1&&Text'
var 标题2 = 'h2,2&&Text'
var 标题3 = 'h2,4&&Text'
var 标题4 = 'h2,6&&Text'
var 标题5 = 'h2,8&&Text'
var 标题6 = 'h2,10&&Text'
var 列表1 = '.module-items,0&&.module-item:lt(4)'
var 列表2 = '.module-items,1&&.module-item:lt(8)'
var 列表3 = '.module-items,2&&.module-item:lt(8)'
var 列表4 = '.module-items,3&&.module-item:lt(8)'
var 列表5 = '.module-items,4&&.module-item:lt(8)'
var 列表6 = '.module-items,5&&.module-item:lt(8)'
     } else 
if (/czspp/.test(MY_URL)) {
var 标题1 = 'h2&&Text'
var 标题2 = 'h2,2&&Text'
var 标题3 = 'h2,3&&Text'
var 标题4 = 'h2,6&&Text'
var 标题5 = 'h2,7&&Text'
var 标题6 = 'h2,8&&Text'

var 列表1 = '.bt_img&&li:lt(4)'
var 列表2 = '.bt_img,2&&li:lt(9)'
var 列表3 = '.bt_img,3&&li:lt(9)'
var 列表4 = '.bt_img,6&&li:lt(9)'
var 列表5 = '.bt_img,7&&li:lt(9)'
var 列表6 = '.bt_img,8&&li:lt(9)'
     }else 
if (/subaibaiys/.test(MY_URL)) {
var 标题1 = 'h2&&Text'
var 标题2 = 'h2,1&&Text'
var 标题3 = 'h2,6&&Text'
var 标题4 = 'h2,3&&Text'
var 标题5 = 'h2,4&&Text'
var 标题6 = 'h2,5&&Text'

var 列表1 = '.bt_img&&li:lt(4)'
var 列表2 = '.bt_img,1&&li:lt(9)'
var 列表3 = '.bt_img,6&&li:lt(9)'
var 列表4 = '.bt_img,3&&li:lt(9)'
var 列表5 = '.bt_img,4&&li:lt(9)'
var 列表6 = '.bt_img,5&&li:lt(9)'
     } else 
if (/chok8|6080x/.test(MY_URL)) {
var 标题1 = 'h3&&Text'
var 标题2 = 'h3,1&&Text'
var 标题3 = 'h3,2&&Text'
var 标题4 = 'h3,3&&Text'
var 标题5 = 'h3,4&&Text'
var 标题6 = 'h3,5&&Text'

var 列表1 = '.stui-vodlist,0&&li:lt(4)'
var 列表2 = '.stui-vodlist,1&&li:lt(6)'
var 列表3 = '.stui-vodlist,2&&li:lt(6)'
var 列表4 = '.stui-vodlist,3&&li:lt(6)'
var 列表5 = '.stui-vodlist,4&&li:lt(6)'
var 列表6 = '.stui-vodlist,5&&li:lt(6)'
     } else 
if (/xqmi|1010dy1/.test(MY_URL)) {
var 标题1 = 'h3,0||h2,0&&Text'
var 标题2 = 'h3,1||h2,1&&Text'
var 标题3 = 'h3,2||h2,2&&Text'
var 标题4 = 'h3,3||h2,3&&Text'

var 列表1 = '.stui-vodlist,0&&.stui-vodlist__item:lt(12)||li:lt(9)'
var 列表2 = '.stui-vodlist,1&&li:lt(18)'
var 列表3 = '.stui-vodlist,2&&li:lt(18)'
var 列表4 = '.stui-vodlist,3&&li:lt(18)'
     } else 
if (/citydy/.test(MY_URL)) {
var 标题1 = '.layout-box,0&&h2&&Text'
var 标题2 = '.layout-box,1&&h2&&Text'
var 标题3 = '.layout-box,2&&h2&&Text'
var 标题4 = '.layout-box,3&&h2&&Text'
var 标题5 = '.layout-box,4&&h2&&Text'

var 列表1 = '.layout-box,0&&.img-list&&li:lt(6)'
var 列表2 = '.layout-box,1&&.img-list&&li:lt(6)'
var 列表3 = '.layout-box,2&&.img-list&&li:lt(6)'
var 列表4 = '.layout-box,3&&.img-list&&li:lt(6)'
var 列表5 = '.layout-box,4&&.img-list&&li:lt(6)'
     } else 
if (/abu22|zbkk/.test(MY_URL)) {
var 标题1 = 'h3&&Text'
var 标题2 = 'h3,1&&Text'
var 标题3 = 'h3,2&&Text'
var 标题4 = 'h3,3&&Text'
var 标题5 = 'h3,4&&Text'

var 列表1 = '.stui-vodlist,0&&.stui-vodlist__item:lt(8)||li:lt(4)'
var 列表2 = '.stui-vodlist,1&&li:lt(9)'
var 列表3 = '.stui-vodlist,2&&li:lt(9)'
var 列表4 = '.stui-vodlist,3&&li:lt(9)'
var 列表5 = '.stui-vodlist,4&&li:lt(9)'
     } else 
if (/libvio|fantuanhd/.test(MY_URL)) {
var 标题1 = 'h2||h3&&Text'
var 标题2 = 'h2||h3&&Text'
var 标题3 = 'h2,1||h3,1&&Text'
var 标题4 = 'h2,2||h3,2&&Text'
var 标题5 = 'h2,3||h3,3&&Text'
var 标题6 = 'h2,4||h3,4&&Text'

var 列表1 = '.stui-vodlist,0&&li:lt(6)'
var 列表2 = '.stui-vodlist,1&&li:lt(9)'
var 列表3 = '.stui-vodlist,2&&li:lt(9)'
var 列表4 = '.stui-vodlist,3&&li:lt(9)'
var 列表5 = '.stui-vodlist,4&&li:lt(9)'
var 列表6 = '.stui-vodlist,5&&li:lt(6)'
     } else 
if (/klyingshi/.test(MY_URL)) {
var 标题1 = 'h2&&Text'
var 标题2 = 'h2,1&&Text'
var 标题3 = 'h2,3&&Text'
var 标题4 = 'h2,5&&Text'
var 标题5 = 'h2,7&&Text'

var 列表1 = '.module&&.module-list&&.module-item:lt(4)'
var 列表2 = '.module,1&&.module-list&&.module-item:lt(9)'
var 列表3 = '.module,2&&.module-list&&.module-item:lt(9)'
var 列表4 = '.module,3&&.module-list&&.module-item:lt(9)'
var 列表5 = '.module,4&&.module-list&&.module-item:lt(9)'
     } else 
if (/cokemv/.test(MY_URL)) {
var 标题1 = 'h2&&Text'
var 标题2 = 'h2,1&&Text'
var 标题3 = 'h2,2&&Text'
var 标题4 = 'h2,3&&Text'

var 列表1 = '.module,0&&.tab-list&&a:lt(6)'
var 列表2 = '.module,1&&.tab-list&&a:lt(6)'
var 列表3 = '.module,2&&.tab-list&&a:lt(6)'
var 列表4 = '.module,3&&.tab-list&&a:lt(6)'

     } else 
if (/ksksy/.test(MY_URL)) {
var 标题1 = 'h2,1&&Text'
var 标题2 = 'h2,3&&Text'
var 标题3 = 'h2,5&&Text'
var 标题4 = 'h2,7&&Text'
var 标题5 = 'h2,9&&Text'
var 标题6 = 'h2,2&&Text'
var 列表1 = '.module-items,1&&.module-item:lt(4)'
var 列表2 = '.module-items,3&&.module-item:lt(9)'
var 列表3 = '.module-items,4&&.module-item:lt(9)'
var 列表4 = '.module-items,5&&.module-item:lt(9)'
var 列表5 = '.module-items,6&&.module-item:lt(9)'
var 列表6 = '.module-items,2&&.module-item:lt(6)'
     } else 
if (/xmmi/.test(MY_URL)) {
var 标题1 = 'h2,3&&Text'
var 标题2 = 'h2,4&&Text'
var 标题3 = 'h2,5&&Text'
var 标题4 = 'h2,7&&Text'
var 标题5 = 'h2,9&&Text'
var 标题6 = 'h2,11&&Text'
var 列表1 = '.fed-part-layout,3&&.fed-list-info&&li:lt(4)'
var 列表2 = '.fed-list-home,0&&.fed-list-info&&li:lt(9)'
var 列表3 = '.fed-list-home,1&&.fed-col-md7&&li:lt(6)'
var 列表4 = '.fed-list-home,2&&.fed-col-md7&&li:lt(6)'
var 列表5 = '.fed-list-home,3&&.fed-col-md7&&li:lt(6)'
var 列表6 = '.fed-list-home,4&&.fed-col-md7&&li:lt(6)'
     } else 
if (/tootw/.test(MY_URL)) {
var 标题1 = 'h2,1&&Text'
var 标题2 = 'h2,2&&Text'
var 标题3 = 'h2,3&&Text'
var 标题4 = 'h2,4&&Text'
var 标题5 = 'h2,5&&Text'
var 标题6 = 'h2,8&&Text'

var 列表1 = '.module,1&&a:lt(4)'
var 列表2 = '.module,2&&.tab-list&&a:lt(9)'
var 列表3 = '.module,3&&.tab-list&&a:lt(9)'
var 列表4 = '.module,4&&.tab-list&&a:lt(9)'
var 列表5 = '.module,5&&.tab-list&&a:lt(9)'
var 列表6 = '.module,8&&.tab-list&&a:lt(9)'
     } else 
if (/xixikdy/.test(MY_URL)) {
//已删
var 标题1 = '.index-boxhead,0&&Text'
var 电影标题 = '.index-boxhead,1&&Text'
var 剧集标题 = '.index-boxhead,2&&Text'
var 综艺标题 = '.index-boxhead,3&&Text'
var 动漫标题 = '.index-boxhead,4&&Text'
var 其它标题 = '.index-boxhead,5&&Text'

var 精选 = '.videoul,0&&li:lt(4)'
var 电影列表 = '.videoul,1&&li:lt(9)'
var 剧集列表 = '.videoul,2&&li:lt(9)'
var 综艺列表 = '.videoul,3&&li:lt(9)'
var 动漫列表 = '.videoul,4&&li:lt(9)'
var 其它列表 = '.videoul,5&&li:lt(9)'
     } else {
d.push({
      title: '\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t请重新选择接口',
      url: "hiker://empty", 
      img: "http://www.isoying.com/ico/logo.ico@Referer=",
      col_type: "card_pic_1"
      }) 
     } 
   }

//片名
if (/xixikdy/.test(MY_URL)) {
    var 片名 = '.videoul-title&&Text'
    var 链接 = 'a&&href'
    } else 
if (/xmmi/.test(MY_URL)) {
    var 片名 = '.fed-list-title&&Text'
    var 链接 = 'a&&href'
    } else 
if (/ajeee|lyavi|wbavi/.test(MY_URL)) {
    var 片名 = '.lazy&&alt'
    var 链接 = 'a&&href'
     } else 
if (/auete/.test(MY_URL)) {
    var 片名 = 'h2&&Text'
    var 链接 = 'h2&&a&&href'
    } else 
if (/4kan/.test(MY_URL)) {
    var 片名 = 'h4&&Text'
    var 链接 = 'h4&&a&&href'
    } else 
if (/czspp|subaibaiys/.test(MY_URL)) {
    var 片名 = 'h3&&Text'
    var 链接 = 'h3&&a&&href'
    } else {
    var 片名 = 'a&&title'
    var 链接 = 'a&&href'
    }

//更新
if (/czspp|subaibaiys/.test(MY_URL)) {
let jidi = '.jidi&&Text'
var 更新 = (jidi == '') ? '.jidi||.hdinfo&&Text' : '.jidi||.hdinfo&&Text'
       } else 
if (/text-right|videoul-tips|fed-list-remarks|list-remarks|module-item-text|module-item-note|pic-text|cor4|hdtag|hl-pic-text|pic-tag-left|/.test(html)) {
    var 更新 = '.text-right||.videoul-tips||.fed-list-remarks||.list-remarks||.module-item-text||.module-item-note||.pic-text||.cor4||.hdtag||.hl-pic-text||.pic-tag-left||.&&Text'
    }

//图片
if (/maomiava/.test(MY_URL)) {
    var 图片 = '.Lazy&&data-original'
    } else 
if (/auete|dmxq/.test(MY_URL)) {
    var 图片 = 'img&&src'
    } else 
if (/hl-lazy|videoul-img/.test(html)) {
    var 图片 = '.videoul-img||.hl-lazy&&data-original||lay-src'
    } else { 
    var 图片 = '.fed-lazy||.lazy||.lazyload&&data-original||data-src'
    } 

let bia = rn.map((tit) => {
     return  tit == sui ? tit + '🔘' : tit;
     });
let 首页 = $(bia, 2).select(() => {
        input = input.replace("🔘", "")
        setItem('m1', input);
        setItem('Mysye', input);
    if (getItem('Mysye') == '随机') {
        clearMyVar('Mysou');
        /*clearItem('Mysye');*/
        clearMyVar('Myfl');
        clearMyVar('Myds');
        }
        refreshPage(true);
        return 'toast://当前首页: ' + input
    });
let 分类 = $(电影_url + '#noLoading#').lazyRule((url) => {
    let new_cate = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
           clearMyVar("Mysou");
           putMyVar("Myfl",'电影');
           putMyVar("Myurl.title", JSON.stringify(new_cate));
           putMyVar("Myurl.url", input);
           return $('hiker://empty#' + url + '#noRecordHistory##noHistory#fypage').rule(() => {
          require(config.依赖);
          fenlei()    
          });
          }, 电影_url);
let 电视 = $('hiker://empty#noRecordHistory##noHistory##noRefresh' + game).rule(() => {
          require(config.依赖);
          dst()
          });
let 影搜 = $('hiker://empty#noRecordHistory##noHistory#fypage').rule(() => {
          require(config.依赖);
          yso()
          });
let 设置 = $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
          require(config.依赖);
          she()
          });
let urlu = [首页, 分类, 电视, 影搜, 设置];
let titll = [sui, "分类", "电视", "影搜", "设置"]

let 图 = "https://lanmeiguojiang.com/tubiao/more/";
let pici = ["47", "213", "137", "101", "44"];

for (let i in pici) {
     d.push({
            title: titll[i],
            url: urlu[i],
            img: 图 + pici[i] + ".png@Referer=",
            col_type: 'icon_5'
            });  
         }

 d.push({
      col_type: "big_blank_block"
      })
  d.push({
      col_type: "line"
      })
  d.push({
      col_type: "big_blank_block"
      })

  d.push({
      title: "搜索",
      desc: "可 以 少 字 ，不 可 错 字 ！",
      url: $.toString(() => {
            putMyVar("Mysou", input);
        if (getMyVar("Mysou")) {
            return $('hiker://empty#noRecordHistory##noHistory#fypage').rule(() => {
            require(config.依赖);
            yso() 
            });
            } else {
            return "hiker://empty";
            }
      }),
      col_type: "input",
      }) 

let 标题 = pdfh(html, 标题1);
let 电影 = pdfh(html, 标题2);
let 剧集 = pdfh(html, 标题3);
let 综艺 = pdfh(html, 标题4);
let 动漫 = pdfh(html, 标题5);
let 其它 = pdfh(html, 标题6);

try {
var 精列 = pdfa(html, 列表1);
var 电列 = pdfa(html, 列表2);
var 剧列 = pdfa(html, 列表3);
var 综列 = pdfa(html, 列表4);
var 动列 = pdfa(html, 列表5);
var 其列 = pdfa(html, 列表6);
       }catch (e) {
       refreshPage();
       setItem('Mysye','随机');
       clearMyVar('Mysou');
       clearMyVar('Myfl');
       clearMyVar('Myds');
       toast('匹配错误，已更换随机首页') 
       }
   d.push({
       col_type: "big_blank_block"
       })

let pic = ["141", "175", "145", "137", "341", "104"];
let 标 = [标题, 电影, 剧集, 综艺, 动漫, 其它];
let 列 = [精列, 电列, 剧列, 综列, 动列, 其列];

  for (let i in 列) {
  if (/精选|热映|热门|推荐|最近|热播|奈飞|电影|剧集|连续剧|电视剧|美剧|综艺|最新|动漫|电视|国产|其他|其它|纪录|记录|日韩|港台|预告|即将|豆瓣|蓝光|少儿|欧美/.test(标[i]))
{
   d.push({
       col_type: "line"
       })
   d.push({
       col_type: "big_blank_block"
       })
   d.push({
       title: 标[i].replace(/[a-zA-Z]|[0-9]/g,""),
       url: "hiker://empty",
       img: 图 + pic[i] + ".png@Referer=",
       col_type: "avatar"
       }) 
try {
var list = 列[i];
for (let j in list) {
   d.push({
       title: pdfh(list[j], 片名),
       desc: pdfh(list[j], 更新),
       img: pd(list[j], 图片)+"@Referer=",
       url: $(pd(list[j], 链接).replace('vodplay','voddetail') + '#immersiveTheme##autoCache' + game).rule(() => {
                 require(config.依赖);
                 erji()
                 }),
        extra: {
                 title: pdfh(list[j], 片名),
                 desc: pdfh(list[j], 更新),
                 img: pd(list[j], 图片)+"@Referer=",
        },
        col_type: /热播|新更|精选|热映|热门|推荐|最近|奈飞|新片/.test(标[i]) ? "movie_2" : "movie_3_marquee"
       }) 
       } }catch (e) { }
       }  
       }
   
setResult(d);
//by随风
//首页模板  代码来自众大佬