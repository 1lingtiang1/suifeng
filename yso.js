js:
var d = []
addListener('onClose', $.toString(() => {
    /*clearMyVar("Myysy")*/
    clearMyVar("Mysou");
}))
let sokey = getMyVar("Mysou");
let page = MY_PAGE;
let rules = {
    "348影视": {
        ssurl: 'https://www.348z.com/vodsearch/page/fypage/wd/' + sokey + '.html',

    },
    "打驴动漫": {
        ssurl: 'https://www.dqsj.cc/index.php/vod/search/page/fypage/wd/' + sokey + '.html',

    },
    "鸭奈飞": {
        ssurl: 'https://yanetflix.com/vodsearch/' + sokey + '----------fypage---.html',

    },
    "Auete": {
        ssurl: 'https://auete.com/search.php?searchword=' + sokey,

    },
    "4K看": {
        ssurl: 'https://4kan.tv/index.php/ajax/suggest?mid=fypage&wd=' + sokey + '&limit=10&timestamp=.jsinput+new Date().getTime()',

    },
    "蓝光影院": {
        ssurl: 'https://www.lgyy.cc/index.php/ajax/suggest?mid=fypage&wd=' + sokey + '&limit=10&timestamp=.jsinput+new Date().getTime()',

    },
    "神马影院": {
        ssurl: 'https://www.6080x.cc/index.php/ajax/suggest?mid=fypage&wd=' + sokey + '&limit=10&timestamp=.jsinput+new Date().getTime()',

    },
    "ONE": {
        ssurl: 'https://1080p.one/vodsearch/' + sokey + '----------fypage---.html',

    },
    "追剧喵": {
        ssurl: 'https://zjmiao.com/index.php/vod/search/page/fypage/wd/' + sokey + '/',

    },
    "胖虎影视": {
        ssurl: 'http://www.panghuys.com/vodsearch/' + sokey + '-/page/fypage.html',

    },
    "69美剧": {
        ssurl: 'https://www.69mj.com/index.php/vod/search/page/fypage/wd/' + sokey + '.html',

    },
    "厂长资源": {
        ssurl: 'https://czspp.com/xssearch?q=' + sokey + '&f=_all&p=fypage',

    },
    "素白白": {
        ssurl: 'https://www.subaibaiys.com/grabble?q=' + sokey + '&f=_all&p=fypage',

    },
    "影视工厂": {
        ssurl: 'https://www.ysgc.tv/index.php/ajax/suggest?mid=fypage&wd=' + sokey + '&limit=10&timestamp=.jsinput+new Date().getTime()',

    },
    "独播库": {
        ssurl: 'http://ca.cboku.com/vodsearch/' + sokey + '----------fypage---.html',

    },
    "Chok吧": {
        ssurl: 'https://www.chok8.com/vodsearch/' + sokey + '----------fypage---.html',

    },
    "fositv": {
        ssurl: 'https://fositv.com/vodsearch/' + sokey + '----------fypage---.html',

    },
    "Voflix": {
        ssurl: 'https://www.voflix.com/search/' + sokey + '----------fypage---.html',

    },
    "Libvio": {
        ssurl: 'https://www.libvio.me/search/' + sokey + '----------fypage---.html',

    },
    "Nike": {
        ssurl: 'https://www.ajeee.com/search/page/fypage/wd/' + sokey + '.html',

    },
    "L0L影院": {
        ssurl: 'https://www.l0l.tv/index.php/vod/search/page/fypage/wd/' + sokey + '.html',

    },
    "视中心": {
        ssurl: 'https://www.ksksy.com/vodsearch/page/fypage/wd/' + sokey + '.html',

    },
    "乐鱼影视": {
        ssurl: 'https://www.lyavi.com/lyso/page/fypage/wd/' + sokey + '.html',

    },
    "万博追剧": {
        ssurl: 'https://www.wbavi.com/wbso/page/fypage/wd/' + sokey + '.html',

    },
    "1080P影视": {
        ssurl: 'https://1080p.tv/vodsearch/' + sokey + '----------fypage---/',

    },
    "可乐影视": {
        ssurl: 'https://www.klyingshi.com/vodsearch/'  + sokey + '----------fypage---.html',

    },
    "托乌视频": {
        ssurl: 'https://www.tootw.com/index.php/vod/search/page/fypage/wd/' + sokey + '.html',

    },
    "饭团HD": {
        ssurl: 'https://www.fantuanhd.com/search/page/fypage/wd/' + sokey + '.html',

    },
    "555电影": {
        ssurl: 'https://www.stuo-express.com/index.php/ajax/suggest?mid=fypage&wd=' + sokey + '&limit=10&timestamp=.jsinput+new Date().getTime()',

    },
    "瓜皮TV": {
        ssurl: 'https://guapitv.xyz/vodsearch/' + sokey + '----------fypage---.html',

    },
    "AB影院": {
        ssurl: 'https://abu22.com/vodsearch/' + sokey + '----------fypage---.html',

    },
    "COKEMV": {
        ssurl: 'https://cokemv.me/vodsearch/' + sokey + '----------fypage---.html',

    },
    "小强迷": {
        ssurl: 'https://www.xqmi.top/index.php/vod/search/page/fypage/wd/' + sokey + '.html',

    },
    "真不卡影院": {
        ssurl: 'https://www.zbkk.net/vodsearch/' + sokey + '----------fypage---.html',

    },
    "双十电影": {
        ssurl: 'https://www.1010dy1.com/search/page/fypage/wd/' + sokey + '/',

    },
    "城市电影": {
        ssurl: 'https://www.citydy.com/search/page/fypage/wd/' + sokey + '.html',

    },
    "大米星球": {
        ssurl: 'https://www.dmxq.fun/vodsearch/' + sokey + '----------fypage---/pjax/YES.html',

    },
    "番茄影视": {
        ssurl: 'https://www.tjomet.com/vodsearch/' + sokey + '----------fypage---.html',

    },
    "蚂蚁磁力": {
        ssurl: 'https://mayi4k.com/vod/search/page/fypage/wd/' + sokey + '.html',

    }
}

