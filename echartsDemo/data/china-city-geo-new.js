var cityData = {
  "3401":{"name":"合肥市","value":[117.283042,31.86119]},
  "3402":{"name":"芜湖市","value":[118.376451,31.326319]},
  "3403":{"name":"蚌埠市","value":[117.363228,32.939667]},
  "3404":{"name":"淮南市","value":[117.018329,32.647574]},
  "3405":{"name":"马鞍山市","value":[118.507906,31.689362]},
  "3406":{"name":"淮北市","value":[116.794664,33.971707]},
  "3407":{"name":"铜陵市","value":[117.816576,30.929935]},
  "3408":{"name":"安庆市","value":[117.043551,30.50883]},
  "3410":{"name":"黄山市","value":[118.317325,29.709239]},
  "3411":{"name":"滁州市","value":[118.316264,32.303627]},
  "3412":{"name":"阜阳市","value":[115.819729,32.896969]},
  "3413":{"name":"宿州市","value":[116.984084,33.633891]},
  "3415":{"name":"六安市","value":[116.507676,31.752889]},
  "3416":{"name":"亳州市","value":[115.782939,33.869338]},
  "3417":{"name":"池州市","value":[117.489157,30.656037]},
  "3418":{"name":"宣城市","value":[118.757995,30.945667]},

  "82":{"name":"澳门","value":[113.54909,22.198951]},
  "820001":{"name":"花地瑪堂區","value":[113.5528956,22.20787]},
  "820002":{"name":"花王堂區","value":[113.5489608,22.1992075]},
  "820003":{"name":"望德堂區","value":[113.5501828,22.19372083]},
  "820004":{"name":"大堂區","value":[113.5536475,22.18853944]},
  "820005":{"name":"風順堂區","value":[113.5419278,22.18736806]},
  "820006":{"name":"嘉模堂區","value":[113.5587044,22.15375944]},
  "820007":{"name":"路氹填海區","value":[113.5695992,22.13663]},
  "820008":{"name":"聖方濟各堂區","value":[113.5599542,22.12348639]},

  "11":{"name":"北京","value":[116.405285,39.904989]},
  "110101":{"name":"东城区","value":[116.418757,39.917544]},
  "110102":{"name":"西城区","value":[116.366794,39.915309]},
  "110105":{"name":"朝阳区","value":[116.486409,39.921489]},
  "110106":{"name":"丰台区","value":[116.286968,39.863642]},
  "110107":{"name":"石景山区","value":[116.195445,39.914601]},
  "110108":{"name":"海淀区","value":[116.310316,39.956074]},
  "110109":{"name":"门头沟区","value":[116.105381,39.937183]},
  "110111":{"name":"房山区","value":[116.139157,39.735535]},
  "110112":{"name":"通州区","value":[116.658603,39.902486]},
  "110113":{"name":"顺义区","value":[116.653525,40.128936]},
  "110114":{"name":"昌平区","value":[116.235906,40.218085]},
  "110115":{"name":"大兴区","value":[116.338033,39.728908]},
  "110116":{"name":"怀柔区","value":[116.637122,40.324272]},
  "110117":{"name":"平谷区","value":[117.112335,40.144783]},
  "110228":{"name":"密云县","value":[116.843352,40.377362]},
  "110229":{"name":"延庆县","value":[115.985006,40.465325]},

  "50":{"name":"重庆","value":[106.504962,29.533155]},
  "500101":{"name":"万州区","value":[108.380246,30.807807]},
  "500102":{"name":"涪陵区","value":[107.394905,29.703652]},
  "500103":{"name":"渝中区","value":[106.56288,29.556742]},
  "500104":{"name":"大渡口区","value":[106.48613,29.481002]},
  "500105":{"name":"江北区","value":[106.532844,29.575352]},
  "500106":{"name":"沙坪坝区","value":[106.4542,29.541224]},
  "500107":{"name":"九龙坡区","value":[106.480989,29.523492]},
  "500108":{"name":"南岸区","value":[106.560813,29.523992]},
  "500109":{"name":"北碚区","value":[106.437868,29.82543]},
  "500110":{"name":"綦江区","value":[106.651417,29.028091]},
  "500111":{"name":"大足区","value":[105.715319,29.700498]},
  "500112":{"name":"渝北区","value":[106.512851,29.601451]},
  "500113":{"name":"巴南区","value":[106.519423,29.381919]},
  "500114":{"name":"黔江区","value":[108.782577,29.527548]},
  "500115":{"name":"长寿区","value":[107.074854,29.833671]},
  "500116":{"name":"江津区","value":[106.253156,29.283387]},
  "500117":{"name":"合川区","value":[106.265554,29.990993]},
  "500118":{"name":"永川区","value":[105.894714,29.348748]},
  "500119":{"name":"南川区","value":[107.098153,29.156646]},
  "500120":{"name":"璧山区","value":[106.231126,29.593581]},
  "500151":{"name":"铜梁区","value":[106.054948,29.839944]},
  "500223":{"name":"潼南区","value":[105.841818,30.189554]},
  "500226":{"name":"荣昌区","value":[105.594061,29.403627]},
  "500228":{"name":"梁平县","value":[107.800034,30.672168]},
  "500229":{"name":"城口县","value":[108.6649,31.946293]},
  "500230":{"name":"丰都县","value":[107.73248,29.866424]},
  "500231":{"name":"垫江县","value":[107.348692,30.330012]},
  "500232":{"name":"武隆县","value":[107.75655,29.32376]},
  "500233":{"name":"忠县","value":[108.037518,30.291537]},
  "500234":{"name":"开县","value":[108.413317,31.167735]},
  "500235":{"name":"云阳县","value":[108.697698,30.930529]},
  "500236":{"name":"奉节县","value":[109.465774,31.019967]},
  "500237":{"name":"巫山县","value":[109.878928,31.074843]},
  "500238":{"name":"巫溪县","value":[109.628912,31.3966]},
  "500240":{"name":"石柱土家族自治县","value":[108.112448,29.99853]},
  "500241":{"name":"秀山土家族苗族自治县","value":[108.996043,28.444772]},
  "500242":{"name":"酉阳土家族苗族自治县","value":[108.767201,28.839828]},
  "500243":{"name":"彭水苗族土家族自治县","value":[108.166551,29.293856]},

  "3501":{"name":"福州市","value":[119.306239,26.075302]},
  "3502":{"name":"厦门市","value":[118.11022,24.490474]},
  "3503":{"name":"莆田市","value":[119.007558,25.431011]},
  "3504":{"name":"三明市","value":[117.635001,26.265444]},
  "3505":{"name":"泉州市","value":[118.589421,24.908853]},
  "3506":{"name":"漳州市","value":[117.661801,24.510897]},
  "3507":{"name":"南平市","value":[118.178459,26.635627]},
  "3508":{"name":"龙岩市","value":[117.02978,25.091603]},
  "3509":{"name":"宁德市","value":[119.527082,26.65924]},

  "6201":{"name":"兰州市","value":[103.823557,36.058039]},
  "6202":{"name":"嘉峪关市","value":[98.277304,39.786529]},
  "6203":{"name":"金昌市","value":[102.187888,38.514238]},
  "6204":{"name":"白银市","value":[104.173606,36.54568]},
  "6205":{"name":"天水市","value":[105.724998,34.578529]},
  "6206":{"name":"武威市","value":[102.634697,37.929996]},
  "6207":{"name":"张掖市","value":[100.455472,38.932897]},
  "6208":{"name":"平凉市","value":[106.684691,35.54279]},
  "6209":{"name":"酒泉市","value":[98.510795,39.744023]},
  "6210":{"name":"庆阳市","value":[107.638372,35.734218]},
  "6211":{"name":"定西市","value":[104.626294,35.579578]},
  "6212":{"name":"陇南市","value":[104.929379,33.388598]},
  "6229":{"name":"临夏回族自治州","value":[103.212006,35.599446]},
  "6230":{"name":"甘南藏族自治州","value":[102.911008,34.986354]},

  "4401":{"name":"广州市","value":[113.280637,23.125178]},
  "4402":{"name":"韶关市","value":[113.591544,24.801322]},
  "4403":{"name":"深圳市","value":[114.085947,22.547]},
  "4404":{"name":"珠海市","value":[113.553986,22.224979]},
  "4405":{"name":"汕头市","value":[116.708463,23.37102]},
  "4406":{"name":"佛山市","value":[113.122717,23.028762]},
  "4407":{"name":"江门市","value":[113.094942,22.590431]},
  "4408":{"name":"湛江市","value":[110.364977,21.274898]},
  "4409":{"name":"茂名市","value":[110.919229,21.659751]},
  "4412":{"name":"肇庆市","value":[112.472529,23.051546]},
  "4413":{"name":"惠州市","value":[114.412599,23.079404]},
  "4414":{"name":"梅州市","value":[116.117582,24.299112]},
  "4415":{"name":"汕尾市","value":[115.364238,22.774485]},
  "4416":{"name":"河源市","value":[114.697802,23.746266]},
  "4417":{"name":"阳江市","value":[111.975107,21.859222]},
  "4418":{"name":"清远市","value":[113.051227,23.685022]},
  "4419":{"name":"东莞市","value":[113.746262,23.046237]},
  "4420":{"name":"中山市","value":[113.382391,22.521113]},
  "4451":{"name":"潮州市","value":[116.632301,23.661701]},
  "4452":{"name":"揭阳市","value":[116.355733,23.543778]},
  "4453":{"name":"云浮市","value":[112.044439,22.929801]},

  "4501":{"name":"南宁市","value":[108.320004,22.82402]},
  "4502":{"name":"柳州市","value":[109.411703,24.314617]},
  "4503":{"name":"桂林市","value":[110.299121,25.274215]},
  "4504":{"name":"梧州市","value":[111.297604,23.474803]},
  "4505":{"name":"北海市","value":[109.119254,21.473343]},
  "4506":{"name":"防城港市","value":[108.345478,21.614631]},
  "4507":{"name":"钦州市","value":[108.624175,21.967127]},
  "4508":{"name":"贵港市","value":[109.602146,23.0936]},
  "4509":{"name":"玉林市","value":[110.154393,22.63136]},
  "4510":{"name":"百色市","value":[106.616285,23.897742]},
  "4511":{"name":"贺州市","value":[111.552056,24.414141]},
  "4512":{"name":"河池市","value":[108.062105,24.695899]},
  "4513":{"name":"来宾市","value":[109.229772,23.733766]},
  "4514":{"name":"崇左市","value":[107.353926,22.404108]},

  "5201":{"name":"贵阳市","value":[106.713478,26.578343]},
  "5202":{"name":"六盘水市","value":[104.846743,26.584643]},
  "5203":{"name":"遵义市","value":[106.937265,27.706626]},
  "5204":{"name":"安顺市","value":[105.932188,26.245544]},
  "5205":{"name":"毕节市","value":[105.28501,27.301693]},
  "5206":{"name":"铜仁市","value":[109.191555,27.718346]},
  "5223":{"name":"黔西南布依族苗族自治州","value":[104.897971,25.08812]},
  "5226":{"name":"黔东南苗族侗族自治州","value":[107.977488,26.583352]},
  "5227":{"name":"黔南布依族苗族自治州","value":[107.517156,26.258219]},

  "4601":{"name":"海口市","value":[110.33119,20.031971]},
  "4602":{"name":"三亚市","value":[109.508268,18.247872]},
  "4603":{"name":"三沙市","value":[112.34882,16.831039]},
  "4690":{"name":"琼海市","value":[110.466785,19.246011]},
  "469001":{"name":"五指山市","value":[109.516662,18.776921]},
  "469002":{"name":"琼海市","value":[110.466785,19.246011]},
  "469003":{"name":"儋州市","value":[109.576782,19.517486]},
  "469005":{"name":"文昌市","value":[110.753975,19.612986]},
  "469006":{"name":"万宁市","value":[110.388793,18.796216]},
  "469007":{"name":"东方市","value":[108.653789,19.10198]},
  "469021":{"name":"定安县","value":[110.349235,19.684966]},
  "469022":{"name":"屯昌县","value":[110.102773,19.362916]},
  "469023":{"name":"澄迈县","value":[110.007147,19.737095]},
  "469024":{"name":"临高县","value":[109.687697,19.908293]},
  "469025":{"name":"白沙黎族自治县","value":[109.452606,19.224584]},
  "469026":{"name":"昌江黎族自治县","value":[109.053351,19.260968]},
  "469027":{"name":"乐东黎族自治县","value":[109.175444,18.74758]},
  "469028":{"name":"陵水黎族自治县","value":[110.037218,18.505006]},
  "469029":{"name":"保亭黎族苗族自治县","value":[109.70245,18.636371]},
  "469030":{"name":"琼中黎族苗族自治县","value":[109.839996,19.03557]},

  "1301":{"name":"石家庄市","value":[114.502461,38.045474]},
  "1302":{"name":"唐山市","value":[118.175393,39.635113]},
  "1303":{"name":"秦皇岛市","value":[119.586579,39.942531]},
  "1304":{"name":"邯郸市","value":[114.490686,36.612273]},
  "1305":{"name":"邢台市","value":[114.508851,37.0682]},
  "1306":{"name":"保定市","value":[115.482331,38.867657]},
  "1307":{"name":"张家口市","value":[114.884091,40.811901]},
  "1308":{"name":"承德市","value":[117.939152,40.976204]},
  "1309":{"name":"沧州市","value":[116.857461,38.310582]},
  "1310":{"name":"廊坊市","value":[116.704441,39.523927]},
  "1311":{"name":"衡水市","value":[115.665993,37.735097]},

  "2301":{"name":"哈尔滨市","value":[126.642464,45.756967]},
  "2302":{"name":"齐齐哈尔市","value":[123.95792,47.342081]},
  "2303":{"name":"鸡西市","value":[130.975966,45.300046]},
  "2304":{"name":"鹤岗市","value":[130.277487,47.332085]},
  "2305":{"name":"双鸭山市","value":[131.157304,46.643442]},
  "2306":{"name":"大庆市","value":[125.11272,46.590734]},
  "2307":{"name":"伊春市","value":[128.899396,47.724775]},
  "2308":{"name":"佳木斯市","value":[130.361634,46.809606]},
  "2309":{"name":"七台河市","value":[131.015584,45.771266]},
  "2310":{"name":"牡丹江市","value":[129.618602,44.582962]},
  "2311":{"name":"黑河市","value":[127.499023,50.249585]},
  "2312":{"name":"绥化市","value":[126.99293,46.637393]},
  "2327":{"name":"大兴安岭地区","value":[124.711526,52.335262]},

  "4101":{"name":"郑州市","value":[113.665412,34.757975]},
  "4102":{"name":"开封市","value":[114.341447,34.797049]},
  "4103":{"name":"洛阳市","value":[112.434468,34.663041]},
  "4104":{"name":"平顶山市","value":[113.307718,33.735241]},
  "4105":{"name":"安阳市","value":[114.352482,36.103442]},
  "4106":{"name":"鹤壁市","value":[114.295444,35.748236]},
  "4107":{"name":"新乡市","value":[113.883991,35.302616]},
  "4108":{"name":"焦作市","value":[113.238266,35.23904]},
  "4109":{"name":"濮阳市","value":[115.041299,35.768234]},
  "4110":{"name":"许昌市","value":[113.826063,34.022956]},
  "4111":{"name":"漯河市","value":[114.026405,33.575855]},
  "4112":{"name":"三门峡市","value":[111.194099,34.777338]},
  "4113":{"name":"南阳市","value":[112.540918,32.999082]},
  "4114":{"name":"商丘市","value":[115.650497,34.437054]},
  "4115":{"name":"信阳市","value":[114.075031,32.123274]},
  "4116":{"name":"周口市","value":[114.649653,33.620357]},
  "4117":{"name":"驻马店市","value":[114.024736,32.980169]},
  "4190":{"name":"济源市","value":[112.590047,35.090378]},

  "4201":{"name":"武汉市","value":[114.298572,30.584355]},
  "4202":{"name":"黄石市","value":[115.077048,30.220074]},
  "4203":{"name":"十堰市","value":[110.787916,32.646907]},
  "4205":{"name":"宜昌市","value":[111.290843,30.702636]},
  "4206":{"name":"襄阳市","value":[112.144146,32.042426]},
  "4207":{"name":"鄂州市","value":[114.890593,30.396536]},
  "4208":{"name":"荆门市","value":[112.204251,31.03542]},
  "4209":{"name":"孝感市","value":[113.926655,30.926423]},
  "4210":{"name":"荆州市","value":[112.23813,30.326857]},
  "4211":{"name":"黄冈市","value":[114.879365,30.447711]},
  "4212":{"name":"咸宁市","value":[114.328963,29.832798]},
  "4213":{"name":"随州市","value":[113.37377,31.717497]},
  "4228":{"name":"恩施土家族苗族自治州","value":[109.48699,30.283114]},
  "4290":{"name":"仙桃市","value":[113.453974,30.364953]},
  "429004":{"name":"仙桃市","value":[113.453974,30.364953]},
  "429005":{"name":"潜江市","value":[112.896866,30.421215]},
  "429006":{"name":"天门市","value":[113.165862,30.653061]},
  "429021":{"name":"神农架林区","value":[110.671525,31.744449]},

  "4301":{"name":"长沙市","value":[112.982279,28.19409]},
  "4302":{"name":"株洲市","value":[113.151737,27.835806]},
  "4303":{"name":"湘潭市","value":[112.944052,27.82973]},
  "4304":{"name":"衡阳市","value":[112.607693,26.900358]},
  "4305":{"name":"邵阳市","value":[111.46923,27.237842]},
  "4306":{"name":"岳阳市","value":[113.132855,29.37029]},
  "4307":{"name":"常德市","value":[111.691347,29.040225]},
  "4308":{"name":"张家界市","value":[110.479921,29.127401]},
  "4309":{"name":"益阳市","value":[112.355042,28.570066]},
  "4310":{"name":"郴州市","value":[113.032067,25.793589]},
  "4311":{"name":"永州市","value":[111.608019,26.434516]},
  "4312":{"name":"怀化市","value":[109.97824,27.550082]},
  "4313":{"name":"娄底市","value":[112.008497,27.728136]},
  "4331":{"name":"湘西土家族苗族自治州","value":[109.739735,28.314296]},

  "3201":{"name":"南京市","value":[118.767413,32.041544]},
  "3202":{"name":"无锡市","value":[120.301663,31.574729]},
  "3203":{"name":"徐州市","value":[117.184811,34.261792]},
  "3204":{"name":"常州市","value":[119.946973,31.772752]},
  "3205":{"name":"苏州市","value":[120.619585,31.299379]},
  "3206":{"name":"南通市","value":[120.864608,32.016212]},
  "3207":{"name":"连云港市","value":[119.178821,34.600018]},
  "3208":{"name":"淮安市","value":[119.021265,33.597506]},
  "3209":{"name":"盐城市","value":[120.139998,33.377631]},
  "3210":{"name":"扬州市","value":[119.421003,32.393159]},
  "3211":{"name":"镇江市","value":[119.452753,32.204402]},
  "3212":{"name":"泰州市","value":[119.915176,32.484882]},
  "3213":{"name":"宿迁市","value":[118.275162,33.963008]},

  "3601":{"name":"南昌市","value":[115.892151,28.676493]},
  "3602":{"name":"景德镇市","value":[117.214664,29.29256]},
  "3603":{"name":"萍乡市","value":[113.852186,27.622946]},
  "3604":{"name":"九江市","value":[115.992811,29.712034]},
  "3605":{"name":"新余市","value":[114.930835,27.810834]},
  "3606":{"name":"鹰潭市","value":[117.033838,28.238638]},
  "3607":{"name":"赣州市","value":[114.940278,25.85097]},
  "3608":{"name":"吉安市","value":[114.986373,27.111699]},
  "3609":{"name":"宜春市","value":[114.391136,27.8043]},
  "3610":{"name":"抚州市","value":[116.358351,27.98385]},
  "3611":{"name":"上饶市","value":[117.971185,28.44442]},

  "2201":{"name":"长春市","value":[125.3245,43.886841]},
  "2202":{"name":"吉林市","value":[126.55302,43.843577]},
  "2203":{"name":"四平市","value":[124.370785,43.170344]},
  "2204":{"name":"辽源市","value":[125.145349,42.902692]},
  "2205":{"name":"通化市","value":[125.936501,41.721177]},
  "2206":{"name":"白山市","value":[126.427839,41.942505]},
  "2207":{"name":"松原市","value":[124.823608,45.118243]},
  "2208":{"name":"白城市","value":[122.841114,45.619026]},
  "2224":{"name":"延边朝鲜族自治州","value":[129.513228,42.904823]},

  "2101":{"name":"沈阳市","value":[123.429096,41.796767]},
  "2102":{"name":"大连市","value":[121.618622,38.91459]},
  "2103":{"name":"鞍山市","value":[122.995632,41.110626]},
  "2104":{"name":"抚顺市","value":[123.921109,41.875956]},
  "2105":{"name":"本溪市","value":[123.770519,41.297909]},
  "2106":{"name":"丹东市","value":[124.383044,40.124296]},
  "2107":{"name":"锦州市","value":[121.135742,41.119269]},
  "2108":{"name":"营口市","value":[122.235151,40.667432]},
  "2109":{"name":"阜新市","value":[121.648962,42.011796]},
  "2110":{"name":"辽阳市","value":[123.18152,41.269402]},
  "2111":{"name":"盘锦市","value":[122.06957,41.124484]},
  "2112":{"name":"铁岭市","value":[123.844279,42.290585]},
  "2113":{"name":"朝阳市","value":[120.451176,41.576758]},
  "2114":{"name":"葫芦岛市","value":[120.856394,40.755572]},

  "1501":{"name":"呼和浩特市","value":[111.670801,40.818311]},
  "1502":{"name":"包头市","value":[109.840405,40.658168]},
  "1503":{"name":"乌海市","value":[106.825563,39.673734]},
  "1504":{"name":"赤峰市","value":[118.956806,42.275317]},
  "1505":{"name":"通辽市","value":[122.263119,43.617429]},
  "1506":{"name":"鄂尔多斯市","value":[109.99029,39.817179]},
  "1507":{"name":"呼伦贝尔市","value":[119.758168,49.215333]},
  "1508":{"name":"巴彦淖尔市","value":[107.416959,40.757402]},
  "1509":{"name":"乌兰察布市","value":[113.114543,41.034126]},
  "1522":{"name":"兴安盟","value":[122.070317,46.076268]},
  "1525":{"name":"锡林郭勒盟","value":[116.090996,43.944018]},
  "1529":{"name":"阿拉善盟","value":[105.706422,38.844814]},

  "6401":{"name":"银川市","value":[106.278179,38.46637]},
  "6402":{"name":"石嘴山市","value":[106.376173,39.01333]},
  "6403":{"name":"吴忠市","value":[106.199409,37.986165]},
  "6404":{"name":"固原市","value":[106.285241,36.004561]},
  "6405":{"name":"中卫市","value":[105.189568,37.514951]},

  "6301":{"name":"西宁市","value":[101.778916,36.623178]},
  "6302":{"name":"海东市","value":[102.10327,36.502916]},
  "6322":{"name":"海北藏族自治州","value":[100.901059,36.959435]},
  "6323":{"name":"黄南藏族自治州","value":[102.019988,35.517744]},
  "6325":{"name":"海南藏族自治州","value":[100.619542,36.280353]},
  "6326":{"name":"果洛藏族自治州","value":[100.242143,34.4736]},
  "6327":{"name":"玉树藏族自治州","value":[97.008522,33.004049]},
  "6328":{"name":"海西蒙古族藏族自治州","value":[97.370785,37.374663]},

  "3701":{"name":"济南市","value":[117.000923,36.675807]},
  "3702":{"name":"青岛市","value":[120.355173,36.082982]},
  "3703":{"name":"淄博市","value":[118.047648,36.814939]},
  "3704":{"name":"枣庄市","value":[117.557964,34.856424]},
  "3705":{"name":"东营市","value":[118.66471,37.434564]},
  "3706":{"name":"烟台市","value":[121.391382,37.539297]},
  "3707":{"name":"潍坊市","value":[119.107078,36.70925]},
  "3708":{"name":"济宁市","value":[116.587245,35.415393]},
  "3709":{"name":"泰安市","value":[117.129063,36.194968]},
  "3710":{"name":"威海市","value":[122.116394,37.509691]},
  "3711":{"name":"日照市","value":[119.461208,35.428588]},
  "3712":{"name":"莱芜市","value":[117.677736,36.214397]},
  "3713":{"name":"临沂市","value":[118.326443,35.065282]},
  "3714":{"name":"德州市","value":[116.307428,37.453968]},
  "3715":{"name":"聊城市","value":[115.980367,36.456013]},
  "3716":{"name":"滨州市","value":[118.016974,37.383542]},
  "3717":{"name":"菏泽市","value":[115.469381,35.246531]},

  "31":{"name":"上海","value":[121.472644,31.231706]},
  "310101":{"name":"黄浦区","value":[121.490317,31.222771]},
  "310104":{"name":"徐汇区","value":[121.43752,31.179973]},
  "310105":{"name":"长宁区","value":[121.4222,31.218123]},
  "310106":{"name":"静安区","value":[121.448224,31.229003]},
  "310107":{"name":"普陀区","value":[121.392499,31.241701]},
  "310108":{"name":"闸北区","value":[121.465689,31.25318]},
  "310109":{"name":"虹口区","value":[121.491832,31.26097]},
  "310110":{"name":"杨浦区","value":[121.522797,31.270755]},
  "310112":{"name":"闵行区","value":[121.375972,31.111658]},
  "310113":{"name":"宝山区","value":[121.489934,31.398896]},
  "310114":{"name":"嘉定区","value":[121.250333,31.383524]},
  "310115":{"name":"浦东新区","value":[121.567706,31.245944]},
  "310116":{"name":"金山区","value":[121.330736,30.724697]},
  "310117":{"name":"松江区","value":[121.223543,31.03047]},
  "310118":{"name":"青浦区","value":[121.113021,31.151209]},
  "310120":{"name":"奉贤区","value":[121.458472,30.912345]},
  "310230":{"name":"崇明县","value":[121.397516,31.626946]},

  "1401":{"name":"太原市","value":[112.549248,37.857014]},
  "1402":{"name":"大同市","value":[113.295259,40.09031]},
  "1403":{"name":"阳泉市","value":[113.583285,37.861188]},
  "1404":{"name":"长治市","value":[113.113556,36.191112]},
  "1405":{"name":"晋城市","value":[112.851274,35.497553]},
  "1406":{"name":"朔州市","value":[112.433387,39.331261]},
  "1407":{"name":"晋中市","value":[112.736465,37.696495]},
  "1408":{"name":"运城市","value":[111.003957,35.022778]},
  "1409":{"name":"忻州市","value":[112.733538,38.41769]},
  "1410":{"name":"临汾市","value":[111.517973,36.08415]},
  "1411":{"name":"吕梁市","value":[111.134335,37.524366]},

  "6101":{"name":"西安市","value":[108.948024,34.263161]},
  "6102":{"name":"铜川市","value":[108.979608,34.916582]},
  "6103":{"name":"宝鸡市","value":[107.14487,34.369315]},
  "6104":{"name":"咸阳市","value":[108.705117,34.333439]},
  "6105":{"name":"渭南市","value":[109.502882,34.499381]},
  "6106":{"name":"延安市","value":[109.49081,36.596537]},
  "6107":{"name":"汉中市","value":[107.028621,33.077668]},
  "6108":{"name":"榆林市","value":[109.741193,38.290162]},
  "6109":{"name":"安康市","value":[109.029273,32.6903]},
  "6110":{"name":"商洛市","value":[109.939776,33.868319]},

  "5101":{"name":"成都市","value":[104.065735,30.659462]},
  "5103":{"name":"自贡市","value":[104.773447,29.352765]},
  "5104":{"name":"攀枝花市","value":[101.716007,26.580446]},
  "5105":{"name":"泸州市","value":[105.443348,28.889138]},
  "5106":{"name":"德阳市","value":[104.398651,31.127991]},
  "5107":{"name":"绵阳市","value":[104.741722,31.46402]},
  "5108":{"name":"广元市","value":[105.829757,32.433668]},
  "5109":{"name":"遂宁市","value":[105.571331,30.513311]},
  "5110":{"name":"内江市","value":[105.066138,29.58708]},
  "5111":{"name":"乐山市","value":[103.761263,29.582024]},
  "5113":{"name":"南充市","value":[106.082974,30.795281]},
  "5114":{"name":"眉山市","value":[103.831788,30.048318]},
  "5115":{"name":"宜宾市","value":[104.630825,28.760189]},
  "5116":{"name":"广安市","value":[106.633369,30.456398]},
  "5117":{"name":"达州市","value":[107.502262,31.209484]},
  "5118":{"name":"雅安市","value":[103.001033,29.987722]},
  "5119":{"name":"巴中市","value":[106.753669,31.858809]},
  "5120":{"name":"资阳市","value":[104.641917,30.122211]},
  "5132":{"name":"阿坝藏族羌族自治州","value":[102.221374,31.899792]},
  "5133":{"name":"甘孜藏族自治州","value":[101.963815,30.050663]},
  "5134":{"name":"凉山彝族自治州","value":[102.258746,27.886762]},

  "12":{"name":"天津","value":[117.190182,39.125596]},
  "120101":{"name":"和平区","value":[117.195907,39.118327]},
  "120102":{"name":"河东区","value":[117.226568,39.122125]},
  "120103":{"name":"河西区","value":[117.217536,39.101897]},
  "120104":{"name":"南开区","value":[117.164143,39.120474]},
  "120105":{"name":"河北区","value":[117.201569,39.156632]},
  "120106":{"name":"红桥区","value":[117.163301,39.175066]},
  "120110":{"name":"东丽区","value":[117.313967,39.087764]},
  "120111":{"name":"西青区","value":[117.012247,39.139446]},
  "120112":{"name":"津南区","value":[117.382549,38.989577]},
  "120113":{"name":"北辰区","value":[117.13482,39.225555]},
  "120114":{"name":"武清区","value":[117.057959,39.376925]},
  "120115":{"name":"宝坻区","value":[117.308094,39.716965]},
  "120116":{"name":"滨海新区","value":[117.654173,39.032846]},
  "120221":{"name":"宁河县","value":[117.82828,39.328886]},
  "120223":{"name":"静海县","value":[116.925304,38.935671]},
  "120225":{"name":"蓟县","value":[117.407449,40.045342]},

  "81":{"name":"香港","value":[114.173355,22.320048]},
  "810001":{"name":"中西區","value":[114.1543731,22.28198083]},
  "810002":{"name":"灣仔區","value":[114.1829153,22.27638889]},
  "810003":{"name":"東區","value":[114.2260031,22.27969306]},
  "810004":{"name":"南區","value":[114.1600117,22.24589667]},
  "810005":{"name":"油尖旺區","value":[114.1733317,22.31170389]},
  "810006":{"name":"深水埗區","value":[114.1632417,22.33385417]},
  "810007":{"name":"九龍城區","value":[114.1928467,22.31251]},
  "810008":{"name":"黃大仙區","value":[114.2038856,22.33632056]},
  "810009":{"name":"觀塘區","value":[114.2140542,22.32083778]},
  "810010":{"name":"荃灣區","value":[114.1210792,22.36830667]},
  "810011":{"name":"屯門區","value":[113.9765742,22.39384417]},
  "810012":{"name":"元朗區","value":[114.0324381,22.44142833]},
  "810013":{"name":"北區","value":[114.1473639,22.49610389]},
  "810014":{"name":"大埔區","value":[114.1717431,22.44565306]},
  "810015":{"name":"西貢區","value":[114.264645,22.31421306]},
  "810016":{"name":"沙田區","value":[114.1953653,22.37953167]},
  "810017":{"name":"葵青區","value":[114.1393194,22.36387667]},
  "810018":{"name":"離島區","value":[113.94612,22.28640778]},

  "6501":{"name":"乌鲁木齐市","value":[87.617733,43.792818]},
  "6502":{"name":"克拉玛依市","value":[84.873946,45.595886]},
  "6521":{"name":"吐鲁番地区","value":[89.184078,42.947613]},
  "6522":{"name":"哈密地区","value":[93.51316,42.833248]},
  "6523":{"name":"昌吉回族自治州","value":[87.304012,44.014577]},
  "6527":{"name":"博尔塔拉蒙古自治州","value":[82.074778,44.903258]},
  "6528":{"name":"巴音郭楞蒙古自治州","value":[86.150969,41.768552]},
  "6529":{"name":"阿克苏地区","value":[80.265068,41.170712]},
  "6530":{"name":"克孜勒苏柯尔克孜自治州","value":[76.172825,39.713431]},
  "6531":{"name":"喀什地区","value":[75.989138,39.467664]},
  "6532":{"name":"和田地区","value":[79.92533,37.110687]},
  "6540":{"name":"伊犁哈萨克自治州","value":[81.317946,43.92186]},
  "6542":{"name":"塔城地区","value":[82.985732,46.746301]},
  "6543":{"name":"阿勒泰地区","value":[88.13963,47.848393]},
  "6590":{"name":"石河子市","value":[86.041075,44.305886]},
  "659001":{"name":"石河子市","value":[86.041075,44.305886]},
  "659002":{"name":"阿拉尔市","value":[81.285884,40.541914]},
  "659003":{"name":"图木舒克市","value":[79.077978,39.867316]},
  "659004":{"name":"五家渠市","value":[87.526884,44.167401]},
  "659005":{"name":"北屯市","value":[87.824932,47.353177]},
  "659006":{"name":"铁门关市","value":[85.501218,41.827251]},
  "659007":{"name":"双河市","value":[82.353656,44.840524]},

  "5401":{"name":"拉萨市","value":[91.132212,29.660361]},
  "5402":{"name":"日喀则市","value":[88.885148,29.267519]},
  "5403":{"name":"昌都市","value":[97.178452,31.136875]},
  "5422":{"name":"山南地区","value":[91.766529,29.236023]},
  "5424":{"name":"那曲地区","value":[92.060214,31.476004]},
  "5425":{"name":"阿里地区","value":[80.105498,32.503187]},
  "5426":{"name":"林芝市","value":[94.362348,29.654693]},

  "5301":{"name":"昆明市","value":[102.712251,25.040609]},
  "5303":{"name":"曲靖市","value":[103.797851,25.501557]},
  "5304":{"name":"玉溪市","value":[102.543907,24.350461]},
  "5305":{"name":"保山市","value":[99.167133,25.111802]},
  "5306":{"name":"昭通市","value":[103.717216,27.336999]},
  "5307":{"name":"丽江市","value":[100.233026,26.872108]},
  "5308":{"name":"普洱市","value":[100.972344,22.777321]},
  "5309":{"name":"临沧市","value":[100.08697,23.886567]},
  "5323":{"name":"楚雄彝族自治州","value":[101.546046,25.041988]},
  "5325":{"name":"红河哈尼族彝族自治州","value":[103.384182,23.366775]},
  "5326":{"name":"文山壮族苗族自治州","value":[104.24401,23.36951]},
  "5328":{"name":"西双版纳傣族自治州","value":[100.797941,22.001724]},
  "5329":{"name":"大理白族自治州","value":[100.225668,25.589449]},
  "5331":{"name":"德宏傣族景颇族自治州","value":[98.578363,24.436694]},
  "5333":{"name":"怒江傈僳族自治州","value":[98.854304,25.850949]},
  "5334":{"name":"迪庆藏族自治州","value":[99.706463,27.826853]},

  "3301":{"name":"杭州市","value":[120.153576,30.287459]},
  "3302":{"name":"宁波市","value":[121.549792,29.868388]},
  "3303":{"name":"温州市","value":[120.672111,28.000575]},
  "3304":{"name":"嘉兴市","value":[120.750865,30.762653]},
  "3305":{"name":"湖州市","value":[120.102398,30.867198]},
  "3306":{"name":"绍兴市","value":[120.582112,29.997117]},
  "3307":{"name":"金华市","value":[119.649506,29.089524]},
  "3308":{"name":"衢州市","value":[118.87263,28.941708]},
  "3309":{"name":"舟山市","value":[122.106863,30.016028]},
  "3310":{"name":"台州市","value":[121.428599,28.661378]},
  "3311":{"name":"丽水市","value":[119.921786,28.451993]}
}
