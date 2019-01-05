$(function(){
	var R = Raphael('paper', 900, 900);
	R.canvas.style.zoom = 0.35;
	var attr = {
	        fill: "#FFFFFF",
	        stroke: "#000000",
	        "stroke-width": 1,
	        "stroke-linejoin": "round"
	    };
		var locInfo = {};
		locInfo.loc0 = ["성동구", 37.563307,127.037088];
		 locInfo.loc1 = ["강서구", 37.550940,126.849536];
		 locInfo.loc2 = ["양천구", 37.516840,126.866382];
		 locInfo.loc3 = ["구로구", 37.495324,126.887363];
		 locInfo.loc4 = ["금천구", 37.451763,126.902064];
		 locInfo.loc5 = ["관악구", 37.478357,126.951633];
		 locInfo.loc6 = ["동작구", 37.512398,126.939242];
		 locInfo.loc7 = ["서초구", 37.483696,127.032406];
		 locInfo.loc8 = ["강남구", 37.517219,127.047308];
		 locInfo.loc9 = ["송파구", 37.514517,127.106601];
		 locInfo.loc10 = ["강동구", 37.530102,127.123768];
		 locInfo.loc11 = ["은평구", 37.602689,126.929135];
		 locInfo.loc12 = ["영등포구", 37.526364,126.896228];
		 locInfo.loc13 = ["중랑구", 37.606527,127.092659];
		 locInfo.loc14 = ["노원구", 37.654156,127.056787];
		 locInfo.loc15 = ["도봉구", 37.66876,127.047089];
		 locInfo.loc16 = ["강북구", 37.639579,127.025658];
		 locInfo.loc17 = ["종로구", 37.572933,126.979334];
		 locInfo.loc18 = ["서대문구", 37.579098,126.936763];
		 locInfo.loc19 = ["마포구", 37.563749,126.908413];
		 locInfo.loc20 = ["용산구", 37.538401,126.965458];
		 locInfo.loc21 = ["중구", 37.564072,126.997950];
		 locInfo.loc22 = ["성북구", 37.589096,127.018227];
		 locInfo.loc23 = ["동대문구", 37.574175,127.039899];
		 locInfo.loc24 = ["광진구", 37.538452,127.082289];

	    var aus = {};
	    aus.vic1 = R.path("M490.815,308.59l-0.339,14.61l1.875,1.625l4.375,0.25l-0.125,3.875l-0.75,1.5l-5.875,6.375l-0.125,6l-1.125,0.125l-0.5-1.125l-1.5-0.125l-6.75,3.625l-1.917,6.166l-0.291,2.334l-4.432,5.494l-6.193,5.756l-2.375,0.959l-2.542,4.666l-0.431,2.994l1.85,0.938l0.188,3.563l-1.125,0.563l-0.125,2.125l2.063,1.063l-0.125,1l-0.875,0.563l0.125,1.188l2.25,2.125h6.688l5.969,4.188l-0.125,5.531l2.161,2.323l10.818-11.813h4.334l2.583-1.917l2,0.667l19.75,10.166l12.833,4.25l5.417,2.25l5.333,4.584l4.167,2.166l4.25,3.417l0.849-0.004l2.082-5.476l10.771-23.521l19.688-43.25l-0.082-2.92l-1.334-1.602l-1.188,0.814h-2.25l-0.583-1h-2.584l-3.916-1.834l-6.5-0.25l-0.917-0.916h-7.5l-17.083-16h-2.083v-2.666l-7.75-5.25l-2.167-0.167l-3.25-3l-5.25,0.083l-3.583,1.917l-3.75,0.083l-6.584,6.084l-6.666-0.084l-2.75-3.25l-2.417,0.167l-0.5,1.25l-2.979-3.229L490.815,308.59z").attr(attr);
	    
		aus.vic2 = R.path("M161.15,302.277l-2-0.334l-18.667-16l-1.667-3.666l-16-9.334l-8-5.333l-0.667-2.333l-2.667,0.666l-0.333-3l-7.667-4.666v-1.667l-2-1l-0.333-3l-4.667-2v-2l-24.333-18l-6,4.333v4l-4,3.667l0.667,4l-2,0.333l0.333,3.667l2,0.667l-0.333,4l3.333,2.333l-1.667,3.667l3.667,3.666v4.667l-3,0.333l-2.333,2.334l-0.667,3l-1.333,1.333l-2.667,0.667v3l-3.333,4.666v2.334l5.667,0.333v3l-2,1l-4.333-0.667l-1.333,1l-1.667-3.666l-1.667,2.666v1.667l-5.333,5.333l-10.667,6.334l-0.333,3.334l-0.667,3.332l-2.333,1.334l0.667,3l-1,2.334h-3l-0.333,2.332h-2.667l-1.333,1.334l-2.667-5l-0.333,7.334l3.333,3l-0.333,4.332l2.333,0.668v4l-2.333,0.666l-1-3.334l-1.333-0.666l-2,4l-3,1.334l-0.667,5l-10,0.666l-4.333,3.334v1.666h1.667l2.667,3l0.333,4.334l4.333,0.666l0.333,3.666l2,3.334l3,0.334l1.333-1.334l4.333,0.334l3.333,3.332l0.333,2h4l3.333,1.334l11,0.334l8.667,6l0.333,4l5,0.666l0.667,3l-2.333,2l1,1.666v6.668l9-3.334v-6.666l3.333-1.334l0.667-3l2.333-2l10-1.666l7.667,6.666l3,0.334l15.667,0.332l4-0.417l5.333-4.333l0.167-2.834l-0.833-0.333l-0.167-1.667l2.5-2.5l0.833-4l4.833-0.166l-0.167,3.333l1.167,0.167l-0.167,2.833l-1.5,0.375l-0.125,3l1.5,0.75l0.25,2.625l4.375,0.125l3.125,6.375l0.375,2.875l1,0.75v1.75l-1.125,0.375l-0.375,2.5l4.5,6l0.75,4.625l7.125,11.875l14.125-3.75l9.125-0.375l2.125-1.875l18-2v-27.125l-2.125-4l-0.5-2.375l-0.875-0.5v-1l1.375,0.25l0.125-4h1l0.25-7l2.75-4.375l1.625,0.125l11.375,8.75l13.25,0.25l3.375-2.5l-0.25-2.75l-3.75-5l0.375-5.125l3.25-6.125l-27.125-18l-22.25-18l-1.292-3.167l-2.667,0.334L161.15,302.277z").attr(attr);
		aus.vic3 = R.path("M219.525,365.527l-3.375,2.5l-13.25-0.25l-11.375-8.75l-1.625-0.125l-2.75,4.375l-0.25,7h-1l-0.125,4l-1.375-0.25v1l0.875,0.5l0.5,2.375l2.125,4v27.125l-18,2l-2.125,1.875l-9.125,0.375l-14.125,3.75l-7.125-11.875l-0.75-4.625l-4.5-6l0.375-2.5l1.125-0.375v-1.75l-1-0.75l-0.375-2.875l-3.125-6.375l-4.375-0.125l-0.25-2.625l-1.5-0.75l0.125-3l1.5-0.375l0.167-2.833l-1.167-0.167l0.167-3.333l-4.833,0.166l-0.833,4l-2.5,2.5l0.167,1.667l0.833,0.333l-0.167,2.834l-5.333,4.333l-4,0.418l1.375,0.958l-0.375,3.125l2,1.333l-0.667,9.334l2.333,2.666l-0.333,3l1.667,1.334l0.667,2.666l6,3.334l0.333,7.666l-2.333,1l-3.667,5.667l0.667,9.333l-3,5.667l-0.333,6l1.667,2l0.333,2.667l-1.667,1.333l0.667,3h5l0.229,4.188l3.563-0.063l1.125,1h2.625l0.5,6.875l4.875,5.25l3.125,0.125l0.5,1l3.875-0.25l2.125-1.75l3.875-5.25h2.625l0.5,1.125l2-0.25l3.625-4l0.375-1.75l3.375-3.375l3.875-0.125l1.125-1.875l2.875,0.125l2.75-1.75h1.5l2.875,3.375l2.5,0.375l0.25-1.125l3.75,0.25l3.375,5.5l0.5,1.5l2.125,0.125l0.625-1.25l2.125-0.625l0.25,1l-0.125,1.875l0.875,2.5l2.875,0.125l0.5-1.125l3.75,0.25l0.5,1.25l3.25,0.125l0.75-1.125l1.375-0.875l1,0.625l2.125,3.25l2,1.75l1.125,0.125v-2.875l1-0.5l0.125-1.375l1-0.5l-0.5-3.125l-0.875-0.375l0.375-0.875l2-1.5v-1.25l-1.5-0.375l0.25-2.75l2.625-2.375l0.25-1.375l-1-0.625l3-4.625l1.375-0.625l-0.125-4.375l2.25-3.875l-0.125-1.875l-1.5-0.75l0.375-2.5l2-0.875l0.25-2.125l-1.75-0.75l0.375-4h3.625l1,1.125l1.25,0.125l0.25-3.375l-1.5-0.375l0.125-3.625l8.125-4.75l2.125-0.125l3.875-2.75l0.125-3.375l5-6.125l0.125-2.5l1.125-0.875l-0.125-3.625l-3.375-5.25l-0.125-3.75l-3.5-7.625l-0.625-1.5l-1.875,0.125l-0.375,1.25l-2.875-0.125l-1.375-2l-0.125-5.875l-2.125-2.25h-3.25L219.525,365.527z").attr(attr);
		aus.vic4 = R.path("M215.025,447.068l-1.375,0.625l-3,4.625l1,0.625l-0.25,1.375l-2.625,2.375l-0.25,2.75l1.5,0.375v1.25l-2,1.5l-占쏙옙.375,0.875l0.875,0.375l0.5,3.125l-1,0.5l-0.125,1.375l-1,0.5v2.875l-1.125-0.125l-2-1.75l-2.125-3.25l-1-0.625l-1.375,0.875l-0.75,1.125l-3.25-0.125l-0.5-1.25l-3.75-0.25l-0.5,1.125l-2.875-0.125l-0.875-2.5l0.125-1.875l-0.25-1l-2.125,0.625l-0.625,1.25l-2.125-0.125l-0.5-1.5l-3.375-5.5l-3.75-0.25l-0.25,1.125l-2.5-0.375l-2.875-3.375h-1.5l-2.75,1.75l-2.875-0.125l-1.125,1.875l-3.875,0.125l-3.375,3.375l-0.375,1.75l-3.625,4l-2,0.25l-0.5-1.125H143.9l-3.875,5.25l-2.125,1.75l-3.875,0.25l-0.5-1l-3.125-0.125l-4.875-5.25l-0.5-6.875H122.4l-1.105-1.04l-3.563,0.063l0.104,0.813l-6.333-0.333l-3.667,3l0.333,5.333l0.667,2.667l-1.667,0.333v3l-4,3l-0.333,4l-2.667,1v2.667l-4.333,0.666l-1-1.666l-2.333,1.333l-0.333,5l1.667,2v3.333l2.5,1.334l0.833,2.333l3,0.667l10,5.333l1,2.333l-1,3l-6.667,4.334v13.666l-8.333,9l-0.333,3l5.333,3.667l3.333-8l3,0.333l1,1.667h1.667l2.333-1.667l5,0.001l5.667,0.666l3.333-3.667l6,2.667l1,4.667l2.979,0.333l3.354-3l3.646,1.625l6.688,1.042l3.333,3l0.667-17.334l3.667-4.333l4,1.333l5.667-0.666l3.333-4l0.333-3l6-2.667l20-21l2.667,2.334l-0.333,8.666l1.667,2l1.667-0.333l1.333-3.333l3.75,0.666l0.75,4l3,0.75l1,2.75l-2,0.25l-0.25,2.25l2.313,0.438l1.25,1.063l1.5-1.813l4.521,1.646l2.667,0.5l4.167,4.833l7.667,8l8.167,4l10.167-0.333l2.833-1.167l8.5-13.333l-3.833-0.167l-7.667-6.333l-3.5-10.333l-2.667-14.834l-2.333-7.5l-0.333-4.666l1.833-4.334l-1.333-6.5l-1.833-1.833l-0.333-3.667l-2.5-1.833l-0.167-1.667l-2.667-0.5l-4.167-3.833l-2.667-0.167l-0.667-1h-1.667v-1.333l-6.5-5.833l-3-0.75l-2.25,3.875L215.025,447.068z").attr(attr);
		aus.vic5 = R.path("M310.4,600.184l-5.75,5.5l-1.25,2l-3.75,1.75l-0.5,4.25l-4.25,5.5l0.25,3l-2,1l-9,0.75l-4.25,2.5l-5.75,11.5l-5.75,0.5l-1-1.5l-5.5-0.25l-0.75-3.75l-7-6.25l-0.5-1.75l1.25-2l-5.25-13.5l-3-0.75l-1-1.25v-3.25l1.75-0.25l0.5-3.25l-3.75-7.25l-1,0.75l-7-0.75l-0.75-4l-5.75-5.5l-0.25-4l1.5-0.5l-0.25-1.75l-2.25-1.5v-1.75l2.75-1.75l3.75,0.25l-0.25-1.25l-3.75-4.25l-1,1.25h-3.75l-0.75-2l-1.75-1l-0.25-2.75l3-0.25l0.25-2.5l-6.5-5.25l0.75-3.5l-1.25-0.5l-14-28.5l-2-1.75l1.75-1l-0.5-2.5l-2-0.75l-0.25-1.75l2.25-1.75l1.25,1.75l1.75,0.25l0.25-2.5l1.25-0.25l2.312,0.438l1.25,1.063l1.5-1.813l4.521,1.646l2.667,0.5l4.438,5.104l7.25,7.625l8.313,4.104l10.167-0.333l2.833-1.167l4.25,0.084l4-1.688l5.563-0.063l0.563-1l4-0.063l0.5-1.063l0.625,1.813l-0.813,2.625l1.813,1.188l2.625-0.125l0.75,2.5l-0.25,4.25l-0.875,1.125v3.875l-2.125,1.375l-2.75,0.125v4l1,0.375l5.375,10.625l2.5,2.25l1.5,0.375l-0.125,1.25l-1.875,1l-1.375,0.625l0.25,1.75l3.625,4.125l0.25,5.375l-1.125,0.75l0.125,3.625l2,1.625h2.25l0.75-1.25l4.625,2.5l5.75-0.25l1.25,2.125l0.5,2.375l1,0.75l0.125,1.75l3.5,2.75l1.875,0.5l0.625,2.75l3.375,2.125L310.4,600.184z").attr(attr);
		aus.vic6 = R.path("M310.43,600.208l-0.126-2l-3.375-2.125l-0.625-2.75l-1.875-0.5l-3.5-2.75l-0.125-1.75l-1-0.75l-0.5-2.375l-1.25-2.125l-5.75,0.25l-4.625-2.5l-0.75,1.25h-2.25l-2-1.625l-0.125-3.625l1.125-0.75l-0.25-5.375l-3.625-4.125l-0.25-1.75l1.375-0.625l1.875-1l0.125-1.25l-1.5-0.375l-2.5-2.25l-5.375-10.625l-1-0.375v-4l2.75-0.125l2.125-1.375v-3.875l0.875-1.125l0.25-4.25l-0.75-2.5l-2.625,0.125l-1.813-1.188l0.813-2.625l-0.625-1.813l-0.5,1.063l-4,0.063l-0.563,1l-5.563,0.063l-4,1.688l-4.25-0.084l8.521-13.385l6.583-0.168l9.583-4.167l12.75-8.333l5.5-0.167l0.917,1.084l3.333-0.167l2-2.167l1-4.416l1.917-1.334l0.417-3.25h3.917l2.75,2.167l3.917,1.333l0.5,0.75l2.417,0.084l0.583-1.334h4.5l2.583,2l4.333,0.167l0.667-1.167l1.25,0.167l0.583,1.167h1.333l1.75-2.25l2-0.417l0.417-0.833l2.167-0.084l0.583-0.916h0.833l0.5,1.083l3.667-0.083l3.583,3.833l1.584,1.25l3.25,0.25l1.25,1.667h2.833l4-2.25l3-2.667l0.75-1.083h1.417l0.5-1.084h1.333l0.583,1.25l0.25,2.584l0.834,0.166l0.083,1.084l-1.25,0.666l-1,0.834l-0.083,1.583l1.166,0.417l0.084,2.5l1.166,0.75l0.834,0.333v1.25l-0.834,0.333l-0.916,0.75l-0.167,3.584l1.083,1.083l0.75,0.916v1.417l-1.166,0.583v1.334l-0.834,0.583l0.084,1.583l5,5.167l1,0.75l0.166,2.667l1.834,0.083l2.583,2.583l3,3.334l1.75,1l2.75,2.916l2.25,0.084l0.667-0.834l4.166-0.083l2.917-2l10.917,0.083l-0.042,0.292l0.125,6.625l9.875,15.375l1.5,4.25l1.375,2.25l0.125,2.5l-1.125,0.625l0.125,2.5l-1,0.875l0.125,4.875l1.25,1l0.5,3.25l-3.313,1.438l-3.688,0.063l-1,1.25l-4.25,0.5l-1.75,2.5l-6,0.5l-2.5,2.75l-4-0.25l-2.5,5l-2.5,0.75l-0.25,1.5l-1.25,3.75l-2.5,2l-2.75,0.25l-8.25,5.25v8.75l1,0.75l-0.5,2.5l-1.75,2h-6.5l-2.25,3l-1.5,1h-6.5l-1.625-0.458l-2.875-0.292l-1.25,1.25h-3l-1.25,1l-4.25,0.25l-2.5,2.25h-2.75l-2.25-1.5l-2.5,0.5l-2.75,4.25l-4.25-0.75l-1-3l-0.375-2.917l-0.583-4.958l-9.042-9.875l-3.75-2.75l-0.75-5.75L310.43,600.208z").attr(attr);
		aus.vic7 = R.path("M411.558,535.944l-10.918-0.083l-2.916,2l-4.166,0.083l-0.668,0.834l-2.25-0.084l-2.75-2.916l-1.75-1l-3-3.334l-2.582-2.583l-1.834-0.083l-0.166-2.667l-1-0.75l-5.002-5.167l-0.082-1.583l0.832-0.583v-1.334l1.168-0.583v-1.417l-0.75-0.916l-1.084-1.083l0.166-3.584l0.918-0.75l0.834-0.333v-1.25l-0.834-0.333l-1.168-0.75l-0.082-2.5l-1.168-0.417l0.084-1.583l1-0.834l1.25-0.666l-0.084-1.084l-0.832-0.166l-0.25-2.584l-0.584-1.25h-1.334l-0.5,1.084h-1.416l-0.75,1.083l-3,2.667l-4,2.25h-2.834l-1.25-1.667l-3.25-0.25l-1.582-1.25l-3.583-3.833l-3.666,0.083l-0.5-1.083h-0.834l-0.584,0.916l-2.166,0.084l-0.416,0.833l-2,0.417l-1.75,2.25h-1.334l-0.584-1.167l-1.25-0.167l-0.666,1.167l-4.334-0.167l-2.582-2h-4.5l-0.584,1.334l-2.416-0.084l-0.5-0.75l-3.918-1.333l-2.75-2.167h-3.916l-0.417,3.25l-1.917,1.334l-1,4.416l-2,2.167l-3.333,0.167l-0.917-1.084l-5.5,0.167l-12.75,8.333l-9.583,4.167l-6.583,0.168l15.833-26.502l2.5-1.5l6.833,0.167v-0.833l3.833-1l3.667-2v-7.167l4.167-12.167l3-8.5l1.667-4.833l3.167-2.5l-0.167-3.333l-1.167-0.5l0.167-1.834l0.833-0.5h16.5l1.333-0.833l7-0.333l4.167-1.5l6.166-0.167l1.334-1.167h6l0.666-1.333l5.896,2.813l14.666,8.167l2.667,0.333l2.75,0.834v2.333l1.083,0.667l10.084,5.5l8.083,3.083l7.083,2.833l2.167,0.667l4.083-0.167l0.417,1.584l-1.25,0.5l0.083,0.833l0.25,5.333l1.334,0.75l1.833,0.334l2.667,3.166l1.333,0.667l1.667,0.25l0.833,1.417l0.083,2.5l-1.083,1.666l-2.333,3.25l-0.334,2.5l-1.333,1.167l0.083,11.583l-0.75,1.084l-0.25,12.083l-1,1.167L411.558,535.944z").attr(attr);
		aus.vic8 = R.path("M625.962,583.558l-2.979,2.771l-0.75,3.75l-3,3l-0.5,2.25l-1.75,0.75v2.5l-2.75,2.75l0.75,2.25l-0.5,1.5l-1.5,1l-0.25,5.75h-4.75l-4,6.5l-2,1.75l-7-0.75l-2-0.25l-3-1.5l-4.25-0.25l-3,0.75v7.5l3.5,1.75l-0.25,3.75l-4.25,2v2.25l1.25,0.25v1.75l-1.25,1.75h-1l-0.25,3l1.75,0.75l-0.25,2.25l-1,1.75l-2.5-1h-3.75l-4.25,3.5l-1.5,0.5l-3.75-2.75l-12.75,0.25l-5,2.75l-3.25-0.5l-3.5-3.5l-2.25-0.25l-2.25-1.5l-4.25-6.75l-1.5-0.5l-1-1.25l-0.25-2.25l-7.25-6l-7.75-1.25l-0.25-2.25l-1-0.75l-0.25-2.25l6-8v-3.75l-1-1.5l-0.25-2.5l-1-0.25l-0.25-2.5l1.25-0.25l0.25-2.25l-5.75-8l3.75-5l-0.75-3.75l-2.25-2.5l0.25-1.25l-0.5-4l-3.25-1.75l0.25-2.25l1-0.25l-0.25-1.75l1.75-0.5l-0.5-3l-4-4l-2.75-0.25l-2.5,1.5l-0.25,6.25l-2.25,1.5l0.5,3.5l-1,1.25h-2.25v4.25l-0.75,1.25l-4.75-0.25l-0.5,1.25l-2,0.5l-0.75,1.5h-3l-1,1.5h-1.5l-0.75-1.25l-3.75,0.75l-2.5,2.5h-2.75l-1.25-1.75h-5.5l-0.25-2.75l-3.75-1.75l-0.5-3.75l-2-2l-0.5-4l-4.25-4.5l0.5-6.5l-1.5-2.75l-13.75,0.25l-0.75,5.5l1.25,0.5l0.5,2.75l-1.25-0.5l-0.75,4.75l-5,1.75l-6.5,3.5l-3.271,3.729l-0.5-3.25l-1.25-1l-0.125-4.875l1-0.875l-0.125-2.5l1.125-0.625l-0.125-2.5l-1.375-2.25l-1.5-4.25l-9.875-15.375l-0.062-6.896l-0.105-19.437l1-1.167l0.25-12.083l0.75-1.084l-0.083-11.583l1.333-1.167l0.334-2.5l3.416-4.916l-0.083-2.5l-0.833-1.417l-1.667-0.25l-1.333-0.667l-2.667-3.166l-1.833-0.334l-1.334-0.75l-0.333-6.166l1.25-0.5l-0.417-1.584l4.5,0.251l1,1.166h3l6.667-8.75l4-8.25l4.25-4h2.167l6.666-7l1.667-0.334l3-3.833l2.833-0.167l19.5-21.333l3.834,3.833l0.5,2.667l5.666,5.833l1,2.834l6.834,24.833l11.833,32l12.333,31.834l1.5,1.666l1.334-0.166l1.5-0.834l7.833-1.833h3.333l1.167,4.167l2.667,11.166l4.833,8l7.667,8l0.333,1.667l-3.833,3.167l3.5,0.666l0.833,1.667l0.5,2l-1,0.833v1.5h1.333l4.5-2.5l2.167-1.833l1.333,0.5l1,1.167l2.167-0.5l0.5-1.167h8.333l0.834-0.834l1.166,0.167l0.5,0.667h2.5l3.5-2.667h2.334l3.166-3l4.834,0.167l9.166-8l5.5-0.334l3.334-2l5.333,0.167l0.5,6.167l1.833,4.333l1.667,0.667l2.333,3.5l3.167,3.5l1,0.833v1.334l3.667,3.5l0.166,7.5l3.667,3.166l2.333,0.334l1.167,1.166l-0.167,1.334l-1.166,1.166l0.333,3.5l1.167,1l-0.229,2.729L625.962,583.558z").attr(attr);
		aus.vic9 = R.path("M627.676,583.681l0.229-2.729l-1.167-1l-0.333-3.5l1.166-1.166l0.167-1.334l-1.167-1.166l-2.333-0.334l-3.667-3.166l-0.166-7.5l-3.667-3.5v-1.334l-1-0.833l-3.167-3.5l-2.333-3.5l-1.667-0.667l-1.833-4.333l-0.5-6.167l-5.333-0.167l-3.334,2l-5.5,0.334l-9.166,8l-4.834-0.167l-3.166,3h-2.334l-3.5,2.667h-2.5l-0.5-0.667l-1.166-0.167l-0.834,0.834h-8.333l-0.5,1.167l-2.167,0.5l-1-1.167l-1.333-0.5l-2.167,1.833l-4.5,2.5h-1.333v-1.5l1-0.833l-0.5-2l-0.833-1.667l-3.5-0.666l3.833-3.167l-0.333-1.667l-7.667-8l-4.833-8l-2.667-11.166l-1.167-4.167h-3.333l-7.833,1.833l-1.5,0.834l-1.334,0.166l-1.5-1.666l-12.333-31.834l-11.833-32l-6.834-24.833l-1-2.834l-5.666-5.833l-0.5-2.667l-3.834-3.833l22.96-25.402h4.334l2.583-1.917l2,0.667l19.75,10.166l12.833,4.25l5.417,2.25l5.333,4.584l4.167,2.166l4.25,3.417l4.917,0.167l3.333,2.916l4.083,2.167l5.167,2l5,1.917v6.666l0.917,1.167l0.083,11.5l0.833,0.833l0.084,11.834l1,0.916l0.083,11.667l1,1.083v6.5h5l1.5,1.084l7.75-0.084l3.25,1.25l13.25,5.5l18.25,7.334l8.25,4.333l11.917,7.917l3.333,4l5.917,10.833l4.833,10.083l5.667,8.417l5.333,9.25l4.917,8l4.864,7.219l-2.864,3.531l-1.834,0.166l-3,4.167l-2.833,0.167l-4.5,5v6l-3.25-0.5l-4.25-3l-2.25-3.25l-13.25-1.5v4.25h-1v1.75l-3.469,0.25l-5.281,7.75l-7.313-0.188").attr(attr);
		aus.vic10 = R.path("M720.753,438.621l1.625,0.875l-0.375,2.5l-7.625-0.375l-0.5,1.375l4.375,2.875l-0.125,4.25h-3.625l-0.75,3.875l-2.25,0.25v7.125h2.25l0.25,4.625l10.375,6l2.625-0.625l3.625-2.5l1.375,0.125l4.75,4.5h3.625l0.375,0.875l2.5,0.125l2-2h1.75l0.875,0.5l0.25,2.25l4.125,3.375v3.625h-1.25l-0.125,2.5l-1.125,1.625l0.125,10l-2.875,2.75l0.125,3.125l-0.875,0.125l-5.125,4.625l-0.125,2.375l-0.875,0.125l-7.5,5.5l0.25,4.375l-0.875,0.25l-0.375,3.75l-2.75,1.625l-0.375,2.625l-1.75,3.875l-15.875,10.5l-3,0.375l-2-0.375l-6.375-3.875l-4.125,0.375l-2.125,0.875l0.25,6.75l8.5,6.125l0.625,0.625l-3,2.25l-5-0.125l-1,1.25l-4-0.125l-6.042-2.625v4.5l-0.802,0.969l-4.864-7.219l-4.917-8l-5.333-9.25l-5.667-8.417l-4.833-10.083l-5.917-10.833l-3.333-4l-11.917-7.917l-8.25-4.333l-18.25-7.334l-13.25-5.5l-3.25-1.25l-7.75,0.084l-1.5-1.084h-5v-6.5l-1-1.083l-0.083-11.667l-1-0.916l-0.084-11.834l-0.833-0.833l-0.083-11.5l-0.917-1.167v-6.666l3.16,1.679l4.834,0.5l1.666,1.833h6.167l0.5,1.167l1.5,0.167l0.667-1l5.333-0.167l5.167-3.167l4,0.334l8-7.334h2.333l2.5-2.666l1.334-2l28.333-27.334l2.333-4.333l1.334-3.333l0.833-0.167l1.167,0.833l0.666,1.334l1.167-0.334l0.167-1h2.333l3,1.334l7.833,3.833l4.334,2.167l4.166,3.667l0.167,4l-0.833,0.833l-0.167,3.167l-1.167,0.833v2.333l-0.833,1l-0.333,3.334l-1,0.833l-0.167,3l-1.667,3l-1.5,1.5l0.667,1.667l23,12.833L720.753,438.621z").attr(attr);
		aus.vic11 = R.path("M664.587,343.727l7.833-9.666l2-0.334l9-7.833l3.334-0.667l3-3.333l3.666-0.167l10-5l26.667-0.333l32.334-25l10-0.166l7.166-5l2.167-0.334v5.5l-2.833,2l-0.334,6.5l1,1.334v2.5l3.667,3.832l0.333,4.168l2.5,4.332l-0.166,8.501l5.666,8l0.167,5.333l-1.833,1.667v14l3.166,2.333l0.334,8.5l-0.834,1.167l0.334,2.666l1,1.167v1.5l-2,0.167l-1.5-0.834l-1.167-1.166h-4.5l-2.667,3h-5.5l-0.833-1.667l-2.667,0.333l-0.5,1.334h-2l-0.5,1.166l-3.5-0.333l-1.333-1.5l-2.167,0.5l-1.5,1.833l-2.5-0.333l-0.833-1l-2.333,0.833l-2.334,2l-0.333,2.334l-5,4.5l-4.333,5.666l-6,11.334l0.333,8.833h-1.667l0.167,2.833l-7,7l-0.167,3.334l-0.833,0.166l0.333,2.5l-0.833,0.834l-1.5,0.166l0.25,1.834h-4.125l-1,1l0.25,3l-1.25,0.125l-0.125,8l0.006-0.013l-25.006-12.612l-23-12.833l-0.667-1.667l1.5-1.5l1.667-3l0.167-3l1-0.833l0.333-3.334l0.833-1v-2.333l1.167-0.833l0.167-3.167l0.833-0.833l-0.167-4l-4.166-3.667l-4.334-2.167l-7.833-3.833l-3-1.334h-2.333l-0.167,1l-1.167,0.334l-0.666-1.334l-1.167-0.833l1.332-2.916l1.584-5.334l0.083-7.583l1.083-2.75l1.417-0.917l1.417-2.666l0.333-2.334l1.25-0.771v-2.625L664.587,343.727z").attr(attr);
		aus.vic12 = R.path("M371.171,169.379l4.334-5.666v-8.667l-7.334-17l-0.666-10l-2.334-1.667l0.334-9l-6.334-6.333l-6.332-0.667l-5-4.333l-0.334-4.667l-13.334,4.334l-8.666,14l-5.334,1.666l-7,0.334l-11,10.333l-21.333,3l-7.333-7l-5.334-1.667l2,4.334l5.334,4.333l3.333,1.667l-3.333,13.666l1.666,1.334v6l-7.333,4.333l-0.333,3.667l4,6.333l-0.334,7l-4,3.333l0.334,8.334l-3,1.666l-0.334,4.334l-3.333,0.333l-0.667,4.333l-2.333-0.333l0.667,3l-1.334,6l-1.666,2.333l0.333,11.334l2.667,7.333l0.333,2.333l-3,0.667l-1.333,1l0.333,3.667l2,2l-0.333,10l1.333,0.666l-0.333,3.667l-5.334,3l0.667,2.333l1.333,1l-0.333,4.667l-2.667,0.333l-2.333,2.667l-2,0.333l-1-1.333l-4.667-0.667l-0.666,2l-3.667-0.333l-0.333-1.333l-5.667,0.333l-3-2.333l0.667-4.667l1-3.333l-0.334-2.334h-2.666l-1.334,3.334l-1.666,2.666l-2.667,0.667l-1,2.667l1.712,0.213l4.375,5l8.875,9.375l9.668,7.916l12.457,10.459l1.75,0.75l0.125-1.5l8.625-8.625l0.5-3.5l1.25-0.375l8.5-8.25l0.5-2.375l0.875-1l1.375,0.375l3.875,2.625l0.375,0.875v5.125l11.125-0.125v-3.75l4.875-4.75l3.875-0.25l3.125-2.75v-8.375l2.75-2.875l0.375-2.25l2.375-2.625l5.25-4l3.375-0.25l2.625-2.75l3-0.25l0.625,1.125h1.5l2.875-3.125l0.25-3.625l1-0.625l-0.25-1.25l-2.625-2.5v-1.75l2.5-1.5l0.5-1.875l2.205-2.356l3.045-3.519l2.625-0.125l5.75-5.5l0.25-2.375l1.875-0.25v-4.875l2.125-2.75v-1.375l-1.125-0.625l0.125-6.625l-1.125-1.25v-2.25l-1-1l0.125-8l-1.75-1.875l-0.125-1.125l0.875-0.875l2.75-6.125l3.25-0.625L371.171,169.379z").attr(attr);
		aus.vic13 = R.path("M219.146,346.565l-3.267,6.112l-0.375,5.125l3.75,5l0.25,2.749l2.75,3.126h3.25l2.125,2.25l0.125,5.875l1.375,2l2.875,0.125l0.375-1.25l1.875-0.125l4.125,9.125l0.125,3.75l3.375,5.25l0.125,3.625l-1.125,0.875l-0.125,2.5l-5,6.125l-0.125,3.375l-3.875,2.75l-2.125,0.125l-8.125,4.75l-0.125,3.625l1.5,0.375l-0.25,3.375l-1.25-0.125l-1-1.125h-3.625l-0.375,4l1.75,0.75l-0.25,2.125l-2,0.875l-0.375,2.5l1.5,0.75l0.125,1.875l3,0.75l6.5,5.833v1.333h1.667l0.666,1.084l2.667,0.083l4.167,3.833l2.666,0.5l0.167,1.667l2.5,1.833l0.333,3.667l1.834,1.833l1.333,6.5l-1.833,4.334l0.333,4.666l2.333,7.5l2.667,14.834l3.5,10.333l7.667,6.333l3.854,0.189l15.771-26.397l2.563-1.604l6.834,0.167v-0.833l3.832-1l3.668-2v-7.167l8.832-25.5l3.168-2.5l-0.188-3.229l-1.146-0.604l0.166-1.834l0.834-0.5h16.5l1.334-0.833l7-0.333l4.166-1.5l6.166-0.167l1.334-1.167h6l0.666-1.333l0.021-22.938l-0.417-1.021l-10.438-16.25l-0.979-0.896l-2.191-0.736l-6.392-5.848l-8.042-4.833l-6.566-3.153l-50.667-0.166l-0.833-3.168l-10.059-13.388l-10.708-4.459l-6.233-4.985l-3.834-0.25l-9.5-7L219.146,346.565z").attr(attr);
		aus.vic14 = R.path("M645.868,192.43l-1.988,0.265l-0.5,0.917l-2.333,0.25l-1.333,1.833l-2.667-0.083l-3.25-2.583l-1.25-0.083l-3.5,2.583l-3,0.167l-2.25,3.25l-1.917-0.417l-2.333-2.083l-2.667-1.333l-3.25-1l-3.083-0.417l-1.417-0.917l-13.166,4.583l-4.584,2.708l-3.25,1.625l-5.583-0.063l-1.188,1.844l-2.531,0.031l-0.281,1.063l3.75,4.125l0.125,3.5l-1.125,0.875v8.625l-1,2.25l1.125,1.25l0.041,5.542l2.792,5.792l0.125,3.833l-2.667,4.125l-4.125,3.375l-0.041,6l1.125,1.25l0.083,3.875l1.792,2.792l-0.042,6.125l1.833,1.625l0.209,2.5l11.792,17.167l0.25,10.25l0.958,1l-0.125,3.375l-0.958,0.5l0.083,4.208l2.25,1.125l9.917,0.125l4.333,3.917l1.833,0.042l0.792-1.333l2.5,0.208l0.917,1.542l0.916,0.333l3.75-2.875l4.625-0.042l8.834-5l2.041-1.458l-0.708-0.667l0.666-3.833l3.334-5.833l0.5-5.167l2.666-2.667l5.126-2.583l4.791-3.583l0.084-4.834l1.166-1.167l0.167-3.167l0.833-0.5l0.334-4l2.333-4l0.333-2l1.167-1.333v-2.667l5-0.333l2-1.167v-6.5l-4-7v-1.833l6.667-8.5l0.166-9.833l-2.666-1.833l0.166-3.167l1.167-0.667v-9l-2-1.5l0.167-2.833l1.166,0.167l0.334-4.833l-2.834-1.167v-2.167l-3.833-0.5l-5.5-3.333l-2.167-0.333v1.667L645.868,192.43z").attr(attr);
		aus.vic15 = R.path("M543.211,35.091l2.168,3.458l0.063,4.563l-0.813,0.25l-3,8.563l-0.188,2.625l-0.938,0.938l-0.063,4.438l-2,2.688l-0.063,4.438l-0.938,1.063l0.125,9.438l5.75,12.938l0.125,8.313l1.75,1.063l0.375,2.813l1.938,1.25l0.063,4l0.938,0.938l0.063,13.313l3.563,6.063l0.25,4.438l-0.938,0.875l-0.063,2.313l-0.938,0.563v9.375l-0.625,1l-0.688-0.125l-4.375-7.313l-0.313-3.563l-1.25-1.188l-1.625,0.063l-0.313,2.125l-1.563,2.063l-0.25,2.563l-4.813,3.063l-0.125,4.875l-0.813,0.375l-0.438,2l-1.5,0.125l-0.313,5.188l-1,0.438l-0.063,2.438l-0.875,1.375l-3.063,3.25l0.063,3.438l-0.959,0.021l6.646,6.479l1.75,0.5l2.625,2.75l2.875,4.75l0.32,1.695l4.867,3.742l4,6.25l3,1.875l6,6.25l1.75,0.5l4.125,4.5l3.875,0.125l7.125-2.125l0.875-0.75h3.125l0.281-1.063l2.531-0.031l1.188-1.844l5.583,0.063l3.479-1.75l4.354-2.583l13.166-4.583l1.417,0.917l3.083,0.417l3.25,1l2.667,1.333l2.333,2.083l1.917,0.417l2.25-3.25l3-0.167l3.5-2.583l1.25,0.083l3.25,2.583l2.667,0.083l1.333-1.833l2.333-0.25l0.5-0.917l1.988-0.265l-0.154-2.652l-2.501-0.5l0.167-3.5l1.667-0.167l-0.167-4.167l2-1.5l0.167-4.333l2.333-1.167l8.459-8.083l0.875-5.292l-0.167-9.042l-3.167-3.084l0.334-2l1.666-1.333l0.334-5l-1.667-1.5h-2.833l-3.834-5.5l-2.375-0.625l-5.625-0.542l-1.75,0.875l-1.792,0.792l-3.624,0.166l-0.167,1.333h-8.333l-0.667-1.5v-2l-2.333-2.333l0.291-2.75l-2.625-2.417l0.334-2.167l3-3.833v-4.167l-1.834-1.333l-0.333-8.083l-2.833-2.084l0.166-3.333l6.5-9.5l1.334,0.167l0.166-3.167l-1.666-1l0.333-2.75l2.5-4.417l0.833-0.5l-0.167-4.5l-1.5-0.333l0.167-2.667h1.5l0.167-3l-3.5-0.5l-0.167-1.333l-2.167-2.667l0.5-4.5l-3.833-3.833v-1.667l2.833-4l0.5-2l0.834-0.167l0.166-4l3.667-3.333l0.042-9.958l-3.709-2.709l-11.375-0.458l-1.291-0.875l-3.834,0.333l-3.166-3.416l0.333-7.084l-4.333-3.167l-6.25-0.167l-2.334,2.083l-4.166-0.292l-2.417,2.292l-10.333,0.75l-2.458-2.125l-8,0.5l-1,3.167l-1.5,1.5l-4,6.667l-6.667,0.333l-1.667,1.333l-2.666,3.5h-2L543.211,35.091z").attr(attr);
		aus.vic16 = R.path("M461.379,39.236l0.417,2.542l0.792,0.458l0.166,4.917l0.75,0.625l0.167,3.417l2.75,2.5l3.125,0.125l3.042,3.458l-0.125,5.75l1.416,1.583l2.042,0.208l2.375,3.458l0.292,2.792l2.875,3.125v2l-1.584,3.375l-4.25,1.667l-0.125,8.792l1.792,2.417l0.208,1.625l-4.167,2.708l-0.083,3.292l-0.792,0.417l-0.166,3.5l-1,0.583l-0.125,3.125l-0.708,0.542l0.083,11.167l5.417,5.917l6.75,0.167l0.916-0.75l1.917,0.333l5.833,4.75l2.084,0.417l2,2.417l1.083,0.083l13.167,13.083l0.916,3.75l2.834,3.75l2.916,0.667l3.167,7.156l0.917,2.677l5.082,4.208l0.959-0.021l-0.063-3.438l3.063-3.25l0.875-1.375l0.063-2.438l1-0.438l0.313-5.188l1.5-0.125l0.438-2l0.813-0.375l0.125-4.875l4.813-3.063l0.25-2.563l1.563-2.063l0.313-2.125l1.625-0.063l1.25,1.188l0.313,3.563l4.375,7.313l0.688,0.125l0.625-1v-9.375l0.938-0.563l0.063-2.313l0.938-0.875l-0.25-4.438l-3.563-6.063l-0.063-13.313l-0.938-0.938l-0.063-4l-1.938-1.25l-0.375-2.813l-1.75-1.063l-0.125-8.313l-5.75-12.938l-0.125-9.438l0.938-1.063l0.063-4.438l2-2.688l0.063-4.438l0.938-0.938l0.188-2.625l3-8.563l0.813-0.25l-0.063-4.563l-2.168-3.458l-1.665,0.375l-1.667-3.167v-9.667l-1.667-3.667l-1.833-0.667l-2.833,2.833l-2.834,0.333l-2.666-2.833l-0.334-2.333l-2.5-2l-2,0.167l-3.5,3.667l-3.166,0.167l-1.5,2.833l-4.334,0.167l-1.333,1.333l-2.667-0.667l-0.854-2.75l-4.146-7.083l-0.166-6.333l-3-4.167h-1.667l-2.5,2.167l-8-0.333l-3.333-3.167l-8.167-0.167l-0.667,3.5l-2.166,3l-3,2.667l-3.667,0.333l-1.5,1.833l-0.5,9l-2.5,2l-0.167,3l1,1.5L461.379,39.236z").attr(attr);
		aus.vic17 = R.path("M539.758,184.337l-2.716,1.409l-3.313,3l-1.5,3.25l-1.813,5.188l-3.313,3.625l-2.25,0.188l-8.313,10.938l-3,0.125l-5,5.563l-2.313,0.125l-1.938,2.313l-0.75-0.125l-0.25-6.875l-1.938-0.125l-0.938-1l-3.063,0.063l-0.813,0.813h-4.313l-2.063,1.625l-1.438,0.063l-1.75-2.625h-2.5l-5.125-5.063l-6.75-0.063l-0.563-0.688l-3.625-3.188l-1.938-0.063l-1.563-1.5l-4.25-6.625l-0.25-7.5l1-0.438v-1.063l-1.438-1.875l-2.25-0.063l-0.375,0.813l-2.5-0.125l-2.781-2.406l-2.969-2.344l-3.625-0.188l-0.938-1.813l-1.834-0.521l-1.041-2.479l-1.594-0.156l-0.531-0.156l-0.406-1.875l-0.75-2.594l-2.063-0.219l-2.115-2.188l-2.26-2.688l-3.938-0.344l-0.25-1.219l-0.969-1.438l-0.969-0.188l-9.344-7.188l1.063-0.813l0.333-5.833l1.667-1l0.166-2.167l-4.833-4l0.5-3.5l2.333-2v-8.333l-1.833-1.167l-4.5-5.833l-0.833-3.5l-2.167-1.667l-0.833-5.333l2.5-2.833l3.666-0.5l7.667-7l-0.167-2.833h1.167l0.333-5.833l1.5-3l5,0.167l5.167-4.5l-0.333-5.667h1.666l-0.333-2.667l-1.167-0.333l-0.166-11.667l-1.167-0.5l-1.5-1v-1.833l2.167-0.499l-1.5-0.834l0.5-3.833l-1.167-0.5v-3.333h2.167l6.666-5l0.5-3.5l3.167-0.333l0.333-1l3.5,0.167l0.834,1.167h3.5l1.417-2.208l7.916-0.208l0.417,2.542l0.792,0.458l0.166,4.917l0.75,0.625l0.167,3.417l2.75,2.5l3.125,0.125l3.042,3.458l-0.125,5.75l1.416,1.583l2.042,0.208l2.375,3.458l0.292,2.792l2.875,3.125v2l-1.584,3.375l-4.25,1.667l-0.125,8.792l1.792,2.417l0.208,1.625l-4.167,2.708l-0.083,3.292l-0.792,0.417l-0.166,3.5l-1,0.583l-0.125,3.125l-0.708,0.542l0.083,11.167l5.417,5.917l6.75,0.167l0.916-0.75l1.917,0.333l5.833,4.75l2.084,0.417l2,2.417l1.083,0.083l13.167,13.083l0.916,3.75l2.834,3.75l2.916,0.667l3.167,7.156l0.917,2.677l5.082,4.208l6.646,6.479l1.75,0.5l2.625,2.75l2.875,4.75L539.758,184.337z").attr(attr);
		aus.vic18 = R.path("M400.234,165.236l-7.667,0.333l-3.833,2.333l-8.167,0.167l-2.833,2.5h-5.833l-0.671-1.171l-15.496,8.796l-3.25,0.625l-2.75,6.125l-0.875,0.875l0.125,1.125l1.75,1.875l-0.125,8l1,1v2.25l1.125,1.25l-0.125,6.625l1.125,0.625v1.375l-2.125,2.75l-0.049,4.839l1.069,0.327l-0.083,3.083l4.083,4l3,5.917l-3,4.833l-0.083,2.5l1.083,0.917l0.083,4.5l1.25,1.167l0.5-0.75l3.417,0.083l4.667,2.833v6l1.25,0.833v1.083l-3.417,2.5l0.083,1.167l2.167,1.583v2.333l-1,1.833l-1,1v10.667l1.167,0.917l-0.084,4.917l-1.166,0.75v2.582l1.25,0.918v1.582l-0.917,0.918l-6.75,3.832v1.168l1.333,1.332l8.063,9.709l14.584,18.041l0.792-0.166l4.166-4.709l5.292,0.084l3.083-3.083l4.667,0.042l1.167,1.208l14.916-0.083l1.792,1.875l16.542,0.041l2.208-1.834l5.583-0.25l1.084-0.916l18.166,0.084l2.584-2.168h3.166l2.334,1.917l5.416,0.083l0.584-0.833l2.416-0.25l6.834-4.833l4.916-0.084v-14.583l-2-0.25l-1.333-1.167l-2,0.084l-0.417,0.916l-3,1.917l-0.916-0.167l-1.5-1.416l0.25-2.334l0.917-0.583v-1.417l-3.167-3.166v-1.75l-3.917-0.084l-0.916,1.167l-5,0.083l-1.25,2.75l-3.084,0.084l-3.833-4.917l0.083-1.083l1-0.334v-2.166l-1.083-0.833l0.083-2.75l-1.083-2.083l-1.917-0.917l-3.083-2.333l-4.917-6.417l-0.083-4.167l-1.5-1.083l-4.667,0.083l-0.75,1.083h-5.083l-0.583,0.75l-2.417,0.083l-0.583-0.75h-2.75l-2.334,1.833h-2.416l-10.834-8.833l-1.916-0.25l-3.417-1.333l-3.083-0.833l-2.75-1.417l-0.834-1.417l-0.166-4.167l1.083-0.833l0.416-2.333l5.917-4.333l2.833-0.5l8.667-4.5l0.083-4.167l-1.083-1.167l0.25-4.167l1-0.583l0.083-1.333l-2.083-1.083v-6.917l1.917-3.5l-2.75-3.083l-3-4.917l-0.25-2.5l-0.833-1.083l-0.084-4.583l1-0.25l0.25-1.167l-2.333-2.167l-0.167-3.5l-4.5-6.083l-0.25-6.5l-3.583-1.417l-2-0.167l-0.667,1.167l-3.666-0.083l-0.084-4.333l1.167-0.583L400.234,165.236z").attr(attr);
		aus.vic19 = R.path("M351.435,217.521l-1.826,0.286l-0.25,2.375l-5.75,5.5l-2.625,0.125l-5.25,5.875l-0.5,1.875l-2.5,1.5v1.75l2.625,2.5l0.25,1.25l-1,0.625l-0.25,3.625l-2.875,3.125h-1.5l-0.625-1.125l-3,0.25l-2.625,2.75l-3.375,0.25l-5.25,4l-2.375,2.625l-0.375,2.25l-2.75,2.875v8.375l-3.125,2.75l-3.875,0.25l-4.875,4.75v3.75l-11.125,0.125l0-5l-0.375-1l-3.875-2.625l-1.375-0.375l-0.875,1l-0.5,2.375l-8.5,8.25l-1.25,0.375l-0.5,3.5l-8.625,8.625l-0.125,1.5l6.5,6.125l9,6.75l7.083,4.375l7.667,4l7.125,2.75l4.125,0.875l8,5.125v0.75l-2.438,4.375v4.563l-1,0.375l0.063,0.563l0.625,0.563l0.125,1.188l1.313,0.125l15.125,6.438l1.313,1.313l1.438,0.063l12.875-4.938l29.563-0.125l4.313-3.354l1.063-1.479l3.958-0.084l4.417-4.793l2.292-0.707l3.125-0.209l0.333-1.334l-0.958-0.75l-0.209-2.332l-4.458-6.042l-12.834-15.875l-9.813-11.875l-1.333-1.333v-1.167l6.75-3.833l0.917-0.917v-1.583l-1.25-0.917v-2.583l1.166-0.75l0.084-4.917l-1.167-0.917v-10.667l1-1l1-1.833v-2.333l-2.167-1.583l-0.083-1.167l3.417-2.5v-1.083l-1.25-0.833v-6l-4.563-2.792l-3.521-0.125l-0.5,0.75l-1.25-1.167l-0.083-4.5l-1.083-0.917l0.083-2.5l3-4.833l-3-5.917l-4.083-4l0.083-3.083L351.435,217.521z").attr(attr);
		aus.vic20 = R.path("M223.579,264.906l-1.712-0.212l-1.997,0.003l-2.666,5l-1.334,3.667l-2.333,1l-1.333,4.667l1,1l-0.667,6l1,1.333v3.667l-3,2.667h-19.333l-4.334,3.333l-2.333,0.333l-7,5l-2.667-0.333l-3,1l-3.333,0.667v3.666l1.292,3.167l22.25,18l27.141,18.013l4.667,1.918l9.5,7l3.833,0.25l6.172,4.944l10.771,4.5l10.057,13.388l0.834,3.168l50.666,0.166l6.568,3.153l8.041,4.833l6.391,5.848l2.193,0.736l5.729-0.917l5-0.063l4.688-2.125l6-6.125l5.438-7.313l1.875-0.5l0.125-1.688l-2.125-0.063v-3.688l11.624-10.063l0.063-2.438l-1.688-2.625l-0.063-2.813l-1.063-0.625l0.063-4.063l-1.061-0.688l0.188-1.75l3.936-4.125l-4.124-4.479l-4.313,3.354l-29.563,0.125l-12.875,4.938l-1.438-0.063l-1.313-1.313l-15.125-6.438l-1.313-0.125l-0.125-1.188l-0.625-0.563l-0.063-0.563l1-0.375v-4.563l2.438-4.375v-0.75l-8-5.125l-4.125-0.875l-7.125-2.75l-7.833-4.083l-6.917-4.292l-9-6.75l-6.5-6.125l-1.75-0.749l-12.666-10.626l-9.459-7.75l-9.438-10L223.579,264.906z").attr(attr);
		aus.vic21 = R.path("M388.333,347.944h-2l-2.125,3.125l-3.125,0.125l-5.5,4.875l0.063,2.813l1.688,2.625l-0.063,2.438l-11.625,10.063v3.688l2.125,0.063l-0.125,1.688l-1.875,0.5l-5.438,7.313l-6,6.125l-4.688,2.125l-4.688,0.063l-6.041,0.917l0.979,0.896l10.438,16.25l0.416,1.021l-0.02,22.938l5.895,2.813l14.668,8.167l2.666,0.333l2.75,0.834v2.333l3.875,2.188l7.292,3.979l10.188,3.917l4.958,1.979l2.188,0.688l4.083-0.167l4.5,0.251l1,1.166h3l3.573-4.688l3.094-4.063l4-8.25l4.25-4h2.167l6.666-7l1.667-0.334l3-3.833l2.833-0.167l19.54-21.347l12.221-13.476l-2.25-2.375l0.125-5.531l-5.969-4.188h-6.688l-2.25-2.125l-0.125-1.188l0.875-0.563l0.125-1l-2.063-1.063l0.125-2.125l1.125-0.563l-0.188-3.563l-1.875-1l-0.188,1.25l-1.125,0.938l-4.438-4.875l-0.125-1.313l0.938-0.125l0.063-3l0.938-0.188l-0.188-1.688l-3.688-3.813l-1.063,1.313l-1.5,0.125l-0.5-1.5l-1.625,0.125l-0.438,1l-6.313,0.063l-2.75,2.813l0.063,1.75l-4.438-0.125l-0.813-0.938l0.063-2.625l-2.25-2.063l-2.563-0.063l-0.125-2.75l-6.063-0.188l-2.938-3.063l-0.125-1.875l-4.125-0.125l-0.438,1.125h-0.688l-1.75-1.875l-3.813-0.063l-1.375,2l-1.813-0.125l-3.063-5.125l-1.625,0.188l-0.25,4.125l-3.125-0.063l-4.625-2.938l-5.625-0.063L388.333,347.944z").attr(attr);
		aus.vic22 = R.path("M490.81,308.742l-4.916,0.084l-6.75,4.791l-2.5,0.292l-0.584,0.833l-5.417-0.082l-2.333-1.918h-3.166l-2.584,2.168l-18.166-0.084l-1.084,0.916l-5.583,0.25l-2.208,1.834l-16.542-0.041l-1.792-1.875l-14.916,0.083l-1.167-1.208l-4.667-0.042l-3.083,3.083l-5.292-0.084l-4.166,4.709l-0.792,0.166l4.458,6.042l0.209,2.332l0.958,0.75l-0.333,1.334l-3.125,0.209l-2.292,0.707l-4.417,4.793l-3.958,0.084l-1.063,1.479l4.126,4.479l-3.938,4.125l-0.188,1.75l1.063,0.688l-0.063,4.063l1.063,0.625l5.5-4.875l3.125-0.125l2.125-3.125h2l-0.063,1.938l5.625,0.063l4.625,2.938l3.125,0.063l0.25-4.125l1.625-0.188l3.063,5.125l1.813,0.125l1.375-2l3.813,0.063l1.75,1.875h0.688l0.438-1.125l4.125,0.125l0.125,1.875l2.938,3.063l6.063,0.188l0.125,2.75l2.563,0.063l2.25,2.063l-0.063,2.625l0.813,0.938l4.438,0.125l-0.063-1.75l2.75-2.813l6.313-0.063l0.438-1l1.625-0.125l0.5,1.5l1.5-0.125l1.063-1.313l3.688,3.813l0.188,1.688l-0.938,0.188l-0.063,3l-0.938,0.125l0.125,1.313l4.438,4.875l1.125-0.938l0.625-4.188l2.542-4.666l2.375-0.959l6.125-5.666l4.5-5.584l0.291-2.334l1.917-6.166l6.75-3.625l1.5,0.125l0.5,1.125l1.125-0.125l0.125-6l5.875-6.375l0.75-1.5l0.125-3.875l-4.375-0.25l-1.875-1.625L490.81,308.742z").attr(attr);
		aus.vic23 = R.path("M580.442,224.185l-3.875,2.5l-10,2.625l-2.875,0.625l-3.875,5.375l-0.25,2.875l-1.25,0.75h-8.5l-1.375,2.125l-4.125-0.125l-1.375-1.5l-1.625,2.5l-4.5,8.75l-3.125,0.25l-2.5-1.125l-1.25,1.875l-1.625-1.625h-2.875l-6.25,12.5l-2.583,0.542l-1,1.167l0.167,2.083l-6.084,5.917l-0.416,2.5l-3.167,4.167l-15.334,15.333l-2-0.25l-1.333-1.167l-2,0.084l-0.417,0.916l-2.916,1.875l-1-0.125l-1.5-1.416l0.25-2.334l0.833-0.541l0.084-1.459l-3.167-3.166v-1.75l-3.917-0.084l-0.916,1.167l-5,0.083l-1.25,2.75l-3.084,0.084l-3.833-4.917l0.083-1.083l1-0.334v-2.166l-1.083-0.834l0.083-2.75l-1.083-2.083l-1.917-0.917l-3.083-2.333l-4.917-6.417l-0.083-4.167l-1.5-1.083l-4.667,0.083l-0.75,1.083h-5.083l-0.583,0.75l-2.417,0.083l-0.583-0.75h-2.75l-2.334,1.833h-2.416l-10.834-8.833l-1.916-0.25l-3.24-1.26l-3.26-0.906l-2.75-1.417l-0.834-1.417l-0.166-4.167l1.083-0.833l0.416-2.333l5.917-4.333l2.75-0.469l8.75-4.531l0.083-4.167l-1.083-1.167l0.25-4.073l1-0.677l0.083-1.333l-2.083-1.083v-6.917l1.917-3.5l-2.75-3.083l-3.011-4.844l-0.239-2.573l-0.833-1.083l-0.084-4.583l1-0.25l0.25-1.167l-2.333-2.167l-0.167-3.5l-4.5-6.083l-0.25-6.5l-3.583-1.417l-2-0.167l-0.667,1.167l-3.666-0.083l-0.084-4.333l1.167-0.583l0.333-2.667l4-4.667l4.333-0.167l8.104-6.021l9.344,7.188l0.969,0.188l1,1.531l0.219,1.125l3.938,0.344l2.344,2.781l2.031,2.094l2.063,0.219l0.75,2.594l0.406,1.875l0.75,0.188l1.375,0.125l1.041,2.479l1.834,0.521l0.938,1.813l3.625,0.188l2.969,2.344l2.781,2.406l2.5,0.125l0.375-0.813l2.25,0.063l1.438,1.875v1.063l-1,0.438l0.25,7.5l4.25,6.625l1.563,1.5l1.938,0.063l3.625,3.188l0.563,0.688l6.656,0.031l5.219,5.094h2.5l1.75,2.625l1.438-0.063l2.063-1.625h4.313l0.813-0.813l3.063-0.063l0.938,1l1.938,0.125l0.25,6.875l0.75,0.125l1.938-2.313l2.313-0.125l5-5.563l3-0.125l8.313-10.938l2.25-0.188l3.313-3.625l1.813-5.188l1.5-3.25l3.313-3l2.716-1.409l4.867,3.742l4,6.25l3,1.875l6,6.25l1.75,0.5l4.125,4.5l3.875,0.125l7.125-2.125l0.875-0.75h3.125l3.792,4.167l0.125,3.5l-1.125,0.875v8.625L580.442,224.185z").attr(attr);
		aus.vic24 = R.path("M580.566,223.841l-3.875,2.5l-10.542,2.75l-2.333,0.5l-3.875,5.375l-0.25,2.875l-1.25,0.75h-8.5l-1.375,2.125l-4.125-0.125l-1.375-1.5l-1.625,2.5l-4.5,8.75l-3.125,0.25l-2.5-1.125l-1.25,1.875l-1.625-1.625h-2.875l-6.25,12.5l-2.583,0.542l-1,1.167l0.167,2.083l-6.084,5.918l-0.416,2.5l-3.167,4.166l-15.334,15.333v14.583l1.104,0.021l2.979,3.229l0.5-1.25l2.417-0.167l2.75,3.25l6.666,0.084l6.584-6.084l3.75-0.083l3.583-1.917l5.25-0.083l3.25,3l2.167,0.167l7.75,5.25v2.666h2.083l17.083,16.001h7.5l0.917,0.916l6.5,0.25l3.916,1.834h2.584l0.583,1h2.25l1.25-0.916l0.5-3.918l2-2.334l-0.083-4.166l3.75-4.417l3.083-8.584v-3.5l1.25-0.332l-0.083-4.209l0.958-0.5l0.125-3.375l-0.958-1l-0.25-10.25l-11.792-17.166l-0.209-2.5l-1.833-1.625l0.042-6.125l-1.792-2.792l-0.083-3.875l-1.125-1.25l0.041-6l4.125-3.375l2.667-4.125l-0.125-3.833l-2.792-5.792l-0.041-5.542L580.566,223.841z").attr(attr);
		aus.vic25 = R.path("M594.672,308.712l-1.25,0.332v3.5l-3.083,8.584l-3.75,4.417l0.083,4.166l-2,2.334l-0.5,3.917l1.333,1.5l0.084,2.833l-30.479,66.958l-2.063,5.375l4.042,0.167l3.333,2.916l3.958,2.084l10.298,3.987l3.16,1.679l4.834,0.5l1.666,1.833h6.167l0.5,1.167l1.5,0.167l0.667-1l5.333-0.167l5.167-3.167l4,0.334l8-7.334h2.333l2.5-2.666l1.334-2l28.333-27.334l2.333-4.333l1.334-3.333l0.834-0.167l1.332-2.916l1.584-5.334l0.083-7.583l1.083-2.75l1.417-0.917l1.417-2.666l0.333-2.334l1.25-0.771v-2.625l1.334-4.271l-3.334,0.334l-1-2l1.666-0.167l-0.333-1.667l-2.5-1.833l-0.667,0.667l-0.166,1.5h-6.334l-0.333,4.166l-4-0.166l-3.333-1.667l-3.5-2.833l-0.167-2l-2.333-1.834l-0.334-4.5l1.167-0.666l-0.167-3.667l1.167-0.167l0.167-3.666l1-0.5l0.166-3.167l0.667-0.167l0.167-6.666l1.666-0.834v-3.833l-1.416-0.958l-3.084-0.375l-1.958-1.833l-2.041,1.458l-8.834,5l-4.625,0.041l-3.75,2.875l-0.916-0.332l-0.917-1.543l-2.5-0.207l-0.792,1.332l-1.833-0.041l-4.333-3.916l-9.917-0.125L594.672,308.712z").attr(attr);

		// 지정된 지도 그리기.. and 이벤트 부여
		var current = null;
		for (var state in aus) {
	        (function(st, state) {
	            st[0].style.cursor = "pointer";
	            
	            //마우스 올려놓을 때 이벤트
	            st[0].onmouseover = function() {
//	            		console.log($('#locName').val());
	            		$('#locName').text((locInfo["loc" + st.id][0]));
						if (current == st.id) { return }
						$(st.node).attr('fill', '#000000');
						$(st.node).attr('stroke', '#000000');
		            };
		            
		        //커서의 포커스가 없어졌을 때
	            st[0].onmouseout = function() {
					if (current == st.id) { return }
					$(st.node).attr('fill', '#FFFFFF');
					$(st.node).attr('stroke', '#000000');
	            };
	            
	            //클릭  했을때
	            st[0].onclick = function(){
	    			console.log('onClick - ' + locInfo["loc" + st.id][0]);
					$('input[name=lawd_name]').val((locInfo["loc" + st.id][0]));
	    		};
	        })(aus[state], state);
	    }
});