Template.grid.helpers({
  snapshots: function () {
    return Snapshots.find({}, {sort: {timestamp: -1}, limit: 12});
  },
  shots: function () {
    return _.first(jQuery.parseJSON(this.content).shots, 12);
  }
});