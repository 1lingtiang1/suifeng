js:
var d = [];

let 央视 = {

    "CCTV_多屏" : "http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221226664/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",

    "CCTV_4K" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221226998/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://liveop.cctv.cn/hls/4KHD/playlist.m3u8"],

    "CCTV_1" : ["http://39.134.67.108/PLTV/88888888/224/3221225816/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227014/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226706/index.m3u8",
"http://[2409:8087:5c00:10:5::123]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225924/index.m3u8"],

    "CCTV_2" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221225800/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://live.aikan.miguvideo.com/PLTV/88888888/224/3221231678/index.m3u8",
"http://[2409:8087:5c00:10:5::149]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225657/index.m3u8"],

    "CCTV_3" : ["http://39.134.67.108/PLTV/88888888/224/3221225799/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227256/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226614/index.m3u8",
"http://[2409:8087:5c00:10:5::87]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225713/index.m3u8"],

    "CCTV_4" : ["http://[2409:8087:5c00:10:5::144]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225761/index.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227225/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226656/index.m3u8",
"http://[2409:8087:1070:301:2028::1e]/gslbserv.iptv.nm.chinamobile.com/PLTV/88888890/224/3221225898/index.m3u8?fmt=ts2hls"],

    "CCTV_5" : ["http://39.134.67.108/PLTV/88888888/224/3221225818/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227229/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226635/index.m3u8",
"http://[2409:8087:5c00:10:5::95]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225660/index.m3u8"],

    "CCTV_5+" : ["http://39.134.67.108/PLTV/88888888/224/3221225507/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221226919/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226609/index.m3u8",
"http://[2409:8087:5c00:10:5::91]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225621/index.m3u8"],

    "CCTV_6" : ["http://39.134.67.108/PLTV/88888888/224/3221225814/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227260/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226637/index.m3u8",
"http://[2409:8087:5c00:10:5::119]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225715/index.m3u8"],

    "CCTV_7" : ["http://39.134.67.108/PLTV/88888888/224/3221225671/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221226972/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226678/index.m3u8",
"http://[2409:8087:5c00:10:5::118]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225700/index.m3u8"],

    "CCTV_8" : ["http://39.134.67.108/PLTV/88888888/224/3221225795/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227266/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226687/index.m3u8",
"http://[2409:8087:5c00:10:5::92]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225716/index.m3u8"],

    "CCTV_9" : ["http://39.134.67.108/PLTV/88888888/224/3221225676/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221225929/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226726/index.m3u8",
"http://[2409:8087:5c00:10:5::87]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225663/index.m3u8"],

    "CCTV_10" : ["http://39.134.67.108/PLTV/88888888/224/3221225677/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221226976/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:5c00:10:5::119]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225704/index.m3u8"],

    "CCTV_11" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227233/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://39.135.138.60:18890/PLTV/88888910/224/3221225628/index.m3u8",
"http://[2409:8087:5c00:10:5::72]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225739/index.m3u8"],

    "CCTV_12" : ["http://39.134.67.108/PLTV/88888888/224/3221225669/1.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221226931/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:5c00:10:5::88]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225645/index.m3u8"],

    "CCTV_13" : ["http://183.196.25.171:808/hls/13/index.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227237/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:5c00:10:5::143]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225759/index.m3u8"],

    "CCTV_14" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227086/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://39.134.67.108/PLTV/88888888/224/3221225674/1.m3u8",
"http://[2409:8087:5c00:10:5::96]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225648/index.m3u8"],

    "CCTV_15" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221225818/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226590/index.m3u8",
"http://39.135.138.60:18890/PLTV/88888910/224/3221225641/index.m3u8",
"http://[2409:8087:5c00:10:5::92]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225693/index.m3u8"],

    "CCTV_16" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227148/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://liveop.cctv.cn/hls/CCTV16HD/playlist.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226597/index.m3u8",
