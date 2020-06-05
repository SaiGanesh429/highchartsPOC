export const BUBBLECHART = {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        backgroundColor: '#e475e6'
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
        max: 100,
        min: 0,
        tickInterval: 20
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        },
        tickInterval: 2,
        labels: {
            format: '{value} %'
        }
    },


    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        scatter: {
            marker: {
                radius: 10,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(50,205,50)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        },
        series: {
            dataLabels: {
                enabled: true,
                align: 'left',
                borderRadius: '10',
                className: "labeltesting",
                color: 'white',
                y: 0,
                x: 8,
                format: ` {point.name}`
            }
        }
    },

    series: [{
        name: 'Installation',
        data: [{ x: 2, y: 25, name: 'Belgium' },
        { x: 4, y: 30, name: 'Germany' },
        { x: 6, y: 45, name: 'Finland' },
        { x: 5, y: 55, name: 'Netherlands' },
        { x: 10, y: 80, name: 'Sweden' },
        { x: 8, y: 100, name: 'Spain' },]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 1000
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

