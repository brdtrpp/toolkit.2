import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Activities = new Mongo.Collection("activities");

if (Meteor.isServer) {
  Meteor.publish('activities', function() {
    return Activities.find({"owner.id": this.userId});
  })
}

ActivitiesSchema = new SimpleSchema({
  owner: {
    type: OwnerSchema,
    autoform: {
      omit: true,
    }
  },

  scenario: {
    type: String,
    autoform: {
      omit: true,
    },
    autoValue: function(){
      if (Meteor.isClient) {
        var sce = Session.get('scenario');
        return sce;
      }
    }
  },

  name: {
    type: String,
    label: "What is the name of this Activity?"
  },

  times: {
    type: Number,
    label: function(){
      if(Meteor.isClient){
        var pro = Session.get('process');
        var timeNum = Processes.findOne(pro).timeperiod.duration;
        var timeType = Processes.findOne(pro).timeperiod.type;
        var res = "What is the number of times this activity occurs per " + timeNum + " " + timeType + "?";
        return res;
      }

    }
  },

  percent: {
    type: Number,
    label: "What % of the time does the occurance of this activity cause downtime?"
  },

  rollup: {
    type: Number,
    autoform: {
      omit: true,
    },
    autoValue: function(){
      var sumArray = [];
      var subs = Subactivities.find({activity: this.docId}).fetch();
      _.forEach(subs, function(sub){
        sumArray.push(sub.rollup);
      });
      function getSum(total, num){
        return total + num;
      }
      if(!this.field('times').isSet){
        var actTimes = Activities.findOne(this.docId).times;
        var sumed = sumArray.reduce(getSum);
        return sumed * actTimes;
      } else if (sumArray == 0) {
        return 0;
      } else {
        var sumed = sumArray.reduce(getSum);
        var times = this.field('times').value;
        var rv = sumed * times;
        return rv;
      }
    }
  }

});

Activities.attachSchema(ActivitiesSchema);
