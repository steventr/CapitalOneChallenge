/**
 * Created by Steven on 10/27/2015.
 */
if ( Meteor.isServer ) {
    Meteor.startup(function () {
        Instagram.setClientID('');
        AlchemyAPI.setClientID('');
    });
}