import moment from 'moment';

AutoForm.hooks({
  insertSubactivityForm: {
    before: {
     insert: function(doc) {
       console.log(doc);
       return doc;
     }
   },
   onSuccess: function(insert, result) {
     Bert.alert('Process Successfully Created', 'success');
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
