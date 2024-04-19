function chartValueInit() {
  const ctx = document.getElementById('myChartValue');

  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
        ],
        datasets: [
          {
            label: 'Base',
            data: [3300, 3500, 3400, 3200, 3500, 3250],
            fill: true,
            pointStyle: false,
            borderColor: '#7F8ACA',
            backgroundColor: (context) => {
              const bgColor = [
                'rgba(68, 80, 130, 0.2)',
                'rgba(68, 80, 130, 0)',
              ];
              if (!context.chart.chartArea) {
                return;
              }
              const {
                ctx,
                data,
                chartArea: { top, bottom },
              } = context.chart;
              const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
              gradientBg.addColorStop(0, bgColor[0]);
              gradientBg.addColorStop(1, bgColor[1]);
              return gradientBg;
            },
            borderWidth: 2,
          },
          {
            label: 'Comparison',
            data: [1700, 1800, 1850, 1600, 1500, 1650],
            fill: true,
            pointStyle: false,
            borderColor: '#AD81D2',
            backgroundColor: (context) => {
              const bgColor = [
                'rgba(68, 80, 130, 0.2)',
                'rgba(68, 80, 130, 0)',
              ];
              if (!context.chart.chartArea) {
                return;
              }
              const {
                ctx,
                data,
                chartArea: { top, bottom },
              } = context.chart;
              const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
              gradientBg.addColorStop(0, bgColor[0]);
              gradientBg.addColorStop(1, bgColor[1]);
              return gradientBg;
            },
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            max: 6000,
            min: 0,
            ticks: {
              stepSize: 1500,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              pointStyleWidth: 1,
              color: '#2B3C6B',
              font: {
                size: 14,
                weight: 600,
                family: "'Inter', sans-serif",
              },
            },
          },
        },
      },
    });
  }
}

function chartValueDifference() {
  const ctx = document.getElementById('myChartDifference');

  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
          'Jan 4, 2022/Jul 4,2023',
        ],
        datasets: [
          {
            label: 'Difference',
            data: [3, 5, 2, -3, 2, 3, 0, 3, 0],
            fill: true,
            pointStyle: false,
            borderColor: '#7F8ACA',
            backgroundColor: (context) => {
              const bgColor = [
                'rgba(68, 80, 130, 0.2)',
                'rgba(68, 80, 130, 0)',
              ];
              if (!context.chart.chartArea) {
                return;
              }
              const {
                ctx,
                data,
                chartArea: { top, bottom },
              } = context.chart;
              const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
              gradientBg.addColorStop(0, bgColor[0]);
              gradientBg.addColorStop(1, bgColor[1]);
              return gradientBg;
            },
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            max: 6,
            min: -6,
            ticks: {
              callback: (value, index, values) => {
                return `${value} %`;
              },
              stepSize: 3,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              pointStyleWidth: 1,
              color: '#2B3C6B',
              font: {
                size: 14,
                weight: 600,
                family: "'Inter', sans-serif",
              },
            },
          },
        },
      },
    });
  }
}

function waterfallChart() {
  const ctx = document.getElementById('waterfallChart');

  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'platform:Android',
          'majorOsVersion: IOS 13, phonebrand: Iphone',
          'All others',
          'Total',
        ],
        datasets: [
          {
            label: 'Base',
            data: [
              [0, -1552],
              [400, 750],
              [750, 901],
              [901, 800],
            ],
            fill: true,
            backgroundColor: ['#F04438', '#12B76A', '#12B76A', '#445082'],
            borderColor: ['#F04438', '#12B76A', '#12B76A', '#445082'],
            borderWidth: 1,
            skippedBorder: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            max: 1600,
            min: -1600,
            ticks: {
              stepSize: 400,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}

export { chartValueInit, chartValueDifference, waterfallChart };
