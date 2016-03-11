/**
 * Created by Administrator on 2016/3/11.
 */

/*$.get('../map/world.json', function (worldJson) {
 debugger;
 echarts.registerMap('mygeo', worldJson);
 });*/

// 地图层
var myChart = echarts.init(document.getElementById('main'));
$.get('../map/my-world.json', function(worldJson){
    echarts.registerMap('world', worldJson);


$.get('../data/testData.json', function (data) {
    option = {
        backgroundColor: '#a2daf4',
        tooltip: {
            trigger: 'item'/*,
             formatter : function(params) {//定制散点的提示格式
             return params.name + ' : ' + params.value[2];
             }*/
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
            //left: '-50%',
            //top: '0%',
            //right: '0%',
            //bottom: '0%',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
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
        series: [//散点样式
            {
                //name: '签名',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 10,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(37, 140, 249, 0.8)',
                        color: 'rgba(37, 140, 249, 0.8)'
                    }
                },
                data: data,
                zlevel: 4
            }]
    };
    myChart.setOption(option);
});
});
setInterval(function () {
    getTotal();
}, 5000);

var startVal = 0;
function getTotal() {
    $.ajax({
        async: false,
        cache: false,
        type: 'GET',
        url: 'http://localhost:8080/analyze/main/rpc/getSignCount.json',
        dataType: "jsonp",
        success: function (data) {
            if (data.success === true) {
                // 实时总数展现
                var numOptions = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                };
                var demo = new CountUp("total", startVal, data.context.count, 0, 2.5, numOptions);
                startVal = data.context.count;
                demo.start();
            }
        }
    });
}

function convertData(data) {
    //data = JSON.parse(data).context.data;
    data = data.context.data;
    //debugger;
    var res = [];
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
                res.push({
                    name: areacode['name'],
                    value: geoCoord.concat(data[i].total)
                });
            }
        } else {
            console.log(data[i]);
        }
    }
    return res;
}