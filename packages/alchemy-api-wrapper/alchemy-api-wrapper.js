// Write your package code here!
if (typeof AlchemyAPI == 'undefined') {
    AlchemyAPI = {};
    AlchemyAPI.settings = { 'API_BASE_URL' : 'http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment' };

    AlchemyAPI.setClientID = function(key) {
        AlchemyAPI.settings.ClientID = key;
        return;
    }

    //Gets a list of recently tagged media according to tag, default is 20.
    AlchemyAPI.getSentimentFromText = function (text) {
        var settings = AlchemyAPI.settings;

        if (settings['ClientID']) {
            var url = AlchemyAPI.settings.API_BASE_URL;
            var params = {
                params: {
                    'text': text,
                    'apikey': AlchemyAPI.settings.ClientID,
                    'outputMode': 'json'
                }
            };
            var result = HTTP.get(url, params);
            return result;
        }
        else {
            throw new Meteor.Error(500, "NO CLIENT ID SET");
        }
    };
}