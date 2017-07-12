import moment from 'moment';
import { EJSON } from 'meteor/ejson'

AutoForm.hooks({
  insertProcessForm: {
    before: {
     insert: function(doc) {
       doc.timeperiod.time = moment.duration(doc.timeperiod.duration, doc.timeperiod.type).asMilliseconds();
       console.log(doc);
       return doc;
     }
   },
   onSuccess: function(insert, result) {
     Bert.alert('Process Successfully Created', 'success');
     $('#processModal').modal('hide')
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
