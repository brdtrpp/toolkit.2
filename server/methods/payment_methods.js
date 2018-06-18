Meteor.methods({
   subscribeCustomer: function(plan){
    var stripe = require('stripe')(Meteor.settings.stripe.sk_key);
    var stripeSubs = Meteor.wrapAsync(stripe.subscriptions.create,stripe.subscriptions);
    var stripeUpdateSubs = Meteor.wrapAsync(stripe.customers.update,stripe.customers);
    var stripeGetCustomer = Meteor.wrapAsync(stripe.customers.retrieve,stripe.customers);
    const id = Meteor.user().customerId;

    try {
      stripeGetCustomer(
        id,
        function(error, customer){
          if( customer.subscriptions.data.length > 0) {
            return stripeUpdateSubs(id, {
              items: [{plan: plan}]
            });
          } else {
            return stripeSubs({
              customer: id,
              items: [{plan: plan}],
            }, function(err, subscription) {

            });
          }
          console.log(customer.subscriptions.data.length);
        }
      );
    }catch(error){

    }
   },

   addCard: function(token, plan) {
    var stripe = require('stripe')(Meteor.settings.stripe.sk_key);
    var stripeCustomersCreate = Meteor.wrapAsync(stripe.customers.createSource,stripe.customers);

    try {
      return stripeCustomersCreate(
        Meteor.user().customerId,
        { source: token.id },
        function(err, card) {
          if(card) {
            Meteor.call('subscribeCustomer', plan);
          }
          // asynchronously called
        }
      );
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
   }
});