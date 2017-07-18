import './processDetails.html';
import '/imports/ui/pages/scenarios/scenarios.js'
import '/imports/ui/pages/app/application.js'
import '/imports/ui/reports/docx.js'


Template.processDetails.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  scenarios: function(){
    var pro = this._id;
    var app = Session.get('app');
    return Scenarios.find({process: pro, application: app}).fetch();
  },
  topGenresChart: function(){
    var chartType = Session.get('chartType');
    var pro = this._id;
    var app = Session.get('app');
    var sces = Scenarios.find({process: pro, application: app}).fetch();
    var chartInfo = [];
    var cats = [];


    var catsFinal = [];

    _.forEach(sces, function(sce){
      var actCount = Activities.find({scenario: sce._id}).count();
      cats.push(actCount);
    });

    var catsReturn = Math.max.apply(null, cats);

    //sets number of activities for the chart
    for (i = 0; i < catsReturn; i++) {
      var ob = 1 + i;
      catsFinal.push("Activity " + ob);
    }

    // pushes last column as total cost for that scenario
    catsFinal.push("Total Cost");

    _.forEach(sces, function(sce){
      var chartData = [];
      var acts = Activities.find({scenario: sce._id}).fetch();

      //pushes activity rollup to chartData
      _.forEach(acts, function(act){
        chartData.push([
          act.name, act.rollup
        ]);
      });

      if (chartData.length < catsReturn) {
        var length = chartData.length;
        for (i = length; i < catsReturn; i++) {
          var spot = i + 1;
          chartData.push(["Activity " + spot, 0]);

        }
      }
      // console.log(chartData.length);
      // for (chartData.length; chartData.length < catsReturn; chartData.length++) {
      //   chartData.push(["0",0]);
      //   console.log(chartData.length);
      // }

      //pushes Totals for scenario for last
      chartData.push([
        sce.name + " Total", sce.rollup
      ]);

      var sceInfo = {
        type: chartType,
        name: sce.name,
        data: chartData,
      };
      chartInfo.push(sceInfo);
    });

    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: this.name + "'s Graph"
      },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
      },
      xAxis: {
        categories: catsFinal,
        crosshair: true
      },
      plotOptions: {
          // pie: {
          //   allowPointSelect: true,
          //   cursor: 'pointer',
          //   dataLabels: {
          //     enabled: true,
          //     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          //     style: {
          //         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          //     },
          //     connectorColor: 'silver'
          //   }
          // },
          column: {
            pointPadding: 0,
            borderWidth: 0,
            groupPadding: 0,
            shadow: false,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: ${point.rollup:.1f}',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              },
            }
          },
      },
      series: chartInfo
    }
  }

});

Template.processDetails.events({
  'click .column': function(){
    Session.set('chartType', 'column');
  },
  'click .pie': function(){
    Session.set('chartType', 'pie');
  },
  'click .line': function(){
    Session.set('chartType', 'line');
  },
  'click .bar': function(){
    Session.set('chartType', 'bar');
  },
  'click .cloneApp': function(){
    var app = Session.get('app');
    Meteor.call('cloneApplication', this, app);
  }
});

Template.processDetails.onRendered( function(){
  Session.set('process', this.data._id);
  Session.set('app', this.data.app[0].name);
});
