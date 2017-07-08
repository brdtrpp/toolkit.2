Meteor.methods({
  deleteProcess: function(doc){
    Processes.remove({_id: doc._id});  
  }
})
