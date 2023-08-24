(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/south-america.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['br', 10], ['ec', 11], ['ve', 12], ['cl', 13], ['ar', 14],
        ['uy', 16], ['py', 17],['gy', 20]
    ];

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology,
            backgroundColor: '#f8fafc'
        },

        title: {
            text: 'Disponibilidade de serviços do SISME por país'
        },

        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/south-america.topo.json">South America</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();