"http://[2409:8087:5c00:10:5::151]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225956/index.m3u8"],

    "CCTV_17" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221226990/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://live.aikan.miguvideo.com/PLTV/88888888/224/3221231772/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226630/index.m3u8",
"http://[2409:8087:5c00:10:5::120]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225766/index.m3u8"],

    "CCTV_兵器科技" : ["http://111.20.33.70/PLTV/88888893/224/3221226975/index.m3u8",
"http://183.196.25.171:808/hls/88/index.m3u8"],

    "CCTV_第一剧场" : "http://111.20.33.70/PLTV/88888893/224/3221226959/index.m3u8",

    "CCTV_电视指南" : "http://111.20.33.70/PLTV/88888893/224/3221226987/index.m3u8",

    "CCTV_风云剧场" : ["http://111.20.33.70/PLTV/88888893/224/3221226950/index.m3u8",
"http://60.10.167.88:808/hls/57/index.m3u8"],

    "CCTV_风云音乐" : "http://111.20.33.70/PLTV/88888893/224/3221226953/index.m3u8",

    "CCTV_风云足球" : ["http://111.20.33.70/PLTV/88888893/224/3221226984/index.m3u8",
"http://60.10.167.88:808/hls/55/index.m3u8"],

    "CCTV_怀旧剧场" : ["http://111.20.33.70/PLTV/88888893/224/3221226972/index.m3u8",
"http://60.10.167.88:808/hls/56/index.m3u8"],

    "CCTV_女性时尚" : ["http://111.20.33.70/PLTV/88888893/224/3221226969/index.m3u8",
"http://111.32.169.222/bkhlsliveali-cdn.ysp.cctv.cn/ysp/2012513903.m3u8",
"http://111.20.33.93/PLTV/88888893/224/3221226237/index.m3u8"],

    "CCTV_世界地理" : "http://111.20.33.70/PLTV/88888893/224/3221226947/index.m3u8",

    "CCTV_卫生健康" : "http://125.39.177.227/bkhlsliveali-cdn.ysp.cctv.cn/ysp/2012513503.m3u8",

    "CCTV_文化精品" : "http://111.20.33.70/PLTV/88888893/224/3221226981/index.m3u8",

    "CCTV_高尔夫" : "http://[2409:8087:5c00:10:5::146]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225884/index.m3u8",

    "CCTV_中视购物" : ["http://39.135.138.58:18890/ysten-businessmobile/live/SD-1500k-576P-zhongshigw/1.m3u8",
"http://39.135.138.58:18890/PLTV/88888888/224/3221225976/index.m3u8"]

    }

let 卫视 = {

    "深圳卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227242/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225741/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226700/index.m3u8",
"http://60.10.167.88:808/hls/23/index.m3u8",
"http://[2409:8087:5c00:10:5::74]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225725/index.m3u8"],

    "黑龙江卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227197/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225736/index.m3u8",
"http://60.10.167.88:808/hls/27/index.m3u8",
"http://[2409:8087:5c00:10:5::96]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225734/index.m3u8"],

    "上海卫视" : ["http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226261/1.m3u8","http://111.40.196.35/PLTV/88888888/224/3221225509/index.m3u8",
"http://60.10.167.88:808/hls/32/index.m3u8"],

    "山东卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227236/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225738/index.m3u8",
"http://60.10.167.88:808/hls/24/index.m3u8",
"http://[2409:8087:5c00:10:5::95]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225672/index.m3u8"],

    "四川卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227182/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226573/index.m3u8",
"http://60.10.167.88:808/hls/31/index.m3u8"],

    "湖南卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227232/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225745/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226659/index.m3u8",
"http://60.10.167.88:808/hls/19/index.m3u8",
"http://[2409:8087:5c00:10:5::a]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225719/index.m3u8"],

    "辽宁卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227141/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226586/index.m3u8",
"http://60.10.167.88:808/hls/28/index.m3u8",
"http://[2409:8087:5c00:10:5::95]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225779/index.m3u8"],

    "浙江卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227193/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225703/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226682/index.m3u8",
