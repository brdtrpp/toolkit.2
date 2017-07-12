Meteor.methods({
  deleteProcess: function(doc){
    Processes.remove({_id: doc});
    var sces = Scenarios.find({process: doc}).fetch();
    _.forEach(sces, function(sce){
      Meteor.call('deleteScenario', sce._id)
    });
  },
  cloneProcess: function(){
    console.log('Process Clone Called');
  }
})
