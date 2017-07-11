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
     AutoForm.resetForm(insertActivitesForm);
   },
   onError: function(insert, result){
     console.log(result);
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
  }
});
