import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createPost: (newPost) => {
            console.log(`${newPost.title}, ${newPost.author}`); 
        }
    }
});
