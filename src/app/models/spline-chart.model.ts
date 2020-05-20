export const SPLINECHART = {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        },
        max: 1500,
        min: 0,
        tickInterval: 500
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'July'],
        // alignTicks: false
       
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            // pointInterval: 3600000, // one hour
            // pointStart: 500
        }
    },

    series: [{
        name: 'Installation',
        data: [490, 500, 1000, 800, 600, 400, 200]
        // data: [{ x: 'Chrome', y: 61.41 },
        // { x: 'Internet Explorer', y: 11.84 },
        // { x: 'Firefox', y: 10.85 },
        // { x: 'Edge', y: 4.67 },
        // { x: 'Safari', y: 4.18 },
        // { x: 'Other', y: 7.05 }]
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