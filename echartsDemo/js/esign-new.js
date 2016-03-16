/**
 * Created by Administrator on 2016/3/11.
 */

//当窗口改变时 刷新页面
window.onresize = function() { location=location };

/*
 * 地图层
 */
var myChart = echarts.init(document.getElementById('main'));
generateMap();
function generateMap() {
	$.get('/analyze/main/rpc/getSignAreaData.json', function (data) {
		var results = [[],[],[]];
		
	    data = JSON.parse(data).context.data;
	    for (var i = 0; i < data.length; i++) {
	    	var areaCode = data[i].areacode;
	    	var total = data[i].total;
	    	//转换直辖市的code
	    	if ((/^11\d+$/).test(areaCode)) {
	    		console.log("11: " + areaCode);
	    		areaCode = '11';
	    	} else if ((/^12\d+$/).test(areaCode)) {
	    		console.log("12: " + areaCode);
	    		areaCode = '12';
	    	} else if ((/^31\d+$/).test(areaCode)) {
	    		console.log("31: " + areaCode);
	    		areaCode = '31';
	    	} else if ((/^50\d+$/).test(areaCode)) {
	    		console.log("50: " + areaCode);
	    		areaCode = '50';
	    	}
	    	
	        try {
	            var city = cityData[areaCode];
	            if (undefined != city || null != city) {
	                var geoCoord = city['value'];

	                if (geoCoord) {
	                    if (total <= 100) {//阈值待改变
	                        results[0].push({
	                            name: city['name'],
	                            value: geoCoord.concat(total)
	                        });
	                    } else if (total <= 1000) {//阈值待改变
	                        results[1].push({
	                            name: city['name'],
	                            value: geoCoord.concat(total)
	                        });
	                    } else {
	                        results[2].push({
	                            name: city['name'],
	                            value: geoCoord.concat(total)
	                        });
	                    }
	                }
	            } else {
	                console.log('没找对应地区的身份证号码：' + areaCode);
	            }
	        } catch (e) {
	            console.log('数据异常：' + data[i] + '; ' + e);
	            continue;
	        }
	    }
		
	    option = {
	        //backgroundColor: '#a2daf4',
	        tooltip: {
	            trigger: 'item',
	             formatter : function(params) {//定制散点的提示格式
	                 return params.name + ' : ' + params.value[2];
	             }
	        },
	        geo: {
	            map: 'china',
	            left: '16%',
	            right: '16%',
	            top: '5%',//不能适配，只能根据屏幕调这个参数
	            bottom: '2%',
	            label: {
	                emphasis: {
	                    show: false
	                }
	            },
	            //roam: 'scale',
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
	        series:[
                 {
 	                coordinateSystem : 'geo',
 	                symbolSize : 1,
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
 	                data : results[0],
 	                zlevel : 4
 	            },
	            {
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
	                data : results[1],
	                zlevel : 4
	            },
	            {
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
	                data : results[2],
	                zlevel : 4
	            }]
	    };
	    myChart.setOption(option);
	});
}

//半小时刷新次地图
setInterval(function(){
	generateMap();
},1800000);

/*
 * 滚动数字效果
 */
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

/*
 * 10s刷新次总数
 */
var startNum = 0;
var numRun2;
$.get('/analyze/main/rpc/getSignCount.json', function (data) {
	data = JSON.parse(data);
    if (data.success === true) {
        startNum = data.context.count;
        numRun2 = $("#numberRun2").numberAnimate({num:startNum, speed:1000, symbol:","});
        numRun2.resetData(startNum);

        var width = startNum.toString().length * 2.5 + 'vm';
        $('#line').css('width', width);
    }
});

setInterval(function(){
    refresh();
},10000);

function refresh() {
    $.ajax({
        async: false,
        cache: false,
        type: 'GET',
        url: '/analyze/main/rpc/getSignCount.json',
        dataType: "jsonp",
        success: function (data) {
            if (data.success === true) {
                startNum = data.context.count;
                numRun2.resetData(startNum);

                var width = startNum.toString().length * 2.5 + 'vm';
                $('#line').css('width', width);
            }
        }
    });
}
