import './application.html'


Template.application.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  active: function(){
    if (Session.equals("appId", this._id)){
      return "primary"
    } else {
      return "default";
    }
  }
});

Template.application.events({
  'click .app': function(){
    Session.set('appId', this._id);
    Session.set('app', this);
  },
  'click .clone-application': function(){
    var app = Session.get('app');
    var pro = Session.get('process');
    Meteor.call('cloneApplication', pro, app);
  },
  'click .delete-application': function(){
    var app = Session.get('appId');
    var pro = Session.get('process');
    Meteor.call('deleteApplication', pro, app);
  },
  'click .template-application': function(){
    var app = Session.get('appId');
    var pro = Session.get('process');
    Meteor.call('templateApplication', pro, app);
  }
});
