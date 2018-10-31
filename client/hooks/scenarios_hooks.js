import moment from 'moment';
import { EJSON } from 'meteor/ejson';

AutoForm.hooks({
  insertScenarioForm: {
    before: {
     insert: function(doc) {
       pro = Session.get('process');
       app = Session.get('appId');
       doc.process = pro;
       doc.application = app;
       console.log(doc)
       return doc;
     }
   },
   onSuccess: function(insert, result) {
     Bert.alert('Scenario Successfully Created', 'success');
     $('#scenarioModal').modal('hide');
     AutoForm.resetForm(insertScenarioForm);
   },
   onError: function(insert, result){
     console.error(result);
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
 },
 updateScenarioForm: {
   onSuccess: function(){
     $('#scenarioUpdateModal').modal('hide');
     Bert.alert('Subactivity Successfully Updated', 'success');
   },
   onError: function(insert, result){
     console.log(result);
     Bert.alert("Somethig went wrong, please check the form again", 'danger');
   },
   beginSubmit: function() {},
   endSubmit: function() {}
 }
});
