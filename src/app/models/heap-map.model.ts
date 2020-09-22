export const HEATMAPMODEL = {
    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: ''
    },

    xAxis: {
        opposite: true,
        categories: ['0-20k', '20-50k', '50-100k', '100-200k', '200-500k', '500k +'],
        // categories: [],

        title: {
            text: 'Limits',
        },
        // tickPositions: [10000, 20000, 42000, 60000],
        min: 0,
        // max: 100000
    },

    yAxis: {
        min: 0,
        // max: 100000,
        categories: ['0-20k', '20-50k', '50-100k', '100-200k', '200-500k', '500k +'],
        title: {
            text: 'Attachments',
        },
        labels: {
            rotation: 270,
        },
        reversed: true
    },

    accessibility: {
        // point: {
        //   descriptionFormatter: function (point) {
        //     var ix = point.index + 1,
        //       xName = getPointCategoryName(point, 'x'),
        //       yName = getPointCategoryName(point, 'y'),
        //       val = point.value;
        //     return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
        //   }
        // }
    },

    colorAxis: {
        min: 0,
        minColor: '#d1c4ff',
        maxColor: '#301887'
    },

    legend: {
        enabled: false,
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        // formatter: function () {
        //   return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
        //     this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
        // }
    },

    series: [{
        name: 'Sales per employee',
        // borderWidth: 1,
        // data: [[20000, 20000, 10000], [20000, 45000, 19859], [20000, 73000, 2128], [20000, 12300, 20004], [20000, 57000, 60007],
        // [45000, 20000, 35592], [45000, 45000, 11258], [45000, 73000, 77778], [45000, 12300, 11337], [45000, 57000, 57238],
        // [73000, 20000, 35535], [73000, 45000, 11215], [73000, 73000, 13323], [73000, 12300, 63214], [73000, 57000, 22252],
        // [12300, 20000, 35572], [12300, 45000, 112132], [12300, 73000, 11224], [12300, 12300, 13569], [12300, 57000, 19746],
        // [40000, 20000, 35538], [40000, 45000, 1125], [40000, 73000, 11118], [40000, 12300, 11447], [40000, 57000, 35115],
        // [57000, 20000, 35588], [57000, 45000, 11232], [57000, 73000, 5512], [57000, 12300, 6778], [57000, 57000, 10020]],

        data: [[0, 0, 10967], [0, 1, 19967], [0, 2, 8967], [0, 3, 24967], [0, 4, 67967],
        [1, 0, 92967], [1, 1, 58967], [1, 2, 78967], [1, 3, 117967], [1, 4, 48967], [2, 0, 35967],
        [2, 1, 15967], [2, 2, 123967], [2, 3, 64967], [2, 4, 52967], [3, 0, 72967], [3, 1, 132967],
        [3, 2, 114967], [3, 3, 19967], [3, 4, 16967], [4, 0, 38967], [4, 1, 5967], [4, 2, 8967],
        [4, 3, 117967], [4, 4, 115967],
        [5, 0, 88967], [5, 1, 32967], [5, 2, 12967], [5, 3, 6967], [5, 4, 12860]],

        dataLabels: {
            enabled: true,
            color: 'white',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',

            }
        },
        showInLegend: false
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                }
            }
        }]
    }
}