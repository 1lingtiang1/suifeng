function lazy() {
try {
    var purl = JSON.parse(request(input).match(/var player_.*?=(.*?)</)[1]);
    } catch(e) {
    var purl = "";
    } 
    let urll = purl.url;
    let fro = purl.from; 
 if (purl == "") {
    var url = "";
    } else 
 if (purl.encrypt == '1') {
    var url = unescape(urll);
    } else 
 if (purl.encrypt == '2') {
    var url = unescape(base64Decode(urll));
    } else {
    var url = urll
    } 
 if (/\.mp4|\.m3u8|\.flv/.test(url)) {
    return url
    } else { 
    showLoading("解析规则中，请稍候");   
    return 'x5Rule://' + input + '@' + $.toString((dcy) => {
  //fba.log(dcy)
    var durl = dcy
    var urls = _getUrls()
 if (window.c == null) {
 if (typeof (request) == 'undefined' || !request) { 
 eval(fba.getInternalJs());
    }; 
    window.c = 0;
    };
    window.c++;
 if (window.c * 250 >= 15 * 1000) {
    fba.log("嗅探超时>超过10秒未获取到");
    fba.hideLoading(); 
 try{
    let videourl = input.split('url=')[1];
 if (/^http/.test(videourl)) {
    return videourl;
    }
    } catch(e) { }
    return fba.parseLazyRule($$$("#noLoading#").lazyRule((durl) => { 
    let url = durl
 if (/xfy|xinluan|RongXingVR|xueren|wuduyun|renrenmi|LT-|1905|fun|le|pptv|mgtv|ixigua|sohu|miguvideo|bilibili|youku|qq|iqiyi/.test(url)) {
    showLoading("解析超时，已启用断插") 
    let input = url; 
    eval("var config =" + fetch("hiker://files/cache/MyParseSet.json"));
    eval(fetch(config.cj));
    return aytmParse(url)
    } else {
    hideLoading();
    return "toast://解析超时，建议切换线路"; 
    }
    },durl))
    }
  //fba.log(fba.getUrls())
    var exclude = /ac\=dm|http\:\/\/http|m3u8\.pw|playm3u8|\?url\=\/m3u8|min\.css|404\.m3u8|\.ruifenglb|\/余额不足\.m3u8|\/xiajia\.mp4|img|\.css|\.js\?/;
    var contain = /hls\/play.*\.m3u8|s1\.czspp|netease\.com|dycdn\-tos\.pstatp|\.mp4\?http|\.mp4\?|\.mp4|\.m3u8\?http|\.m3u8|\.flv|\.avi|\.mpeg|\.wmv|\.mov|\.rmvb|\.dat|qqBFdownload|mime\=video%2F|video_mp4|\/video\/tos\/|pt\=m3u8|type\=m3u8|bdyun|global/;
 for (var i in urls) {
   //fba.log("全部" + urls[i]);
 if (!exclude.test(urls[i]) && contain.test(urls[i])) {
    var jurl = urls[i].replace(/.*v\=|.*url\=|.*\.html\,/g,'');
  //log(jurl)   
 if (fy_bridge_app.getHeaderUrl)
    return fba.parseLazyRule($$$("#noLoading#").lazyRule((jurl, durl) => { 
    var burl = base64Decode(jurl)
  //log(burl)
    var play = (/\,http/.test(burl)) ? burl.replace(/\,.*;{/,";{") : burl.replace(/\,.*;{/, ";{")
    var urll = play.replace(';{','#ignoreImg=true##isVideo=true#;{')
  //log(urll)
    var m3u8 = cacheM3u8(play.split(";{")[0], {timeout: 2000} ) + "#ignoreImg=true##isVideo=true#;{" + play.split(";{")[1] 
 if (/\.html\}/.test(play)) {
    var url = durl
    } else
 if (/\.m3u8/.test(urll)&&!/\.ssxmall|\.banyung|global/.test(urll)) {
    var urlcode = JSON.parse(request(urll,{withStatusCode:true,timeout:2000}));
 if (urlcode.statusCode!=200) {
    log('解析失效或无法访问，开始调用断插');
    var url = durl
    } else {
    return (/global|l0l/.test(play)) ? urll : (/sign|key|st=|path=|datas|encrypt=|token/.test(play)) ? m3u8 : urll  
    }
    } else 
 if (/\.mp4/.test(urll)) {
    var urlheader = JSON.parse(request(urll,{onlyHeaders:true,timeout:2000}));
 if (urlheader.statusCode!=200) {
    log('解析失效或无法访问，开始调用断插');
    var url = durl
    } else { 
    return urll  
    }
    } else {
    return (/global|l0l/.test(play)) ? urll : (/sign|key|st=|path=|datas|encrypt=/.test(play)) ? m3u8 : urll 
    }

 if (/xfy|xinlian|RongXingVR|xueren|wuduyun|renrenmi|LT-|1905|fun|le|pptv|mgtv|ixigua|sohu|miguvideo|bilibili|youku|qq|iqiyi/.test(url)) {
    showLoading("解析失效，已启用断插")
    let input = url;
    eval("var config =" + fetch("hiker://files/cache/MyParseSet.json"));
    eval(fetch(config.cj));
    return aytmParse(url)
    } else {
    hideLoading();
    return "toast://播放失败，建议切换线路";
    }
    },fy_bridge_app.base64Encode(fy_bridge_app.getHeaderUrl(jurl)),durl)          )
    }
    }
   },url)
  } 
 }