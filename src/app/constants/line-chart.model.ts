export const LINECHART = {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        x: 0,
        y: 0,
        useHTML: true,
        labelFormatter: function () {
            return '<div style="width:200px;"><span style="float:left; margin-left:10px"><img src = "http://cdn.onlinewebfonts.com/svg/img_508736.svg" width = "40px" height = "40px" style="background-color: green;"></span><span style="padding:9px">' + 100 + '%</span></div>';
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: true,
                enabled: false,
            },
            pointStart: 2001,
        },
    },

    series: [{
        dashStyle: 'Dash',
        marker: {
            symbol: 'diamond'
        },
        name: 'Installation',
        data: [1, 5, 12, 3, 3, 6, 3]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
};