function gengraph(divname, data){
    var chart = AmCharts.makeChart(divname, {
        "type": "serial",
        // "titles":[{"text":"Step Line Chart"}],
        "theme": "none",
        "autoMarginOffset":25,
        "categoryField" : "x",
        "dataProvider": data,
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left"
        }],
        "graphs": [{
            "id":"g1",
            "balloonText": "[[category]]<br><b>[[value]] C</b>",
            "type": "step",
            "bullet":"circle",
            "bulletAlpha":0,
            "bulletSize":4,
            "bulletBorderAlpha":0,
            "valueField": "y"
        }],
        "chartScrollbar": {
            "graph":"g1",
            "gridAlpha":0,
            "color":"#888888",
            "scrollbarHeight":45,
            "backgroundAlpha":0,
            "selectedBackgroundAlpha":0.1,
            "selectedBackgroundColor":"#888888",
            "graphFillAlpha":0,
            "autoGridCount":true,
            "selectedGraphFillAlpha":0,
            "graphLineAlpha":1,
            "graphLineColor":"#c2c2c2",
            "selectedGraphLineColor":"#888888",
            "selectedGraphLineAlpha":1
        },
        "chartCursor": {
            "fullWidth":true,
            "cursorAlpha": 0.05,
            "graphBulletAlpha":1

        },
        "export": {
            "enabled": true
         }
    });

    return chart
}