/**
 * Created by Steven on 10/27/2015.
 */
Meteor.methods({

    getTagImages: function(tag, number) {
        number = typeof number !== 'undefined' ? number : 20;
        return Instagram.getLatestMediaByTags(tag, number);
    },

    getUserInfo: function(userid) {
        return Instagram.getUserById(userid);
    },

    determineSentiment: function(caption) {
        return AlchemyAPI.getSentimentFromText(caption);
    }

});
