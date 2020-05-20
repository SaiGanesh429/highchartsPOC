export const STACKCHART = {
    chart: {
        type: 'column',
        backgroundColor: '#08a87c'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'sept']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        },
        max: 2000,
        tickInterval: 500,
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: 'gray'
            }
        }
    },
    legend: {
        align: 'left',
        x: 70,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'test',
        data: [500, 300, 400, 700, 200, 1000, 400, 600]
    }, {
        name: 'test 2',
        data: [200, 400, 100, 200, 100, 600, 900, 200]
    }]
};

