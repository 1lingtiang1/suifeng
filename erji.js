js:
var d = [];
setPageTitle(MY_PARAMS.title)
let ht = getResCode();
if (/xqmi/.test(MY_URL)) {
    let xqml = pd(ht, '.btn-primary&&href');
    var html = request(xqml);
    } else {
    var html = ht;
    }
let headers = {
    "User-Agent": MOBILE_UA,
    "Referer": MY_HOME,
    };
if (html.indexOf('检测中') != -1) {
            html = request(MY_HOME + '?btwaf' + html.match(/btwaf(.*?)\"/)[1], {
                headers: headers
            });
        }
if (/348z/.test(MY_URL)) {
//348影视
var 类型 = '.data&&Text'
var 导演 = '.data,3&&Text'
var 主演 = '.data,2&&Text'
var 简介 = '.m-box&&Text'
   } else 
if (/zjmiao/.test(MY_URL)) {
//ONE 追剧喵
var 类型 = '.hl-ma0&&Text'
var 导演 = ''
var 主演 = ''
var 简介 = '.ec-show&&Text'
   } else 
if (/mayi/.test(MY_URL)) {
//蚂蚁 4K
var 类型 = '.video-info-aux&&Text'
var 导演 = '.video-info-items,0&&Text'
var 主演 = '.video-info-items,1&&Text'
var 简介 = '.vod_content&&Text'
       } else 
if (/ysgc/.test(MY_URL)) {
//影视工厂
var 类型 = '.myui-content__detail&&p,5&&Text'
var 导演 = '.myui-content__detail&&p,2&&Text'
var 主演 = '.myui-content__detail&&p,4&&Text'
var 简介 = '.col-pd&&span,1&&Text'
       } else 
if (/auete/.test(MY_URL)) {
//auete
var 图片 = '.cover&&img&&src'
var 类型 = '.message&&p:contains(类)&&Text'
var 导演 = '.message&&p:contains(导演)&&Text'
var 主演 = '.message&&p:contains(主演)&&Text'
var 简介 = 'p,14&&Text'
   } else 
if (/4kan|chok8|abu22|1010dy1|6080x/.test(MY_URL)) {
//4看
var 类型 = 'p,0&&Text'
var 导演 = 'p,2&&Text'
var 主演 = 'p,1&&Text'
var 简介 = 'p,4&&Text'
   } else 
if (/fantuanhd/.test(MY_URL)) {
//饭团
var 类型 = 'p,2&&Text'
var 导演 = 'p,1&&Text'
var 主演 = 'p,0&&Text'
var 简介 = 'p,3&&Text'
   } else 
if (/xixikdy/.test(MY_URL)) {
//熙熙看
var 类型 = 'h3&&span&&Text'
var 导演 = 'p,2&&Text'
var 主演 = 'p,3&&Text'
var 简介 = '.vod-info-text&&Text'
   } else 
if (/libvio|zbkk/.test(MY_URL)) {
var 类型 = 'p,0&&Text'
var 导演 = 'p,2&&Text'
var 主演 = 'p,1&&Text'
var 简介 = '.detail-content&&Text'
   } else 
if (/fositv/.test(MY_URL)) {
var 类型 = 'p,2&&Text'
var 导演 = 'p,5&&Text'
var 主演 = 'p,4&&Text'
var 简介 = '.content&&span,1&&Text'
   } else 
if (/xqmi/.test(MY_URL)) {
var 类型 = 'p&&Text'
var 导演 = 'p&&Text'
var 主演 = 'p&&Text'
var 简介 = '.stui-content__desc&&Text'
   } else 
if (/dqsj|tjomet/.test(MY_URL)) {
//打驴
var 类型 = '.hl-full-box&&li,6&&Text'
var 导演 = '.hl-full-box&&li,3&&Text'
var 主演 = '.hl-full-box&&li,2&&Text'
var 简介 = '.hl-full-box&&li,-1&&Text'
   } else 
if (/czspp|subaibaiys/.test(MY_URL)) {
//厂长 素白白
var 类型 = '.dytext&&li,0&&Text'
var 导演 = '.dytext&&li,5&&Text'
var 主演 = '.dytext&&li,6&&Text'
var 简介 = '.yp_context&&Text'
       } else 
if (/cboku/.test(MY_URL)) {
//独播库
var 类型 = 'p,1&&Text'
var 导演 = 'p,3&&Text'
var 主演 = 'p,2&&Text'
var 简介 = '.text-collapse&&span,1&&Text'
   } else 
