import moment from 'moment';
import { EJSON } from 'meteor/ejson';

AutoForm.hooks({
  insertSubactivityForm: {
    before: {
     insert: function(doc) {
       act = Session.get('act');
       doc.activity = act;
       return doc;
     }
   },
   onSuccess: function(insert, result) {
     Bert.alert('Subactivity Successfully Created', 'success');
     var act = Subactivities.findOne({_id: result}).activity;
     Meteor.call('updateActivity', act);
     $('#subactivityModal').modal('hide')
     AutoForm.resetForm(insertSubactivityForm);
   },
   onError: function(insert, result){
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
 },

 updateSubactivityForm:{
   onSuccess: function(update, result) {
     $('#subactivityUpdateModal').modal('hide');
     var sub = Session.get('sub');
     var act = Subactivities.findOne(sub).activity;
     Meteor.call('updateActivity', act);
     Bert.alert('Subactivity Successfully Updated', 'success');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
 }
});
