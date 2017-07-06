Meteor.methods({
  rollup: function(){
    var subs = Subactivities.find().fetch();
    var acts = Activities.find().fetch();
    var sce = Scenarios.find().fetch();
    _.forEach(subs, function(sub){
      // console.log(sub._id);
    });
  }
});
