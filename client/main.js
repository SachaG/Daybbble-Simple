var limit = 12;
Session.get('skip', 0);

Deps.autorun(function(){
  Meteor.subscribe('snapshots', limit, Session.get('skip'));
});