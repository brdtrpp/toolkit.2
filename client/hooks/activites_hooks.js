import moment from 'moment';
import { EJSON } from 'meteor/ejson';

AutoForm.hooks({
  insertActivitesForm: {
    before: {
     insert: function(doc) {
       doc.rollup = 0;
       return doc;
     }
   },
   onSuccess: function(insert, result) {
     Bert.alert('Activity Successfully Created', 'success');
     $('#activityModal').modal('hide');
     var actId = Session.get('act');
     var act = Activities.findOne(actId).scenario;
     Meteor.call('updateScenario', act);
   },
   onError: function(insert, result){
     console.log(result);
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
 },
 updateActivitesForm:{
   onSuccess:function(update, result){
     Bert.alert('Update Successfully Created', 'success');
     $('#activityUpdateModal').modal('hide');
     var actId = Session.get('act');
     var act = Activities.findOne(actId).scenario;
     Meteor.call('updateScenario', act);
   }
 }
});
