js:
var d = [];
let myurl = getMyVar("Myurl");
let page = MY_PAGE;

if (/ksksy|ysgc|lgyy|klyingshi|o8tv|guapitv|abu22|zbkk|tjomet|fositv/.test(myurl)) {
//视中心 可乐
    var MY_URL = myurl + 'vodshow/1--------' + page + '---.html'
    } else 
if (/libvio|voflix|6080x/.test(myurl)) {
    var MY_URL = myurl + 'show/1--------' + page + '---.html'
    } else 
if (/69mj|l0l|tootw|xqmi|cokemv/.test(myurl)) {
    var MY_URL = myurl + 'index.php/vod/show/id/1/page/' + page + '.html'
    } else 
if (/yanetflix|chok8/.test(myurl)) {
//鸭奈飞 Chok吧
    var MY_URL = myurl + 'vodshow/dianying--------' + page + '---.html'
    } else 
if (/dygysz|1080p/.test(myurl)) {
//Dyg
    var MY_URL = myurl + 'vodshow/1--------' + page + '---/'
    } else 
if (/zjmiao/.test(myurl)) {
//追剧喵
    var MY_URL = myurl + 'index.php/vod/show/id/1/page/' + page + '/'
    } else 
if (/panghuys/.test(myurl)) {
//胖虎
    var MY_URL = myurl + 'vodshow/1/page/' + page + '.html'
    } else 
if (/ajeee/.test(myurl)) {
//Nike
    var MY_URL = myurl + 'show/Movie/page/' + page + '.html'
    } else 
if (/auete/.test(myurl)) {
//Auete
    var MY_URL = myurl + 'Movie/index' + page + '.html'
    } else 
if (/czspp/.test(myurl)) {
//厂长
    var MY_URL = myurl + 'movie_bt_series/dyy/page/' + page
    } else 
if (/subaibaiys/.test(myurl)) {
//素白白
    var MY_URL = myurl + 'new-movie/page/' + page
    } else 
if (/dqsj/.test(myurl)) {
//打驴
    var MY_URL = myurl + 'index.php/vod/show/id/28/page/' + page + '.html'
    } else 
if (/cboku/.test(myurl)) {
//独播库
    var MY_URL = myurl + 'vodshow/16--------' + page + '---.html'
    } else 
if (/lyavi/.test(myurl)) {
//乐鱼
    var MY_URL = myurl + 'lys/lyMovie/page/' + page + '.html'
    } else 
if (/wbavi/.test(myurl)) {
//万博
    var MY_URL = myurl + 'wbs/WbMovie/page/' + page + '.html'
    } else 
if (/fantuanhd/.test(myurl)) {
//饭团
    var MY_URL = myurl + 'show/id-20/page/' + page + '.html'
    } else 
if (/1010dy1/.test(myurl)) {
//双十
    var MY_URL = myurl + 'show/1/page/' + page + '/'
    } else 
if (/citydy/.test(myurl)) {
//城市
    var MY_URL = myurl + 'show/id-1/page/' + page + '.html'
    } else 
if (/dmxq/.test(myurl)) {
//大米
    var MY_URL = myurl + 'vodshow/20--------' + page + '---.html'
    } 

