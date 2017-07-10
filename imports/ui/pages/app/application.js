import './application.html'


Template.application.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  active: function(){
    if (Session.equals("app", this.name)){
      return "active"
    } else {
      return "";
    }
  }
});

Template.application.events({
  'click .app': function(){
    Session.set('app', this.name);
  },
});
