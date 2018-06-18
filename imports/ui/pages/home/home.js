import './home.html';
import '../../components/navbar/navbar.js';

Template.App_home.helpers({
  plans: function(){
    var plans = [
      {id: Meteor.settings.public.plans.nonprofit,
        name: "Non-Profit TCO Toolkit Monthly Enterprise License",
        trial: "15 days",
        price: "$49.00/month"},
      {id: Meteor.settings.public.plans.commAnnual,
        name: "Commercial TCO Toolkit Annual Enterprise License",
        trial: "0 days",
        price: "$758.00/year"},
      {id: Meteor.settings.public.plans.commMonthly,
        name: "TCO Toolkit Monthly Enterprise License",
        trial: "30 days",
        price: "$79.00/month"}];
    return plans;
  },

  highlight: function(){
    var id = Session.get('plan');
    if (id == this.id) {
      return "success";
    } else {
      return "info";
    }
  }
});

Template.App_home.events({
  'click .plan': function(){
    Session.set('plan', this.id);
  },

});

Template.App_home.onRendered( function() {
  const stripe = Stripe('pk_test_RocJBJ6UhrOt04N8wjX5Kqyc');
  const elements = stripe.elements();
  // Custom styling can be passed to options when creating an Element.
  const style = {
    base: {
      color: '#32325d',
      lineHeight: '18px',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };

  // Create an instance of the card Element.
  const card = elements.create('card', {style});

  // Add an instance of the card Element into the `card-element` <div>.
  card.mount('#card-element');

  card.addEventListener('change', ({error}) => {
    const displayError = document.getElementById('card-errors');
    if (error) {
      displayError.textContent = error.message;
    } else {
      displayError.textContent = '';
    }
  });

  // Create a token or display an error when the form is submitted.
  const form = document.getElementById('payment-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {token, error} = await stripe.createToken(card);
    const plan = Session.get('plan');

    if (error) {
      // Inform the customer that there was an error.
      const errorElement = document.getElementById('card-errors');
      errorElement.textContent = error.message;
    } else if (!plan){
      Bert.alert('Please select a plan!', 'danger');
    } else {

      // Send the token to your server.

      Meteor.call('addCard', token, plan);
      Bert.alert("You've added a plan to your account", 'success');
      Router.go('processes');

    }
  });
});