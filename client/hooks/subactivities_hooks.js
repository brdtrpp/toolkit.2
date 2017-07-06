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
     $('#insertSubactivityFormWell').collapse('hide');
     AutoForm.resetForm(insertSubactivityForm);
   },
   onError: function(insert, result){
     console.log(result);
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
  }
});