"http://60.10.167.88:808/hls/26/index.m3u8",
"http://[2409:8087:5c00:10:5::119]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225731/index.m3u8"],

    "江苏卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227160/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225743/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226722/index.m3u8",
"http://60.10.167.88:808/hls/20/index.m3u8",
"http://[2409:8087:5c00:10:5::119]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225722/index.m3u8"],

    "河南卫视" : ["http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226639/index.m3u8",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225611/index.m3u8?fmt=ts2hls",
"http://39.135.138.58:18890/ysten-businessmobile/live/henanstv/1.m3u8",
"http://39.135.138.58:18890/PLTV/88888888/224/3221226196/index.m3u8",
"http://[2409:8087:5c00:10:5::121]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225806/index.m3u8"],

    "河北卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227063/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226611/index.m3u8",
"http://60.10.167.88:808/hls/18/index.m3u8"],

    "安徽卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227178/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225737/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226578/index.m3u8",
"http://60.10.167.88:808/hls/29/index.m3u8",
"http://[2409:8087:5c00:10:5::99]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225701/index.m3u8"],

    "湖北卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227111/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225740/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226579/index.m3u8",
"http://60.10.167.88:808/hls/30/index.m3u8",
"http://[2409:8087:5c00:10:5::91]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225721/index.m3u8"],

    "天津卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227205/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225739/index.m3u8",
"http://111.20.33.93/PLTV/88888893/224/3221226204/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226621/index.m3u8",
"http://60.10.167.88:808/hls/22/index.m3u8",
"http://[2409:8087:5c00:10:5::a]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225675/index.m3u8"],

    "重庆卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227240/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226676/index.m3u8",
"http://60.10.167.88:808/hls/33/index.m3u8",
"http://[2409:8087:5c00:10:5::87]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225745/index.m3u8"],

    "广东卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227164/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225701/index.m3u8",
"http://60.10.167.88:808/hls/25/index.m3u8",
"http://[2409:8087:5c00:10:5::96]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225666/index.m3u8"],

    "山西卫视" : ["http://liveflash.sxrtv.com:80/live/sxwshd.m3u8",
"http://liveflash.sxrtv.com/live/sxwshd.flv",
"http://80ec27bff7f9ae80b961481da488e302.livehwc3.cn/liveflash.sxrtv.com/live/sxwshd.m3u8?sub_m3u8=true&edge_slice=true&user_session_id=d04ce01474da4193c8863ea281ec4759",
"http://hms2944nc1972666638.live.aikan.miguvideo.com/wh7f454c46tw1189649031_-2057924136/PLTV/88888888/224/3221231444/index.m3u8?icpid=88888888&RTS=1662527195&from=12&hms_devid=2944&online=1662527195",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001038/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://[2409:8087:5c00:10:5::90]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225785/index.m3u8"],

    "广西卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227250/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"https://live-cdn.gxxw.com/tv/gxtvlive01/index.m3u8",
"http://60.10.167.88:808/hls/35/index.m3u8",
"http://[2409:8087:5c00:10:5::87]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225986/index.m3u8",
"http://tvindexlive01.yn.ysten.com:8080/ysten-business/live/HD-3600k-1080p-ynguangxistv/1.m3u8;{User-Agent@0151}"],

    "陕西卫视" : ["https://live.sxtvs.com.cn/lsdream/X6feiLQ/1000/n2h64el.m3u8",
"http://111.20.33.77/PLTV/88888893/224/3221226458/1.m3u8",
"http://111.20.33.70/PLTV/88888893/224/3221225821/1.m3u8",
"http://111.20.33.105/PLTV/88888893/224/3221226388/1.m3u8",
"http://111.20.33.69/PLTV/88888893/224/3221225821/1.m3u8"],

    "吉林卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227099/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226684/index.m3u8",