if (/l0l/.test(MY_URL)) {
//l0l
var 类型 = '.play-news&&Text'
var 导演 = 'p,1&&Text'
var 主演 = 'p,0&&Text'
var 简介 = '.play-m-box&&Text'
   } else 
if (/citydy/.test(MY_URL)) {
//城市
var 类型 = '.vod-detail-info&&li,2&&Text'
var 导演 = '.vod-detail-info&&li,4&&Text'
var 主演 = '.vod-detail-info&&li,3&&Text'
var 简介 = '.txt-hidden&&Text'
   } else 
if (/fenggoudy3/.test(MY_URL)) {
//疯狗
var 类型 = '.ff-text-right,2&&Text'
var 导演 = '.ff-text-right,1&&Text'
var 主演 = '.ff-text-right,0&&Text'
var 简介 = '.vod-nav-content&&Text'
   } else 
if (/video-info-aux/.test(html)) {
var 类型 = '.video-info-aux&&Text'
var 导演 = '.video-info-items,0&&Text'
var 主演 = '.video-info-items,1&&Text'
var 简介 = '.video-info-content&&Text'
   } else 
if (/module-info-tag/.test(html)) {
//鸭奈飞 蓝光影院 1080P
var 类型 = '.module-info-tag&&Text'
var 导演 = '.module-info-item,1&&Text'
var 主演 = '.module-info-item,3&&Text'
var 简介 = '.module-info-item,0&&Text'
   }

//线路
if (/xqmi/.test(MY_URL)) {
var 线路 = '.t-ul&&li'
var 线路名 = 'span&&Text'
     } else
if (/libvio|6080x|zbkk/.test(MY_URL)) {
var 线路 = 'body&&h3:not(:matches(猜你|云盘|网盘|更多|榜))'
var 线路名 = 'body&&Text'
     } else 
if (/abu22/.test(MY_URL)) {
var 线路 = 'body&&h3:gt(0)'
var 线路名 = 'body&&Text'
     } else 
if (/chok8|1010dy1/.test(MY_URL)) {
var 线路 = 'body&&.mb'
var 线路名 = 'h3&&Text'
     } else 
if (/fenggoudy3/.test(MY_URL)) {
var 线路 = '.vod-nav-play&&.page-header'
var 线路名 = 'h2&&Text'
     } else 
if (/auete/.test(MY_URL)) {
var 线路 = 'body&&h2'
var 线路名 = 'body&&Text'
     } else 
if (/dqsj|tjomet/.test(MY_URL)) {
var 线路 = 'body&&.hl-tabs-btn'
var 线路名 = 'a&&alt'
     } else 
if (/tab-item/.test(html)) { 
var 线路 = 'body&&.tab-item:not(:matches(榜))'
var 线路名 = 'span&&Text'
     } else 
if (/nav-tabs|play-tab/.test(html)) { 
var 线路 = '.nav-tabs||.play-tab&&li'
var 线路名 = 'a&&Text'
     } else 
if (/tag|Tab/.test(html)) { 
var 线路 = '#tag||#Tab&&a:not(:matches(下载))'
var 线路名 = 'a&&Text'
     } else 
if (/play-zu-ul/.test(html)) { 
var 线路 = '.play-zu-ul&&li'
var 线路名 = 'Text'
     } 

//列表
if (/fenggoudy3/.test(MY_URL)) {
//小猫咪
     var 列表 = 'body&&.ff-playurl'
      } else 
if (/dqsj|tjomet/.test(MY_URL)) {
//打驴
     var 列表 = 'body&&.hl-plays-list'
      } else 
if (/module-play-list/.test(html)) { 
     var 列表 = 'body&&.module-play-list'
     } else 
if (/playlist-notfull|content_playlist/.test(html)) {
     var 列表 = 'body&&.playlist-notfull||.content_playlist'
     } else { 
      var 列表 = 'body&&.play-list||.play-ji-ul||.stui-play__list||.sort-item||.stui-content__playlist||.paly_list_btn||#player_list||.sort-list'
      }

    let 子列表 = 'body&&a:not(.hl-show-list):not(:matches(全部|排序))'

//选集
    let 选集名 = 'a&&Text'
    let 选集链 = 'a&&href'

//推荐列表
if (/module-items/.test(html) && /module-item/.test(html)) { 
     var 推荐列表 = '.module-items,1||.module-items&&.module-item:lt(9)'
      } else 
if (/list-width/.test(html) && /pic-1/.test(html)) { 
     var 推荐列表 = 'body&&.list-width.pic-1:lt(9)'
      } else 