let 电影_url = MY_URL.replace(/1---\.html/, '---.html').replace(/1\.html/, '.html').replace(/1---\// , '---/').replace(/\/page\/1/ ,'').replace(/\/page\// ,'');

//log(MY_URL)
//log(电影_url)

let 剧集_url = 电影_url.replace(/lyMovie/,'lyTv').replace(/WbMovie/,'WbTv').replace(/show\/Movie/,'show/Tv').replace(/id\/1/,'id/2').replace('dianying','lianxuju').replace(/vodshow\/16/,'vodshow/2').replace(/vodshow\/20/,'vodshow/21').replace(/lists\/1/,'lists/2').replace(/Movie/,'Tv').replace(/id\/28/,'id/27').replace(/dyy/,'dianshiju').replace(/new-movie/,'tv-drama').replace(/vodshow\/1/,'vodshow/2').replace(/show\/1/,'show/2').replace(/id\-20/,'id-21').replace(/id\-1/,'id-2');

let 动漫_url = 电影_url.replace(/lyMovie/,'lyCartoon').replace(/WbMovie/,'WbCartoon').replace(/www\.lgyy\.cc\/vodshow\/1/,'www.lgyy.cc/vodshow/5').replace(/show\/Movie/,'show/Cartoon').replace(/id\/1/,'id/4').replace('dianying','dongman').replace(/vodshow\/16/,'vodshow/4').replace(/vodshow\/20/,'vodshow/22').replace(/lists\/1/,'lists/4').replace(/Movie/,'Dm').replace(/id\/28/,'id/20').replace(/dyy/,'dohua').replace(/new-movie/,'movie_bt_tags/animation').replace(/vodshow\/1/,'vodshow/4').replace(/show\/1/,'show/4').replace(/id\-20/,'id-23').replace(/id\-1/,'id-4');

let 综艺_url = 电影_url.replace(/lyMovie/,'lyVariety').replace(/WbMovie/,'WbVariety').replace(/show\/Movie/,'show/Variety').replace(/id\/1/,'id/3').replace('dianying','zongyi').replace(/vodshow\/16/,'vodshow/3').replace(/vodshow\/20/,'vodshow/23').replace(/lists\/1/,'lists/3').replace(/Movie/,'Zy').replace(/id\/28/,'id/31').replace(/dyy/,'mj').replace(/new-movie/,'high-movie').replace(/vodshow\/1/,'vodshow/3').replace(/show\/1/,'show/3').replace(/id\-20/,'id-22').replace(/id\-1/,'id-3');

let tr_url = getMyVar("Myurl.url", MY_URL);
//log(page)
if (/php\/live/.test(MY_URL)) {
if (getMyVar("Myurl.url")){
var true_url = tr_url.replace(/\?type\=(\d+)/,'/index/type/$1/page/' + page);
//log(true_url) 
      }
      } else 
if (/czspp|subaibaiys|1010dy1/.test(MY_URL)) {
if (getMyVar("Myurl.url")){
var true_url = tr_url + '/page/' + page;
       }
       } else 
if (/\/show\/|\/vodshow\/id\/|lyavi|wbavi/.test(MY_URL)) {
if (getMyVar("Myurl.url")){
var true_url = tr_url.replace(/---\.html/,page + '---.html').replace(/---(\d+)\.html/,page + '---$1.html').replace(/\.html/,'/page/' + page + '.html').replace(/\/year\/(\d+)\.html/,'/page/' + page + '/year/$1.html').replace(/id\/(\d+)\//,'id/$1/page/' + page + '/').replace(/id\/(\d+)\/year\/(\d+)\//,'id/$1/year/$2/page/' + page + '/');
      }
      } else  
if (/vodshow\/|lists\//.test(MY_URL)) {
if (getMyVar("Myurl.url")){
var true_url = tr_url.replace(/---\.html/,page + '---.html').replace(/---(\d+)\.html/,page + '---$1.html').replace(/---\//,page + '---/').replace(/---(\d+)\//,page + '---$1/').replace(/\.html/,'/page/' + page + '.html').replace(/\/year\/(\d+)\.html/,'/page/' + page + '/year/$1.html');
      }
      } else 
if (/index/.test(MY_URL)) {
if (getMyVar("Myurl.url")){
if (page == 1) {
        true_url = tr_url.replace(/\/(\d*)\.html/, '$1index.html');
    } else {
        true_url = tr_url.replace('.html', page + '.html');
//log(true_url) 
    }
    }
    } 

//分类定位
var html = request(true_url);
let headers = {
    "User-Agent": MOBILE_UA,
    "Referer": MY_HOME,
    };
if (html.indexOf('检测中') != -1) {
            html = request(MY_HOME + '?btwaf' + html.match(/btwaf(.*?)\"/)[1], {
                headers: headers
            });
            } 

if (/auete/.test(MY_URL)) {
var 大类 = '.nav_tag_list&&td'
var 拼接小类 = ''
var 分类子 = 'body&&a:not(:matches(重置))'
      } else 
if (/dqsj|tjomet/.test(MY_URL)) {
var 大类 = 'body&&.hl-filter-list'
var 拼接小类 = 'body&&.hl-site-tits'
var 分类子 = 'body&&a:not(:matches(重置))'
      } else 
if (/zjmiao/.test(MY_URL)) {
var 大类 = 'body&&.nav-swiper:gt(1)'
var 拼接小类 = 'body&&.site-tabs'
var 分类子 = 'body&&a:not(:matches(重置))'
         } else  
if (/ysgc|cboku|fositv/.test(MY_URL)) {
var 大类 = 'body&&.myui-screen__list'
var 拼接小类 = ''
var 分类子 = 'body&&a:not(.text-muted):not(:matches(重置))'
         } else  
if (/czspp|subaibaiys/.test(MY_URL)) {
var 大类 = '#beautiful-taxonomy-filters-tax-movie_bt_series'
var 拼接小类 = ''
var 分类子 = 'body&&a:lt(1):not(:matches(重置))'
         } else  
if (/chok8|abu22|xqmi|1010dy1|zbkk/.test(MY_URL)) {
var 大类 = 'body&&.stui-screen__list'
var 拼接小类 = 'body&&.nav'
var 分类子 = 'body&&a:not(.text-muted:gt(1)):not(:matches(重置))'
         } else  
if (/libvio|fantuanhd|6080x/.test(MY_URL)) {
var 大类 = '#screenbox&&ul'
var 拼接小类 = ''
var 分类子 = 'body&&a:not(:matches(重置|按))'
         } else  
if (/l0l/.test(MY_URL)) {
var 大类 = 'body&&.swiper-wrapper'
var 拼接小类 = '.ec-casc-list&&.title-a'
var 分类子 = 'body&&a:not(:matches(重置|按))'
         } else  
if (/citydy/.test(MY_URL)) {
var 大类 = 'body&&.type-select'
var 拼接小类 = 'body&&.ajax-nav-tabs'
var 分类子 = 'body&&a:not(:matches(重置))'
         } else 
if (/scroll-box/.test(html)) {
var 大类 = 'body&&.scroll-box'
var 拼接小类 = ''
var 分类子 = 'body&&a:not(:matches(重置))'
        } else 
if (/classification-type/.test(html)) {
var 大类 = '.classification-type&&li'
var 拼接小类 = ''
var 分类子 = 'body&&a:not(:matches(重置))'
        }

//列表
if (/img-list|fed-list-info|bt_img|stui-vodlist|myui-vodlist|list-a|hl-vod-list|threadlist|videoul/.test(html)) { 
    var 列表 = '.img-list||.fed-list-info||.bt_img||.stui-vodlist||.myui-vodlist||.list-a||.hl-vod-list||.threadlist||.videoul&&li'
    } else 
if (/module-items|module/.test(html)) { 
    var 列表 = '.module-items||.module&&.module-item'
    }

//更新
if (/text-right|fed-list-remarks|hdtag|hl-pic-text|list-remarks|module-item-text|module-item-note|pic-text|jidi|hdinfo|videoul-tips/.test(html)) { 
    var 更新 = '.text-right||.fed-list-remarks||.hdtag||.hl-pic-text||.list-remarks||.module-item-text||.module-item-note||.pic-text||.jidi||.hdinfo||.videoul-tips&&Text'
     }

//图片
if (/auete|dmxq/.test(MY_URL)) {
    var 图片 = 'img&&src'
    } else 
if (/hl-lazy/.test(html)) { 
    var 图片 = '.hl-lazy&&data-original'
    } else {
    var 图片 = '.videoul-img||.fed-lazy||.lazy||.lazyload&&data-original||data-src||lay-src'
    }

//片名
if (/ajeee|lyavi|wbavi/.test(MY_URL)) {
    var 片名 = '.lazy&&alt'
    var 链接 = 'a&&href'
    } else 
if (/auete/.test(MY_URL)) {
    var 片名 = 'h2&&Text'
    var 链接 = 'h2&&a&&href'
    } else 
if (/czspp|subaibaiys/.test(MY_URL)) {
    var 片名 = 'h3&&Text'
    var 链接 = 'a&&href'
    } else {
    var 片名 = 'a&&title'
    var 链接 = 'a&&href'
    }

let 大类名 = 'a&&Text';
let 大类链 = 'a&&href';
let 小类名 = 'a&&Text';
let 小类链 = 'a&&href';

try {
    var categories = pdfa(html, 大类).concat(pdfa(html, 拼接小类));
    } catch (e) {
    var categories = pdfa(html, 大类);
    }

const Color = "#19B89D";
const empty = "hiker://empty";

if (parseInt(MY_PAGE) === 1) {
  var 分类 = {
        '电影': 'https://lanmeiguojiang.com/tubiao/more/175.png@Referer=',
        '剧集': 'https://lanmeiguojiang.com/tubiao/more/145.png@Referer=',
        '动漫': 'https://lanmeiguojiang.com/tubiao/more/341.png@Referer=',
        '综艺': 'https://lanmeiguojiang.com/tubiao/more/137.png@Referer='
    };
var 链 = [电影_url, 剧集_url, 动漫_url, 综艺_url];
    for (var i = 0; i < 4; i++) {
        var fen = Object.keys(分类)[i];
        d.push({
            title: fen,
            img: Object.values(分类)[i],
            col_type: 'icon_round_small_4',
            url: $(链[i] + '#noLoading#').lazyRule((fen) => {
    let new_cate = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
    refreshPage();
    putMyVar("Myfl",fen);
    putMyVar("Myurl.title", JSON.stringify(new_cate));
    putMyVar("Myurl.url", input);
      return "hiker://empty"
      }, fen)
        })
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
      }

let init_cate = [];
for (let i = 0; i < 20; i++) {
    init_cate.push("0")
    }
const fold = getMyVar("Myurl.group", "0");
const cate_temp_json =
getMyVar("Myurl.title", JSON.stringify(init_cate));
const cate_temp = JSON.parse(cate_temp_json);

if (parseInt(page) === 1) {

let titlet = getMyVar("Myfl");
d.push({
      title: fold === '1' ? '<b><span style="color: #FA7298">' + titlet + '</span></b>' : '<b><span style="color: #19B89D">' + titlet + '</span></b>',
      url: $('#noLoading#').lazyRule((fold) => {
          putMyVar("Myurl.group", fold === '1' ? '0' : '1');
          refreshPage(false);
          return "hiker://empty"
          }, fold),
      img: "https://lanmeiguojiang.com/tubiao/movie/105.svg@Referer=",
      col_type: "avatar"
      })

d.push({
      col_type: "big_blank_block"
      })

  categories.forEach((category, index) => {
      let sub_categories = pdfa(category, 分类子);
      if (index === 0) {
          sub_categories.forEach((item, key) => {
      let title = pdfh(item, 大类名);
      d.push({
          title: key.toString() === cate_temp[index] ? '““””<b><span style="color: ' + Color + '">' + title + '</span></b>' : title,
          url: $(pd(item, 大类链) + '#noLoading#').lazyRule((params) => {
          let new_cate = [];
          params.cate_temp.forEach((cate, index) => {
          new_cate.push(index === 0 ? params.key.toString() : "0")
          })         
          putMyVar("Myurl.title", JSON.stringify(new_cate));
          putMyVar("Myurl.url", input);
          refreshPage(false);
          return "hiker://empty"
          }, {
          cate_temp: cate_temp,
          key: key,
          page: page,
          }),
          col_type: 'scroll_button',
          })
          })
    d.push({
          col_type: "blank_block"
          });
          } else 
       if (fold === '1') {
            sub_categories.forEach((item, key) => {
       let title = pdfh(item, 小类名);
    d.push({
        title: key.toString() === cate_temp[index] ? '““””<b><span style="color: ' + Color + '">' + title + '</span></b>' : title,
        url: $(pd(item, 小类链) + '#noLoading#').lazyRule((params) => {
            params.cate_temp[params.index] = params.key.toString()           
        putMyVar("Myurl.title", JSON.stringify(params.cate_temp));      
        putMyVar("Myurl.url", input);
        refreshPage(false);
        return "hiker://empty"
        }, {
        cate_temp: cate_temp,
        index: index,
        key: key,
        page: page,
        }),
        col_type: 'scroll_button',
        })
        })
  d.push({
      col_type: "blank_block"
      });
     }
    })
   }

    let list = pdfa(html, 列表);
    list.forEach(li => {
  try {
    let picc = pdfh(li, 图片);
   if (/http|pic|jpg|png|jpeg/.test(picc)) {
   var col = 'movie_3_marquee';
          } else {
   var col = 'text_center_1';
          }
   
   d.push({
       title: pdfh(li, 片名),
       desc: pdfh(li, 更新),
       img: pd(li, 图片)+"@Referer=",
       url : $(pd(li, 链接).replace('vodplay','voddetail') + '#immersiveTheme##autoCache' + game).rule(() => {
            require(config.依赖);
            erji() 
            }),
       extra: {
            title: pdfh(li, 片名),
            desc: pdfh(li, 更新),
            img: pd(li, 图片)+"@Referer=",
        },
       col_type: col
       })
        } catch (e) { }
     })
setResult(d);
//动态分类来自模板Q
//by随风  优化样式及匹配模板😜😜😜