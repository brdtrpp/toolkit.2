import './processDetails.html';
import '/imports/ui/pages/scenarios/scenarios.js'
import '/imports/ui/pages/app/application.js'


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

});

Template.processDetails.events({
  'click .change-chart': function(){
    Session.set('chartType', 'column');
  }
});

Template.processDetails.onRendered( function(){
  Session.set('process', this.data._id);
  Session.set('app', this.data.app[0].name);
});

Template.processDetails.topGenresChart = function() {
  var chartType = Session.get('chartType');
  var pro = this._id;
  var app = Session.get('app');
  var sces = Scenarios.find({process: pro, application: app}).fetch();
  var chartInfo = [];


  _.forEach(sces, function(sce){
    var chartData = [];
    var acts = Activities.find({scenario: sce._id}).fetch();
    _.forEach(acts, function(act){
      chartData.push([
        act.name, act.rollup
      ]);
    });
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
      text: this.name + "'s Charting"
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
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
        // column: {
        //   pointPadding: 0,
        //   borderWidth: 0,
        //   groupPadding: 0,
        //   shadow: false
        // },
    },
    series: chartInfo
  };
};
