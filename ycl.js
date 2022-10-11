//更新
let bby = request("hiker://page/ycl");
let dy = bby == "" ? request(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'ycl.js') : bby
dy;
gx()
function gx() {
let CT = Date.now();
let LT = getItem("上次", "0").replace("CT", "");
if (CT > (LT + 12*60*60*1000)|getMyVar("手动", "0") == "1") {
setItem("上次", CT + "CT");
bby == "" ? eval(request(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'bbh.js')) : eval(JSON.parse(request("hiker://page/bbh")).rule);
let nowb = getItem("当前","1.0");
let desc = '当前版本: ' + nowb + ' 是否更新？\n\n更新: ';
let lsh = getMyVar("临时","1.0");
putMyVar("更新",newb);
setItem("内容", 内容);
let ych = getMyVar("更新");
if (ych > nowb) { 
if (ych > lsh) {
log("当前版本: " + nowb + " < 新版本: " + newb + "\n更新: " + 内容)
confirm({
    title: '发现新版本: ' + newb,
    content: desc + 内容,
    confirm: $.toString((ych)=>{
          setItem("当前",ych);
          deleteCache();
          refreshPage();   
          }, ych),
    cancel: $.toString((ych)=>{
          putMyVar("临时",ych);
          }, ych)
          })
        }
      } 
    }
  }

//设置
function she() {
js:
var d = [];
let ur = "https://lanmeiguojiang.com/tubiao/messy/";
let 轮 = "开启后，电视直播列表上方以窗口形式自动播放影视剧。";
let 屏 = "多数为二级页面顶部以全屏显示，右上角显示菜单按钮，设置后，需返回下拉刷新生效。";

let 名称 = ["电视轮播", "顶部全屏"];
let 储存 = ["轮播", "全屏"];
let des = [轮, 屏];

for (let i in des) {
  d.push({
      title: 名称[i],
      url: "hiker://empty",
      desc: des[i],
      col_type: "text_1",
      extra: {
           lineVisible: false
           }
      })  

  d.push({
          title: 名称[i],
          url: $('#noLoading#').lazyRule((储存) => {
      if (getItem(储存, 'off') == 'on') {
          setItem(储存, 'off'); 
          } else {
          setItem(储存, 'on');
          }
          refreshPage(false);
          return 'hiker://empty';
          }, 储存[i]),
          img: getItem(储存[i], "off") == "on" ? ur + "55.svg@Referer=" : ur + "63.svg@Referer=",
          col_type: "avatar"
          });

  d.push({
      col_type: "big_blank_block"
      })
  d.push({
      col_type: "line"
      })
  d.push({
      col_type: "big_blank_block"
      })
    } 

  d.push({
      title: "手动更新",
      desc: "无需频繁更新，建议等待自动推送新版本，手动更新为备用。",
      url: $('#noLoading#').lazyRule((nowb) => {
          let by = request("hiker://page/bbh");
          by == "" ? eval(request(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'bbh.js')) : eval(JSON.parse(request("hiker://page/bbh")).rule);

          let dy = by == "" ? require(config.依赖) : eval(JSON.parse(request("hiker://page/ycl")).rule);
      if (newb > nowb) { 
          putMyVar("手动", "1");
          dy;
          gx()
          } else {
          toast("已至最新版本"); 
          };
          
          refreshPage(false);
          return 'hiker://empty';
          }, getItem("当前", "1.0")),
      col_type: "text_1"
      })

d.push({
      title: "当前版本：" + getItem("当前","1.0"),
      desc: "更新：" + getItem("内容"),
      url: "toast://更新内容：\n" + getItem("内容"),
      col_type: "text_1"
      })

  setResult(d);
  }

//分隔
if (getItem("全屏") == "on") {
    var game = "##gameTheme#";
    } else {
    var game = "#";
    };

let yc = "https://gitcode.net/suifen/suifeng/-/raw/master/";
let zy = "hiker://page/";

//首页
function sy() {
let b = zy + "sy";
let y = yc + "sy.js";
let by = request(b);
by == "" ? require(y) : eval(JSON.parse(request(b)).rule);
}   
//分类
function fenlei() {
let b = zy + "fenlei";
let y = yc + "fenlei.js";
let by = request(b);
by == "" ? require(y) : eval(JSON.parse(request(b)).rule);
}
//二级
function erji() {
let b = zy + "erji";
let y = yc + "erji.js";
let by = request(b);
by == "" ? require(y) : eval(JSON.parse(request(b)).rule);
}
//影搜
function yso() {
let b = zy + "yso";
let y = yc + "yso.js";
let by = request(b);
by == "" ? require(y) : eval(JSON.parse(request(b)).rule);
}
//电视
function dst() {
let b = zy + "dst";
let y = yc + "dst.js";
let by = request(b);
by == "" ? require(y) : eval(JSON.parse(request(b)).rule);
}

//搜索
function sou() {
js:
var d = [];
input = MY_URL.split('##')[1];

let 搜 = {"选源搜索" : "0", "聚合搜索" : "1"};
   for (let i = 0; i < 2; i++) {
          let soid = Object.values(搜)[i];
   d.push({
      title: Object.keys(搜)[i] + input,
      url: $('hiker://empty#noRecordHistory##noHistory#fypage').rule((input, so) => {
          putMyVar("Mysou", input);
          setItem("s1", so);
          require(config.依赖);
          yso() 
          }, input, soid),
       col_type: "text_1",
       extra: {
              erji: "1"
              }
       }) 
       }
   setResult(d);
   }
