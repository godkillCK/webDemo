/**
 * Created by Administrator on 2016/3/11.
 */

/*$.get('../map/world.json', function (worldJson) {
 debugger;
 echarts.registerMap('mygeo', worldJson);
 });*/

// 地图层
var myChart = echarts.init(document.getElementById('main'));

$.get('../map/my-geo.json', function(worldJson){
    echarts.registerMap('world', worldJson);


$.get('../data/data.json', function (data) {
    option = {
        //backgroundColor: '#a2daf4',
        tooltip: {
            trigger: 'item',
             formatter : function(params) {//定制散点的提示格式
                 //console.log(params.name + ', ' + params.value[1]);
                 //console.log(params.value[0] + ', ' + params.value[1]);
                 return params.name + ' : ' + params.value[2];
             }
        },
        /*visualMap: {
            min: 0,
            max: 100000,
            calculable: true,
            inRange: {
                color: ['#F7A119', '#f7a119'],
                colorLightness: [0.2, 0.8],
                symbolSize: [7, 7]
            },
            textStyle: {
                color: '#f7a119 '
            }
        },*/
        geo: {
            map: 'china',
            //left: '28%',
            top: '14%',
            label: {
                emphasis: {
                    show: false
                }
            },
            //roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#000000',
                    borderColor: '#323C48'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            zlevel: 4
        },
        /*series: [//散点样式
            {
                name: '签名',
                type : 'effectScatter',
                coordinateSystem : 'geo',
                symbolSize : 5,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data : convertData(data),
                zlevel : 4
            },
            {
                name: '签名',
                type : 'effectScatter',
                coordinateSystem : 'geo',
                symbolSize : 10,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data : convertData(data),
                zlevel : 4
            }]*/
        legend: {
            left: 'left',
            top: 'bottom',
            data: ['强', '中', '弱'],
            textStyle: {
                color: '#000'
            }
        },
        series: [{
            name: '弱',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(37, 140, 249, 0.8)',
                    color: 'rgba(37, 140, 249, 0.8)'
                }
            },
            data: convertData(data)[0],
            zlevel : 4
        }, {
            name: '中',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(14, 241, 242, 0.8)',
                    color: 'rgba(14, 241, 242, 0.8)'
                }
            },
            data: convertData(data)[1],
            zlevel : 4
        }, {
            name: '强',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            },
            data: convertData(data)[2],
            zlevel : 4
        }]
    };
    myChart.setOption(option);
});
});

function convertData(data) {
    //data = JSON.parse(data).context.data;
    data = data.context.data;
    //debugger;
    var results = [[],[],[]];
    for (var i = 0; i < data.length; i++) {
        try {
            var areacode = cityData[data[i].areacode];
        } catch (e) {
            console.log(data[i]);
            continue
        }

        if (undefined != areacode || null != areacode) {
            var geoCoord = areacode['value'];

            if (geoCoord) {
                if (data[i].total <= 10) {
                    results[0].push({
                        name: areacode['name'],
                        value: geoCoord.concat(data[i].total)
                    });
                } else if (data[i].total <= 100) {
                    results[1].push({
                        name: areacode['name'],
                        value: geoCoord.concat(data[i].total)
                    });
                } else {
                    results[2].push({
                        name: areacode['name'],
                        value: geoCoord.concat(data[i].total)
                    });
                }
            }
        } else {
            //console.log(data[i]);
        }
    }
    return results;
}


