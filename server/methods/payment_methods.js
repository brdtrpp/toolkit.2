Meteor.methods({
   subscribeCustomer: function(token, plan){
       console.log(token);
       console.log(plan);
       console.log(Meteor.user());
   },

   addCard: function(token) {
    var Stripe = StripeAPI('sk_test_GyS8Ovpy1BHVtuPZfoOVnoJG');
    var stripeCustomersCreate = Meteor.wrapAsync(Stripe.customers.createSource,Stripe.customers);
    console.log(token);

    try {
      return stripeCustomersCreate(
        Meteor.user().customerId,
        { source: token.id },
        function(err, card) {
          // asynchronously called
        }
      );
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
   }
});