import moment from 'moment';
import { EJSON } from 'meteor/ejson'

AutoForm.hooks({
  insertProcessForm: {
    before: {
     insert: function(doc) {
       return doc;
     }
   },
   onSuccess: function(insert, result) {
     Bert.alert('Process Successfully Created', 'success');
     AutoForm.resetForm(insertProcessForm);
   },
   onError: function(insert, result){
     console.log(result);
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
  }
});
