

$(document).ready(function () {

  var $primary = '#7367F0',
    $success = '#28C76F',
    $danger = '#EA5455',
    $warning = '#FF9F43',
    $info = '#00cfe8',
    $label_color_light = '#dae1e7';

  var themeColors = [$primary, $success, $danger, $warning, $info];

  // RTL Support
  var yaxis_opposite = false;
  if($('html').data('textdirection') == 'rtl'){
    yaxis_opposite = true;
  }

  // Line Chart
  // ----------------------------------
  var lineChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: "Balance",
      data: [6089260, 1077547, 2172314, 3486562, 10392593, 11363050, 6235896, 23310077, 7000000,3153577,23875136,4252303,8163540,11857970,7311752,10720861,6677274,2419490,7800199,701130,125671,3960898,1900000,1759411,1500000,7513420],
    }],
    title: {
      text: 'Total Balance',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Customer 1', 'Customer 2', 'Customer 3', 'Customer 4', 'Customer 5', 'Customer 6', 'Customer 7', 'Customer 8', 'Customer 9','Customer 10', 'Customer 11', 'Customer 12', 'Customer 13', 'Customer 14', 'Customer 15', 'Customer 16', 'Customer 17', 'Customer 18','Customer 19', 'Customer 20', 'Customer 21', 'Customer 22', 'Customer 23', 'Customer 24', 'Customer 26', 'Customer 26'],
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChart = new ApexCharts(
    document.querySelector("#line-chart-tbalance"),
    lineChartOptions
  );
  lineChart.render();




  var lineChartOptions_bankbalance = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: "Balance",
      data: [-76466, -36413.89, 45266, 5000, 9529],
    }],
    title: {
      text: 'Bank Balance',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Saudi Fransi', 'Saudi Hollandi', 'Riyadh Bank', 'SAMBA', 'NCB'],
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChartbankbalance = new ApexCharts(
    document.querySelector("#line-chart-bankbalance"),
    lineChartOptions_bankbalance
  );
  lineChartbankbalance.render();



  var lineChartOptions_advbal = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: "Due",
      data: [118185, 5869.21, 6830, 153600, 0, 6424.53, 178530.39, 954003.35, -46458.44, -28196.14, 260000],
    }],
    title: {
      text: 'Total Balance',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Subco A', 'Subco B', 'Subco C', 'Subco D', 'Subco E', 'Subco F', 'Subco G', 'Subco H', 'Subco I', 'Subco J', 'Subco K'],
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChart_adv = new ApexCharts(
    document.querySelector("#line-chart-advancedue"),
    lineChartOptions_advbal
  );
  lineChart_adv.render();




  var lineChartOptions_subbal = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: "Balance",
      data: [-19232.25, -1, -36051.65, 66172, -386233.2, -0.84, -11388.49, -1750, -0.64, -4907, -471687,],
    }],
    title: {
      text: 'Total Balance',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Subco A', 'Subco B', 'Subco C', 'Subco D', 'Subco E', 'Subco F', 'Subco G', 'Subco H', 'Subco I', 'Subco J', 'Subco K'],
    },
    yaxis: {
      tickAmount: 5,
      opposite: yaxis_opposite
    }
  }
  var lineChart_subbal = new ApexCharts(
    document.querySelector("#line-chart-subbal"),
    lineChartOptions_subbal
  );
  lineChart_subbal.render();

  // Line Area Chart
  // ----------------------------------
  var lineAreaOptions = {
    chart: {
      height: 350,
      type: 'area',
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
      name: 'Actual',
      data: [2170, 2310, 1991, 1843, 345, 234, 2196, 1766, 3038, 3234, 2787, 2580]
    }, {
      name: 'Budget',
      data: [1791, 1857, 1845, 1653, 444, 54, 2034, 1444, 2508, 2600, 2584, 2314]
    }],
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'Month',
      categories: ["Jan (2.2 m)", "Feb (2.3 m)", "Mar (2.0 m)", "Apr (1.8 m)", "May (0.3 m)", "Jun (0.2 m)", "Jul (2.2 m)", "Aug (1.8 m)", "Sep (3.0 m)", "Oct (3.2 m)", "Nov (2.8 m)", "Dec (2.6 m)"
      ],
    },
    yaxis: {
      opposite: yaxis_opposite
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  }
  var lineAreaChart = new ApexCharts(
    document.querySelector("#line-area-chart"),
    lineAreaOptions
  );
  lineAreaChart.render();


  var lineAreaOptionsquantity = {
    chart: {
      height: 350,
      type: 'area',
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
      name: 'CY',
      data: [41, 37, 49, 43, 35, 33, 34, 37, 36, 33, 34, 35]
    }, {
      name: 'PY',
      data: [35, 26, 33, 20, 35, 21, 35, 33, 33, 23, 25, 27]
    }],
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'Month',
      categories: ["Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020", "May 2020", "Jun 2020", "Jul 2020", "Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020", "Dec 2020"
      ],
    },
    yaxis: {
      opposite: yaxis_opposite
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  }
  var lineAreaChartquantity = new ApexCharts(
    document.querySelector("#line-area-chart-quantity"),
    lineAreaOptionsquantity
  );
  lineAreaChartquantity.render();



  var lineAreaOptions_profit = {
    chart: {
      height: 350,
      type: 'area',
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
      name: 'Sales (in %)',
      data: [6, 0, -3, 15, -6]
    }, {
      name: 'Profit (in %)',
      data: [22, 31, 10, 16, 21]
    }],
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'Month',
      categories: ['Household', 'Furniture', 'Hardware', 'Clothing', 'IT'],
    },
    yaxis: {
      opposite: yaxis_opposite
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  }
  var lineAreaChart_profit = new ApexCharts(
    document.querySelector("#line-area-chart-profit"),
    lineAreaOptions_profit
  );
  lineAreaChart_profit.render();


  // Column Chart
  // ----------------------------------
  var columnChartOptions = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'Hires',
      data: [5, 11, 4, 5, 3, 6, 9, 14, 7, 4]
    }, {
      name: 'Termination',
      data: [7, 3, 3, 3, 2, 3, 3, 1, 1, 3]
    }],
    legend: {
      offsetY: -10
    },
    xaxis: {
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    },
    yaxis: {
      // title: {
      //   text: '$ (thousands)'
      // },
      opposite: yaxis_opposite
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          // return "$ " + val + " thousands"
          return  val 
        }
      }
    }
  }
  var columnChart = new ApexCharts(
    document.querySelector("#column-chart"),
    columnChartOptions
  );

  columnChart.render();



  var columnChartOptions_control = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'PY',
      data: [12, 16, 19]
    }, {
      name: 'CY',
      data: [14, 1, 22]
    }],
    legend: {
      offsetY: -10
    },
    xaxis: {
      categories: ['IT', 'HR', 'OPs'],
    },
    yaxis: {
      // title: {
      //   text: '$ (thousands)'
      // },
      opposite: yaxis_opposite
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          // return "$ " + val + " thousands"
          return  val 
        }
      }
    }
  }
  var columnChart_control = new ApexCharts(
    document.querySelector("#column-chart-control"),
    columnChartOptions_control
  );

  columnChart_control.render();




  var columnChartOptions_exp = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [{
      name: 'PY',
      data: [776, 1005, 913, 776, 1096]
    }, {
      name: 'CY',
      data: [1038, 849, 755, 1038, 1038]
    }],
    legend: {
      offsetY: -10
    },
    xaxis: {
      categories: ['Operations', 'Strategy', 'Finance', 'Commercial', 'HR'],
    },
    yaxis: {
      // title: {
      //   text: '$ (thousands)'
      // },
      opposite: yaxis_opposite
    },
    fill: {
      opacity: 1

    },
    tooltip: {
      y: {
        formatter: function (val) {
          // return "$ " + val + " thousands"
          return  val 
        }
      }
    }
  }
  var columnChart_exp = new ApexCharts(
    document.querySelector("#column-chart-exp"),
    columnChartOptions_exp
  );

  columnChart_exp.render();





  // Bar Chart
  // ----------------------------------
  var barChartOptions = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      data: [10392593, 7000000,  23875136, 10720861, 701130]
    }],
    xaxis: {
      categories: ['Customer 5', 'Customer 9', 'Customer 11',  'Customer 16', 'Customer 20'],
      tickAmount: 5
    },
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var barChart = new ApexCharts(
    document.querySelector("#bar-chart-360"),
    barChartOptions
  );
  barChart.render();


  var barChartOptionsloan = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      data: [10392593, 7000000,  23875136, 10720861, 701130]
    }],
    xaxis: {
      categories: ['Customer 5', 'Customer 9', 'Customer 11',  'Customer 16', 'Customer 20'],
      tickAmount: 5
    },
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var barChartloan = new ApexCharts(
    document.querySelector("#bar-chart-loan"),
    barChartOptionsloan
  );
  barChartloan.render();



  var barChartOptionspp = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      data: [66172, 386233,  471687, 19232, 409862, 2216238, 43823, 1114445, 35279, 49565, 150796]
    }],
    xaxis: {
      categories: ['Subco D', 'Subco E', 'Subco K',  'Subco A', 'Supp F', 'Supp A', 'Supp B', 'Supp C', 'Supp L', 'Supp M', 'Supp N'],
      tickAmount: 5
    },
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var barChartpp = new ApexCharts(
    document.querySelector("#bar-chart-pp"),
    barChartOptionspp
  );
  barChartpp.render();


  var barChartOptionsep = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      data: [7153420, 4252303,  3960898, 3486562, 2172314, 1900000, 1759411, 1500000, 1077547]
    }],
    xaxis: {
      categories: ['Customer D', 'Customer E', 'Customer K',  'Customer A', 'Customer F', 'Customer A', 'Customer B', 'Customer C', 'Customer L'],
      tickAmount: 5
    },
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var barChartep = new ApexCharts(
    document.querySelector("#bar-chart-ep"),
    barChartOptionsep
  );
  barChartep.render();



  var barChartOptionsfte = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      data: [58, 35,  16, 9]
    }],
    xaxis: {
      categories: ['Cardiff', 'Swansea', 'Newport',  'Llanelli'],
      tickAmount: 5
    },
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var barChartfte = new ApexCharts(
    document.querySelector("#bar-chart-fte"),
    barChartOptionsfte
  );
  barChartfte.render();



  var barChartOptionsmore360 = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: "Due",
      data: [1077547, 2171314, 3486562, 10392593, 4252303]
    }],
    xaxis: {
      categories: ['Customer 2', 'Customer 3', 'Customer 4',  'Customer 5', 'Customer 12'],
      tickAmount: 5
    },
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var barChartmore360 = new ApexCharts(
    document.querySelector("#bar-chart-more360"),
    barChartOptionsmore360
  );
  barChartmore360.render();



  var barChartOptionsnetpayable = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      data: [-2921087.47, 1608787.90, -5527231.27, -865080.07]
    }],
    xaxis: {
      categories: ['Retention', 'Advance', 'Suppliers Balance',  'Subco Balance'],
      tickAmount: 5
    },
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var barChartnetpayable = new ApexCharts(
    document.querySelector("#bar-chart-netpayable"),
    barChartOptionsnetpayable
  );
  barChartnetpayable.render();


  // Mixed Chart
  // -----------------------------
  var mixedChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    colors: themeColors,
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    
    series: [{
      name: 'Volume',
      type: 'column',
      data: [88000, 83000, 48000, 65000, 34000]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [2170, 2310, 1991, 1843, 345]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [1791, 1857, 1845, 1653, 444]
    }],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ['Household', 'Furniture', 'Hardware', 'Clothing', 'IT'],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -10
    },
    xaxis: {
      type: 'points'
    },
    yaxis: {
      min: 0,
      tickAmount: 5,
      title: {
        text: 'Points'
      },
      opposite: yaxis_opposite
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " views";
          }
          return y;

        }
      }
    }
  }
  var mixedChart = new ApexCharts(
    document.querySelector("#mixed-chart"),
    mixedChartOptions
  );
  mixedChart.render();

  // Candlestick Chart
  // -----------------------------
  var candleStickOptions = {
    chart: {
      height: 350,
      type: 'candlestick',
    },
    colors: themeColors,
    series: [{
      data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      },
      {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
      },
      {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
      },
      {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
      },
      {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
      },
      {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
      },
      {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
      },
      {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
      },
      {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
      },
      {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
      },
      ]
    }],
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tickAmount: 5,
      tooltip: {
        enabled: true
      },
      opposite: yaxis_opposite
    }
  }
  var candleStickChart = new ApexCharts(
    document.querySelector("#candlestick-chart"),
    candleStickOptions
  );
  candleStickChart.render();

  // 3D Bubble Chart
  // -----------------------------

  function generateDataBubbleChart(baseval, count, yrange) {
    var i = 0;
    var seriesBubbleChart = [];
    while (i < count) {
      // var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      seriesBubbleChart.push([baseval, y, z]);
      baseval += 86400000;
      i++;
    }
    return seriesBubbleChart;
  }
  var bubbleChartOptions = {
    chart: {
      height: 350,
      type: 'bubble',
    },
    colors: themeColors,
    dataLabels: {
      enabled: false
    },
    legend: {
      offsetY: -10
    },
    series: [{
      name: 'Product1',
      data: generateDataBubbleChart(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product2',
      data: generateDataBubbleChart(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product3',
      data: generateDataBubbleChart(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'Product4',
      data: generateDataBubbleChart(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }
    ],
    fill: {
      type: 'gradient',
    },
    xaxis: {
      tickAmount: 12,
      type: 'datetime',

      labels: {
        rotate: 0,
      }
    },
    yaxis: {
      max: 70,
      tickAmount: 5,
      opposite: yaxis_opposite
    },
    theme: {
      palette: 'palette2'
    }
  }
  var bubbleChart = new ApexCharts(
    document.querySelector("#bubble-chart"),
    bubbleChartOptions
  );
  bubbleChart.render();

  // Scatter Chart
  // -----------------------------

  var scatterChartOptions = {
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy'
      },
    },
    colors: themeColors,
    series: [{
      name: "SAMPLE A",
      data: [
        [16.4, 5.4],
        [21.7, 2],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7.4],
        [10.9, 0],
        [10.9, 8.2],
        [16.4, 0],
        [16.4, 1.8],
        [13.6, 0.3],
        [13.6, 0],
        [29.9, 0],
        [27.1, 2.3],
        [16.4, 0],
        [13.6, 3.7],
        [10.9, 5.2],
        [16.4, 6.5],
        [10.9, 0],
        [24.5, 7.1],
        [10.9, 0],
        [8.1, 4.7],
        [19, 0],
        [21.7, 1.8],
        [27.1, 0],
        [24.5, 0],
        [27.1, 0],
        [29.9, 1.5],
        [27.1, 0.8],
        [22.1, 2]
      ]
    }, {
      name: "SAMPLE B",
      data: [
        [6.4, 13.4],
        [1.7, 11],
        [5.4, 8],
        [9, 17],
        [1.9, 4],
        [3.6, 12.2],
        [1.9, 14.4],
        [1.9, 9],
        [1.9, 13.2],
        [1.4, 7],
        [6.4, 8.8],
        [3.6, 4.3],
        [1.6, 10],
        [9.9, 2],
        [7.1, 15],
        [1.4, 0],
        [3.6, 13.7],
        [1.9, 15.2],
        [6.4, 16.5],
        [0.9, 10],
        [4.5, 17.1],
        [10.9, 10],
        [0.1, 14.7],
        [9, 10],
        [12.7, 11.8],
        [2.1, 10],
        [2.5, 10],
        [27.1, 10],
        [2.9, 11.5],
        [7.1, 10.8],
        [2.1, 12]
      ]
    
    }],
    legend: {
      offsetY: -10
    },
    xaxis: {
      tickAmount: 10
    },
    yaxis: {
      tickAmount: 7,
      opposite: yaxis_opposite
    }
  }
  var scatterChart = new ApexCharts(
    document.querySelector("#scatter-chart"),
    scatterChartOptions
  );
  scatterChart.render();

  // Pie Chart
  // -----------------------------
  var pieChartOptions = {
    chart: {
      type: 'pie',
      height: 350
    },
    colors: themeColors,
    labels: ['Customer 1', 'Customer 6', 'Customer 8', 'Customer 10', 'Customer 11', 'Customer 13', 'Customer 14', 'Customer 15', 'Customer 17', 'Customer 19', 'Customer 21', 'Customer 23', 'Customer 24', 'Customer 26', 'Customer 26'],
    series: [6089260, 11363050, 23310077, 3153577, 23875136, 8163540, 11857970, 7311752, 6677274, 7800199, 125671, 1900000, 1759411, 1500000, 7513420],
    legend: {
      itemMargin: {
        horizontal: 2
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  var pieChart = new ApexCharts(
    document.querySelector("#pie-chart-30days"),
    pieChartOptions
  );
  pieChart.render();



  var pieChartOptionsloan = {
    chart: {
      type: 'pie',
      height: 350
    },
    colors: themeColors,
    labels: ['SHB Loans', 'Saudi Fransi Loans', 'NCB Loans'],
    series: [295539, 1439025, 195812],
    legend: {
      itemMargin: {
        horizontal: 2
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  var pieChartloan = new ApexCharts(
    document.querySelector("#pie-chart-loan"),
    pieChartOptionsloan
  );
  pieChartloan.render();


  var pieChartOptions90 = {
    chart: {
      type: 'pie',
      height: 350
    },
    colors: themeColors,
    labels: ['Customer 1', 'Customer 6', 'Customer 7', 'Customer 8', 'Customer 10', 'Customer 13', 'Customer 14', 'Customer 15', 'Customer 17', 'Customer 19', 'Customer 22', 'Customer 26'],
    series: [6089260, 11363050, 6235896, 23310077, 3153577, 8163540, 11857970, 7311752, 6677274,  701130, 1900000, 7513420],
    legend: {
      itemMargin: {
        horizontal: 2
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  var pieChart90 = new ApexCharts(
    document.querySelector("#pie-chart-90days"),
    pieChartOptions90
  );
  pieChart90.render();


  var pieChartOptionsodsf = {
    chart: {
      type: 'pie',
      height: 350
    },
    colors: themeColors,
    labels: ['Limit', 'Utilized'],
    series: [500000, 76466],
    legend: {
      itemMargin: {
        horizontal: 2
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  var pieChartodsf = new ApexCharts(
    document.querySelector("#pie-chart-odsf"),
    pieChartOptionsodsf
  );
  pieChartodsf.render();


  var pieChartOptionsodsh = {
    chart: {
      type: 'pie',
      height: 350
    },
    colors: themeColors,
    labels: ['Limit', 'Utilized'],
    series: [100000, 36413],
    legend: {
      itemMargin: {
        horizontal: 2
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  var pieChartodsh = new ApexCharts(
    document.querySelector("#pie-chart-odsh"),
    pieChartOptionsodsh
  );
  pieChartodsh.render();



  var pieChartOptionscapex = {
    chart: {
      type: 'pie',
      height: 350
    },
    colors: themeColors,
    labels: ['EMP 1', 'EMP 2', 'EMP 3', 'EMP 4', 'EMP 5'],
    series: [412, 405, 395, 389, 376],
    legend: {
      itemMargin: {
        horizontal: 2
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  var pieChartcapex = new ApexCharts(
    document.querySelector("#pie-chart-capex"),
    pieChartOptionscapex
  );
  pieChartcapex.render();





  // Donut Chart
  // -----------------------------
  var donutChartOptions = {
    chart: {
      type: 'donut',
      height: 350
    },
    colors: themeColors,
    series: [44, 55, 41, 17],
    legend: {
      itemMargin: {
        horizontal: 2
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 350
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  var donutChart = new ApexCharts(
    document.querySelector("#donut-chart-90days"),
    donutChartOptions
  );

  donutChart.render();

  // Radial Bar Chart
  // -----------------------------
  var radialBarChartOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    colors: themeColors,
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          }
          // total: {
          //   show: true,
          //   label: 'Total',
            
          //   formatter: function (w) {
              
          //     return 249
          //   }
          // }
        }
      }
    },
    series: [23, 72, 41],
    labels: ['IT', 'HR', 'OPs'],
  }
  var radialBarChart = new ApexCharts(
    document.querySelector("#radial-bar-chart"),
    radialBarChartOptions
  );
  radialBarChart.render();

  // Radar Chart
  // -----------------------------
  var radarChartOptions = {
    chart: {
      height: 350,
      type: 'radar',
    },
    colors: themeColors,
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }],
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    dataLabels: {
      style: {
        color: $label_color_light
      }
    }
  }
  var radarChart = new ApexCharts(document.querySelector("#radar-chart"), radarChartOptions);
  radarChart.render();

  // Heat Map Chart
  // -----------------------------
  function generateData(count, yrange) {
    var i = 0,
      series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString(),
        y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
  var heatChartOptions = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: [$primary],
    series: [{
      name: 'Metric1',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric2',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric3',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric4',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric5',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric6',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric7',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric9',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    }
    ],
    yaxis: {
      opposite: yaxis_opposite
    }
  }
  var heatChart = new ApexCharts(
    document.querySelector("#heat-map-chart"),
    heatChartOptions);
  heatChart.render();
});
