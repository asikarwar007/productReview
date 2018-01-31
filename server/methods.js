Meteor.methods({
    'posts.add'(name, url, type = "photo", watchers = ["ayush saini", "Abhimanyu sikarwar", "sahubham pall"],
                thumbnail = "http://placehold.it/64x64") {
        Posts.insert({name, url, type, watchers, thumbnail, timestamp: Date.now()});
    },
    'posts.track'(name, url, type, watcher, emotions, thumbnail = "http://placehold.it/64x64") {
        this.unblock();

        Meteor.defer(function() {

        })
    }
})