let rn = Object.keys(rules);
let selected = getItem("s0", rn[0]);
let rule = rules[selected];
let ssurl = rule.ssurl;
let jusou = getItem("s1", "0") == "1";

if (MY_PAGE == 1) {
    let jutu = "https://lanmeiguojiang.com/tubiao/messy/";
    let 开 = jutu + "55.svg@Referer=";
    let 关 = jutu + "56.svg@Referer=";
    let spic = [开, 关];
    let pic = !jusou ? spic : spic.reverse();
    let stit = {"选源搜索" : "0", "聚合搜索" : "1"};
for (let i = 0; i < 2; i++) {
       let sid = Object.values(stit)[i];
   d.push({
       title: Object.keys(stit)[i],
       url: $('#noLoading#').lazyRule((sid) => {
          setItem("s1", sid);
          refreshPage();
          return "hiker://empty"
        }, sid),
        img: pic[i],
        col_type: "icon_2"
        }) 
    }

    d.push({
        title: "搜索",
        desc: "可 以 少 字 ，不 可 错 字 ！",
        url: $.toString((jusou) => {
              putMyVar("Mysou", input);
          if (getMyVar("Mysou")) {
              refreshPage(true);
              } else {
              return "hiker://empty";
              }
         }, jusou),
         col_type: "input",
         extra: {
            defaultValue: sokey
         }
     })

    if (!jusou) {
    d.push({
        title: '当前已选\t\t' + '<b><font color="#FA7298">' + selected + '</font></b>' + '\t\t搜索' + '<b>',
        url: "hiker://empty",
        img: "https://lanmeiguojiang.com/tubiao/more/299.png@Referer=",
        col_type: "avatar"
    })
    d.push({
        col_type: "big_blank_block"
    })
    d.push({
        col_type: "big_blank_block"
    })

        for (xuan of rn) {
            d.push({
                title: xuan == selected ? '‘‘’’<b><font color="#FA7298">' + xuan + '</font></b>' : xuan,
                url: xuan + $('#noLoading#').lazyRule(() => {
                    setItem("s0", input);
                    refreshPage(false);
                    return "hiker://empty";
                }),
                col_type: "scroll_button"
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

if (getMyVar("Mysou")) {
   let erji = MY_PARAMS.erji;
   d.push({
        title: '搜索\t\t' + '<b><font color="#FA7298">' + getMyVar("Mysou") + '</font></b>' + '\t\t结果' + '\t\t\t\t\t<b><font color="#FA7298">返回>></font></b>',
        url: $('#noLoading#').lazyRule((erji) => {
              if (erji == "1") {
                    back(false);
                    } else {
                    clearMyVar("Mysou");
                    refreshPage(false);
                    }
                    return "hiker://empty"
               }, erji),
        img: "https://lanmeiguojiang.com/tubiao/more/23.png@Referer=",
        col_type: "avatar"
    })
    }
    if (jusou) {
    d.push({
        col_type: "big_blank_block"
    })
    d.push({
        col_type: "line"
    })
    d.push({
        col_type: "big_blank_block"
    }) }
}
//log("before");
if (getMyVar("Mysou")) {
function search(ssurl, d, page) {
    try {
        ssurl = ssurl.replace("fypage", page);
        let MY_HOME = getHome(ssurl);
        let MY_URL = ssurl;
    if (/6080x/.test(MY_HOME)) {
        var sm = MY_HOME + '/kan/'
        } else {
        var sm = MY_HOME + '/voddetail/'
        };

    if (/ajax\/suggest/.test(ssurl)) {
        let so = JSON.parse(request(ssurl,{timeout:3000})).list;
    for (var j of so) {
                d.push({
                    title: j.name,
                    img: j.pic.replace(/.*url=/,'') + "@Referer=",
                    url: $(sm + j.id + '.html#immersiveTheme##autoCache' + game).rule(() => {
                    require(config.依赖);
                    erji() 
                    }),
                    col_type: "movie_3_marquee",
                    extra: {
                        back: "1",
                        title: j.name,
                        img: j.pic.replace(/.*url=/,'') + "@Referer=",
                    }
                })
            }
            return
        }

        let html = request(ssurl,{timeout:3000});
        let headers = {
            "User-Agent": MOBILE_UA,
            "Referer": MY_URL
             };
        if (html.indexOf('检测中') != -1) {
            html = request(MY_HOME + '?btwaf' + html.match(/btwaf(.*?)\"/)[1], {
                headers: headers
            });
            } 
         if (/验证码|系统安全验证/.test(html)) {
         let headers = {
             "User-Agent": MOBILE_UA,
             "Referer": MY_URL
              };

         var ssyz = 'TloGnnikThrfs/5fDNlk5CSsbaGtAH7W/uMZjuYoIupB6bCoo9CotLQHfPIdGgbkbynKqL2aUE2Xy558X2QxHYtTU09vD+4oaCDIuSZO7nxDbLfRGfWj7zql+yMbvF+aJoD/m6Psfw/PyYOAp/ZVGdrPzaCByfd0HL5DFVSw+YF2OC40V8SP9RxdFKKdrBuPxCWdxUCFrJ+1lRy/TU3LC84C4xxEBhgud7RtBp0zZArqBE06+Z3JtDP0eFCz/D5X0409qPHK3e1y/LuUgccuxpHnjYLE1GjlP8wYA2hQWe7yPngggQBHw33/gvb3tuCcxEKTWgmah/R32AH9ZF8jF7WemT26lUizVXe/spCdhDgHR/zUhODD4PO6glI8JPhdu+VwfPyRLG2D7CUo1L6SIF+0fYf0oTOWN13UPITo5+uZd/WnQQLU8NYx/WFCThEnkbzln9YGt60fRxsH+8uMDFgaBiC+z2SpcxB9gZ6GXypLSXWaj+qEUbGJKEx+jK/v5fnrkIhCdwNbkp9dRks6dmlYlBifzoWF8RkuC3rqPtoScBkMOMZu7GiVtoHEdHUozmnUIdrU1LGIqq9WnG7X2a3yH8s65mjLuLnd3q0U8v+LMPnHL2/GjQuTQKVh+RKEPqK/JdrChGLNrjcHvLHDbHEshrGZuQOdEphbx/PkhkvaYy4K1MO84R17guRsKs/V6niUPaL+XbQ7c3fqJS4VHJwludJTDe02euffGCm0PJIPlAOgLHnX0izJhA6q738R2UwQcWBQjJt79aF+kyqSdyt1QPVQVjaC3IpRf7PgsDhEJ7bi9nSclyIzgJ9DCJ4T+8dG1xHhKyZasT7L/x9Lfr1Mgs8nBZER2W9ax7iTkNK+X5ACU//p/YoP/uAanDtb3D0iKUUuXFH+Jbb0x1P322S2w6BJ46nuNHBMHTpVuWwhZeZzriGh7qoOywLWiExBMKyxTGLnmKh7r03/yXKYWIJnpBN2MMycVHRZJ7RumHV4CIsVrq7iRP48823RJVt9OtyP7uuc3wBBV3kcZUzbbaYdWBx1+Au+Od2u7lR6joOL810mcJm/f7J5TvGQP6HGph1YHHX4C7453a7uVHqOgyjjh5EBd720MEBY23c+TKq/z9UpWDDOg48ZFnwSIhFqitWdiZiqsaYuN0/SXwiK8EG9eQ29u2XDJoDW4mlwtcRO7vaX5XcFsgf4/mLU07mi'

          evalPrivateJS(ssyz);

    let vcode = getVCode2(MY_HOME + '/index.php/verify/index.html?', JSON.stringify(headers), 'num');
    fetch(MY_HOME + html.match(/\/index.php.*?verify=/)[0] + JSON.parse(vcode).ret, {
        headers: headers,
        method: 'POST'
    })
    var yz = MY_TYPE=='home' ? true_url : MY_URL;

    html = fetch(yz, {
        headers: headers
    });
}

        //列表
        if (/xmmi/.test(MY_URL)) {
            var 列表 = '.fed-part-layout&&dl'
            } else 
        if (/search-list|module-card-item|threadlist|list-width|hl-list-item|module-search-item/.test(html)) {
            var 列表 = 'body&&.hl-list-item||.search-list||.module-card-item||.threadlist||.list-width||.module-search-item'
        } else
        if (/img-list|videoul|searchList|stui-vodlist|stui-vodlist__media|myui-vodlist__media|searchlilst|hl-one-list|bt_img/.test(html)) {
            var 列表 = '.img-list||.videoul||#searchList||.stui-vodlist||.stui-vodlist__media||.myui-vodlist__media||.searchlilst||.hl-one-list||.bt_img&&li'
        }

        //更新
        if (/panghuys/.test(MY_URL)) {
            var 更新 = '.module-item-note&&Text'
        } else 
        if (/zjmiao/.test(MY_URL)) {
            var 更新 = 'span,-2&&Text'
        } else {
            var 更新 = '.text-center||.fed-list-remarks||.videoul-tips||.text-grey||.list-remarks||.module-item-note||.video-serial||.remarks||.pic-text||.jidi||.nostag||span,-1&&Text'
        }

        //图片
        if (/auete/.test(MY_URL)) {
            var 图片 = ''
        } else
        if (/dmxq/.test(MY_URL)) {
            var 图片 = '.lazy&&src'
        } else
        if (/hl-lazy/.test(html)) {
            var 图片 = '.hl-lazy&&data-original'
        } else 
        if (/eclazy|fed-lazy|videoul-img/.test(html)) {
            var 图片 = '.videoul-img||.fed-lazy||.eclazy&&data-original||data-src||lay-src'
        } else {
            var 图片 = 'img||a&&data-original||data-src||lay-src'
        }

        //片名
        if (/mayi4k|69mj|czspp|subaibaiys|dygysz/.test(MY_URL)) {
            var 片名 = 'h3&&Text'
            var 链接 = 'h3&&a&&href'
        } else
        if (/auete|xixikdy/.test(MY_URL)) {
            var 片名 = 'a||.videoul-title&&Text'
            var 链接 = 'a&&href'
        } else
        if (/yanetflix|lgyy|voflix|ajeee|lyavi|ksksy|wbavi|tootw|guapitv|cokemv|dmxq|panghuys|1080p/.test(MY_URL)) {
            var 片名 = '.lazyload&&alt'
            var 链接 = 'a&&href'
        } else
        if (/zjmiao/.test(MY_URL)) {
            var 片名 = 'h2&&Text'
            var 链接 = 'h2&&a&&href'
        } else
        if (/xmmi/.test(MY_URL)) {
            var 片名 = 'h1&&Text'
            var 链接 = 'h1&&a&&href'
        } else {
            var 片名 = 'a&&title'
            var 链接 = 'a&&href'
        }

        //单搜列表
        if (/5秒|频繁/.test(html)&&!/见面5秒开始战斗/.test(html)&&!MY_TYPE=='home') {
            d.push({
                desc: '搜索频繁，5秒后下拉刷新',
                col_type: 'text_center_1'
            })
        }
        if (/ajax\/suggest/.test(ssurl)) {
        for (var j of so) {
                d.push({
                    title: j.name,
                    img: j.pic.replace(/.*url=/,'') + "@Referer=",
                    url: $(sm + j.id + '.html#immersiveTheme##autoCache' + game).rule(() => {
                    require(config.依赖);
                    erji() 
                    }),
                    col_type: "movie_3_marquee",
                    extra: {
                        back: "1",
                        title: j.name,
                        img: j.pic.replace(/.*url=/,'') + "@Referer=",
                    }
                })
            }
        } else {
            let list = pdfa(html, 列表);
            for (let j in list) {
                let picc = pdfh(list[j], 图片);
            if (!/http|pic|jpg|png|jpeg/.test(picc)) {
                var col = 'text_center_1';
                } else {
                var col = 'movie_3_marquee';
                }
             d.push({
                    title: pdfh(list[j], 片名),
                    desc: pdfh(list[j], 更新),
                    col_type: "movie_3",
                    img: pd(list[j], 图片, ssurl) + "@Referer=",
                    url: $(pd(list[j], 链接, ssurl).replace('vodplay','voddetail') + '#immersiveTheme##autoCache' + game).rule(() => {
                   require(config.依赖);
                   erji()             
                }),
                    extra: {
                        title: pdfh(list[j], 片名),
                        back: "1",
                        desc: pdfh(list[j], 更新),
                        img: pd(list[j], 图片, ssurl) + "@Referer=",
                    },
                    col_type: col
                })
            }
        }
    } catch (e) {
       log(e.toString());
    }

}

try {
    if (!jusou) {
        search(ssurl, d, MY_PAGE);
        setResult(d);
    } else {
        //聚搜
        let 线程数 = 5;
        let Data = [];
        for (let i = (MY_PAGE - 1) * 线程数; i < rn.length && i < MY_PAGE * 线程数; i++) {
            Data.push(rn[i]);
        }
        if (Data.length <= 0) {
            setResult(d);
        } else {
            let pageid = "__app0" + MY_PAGE;
            d.push({
                title: "正在加载中第" + MY_PAGE + "页，进度：1/" + Data.length,
                url: "",
                col_type: "text_center_1",
                desc: "",
                pic_url: "",
                extra: {
                    id: pageid
                }
            });
            setResult(d);
            let tasks = [];
            for (let k in Data) {
                let it = Data[k];
                tasks.push({
                    func: function(param) {
                        let d = [];
                        search(param.u, d, 1);
                        return {
                            d: d,
                            n: param.n
                        };
                    },
                    param: {
                        u: rules[it].ssurl,
                        n: it
                    }
                });
            }
            batchExecute(tasks, {
                func: function(param, id, error, result) {
                    //log("listener: " + (result || []).length)
                    param.i = param.i + 1;
                    if (result) {
                        let d = [];
                        d.push({
                            title: result.n + " (" + (result.d.length <= 0 ? "无结果" : result.d.length) + ")",
                            url: "hiker://empty",
                            col_type: "text_1",
                            extra: {
                                lineVisible: false
                            }
                        });
                        for (let it of result.d) {
                            param.j = param.j + 1;
                            d.push(it);
                        }
                        addItemBefore(pageid, d);
                    }
                    if (param.i >= param.all) {
                        deleteItem(pageid)
                    } else {
                        updateItem({
                            title: "正在加载第" + MY_PAGE + "页，进度：" + (param.i + 1) + "/" + param.all,
                            url: "",
                            col_type: "text_center_1",
                            desc: "",
                            pic_url: "",
                            extra: {
                                id: pageid
                            }
                        })
                    }
                },
                param: {
                    all: Data.length,
                    i: 0,
                    j: -1
                }
            })
        }
    }
} catch (e) {
    log(e.toString());
    setResult(d);
    }  
    } else {

 d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://img1.baidu.com/it/u=3618064794,1499254630&fm=253&fmt=auto&app=138&f=PNG?w=115&h=144',
        col_type: 'icon_small_3'
    });

    let a1 = '‘‘’’<b><span style="color:#ff1100">1</span></b>\t\t\t昆仑神宫';
    let b2 = '‘‘’’<b><span style="color:#ff8800">2</span></b>\t\t\t新画皮';
    let c3 = '‘‘’’<b><span style="color:#FFA500">3</span></b>\t\t\t致命24小时';
    let d4 = '‘‘’’<b><span style="color:#FFD700">4</span></b>\t\t\t斗罗大陆';
    let e5 = "5\t\t\t完美世界";
    let f6 = "6\t\t\t飞狐外传";
    let g7 = "7\t\t\t胡同";
    let h8 = "8\t\t\t吞噬星空";
    let 片名 = [a1, b2, c3, d4, e5, f6, g7, h8];

  for (pm of 片名) {
   d.push({
      title: pm,
      url: $("#noLoading#").lazyRule((pm) => {
          let sp = pm.replace(/.*?\t/g, '')
          putMyVar("Mysou", sp)
          refreshPage()
          return "hiker://empty";
          }, pm),
      col_type: "text_1"
      })
      }
  setResult(d);  
  }
//此终止
//by随风
//搜索验证出自墙佬
//聚搜模板