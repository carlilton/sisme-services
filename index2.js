(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/south-america.topo.json'
    ).then(response => response.json());

    // Instantiate the map
    Highcharts.mapChart('mapa', {
        chart: {
            map: topology,
            spacingBottom: 20
        },

        title: {
            text: 'SISME services availability by country'
        },

        accessibility: {
            series: {
                descriptionFormat: 'Timezone {series.name} with {series.points.length} countries.'
            },
            point: {
                valueDescriptionFormat: '{point.name}.'
            }
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            map: {
                allAreas: false,
                joinBy: ['iso-a2', 'code'],
                borderColor: '#fff',
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style: {
                        fontWeight: 'bold'
                    },
                    // Only show dataLabels for areas with high label rank
                    format: '{#if (lt point.properties.labelrank 5)}' +
                        '{point.properties.iso-a2}' +
                        '{/if}'
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{series.name}</b>'
                }
            }
        },

        series: [
            {
                name: 'South America',
                color: '#E0E0E0',
                data: ['BR','EC','CL','AR','PE','BO','SR','CO',
                'UY','PY','GY', 'VE'].map(code => ({ code })),
                borderColor: 'white',
            borderWidth: 0.2,
            states: {
                hover: {
                    borderWidth: 1
                }
            },
            },
            {
            name: 'On line',
            color: '#38c172',
            data: ['AR', 'UY'].map(code => ({ code })),
            borderColor: 'white',
            borderWidth: 0.2,
            states: {
                hover: {
                    borderWidth: 1
                }
            },
        }, {
            name: 'Off',
            color: '#bd2130',
            data: ['PY'].map(code => ({ code })),
            borderColor: 'white',
            borderWidth: 0.2,
            states: {
                hover: {
                    borderWidth: 1
                }
            },
        },
        {
            name: 'Partial',
            color: '#f6993f',
            data: ['BR', 'CL'].map(code => ({ code })),
            borderColor: 'white',
            borderWidth: 0.2,
            states: {
                hover: {
                    borderWidth: 1
                }
            },

          
        }
    ]
    });

})();