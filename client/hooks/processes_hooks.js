import moment from 'moment';

AutoForm.hooks({
  insertProcessForm: {
    before: {
     insert: function(doc) {
       // Potentially alter the doc
       console.log(doc);

       return doc;
       // Then return it or pass it to this.result()
       //return doc; (synchronous)
       //return false; (synchronous, cancel)
       //this.result(doc); (asynchronous)
       //this.result(false); (asynchronous, cancel)
     }
   },
   onSuccess: function(insert, result) {
     AutoForm.resetForm(insertProcessForm);
   },
   beginSubmit: function() {},
   endSubmit: function() {}
  }
});