if (/list-width|stui-vodlist__item/.test(html)) { 
     var 推荐列表 = 'body&&.stui-vodlist__item||.list-width:lt(9)'
      } else 
if (/img-list|vod-item-img|vod-love|stui-vodlist|fed-part-layout|hl-vod-list|bt_img|stui-vodlist__bd|myui-vodlist__bd/.test(html)) {
     var 推荐列表 = '.img-list||.vod-item-img||.stui-vodlist||.vod-love||.fed-part-layout,-2||.hl-vod-list||.bt_img||.stui-vodlist__bd||.myui-vodlist__bd&&li:lt(9)'
      } else {
     var 推荐列表 = 'null'
      }

//推荐更
if (/text-right|fed-list-remarks|list-remarks|remarks|pic-tag-left|module-item-note|module-item-text|pic-text|state|continu/.test(html)) { 
     var 推荐更 = '.text-right||.fed-list-remarks||.list-remarks||.remarks||.pic-tag-left||.module-item-note||.module-item-text||.pic-text||.state||.continu&&Text'
      } else {
     var 推荐更 = 'a&&title'
      }

//推荐图
if (/xixikdy|dmxq/.test(MY_URL)) {
    var 推荐图 = 'img&&src||lay-src'
    } else
if (/hl-lazy|ff-img/.test(html)) { 
     var 推荐图 = '.hl-lazy||.ff-img&&data-original'
     } else 
if (/br/.test(html) && /eclazy/.test(html)) {
     var 推荐图 = '.br&&style'
     } else {
     var 推荐图 = '.lazy||.lazyload&&data-original||data-src'
     }

//推荐名
if (/ajeee|lyavi|wbavi|fenggoudy3/.test(MY_URL)) {
    var 推荐名 = '.lazy||.ff-img&&alt'
    } else {
    var 推荐名 = 'a&&title'
    }

    let 推荐链 = 'a&&href';

let Color = "#f13b66a";
let Color1 = "#098AC1";
let Color2 = "#19B89D";

    try{
         var arts = pdfa(html, 线路);
         var tabs = [];
         for (let i in arts) {
    tabs.push(pdfh(arts[i], 线路名).replace(/ |.*』|：.*|网盘|云盘|猜你喜欢/g, ''))    
         } 
         }catch(e){ };    
    try{
         let conts = pdfa(html, 列表);
         var lists = [];
         for (let i in conts) {
   lists.push(pdfa(conts[i], 子列表))    
         }    
         }catch(e){ };

try {        
         var 名 = MY_PARAMS.title;
         var 类 = '类型：' + pdfh(html, 类型).replace(/◎|\/|分类：|电影|连续剧|动漫|类型：|关键词：/g,'');      
         var 导 = '导演：' + pdfh(html, 导演).replace(/\/|导演：|◎/g,' ');
         var 主 = '主演：' + pdfh(html, 主演).replace(/\/|主演：|演员：|◎/g,' ');             
         var 更 = '更新：' + MY_PARAMS.desc;
         var 图1 = MY_PARAMS.img;
         var 图2 = pd(html ,图片) + "@Referer=";
         var 图 = (/http|https|pic|jpg|png/.test(图1)) ? 图1 : 图2;
         var 介 = pdfh(html, 简介).replace(/　|展开|收起|详情：|[收起部分]|概要 :|©豆瓣/g,'');
         } catch (e) { };
    
         let titles = '片名：' + 名 + '\n' + 类.substring(0, 18) + '\n' + 更;
                       
         let descs = '片名：' + 名 + '\n' + 类 + '\n\n' + 导 + '\n' + 主 + '\n\n' + 更  + '\n\n' + '剧情简介：' + '\n' + 介 + '\n\n';
         
    d.push({
         title: '‘‘’’<b><small><font color="#b0e0e6">' + titles + '</font></small></b>',
         desc: '‘‘’’<b><small><b><font color="#708090">简介：</b>' + '<font color="#778899">' + 介 + '</font></font></small></b>',
         url: 图.replace('@Referer=',''),
         img: 图,
         col_type: 'movie_1_vertical_pic_blur',
    extra: {
         gradient: true
         }
         });
    
     for (let i = 0; i < 8; i++) {
     d.push({
     col_type: "blank_block"
     })
     }	

  d.push({
          title: '线路',
          url: $('#noLoading#').lazyRule(() => {
      if (getMyVar('xl') == 'ka') {
          putMyVar('xl', 'gua'); 
          } else {
          putMyVar('xl', 'ka');
          }
          refreshPage(false);
          return '#noHistory#hiker://empty'
          }),
          img: 'https://lanmeiguojiang.com/tubiao/more/13.png@Referer=',
          col_type: 'icon_small_3'
          });

