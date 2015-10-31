if (Meteor.isClient) {

    Template.body.events({
        "click .time": function(event) {
            event.preventDefault();
            Session.set('sortedByLikes', false);
        },
        "click .likes": function(event) {
            event.preventDefault();
            Session.set('sortedByLikes', true);
        }
    });

    Template.latestPosts.helpers({
        posts: function() {
            var sort = Session.get('sortedByLikes')
            Meteor.call('getTagImages', 'capitalone', 20, function(error, result) {
                if(error){
                    console.log(error);
                    return;
                }
                chunks = [];
                size = 4;
                if (sort)
                {
                    result.data.sort(function(a,b){
                        return b.likes.count - a.likes.count;
                    });
                }
                while(result.data.length > size) {
                    chunks.push({row : result.data.slice(0,size)})
                    result.data = result.data.slice(size);
                }
                chunks.push({row: result.data});

                Session.set('posts',chunks);
            });
            return Session.get('posts');
        },
    });


    Template.post.helpers({
        preparePost: function (userID, postID, caption) {
            Meteor.call('getUserInfo', userID, function(error,result){
                if(error){
                    console.log(error);
                    return;
                }
                Session.set(userID+'followers',result.data.counts.followed_by);
                Session.set(userID+'following',result.data.counts.follows);
                Session.set(userID+'posts',result.data.counts.media);
            });

            Meteor.call('determineSentiment', caption, function(error, result) {
                if(error){
                    console.log(error);
                    return;
                }
                Session.set(postID, result.data);
            });
        },
        numFollowers: function(userID) {
            return Session.get(userID+'followers');
        },
        numFollowing: function(userID) {
            return Session.get(userID+'following');
        },
        numPosts: function(userID) {
            return Session.get(userID+'posts');
        },
        sentiment: function(postID) {
            var alchemyResultObject = Session.get(postID);
            if(alchemyResultObject && alchemyResultObject.docSentiment)
            {
                if(alchemyResultObject.docSentiment.type == 'neutral')
                {
                    return 'neutral';
                }
                else if( alchemyResultObject.docSentiment.type == 'positive')
                {
                    return 'positive';
                }
                else
                {
                    return 'negative';
                }
            }
            else
            {
                return 'neutral';
            }
        }
    });


}