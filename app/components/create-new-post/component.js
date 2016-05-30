import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createPost: function(model) {
        this.sendAction('createPost', model);  
                
        // clear input fields 
        this.set('newPost.title', null);
        this.set('newPost.author', null);
        this.set('newPost.text', null);
    }
   }
});
