/**
 * Created by Steven on 10/27/2015.
 */
if ( Meteor.isServer ) {
    Meteor.startup(function () {
        Instagram.setClientID('89639b8f13a04ea097f36d9bff1dc7aa');
        AlchemyAPI.setClientID('2f0fa8fa3c294238b9d24aab0d34f7135bcf0a13');
    });
}