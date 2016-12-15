import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    showArticle: function (article) {
      // Ember.set(article, "isShowingArticle", true);
      if (Ember.get(article, "isShowingArticle")) {
        Ember.set(article, "isShowingArticle", false);
      } else {
        Ember.set(article, "isShowingArticle", true);
      }
    },
    deletePost: function (post) {
      var store = this.get('store');
      store.findRecord('post', post.id).then(function (selectedPost) {
        selectedPost.deleteRecord();
        selectedPost.save();
      }
      )
    }
  }
});
