export const LINECHART = {
    chart: {
        type: 'line'
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
        verticalAlign: 'bottom',
        x: 0,
        y: 0,
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
        // series: {
        //     label: {
        //         connectorAllowed: true,
        //         enabled: false,
        //     },
        //     pointStart: 2001,
        // },
    },

    series: [{
        name: 'USA',
        data: [
            90, 130, 280, 600, 470, 330, 190, 67
        ],
        zoneAxis: 'x',
        zones: [{
            value: 3
        }, {
            dashStyle: 'dash'
        }]
    }
    // , {
    //     name: 'USSR/Russia',
    //     data: [
    //         100, 200, 300, 400, 500, 400, 300, 200
    //     ],
    //     zoneAxis: 'x',
    //     zones: [{
    //         value: 4
    //     }, {
    //         dashStyle: 'dash'
    //     }]
    // }
],

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