import moment from 'moment';
import { EJSON } from 'meteor/ejson';

AutoForm.hooks({
  insertSubactivityForm: {
    before: {
     insert: function(doc) {
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
  }
});