"http://60.10.167.88:808/hls/36/index.m3u8"],

    "青海卫视" : ["http://stream.qhbtv.com/qhws/sd/live.m3u8?_upt=f35a89681647856030",
"http://stream.qhbtv.com/qhws/sd/live.m3u8?_upt=63cf437e1591689484",
"http://stream.qhbtv.com/qhws/playlist.m3u8?_upt=7a91a8681646321024",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001033/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://[2409:8087:5c00:10:5::99]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225705/index.m3u8",
"http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221225794/1.m3u8"],

    "内蒙古卫视" : ["http://[2409:8087:1070:301:2028::1c]/gslbserv.iptv.nm.chinamobile.com/PLTV/88888890/224/3221225676/index.m3u8?fmt=ts2hls",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227244/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001035/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://111.40.196.39/PLTV/88888888/224/3221225574/index.m3u8",
"http://[2409:8087:5c00:10:5::122]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225751/index.m3u8"],

    "东南卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227156/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225657/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226720/index.m3u8",
"http://60.10.167.88:808/hls/34/index.m3u8",
"http://[2409:8087:5c00:10:5::96]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225696/index.m3u8"],

    "贵州卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227201/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226632/index.m3u8",
"http://tvindexlive02.yn.ysten.com:8080/ysten-business/live/HD-3600k-1080P-guizhoustv/1.m3u8;{User-Agent@0151}",
"http://39.134.67.108/PLTV/88888888/224/3221225974/1.m3u8"],

    "甘肃卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227262/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:1070:301:2028::22]/gslbserv.iptv.nm.chinamobile.com/PLTV/88888890/224/3221225958/index.m3u8?fmt=ts2hls",
"http://39.134.32.102:6610/270000001111/1110000322/index.m3u8?IASHttpSessionId=OTT",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001059/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://[2409:8087:5c00:10:5::121]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225764/index.m3u8"],

    "新疆卫视" : ["http://livehyw5.chinamcache.com/hyw/zb01.m3u8?txSecret=1f590eec60bf1f01f04a8a11a1190778&txTime=96174629528",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226657/index.m3u8",
"http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221225747/1.m3u8",
"http://[2409:8087:5c00:10:5::122]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225788/index.m3u8",
"http://39.135.138.58:18890/ysten-businessmobile/live/xinjiangstv/1.m3u8",
"http://39.135.138.58:18890/PLTV/88888888/224/3221225725/index.m3u8"],

    "海南卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227216/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:1070:301:2028::1e]/gslbserv.iptv.nm.chinamobile.com/PLTV/88888890/224/3221225930/index.m3u8?fmt=ts2hls",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221226212/index.m3u8?fmt=ts2hls",
"http://39.134.67.110/PLTV/88888888/224/3221225978/1.m3u8",
"http://39.135.138.58:18890/ysten-businessmobile/live/lvyoustv/1.m3u8",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001055/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId="],

    "云南卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227181/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225664/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226660/index.m3u8",
"http://60.10.167.88:808/hls/47/index.m3u8",
"http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221225751/1.m3u8"],

    "宁夏卫视" : ["http://livepgc.cmc.ningxiahuangheyun.com/pgc/deb40eb3174c0c2d62c30810f0087d64.m3u8?txSecret=27098501b42eae2199df753a323534df&txTime=6326BD7B",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225726/index.m3u8",
"http://39.135.138.58:18890/PLTV/88888888/224/3221225726/index.m3u8",
"http://39.135.138.58:18890/ysten-businessmobile/live/ningxiastv/1.m3u8",
"http://[2409:8087:5c00:10:5::92]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225782/index.m3u8"],

    "西藏卫视" : ["http://121.51.249.6/4403-tx.otvstream.otvcloud.com/otv/skcc/live/channel66/1300.m3u8",
"rtmp://113.62.170.99:1935/live/tvchannel3",
"http://111.20.33.107/PLTV/88888893/224/3221226212/1.m3u8",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001302/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://111.20.33.91/PLTV/88888893/224/3221226212/1.m3u8"],

    "北京卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227246/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225674/index.m3u8",
"http://[2409:8087:5c00:10:5::88]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225651/index.m3u8"],

    "江西卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227209/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226594/index.m3u8",