d.push({
      title: "剧情",
      url: $().rule((text) => {setResult([{
         title: text,
         col_type: 'long_text'}])
         },descs),
      img: "https://lanmeiguojiang.com/tubiao/more/74.png@Referer=",
      col_type: "icon_small_3"
      }) 

let bak = MY_PARAMS.back;
     if (bak == "1") { 
         var surl = $('#noLoading#').lazyRule(() => {
                back(false);
                return "hiker://empty";  
                }) 
          } else {
          var surl = $("hiker://empty#noRecordHistory##noHistory#fypage").rule((input) => {
              putMyVar("Mysou", input);
              require(config.依赖);
              yso()
              }, 名) 
           }
          
   d.push({
          title: "影搜",
          url: surl,
          img: "https://lanmeiguojiang.com/tubiao/more/101.png@Referer=",
          col_type: "icon_small_3",
          extra: {
                erji: "1",
                }
          }) 

  d.push({
     col_type: 'line'
     })
  d.push({
      col_type: "big_blank_block"
      })
 
function setTabs(tabs, vari) {  
if (getMyVar('xl') == 'ka') {
if (arts == '') {
   toast('没有其它线路了哟！');
   putMyVar("xl","gua");
   } else {
  d.push({
      col_type: "big_blank_block"
      })
  d.push({
      col_type: "big_blank_block"
      })
   d.push({
           title: '‘‘’’<b><font color="#33cccc">线路 : </font></b>',
           url: 'hiker://empty',
           col_type: "scroll_button"
      })

   for (let i in tabs) {
     d.push({
        title: getMyVar(vari, '0') == i ? '‘‘’’<b><font color="#33cccc">' + tabs[i]+ '↓</font></b>' : tabs[i],
        url: $('hiker://empty#noHistory##noLoading#').lazyRule((vari, i) => {
            putMyVar(vari, i);
            refreshPage(false);
            return 'hiker://empty#noHistory#';
            }, vari, i),
        col_type: 'scroll_button'
        }) 
     }}
     } 
     } 

 function setLists(lists, index) {
     d.push({
     col_type: 'line_blank'
     })
     }

