import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
    return this.store.findRecord('post', params.id);
  },
  actions : {

    addComment: function(id, comment) {
      console.debug(id);
      var _this = this;
      //on va checher l'article grâce à son Id
      this.store.findRecord('post', id).then(function(article){
        //on crée le commentaire
          var commentRecord = _this.store.createRecord('comment', {
            body:comment,
            post:article
          });

          //on enregistre le commentaire dans la base ensuite on
          //lie le commentaire à l'article
          commentRecord.save().then(function(commentSaved) {
            article.get('comments').addObject(commentSaved);
            article.save();
          });
      });
    }
  }
});
