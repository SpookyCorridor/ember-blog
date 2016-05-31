import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.findQuery('post', {sort: 'asc'}); 
    },
    
    actions: {
        createPost: function(model) {
            let post = this.store.createRecord('post', {
                title: model.title,
                text: model.text,
                author: model.author,
                createdDate: new Date()              
            });
            post.save()
                .then(s => {
                    console.log('success,' + s); 
                })
                .catch(e => {
                    console.log(e.errors);
                }); 
        }
    }
});