function setLists(lists, index) {
try {
    if (getItem('zf') == 'z') {
        var list = lists[index];
        } else {
        var list = lists[index].reverse();
        }; 
     d.push({
        title: getItem('zf') == 'z' ? '<span style="color:' + Color2 + '">选集排序' + "<small><font color='grey'>" + '\t\t共 ' + list.length + ' 条\t\t\t</font></small></span>' + '<span style="color: #33cccc">▴</span>' : '<span style="color:' + Color2 + '">选集排序' + "<small><font color='grey'>" + '\t\t共 ' + list.length + ' 条\t\t\t</font></small></span>' + '<span style="color: #ff7f50">▾</span>',
        url: $('#noLoading#').lazyRule(() => {
         if (getItem('zf') == 'z') {
             setItem('zf', 'f');
             } else {
             setItem('zf', 'z');
             }
             refreshPage(false);
             return '#noHistory#hiker://empty'
             }),
     img: getItem('zf') == 'z' ? 'https://lanmeiguojiang.com/tubiao/more/24.png@Referer=' : 'https://lanmeiguojiang.com/tubiao/more/219.png@Referer=',
     col_type: 'avatar'
     })
     } catch (e) { }
    try {
        for (let j = 0; j < list.length; j++) {
            let jmm = pdfh(list[j], 选集名);
            let urll = pd(list[j], 选集链);
        if (urll.match(/ed2k|Better|Memory|magnet/)) {
            let jm = jmm.replace(/magnet.*/, '““磁链””').replace(/ed2k.*/, '‘‘电驴’’');
            let url = urll.replace(/.*\]|.*】|.*盘\：|.*接：|提取码.*/g, '');
        d.push({
               desc: jm,
               url: url,
               col_type: 'text_center_1',
               extra: {
                    id: url,
                    blockRules: ['.css', '.gif', '.jpg', '.jpeg', '.png', '.ico', '.svg', 'cnzz', 'google', 'xn--*:*', 'hm.baidu.com', '/ads/*.js', '.m3u8', '.mp4'],
                    jsLoadingInject: true
                }
            });
            } else {
            let jm = jmm.replace(/第|集|话|期|线路|厂长|\(.*\)/g, '');
            let url = urll;
        if (list.length < 17) {
            var col = 'text_2';
            } else {
            var col = jm.length > 5 ? 'text_2' : 'text_4';
         } 
            let by = request("hiker://page/lazy"); 
        if (by == "") {
            var lazy = $("").lazyRule(() => {                 require(config.依赖.match(/http(s)?:\/\/.*\//)[0] + "lazy.js");
                   return lazy()
                   })
                   } else {
             var lazy = $("").lazyRule(() => { 
eval(JSON.parse(request("hiker://page/lazy")).rule);
                   return lazy()
                   })
                   }
         d.push({
               title: jm,
               url: url + lazy,
               col_type: col,
               extra: {
                    id: url,
                    blockRules: ['.css', '.gif', '.jpeg', '.png', '.ico', '.svg', 'cnzz', 'google', 'xn--*:*', 'hm.baidu.com', '/ads/*.js', '.m3u8', '.mp4'],
                    jsLoadingInject: true,
                    ua: PC_UA
                }
            });
           }
        }
    } catch (e) {
        d.push({
            title: '暂无片源',
            url: "hiker://empty",
            col_type: 'text_center_1',
            extra: {
                 lineVisible: false
                 }
        });
     }
  }

      setTabs(tabs, MY_URL);
      setLists(lists, getMyVar(MY_URL, '0'));
      d.push({
      col_type: "big_blank_block"
      })
      d.push({
      col_type: "big_blank_block"
      })
      d.push({
      col_type: "big_blank_block"
      })
  d.push({
      col_type: "line"
      })
  d.push({
      col_type: "big_blank_block"
      })

      if (getMyVar('yn', 'no') == 'no') {
          var kg = '<font color="#33cccc">相关影视 ▴</font>';
          } else {
          var kg = '<font color="#33cccc">相关影视 ▾</font>';
          }
      
      d.push({
          title: kg,
          url: $('#noLoading#').lazyRule(() => {
      if (getMyVar('yn', 'no') == 'yes') {
          putMyVar('yn', 'no'); 
          } else {
          putMyVar('yn', 'yes');
          }
          refreshPage(false);
          return '#noHistory#hiker://empty'
          }),
          img: 'https://lanmeiguojiang.com/tubiao/more/239.png@Referer=',
          col_type: 'avatar'
          })
          
     if (getMyVar('yn', 'no') == 'no') {
     d.push({
           title: '““””<small><font color=#20b2aa>数据资源收集于网络，海阔不提供任何资源！</font></small>',
           desc: '““””<small><font color=#ff7f50>本规则仅限学习与交流，请导入后24小时内删除，请勿传播！</font></small>',
           url: "hiker://empty",
           col_type: 'text_center_1'
           });
           } else {
           let tuii = pdfa(html, 推荐列表);
       if (tuii == '') {
       d.push({
           desc: '暂无相关影视',
           url: "hiker://empty",
           col_type: 'text_center_1',
           extra: {
                lineVisible: false
                }
           })
           } else {
           var tui = tuii;
           }
           }

    for (let i in tui) {
          let imgd = pdfh(tui[i], 推荐图);
    if (/http/.test(imgd)) {
          var img = pdfh(tui[i], 推荐图).replace(/.*url=|.*tu=|\);/g,'');
          } else {
          var img = pd(tui[i], 推荐图);
          }

    try {
        let xun = MY_PARAMS.xun;
    if (xun == "1") {
        var turl = $("#noLoading#").lazyRule(() => { 
            back(false)
            return "hiker://empty"
            });
         } else {
         var turl = $(pd(tui[i], 推荐链).replace('vodplay','voddetail') + '#immersiveTheme##autoCache##noHistory' + game).rule(() => { 
           require(config.依赖);
           erji() 
           })
           }

          let 推名 = pdfh(tui[i], 推荐名);
          let 推更 = pdfh(tui[i], 推荐更);
       d.push({
           title: 推名,
           desc: 推更,
           pic_url: img + "@Referer=",
           url: turl,
           extra: {
                xun: "1",
                title: 推名,
                desc: 推更,
                img: img + "@Referer=",
                },
            col_type: 'movie_3_marquee'
            });
            }catch(e){ };
            }

   d.push({
          title: '<br>',
          col_type: 'rich_text'
          });
try {
let conts = pdfa(html, 列表)[0];
let list = pdfa(conts, 子列表);
let title = pdfh(list[list.length-1], 选集名);

setLastChapterRule('js:' + $.toString((title) => {
    setResult('更新：' + title);
    }, title));
    } catch (e) { }
setResult(d);

//by随风 重新整合及优化样式
//二级模板  代码来自众大佬