import './home.html';
import '../../components/navbar/navbar.js';

// Template.App_home.helpers({
//   setPlan: function(){
//     Session.set
//   }
// });

Template.App_home.events({
  'click .plan1': function(){
    Session.set('plan', 'plan1');
  },
  'click .plan2': function(){
    Session.set('plan', 'plan2');
  },
  'click .plan3': function(){
    Session.set('plan', 'plan3');
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
      console.log("ER");
    } else {

      // Send the token to your server.
      console.log(token);
      console.log(Meteor.user());
      console.log(plan);
      Meteor.call('addCard', token);

    }
  });
});