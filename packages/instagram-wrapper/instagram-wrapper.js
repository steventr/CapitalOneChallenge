// Write your package code here!
if (typeof Instagram == 'undefined') {
    Instagram = {};
    Instagram.settings = { 'API_BASE_URL' : 'https://api.instagram.com/v1/' };

    Instagram.setClientID = function(key) {
        Instagram.settings.ClientID = key;
        return;
    }

    //Gets a list of recently tagged media according to tag, default is 20.
    Instagram.getLatestMediaByTags = function (tag, number) {
        number = typeof number !== 'undefine' ? number : 20;

        var settings = Instagram.settings;

        if (settings['ClientID']) {
            var url = Instagram.settings.API_BASE_URL + 'tags/' + tag + '/media/recent';
            var params = {
                params: {
                    'count': number,
                    'client_id': Instagram.settings.ClientID
                }
            };
            var result = HTTP.get(url, params);
            return result.data;
        }
        else {
            throw new Meteor.Error(500, "NO CLIENT ID SET");
        }
    };

    Instagram.getUserById = function(id) {
        var settings = Instagram.settings;

        if (settings['ClientID']) {
            var url = Instagram.settings.API_BASE_URL + 'users/' + id;
            var params = {
                params: {
                    'client_id': Instagram.settings.ClientID
                }
            };
            var result = HTTP.get(url, params);
            return result.data;
        }
        else {
            throw new Meteor.Error(500, "NO CLIENT ID SET");
        }
    }
}
