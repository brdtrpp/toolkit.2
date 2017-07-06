import moment from 'moment';
import { EJSON } from 'meteor/ejson';

AutoForm.hooks({
  insertScenarioForm: {
    before: {
     insert: function(doc) {
       console.log(doc);
       return doc;
     }
   },
   onSuccess: function(insert, result) {
     Bert.alert('Scenario Successfully Created', 'success');
     $('#insertSubactivityFormWell').collapse('hide');
     AutoForm.resetForm(insertScenarioForm);
   },
   onError: function(insert, result){
     console.log(result);
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
  }
});
