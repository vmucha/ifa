/**
 * Artikel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        id: {type: 'integer'},
        url: {type: 'string'},
        title: {type: 'string'},
        kicker: {type: 'string'},
        teaserImage: {type: 'string'},
        intro: {type: 'string'},
        body: {type: 'string'},
        type: {type: 'string'}
    }
};