//滚动数字
(function($) {
    $.fn.numberAnimate = function(setting) {
        var defaults = {
            speed : 1000,//动画速度
            num : "", //初始化值
            iniAnimate : true, //是否要初始化动画效果
            symbol : '',//默认的分割符号，千，万，千万
            dot : 0 //保留几位小数点
        }
        //如果setting为空，就取default的值
        var setting = $.extend(defaults, setting);

        //如果对象有多个，提示出错
        if($(this).length > 1){
            alert("just only one obj!");
            return;
        }

        //如果未设置初始化值。提示出错
        if(setting.num == ""){
            alert("must set a num!");
            return;
        }
        var nHtml = '<div class="mt-number-animate-dom" data-num="{{num}}">\
            <span class="mt-number-animate-span">0</span>\
            <span class="mt-number-animate-span">1</span>\
            <span class="mt-number-animate-span">2</span>\
            <span class="mt-number-animate-span">3</span>\
            <span class="mt-number-animate-span">4</span>\
            <span class="mt-number-animate-span">5</span>\
            <span class="mt-number-animate-span">6</span>\
            <span class="mt-number-animate-span">7</span>\
            <span class="mt-number-animate-span">8</span>\
            <span class="mt-number-animate-span">9</span>\
            <span class="mt-number-animate-span">.</span>\
          </div>';

        //数字处理
        var numToArr = function(num){
            num = parseFloat(num).toFixed(setting.dot);
            if(typeof(num) == 'number'){
                var arrStr = num.toString().split("");
            }else{
                var arrStr = num.split("");
            }
            //console.log(arrStr);
            return arrStr;
        }

        //设置DOM symbol:分割符号
        var setNumDom = function(arrStr){
            var shtml = '<div class="mt-number-animate">';
            for(var i=0,len=arrStr.length; i<len; i++){
                if(i != 0 && (len-i)%3 == 0 && setting.symbol != "" && arrStr[i]!="."){
                    shtml += '<div class="mt-number-animate-dot">'+setting.symbol+'</div>'+nHtml.replace("{{num}}",arrStr[i]);
                }else{
                    shtml += nHtml.replace("{{num}}",arrStr[i]);
                }
            }
            shtml += '</div>';
            return shtml;
        }

        //执行动画
        var runAnimate = function($parent){
            $parent.find(".mt-number-animate-dom").each(function() {
                var num = $(this).attr("data-num");
                num = (num=="."?10:num);
                var spanHei = $(this).height()/11; //11为元素个数
                var thisTop = -num*spanHei+"px";
                if(thisTop != $(this).css("top")){
                    if(setting.iniAnimate){
                        //HTML5不支持
                        if(!window.applicationCache){
                            $(this).animate({
                                top : thisTop
                            }, setting.speed);
                        }else{
                            $(this).css({
                                'transform':'translateY('+thisTop+')',
                                '-ms-transform':'translateY('+thisTop+')',   /* IE 9 */
                                '-moz-transform':'translateY('+thisTop+')',  /* Firefox */
                                '-webkit-transform':'translateY('+thisTop+')', /* Safari 和 Chrome */
                                '-o-transform':'translateY('+thisTop+')',
                                '-ms-transition':setting.speed/1000+'s',
                                '-moz-transition':setting.speed/1000+'s',
                                '-webkit-transition':setting.speed/1000+'s',
                                '-o-transition':setting.speed/1000+'s',
                                'transition':setting.speed/1000+'s'
                            });
                        }
                    }else{
                        setting.iniAnimate = true;
                        $(this).css({
                            top : thisTop
                        });
                    }
                }
            });
        }

        //初始化
        var init = function($parent){
            //初始化
            $parent.html(setNumDom(numToArr(setting.num)));
            runAnimate($parent);
        };

        //重置参数
        this.resetData = function(num){
            var newArr = numToArr(num);
            var $dom = $(this).find(".mt-number-animate-dom");
            if($dom.length < newArr.length){
                $(this).html(setNumDom(numToArr(num)));
            }else{
                $dom.each(function(index, el) {
                    $(this).attr("data-num",newArr[index]);
                });
            }
            runAnimate($(this));
        }
        //init
        init($(this));
        return this;
    }
})(jQuery);

var startNum;
var numRun2;
$(function(){
    $.get('http://localhost:8080/analyze/main/rpc/getSignCount.json', function (data) {
        if (data.success === true) {
            // 刷新总数
            startNum = data.context.count;
            numRun2 = $("#numberRun2").numberAnimate({num:startNum, speed:2000, symbol:","});
            numRun2.resetData(startNum);

            var width = startNum.toString().length * 2 / 29 * 100 + '%';
            $('#line').css('width', width);
        }
    });

    setInterval(function(){
        refresh();
    },5000);
});

function refresh() {
    $.ajax({
        async: false,
        cache: false,
        type: 'GET',
        url: 'http://localhost:8080/analyze/main/rpc/getSignCount.json',
        dataType: "jsonp",
        success: function (data) {
            if (data.success === true) {
                // 刷新总数
                startNum = data.context.count;
                numRun2 = $("#numberRun2").numberAnimate({num:startNum, speed:2000, symbol:","});
                numRun2.resetData(startNum);

                var width = startNum.toString().length * 2 / 29 * 100 + '%';
                $('#line').css('width', width);
            }
        }
    });
}
