export const STACKCOLUMNMODEL = {
    chart: {
        type: 'column'
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
        }
    },

    xAxis: {
        // accessibility: {
        //     rangeDescription: 'Range: 2010 to 2017'
        // }
        categories: ['200', '2002', '2003', '2004', '2005', '2006', '2007', '2008']
    },

    legend: {
        align: 'center',
        verticalAlign: 'top',
        symbolRadius: 0,
        // x: 0,
        // y: 0,
        // useHTML: true,
        // labelFormatter: function () {
        //     return '<div style="width:200px;"><span style="float:left; margin-left:10px"><img src = "http://cdn.onlinewebfonts.com/svg/img_508736.svg" width = "40px" height = "40px" style="background-color: green;"></span><span style="padding:9px">' + 100 + '%</span></div>';
        // }
    },
    exporting: {
        buttons: {
            contextButton: {
                enabled: true,
                menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'],
            },
        },
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        color: '#fa6400',
        borderColor: '#fa6400',
        zoneAxis: 'x',
        zones: [{
            value: 7
        }, {
            dashStyle: 'LongDash',
            color: 'rgba(250, 100, 0, 0.1)',
        }]
    },
    {
        data: [9.9, 57.5, 96.4, 19.2, 44.0, 16.0, 65.6, 68.5, 126.4, 89.1, 94.6, 54.4],
        color: '#44D7B6',
        borderColor: '#44D7B6',
        zoneAxis: 'x',
        zones: [{
            value: 7
        }, {
            dashStyle: 'LongDash',
            color: '#CCEDE7',
        }]
    },
    {
        data: [69.9, 107.5, 196.4, 69.2, 44.0, 16.0, 215.6, 98.5, 76.4, 109.1, 294.6, 154.4],
        color: '#32C5FF',
        borderColor: '#32C5FF',
        zoneAxis: 'x',
        zones: [{
            value: 7
        }, {
            dashStyle: 'LongDash',
            color: '#CAE9F7',
        }]
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