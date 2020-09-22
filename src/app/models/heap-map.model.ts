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
        categories: ['0-20k', '20-50k', '50-100k', '100-200k', '200-500k', '500k +']
    },

    yAxis: {
        categories: ['0-20k', '20-50k', '50-100k', '100-200k', '200-500k', '500k +'],
        title: null,
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
        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120]],
        dataLabels: {
            enabled: true,
            color: 'white',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',

            }
        }
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