"http://[2409:8087:5c00:10:5::90]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225669/index.m3u8"],

    "厦门卫视" : ["http://111.20.33.97/PLTV/88888893/224/3221226219/1.m3u8",
"http://live.aikan.miguvideo.com/PLTV/88888888/224/3221229184/index.m3u8",
"http://111.20.33.105/PLTV/88888893/224/3221226219/1.m3u8",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001306/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226219/1.m3u8"],

    "安多卫视" : ["http://111.40.196.28/PLTV/88888888/224/3221225666/index.m3u8?zweimd",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221226195/index.m3u8",
"http://111.20.33.70/PLTV/88888893/224/3221226228/index.m3u8"],

    "康巴卫视" : ["http://scgctvshow.sctv.com/hdlive/kangba8f9fb5888dedbe0c6a1b/1.m3u8",
"http://111.20.33.107/PLTV/88888893/224/3221226234/1.m3u8",
"http://111.40.196.38/PLTV/88888888/224/3221225648/1.m3u8"],

    "兵团卫视" : ["http://test5.btzx.com.cn/live/btxjbtws.stream/playlist.m3u8?$全网高清720P",
"http://test5.btzx.com.cn/live/btxjbtws.stream/chunklist_w544078748.m3u8",
"http://test5.btzx.com.cn/live/btxjbtws.stream/chunklist_w19172251.m3u8",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001304/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://111.20.33.97/PLTV/88888893/224/3221226214/1.m3u8"],

    "东方卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227059/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hwrr.jx.chinamobile.com:8080/PLTV/88888888/224/3221225659/index.m3u8",
"http://[2409:8087:4400:20:1:a0f:11:9]/iptv.cdn.ha.chinamobile.com/PLTV/88888888/224/3221226681/index.m3u8",
"http://[2409:8087:5c00:10:5::118]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225718/index.m3u8"],

    "海峡卫视" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227198/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://live6.fjtv.net/haixiapd/playlist.m3u8?_upt=9394186e1664697124"],

    "三沙卫视" : ["http://stream3.hnntv.cn/ssws/sd/live.m3u8?_upt=15de4cd21664745514",
"https://pullsstv90080111.ssws.tv/live/SSTV20220729.m3u8",
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227172/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178"],

    "晋江卫视" : "http://stream.jinjiang.tv/1/sd/live.m3u8",

    "延边卫视" : ["http://live.ybtvyun.com/video/s10016-6f0dfd97912f/index.m3u8?zjild",
"http://live.ybtvyun.com/video/s10006-90fe76c52091/index.m3u8",
"http://111.20.33.79/PLTV/88888893/224/3221226220/1.m3u8",
"http://111.20.33.83/PLTV/88888893/224/3221226220/1.m3u8",
"http://live.ybtvyun.com/video/s10006-44f040627ca1/index.m3u8"],

    "藏语卫视" : ["http://[2409:8087:5c00:10:5::143]/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225828/index.m3u8",
"http://media.vtibet.com/masvod/HLSLive/7/zangyuTV_q1.m3u8"],

    "大湾区卫视" : ["http://111.20.33.99/PLTV/88888893/224/3221226218/1.m3u8",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001305/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://111.20.33.77/PLTV/88888893/224/3221226218/1.m3u8",
"http://218.17.216.102:9901/tsfile/live/1007_1.m3u8"],

    "农林卫视" : ["http://111.20.33.91/PLTV/88888893/224/3221226229/1.m3u8",
"http://111.20.35.103:6610/yinhe/2/ch00000090990000001312/index.m3u8?virtualDomain=yinhe.live_hls.zte.com&IASHttpSessionId=",
"http://111.20.33.95/PLTV/88888893/224/3221226229/1.m3u8",
"http://111.20.33.81/PLTV/88888893/224/3221226229/1.m3u8"],

    "旅游卫视" : "http://39.134.115.163:8080/TVOD/88888910/224/3221225722/index.m3u8",

    "澳门卫视" : ["http://61.244.22.5/ch3/ch3.live/chunklist_w1228316132.m3u8",
"http://103.233.191.132:1935/ch3/ch3.live/playlist.m3u8"],

    }

let 其它 = {

    "凤凰中文" : "http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227222/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",

    "凤凰资讯" : 
"http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227226/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",

    "游戏风云" : ["http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227075/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",
"http://hms2924nc1972666636.live.aikan.miguvideo.com/wh7f454c46tw2907452505_654799179/PLTV/88888888/224/3221231730/index.m3u8?icpid=88888888&RTS=1662528913&from=12&hms_devid=2924&online=1662528913",
"http://111.20.33.95/PLTV/88888893/224/3221226579/1.m3u8",
"http://111.20.33.81/PLTV/88888893/224/3221226579/1.m3u8"],

    "哒啵电竞" : "http://[2409:8087:3428:20:500::100f]:6610/PLTV/88888888/224/3221227252/index.m3u8?servicetype=1&IASHttpSessionId=RR423820220409134714119178",

    }

if (getItem("轮播") == "on") {
    d.push({
           desc: "240 && float",
           url: "http://hls.nntv.cn/nnlive/NNTV_VOD_A.m3u8",
           col_type: "x5_webview_single"
           }) 
     } else {
     d.push({
          img: "https://img0.baidu.com/it/u=1848822740,4022142606&fm=253&fmt=auto&app=138&f=JPEG?w=801&h=500",
          url: "hiker://empty",
          col_type: "pic_1_full"
          }) 
      }

  d.push({
      col_type: "big_blank_block"
      })
  d.push({
      col_type: "big_blank_block"
      })
  d.push({
      col_type: "big_blank_block"
      })

let 分类 = ["央视","卫视","影院","体育","其它"];
for (tv of 分类) {
   d.push({
      title: tv == getMyVar("tv", "央视") ? "““””<b><font color=#FA7298>" + tv + "</font></b>" : tv,
      url: $("#noLoading#").lazyRule((tv) => {
          putMyVar("tv", tv)
          refreshPage()
          return "hiker://empty";
          },tv),
      col_type: "scroll_button"
      })
      }

  if (getMyVar("tv") == "央视") {
      var fen = 央视
      } else 
  if (getMyVar("tv") == "卫视") { 
      var fen = 卫视
      } else 
  if (getMyVar("tv") == "其它") {
      var fen = 其它
      } else 
  if (getMyVar("tv") == "影院") {
      var furl = "https://%6d%70%2e%77%65%69%78%69%6e%2e%71%71%2e%63%6f%6d/s/lji5uXCFQjZk3X36IyAozQ";
      } else 
  if (getMyVar("tv") == "体育") {
      var furl = "https://%6d%70%2e%77%65%69%78%69%6e%2e%71%71%2e%63%6f%6d/s/0HIPRBUPG1Ps07FsmIZUqw";
      } else {
      var fen = 央视;
      }

  if (/影院|体育/.test(getMyVar("tv"))) {
      let html = request(furl);
      let list = pdfa(html, 'body&&.rich_media_content&&p:gt(3):not(:matches(适|group|#penre#|mitv))');
  for(let i in list){
    d.push({
       title : pdfh(list[i],'Text').replace(/,http.*|.http.*|,rtmp.*|频道|,rtsp.*/g,''),
       url : pdfh(list[i],'Text').replace(/.*,/g,'') + "#isVideo=true#",
       col_type: "text_3"
       });
       }
       } else {
       let titl = Object.keys(fen);
  for (let i = 0; i < titl.length; i++) {
       let url = Object.values(fen)[i];
       let jm = titl[i];
       let col = jm.length > 5 ? 'text_2' : 'text_3';
    d.push({
       title: jm,
       url: /\,/.test(url) ? JSON.stringify ({
            urls: url
       }) : url,
       col_type: col
       })
       
     } 
   }
setResult(d);