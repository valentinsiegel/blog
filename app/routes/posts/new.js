import Ember from 'ember';

export default Ember.Route.extend({

    actions:{
        createPost: function(title, content){

                  console.log(title);
                console.log(content);

            var post = this.store.createRecord('post', {
                title: title,
                body: content
            });
        
         post.save();
     }
    }
});
