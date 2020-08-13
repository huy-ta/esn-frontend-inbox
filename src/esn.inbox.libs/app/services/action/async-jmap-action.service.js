'use strict';

require('../with-jmap-client/with-jmap-client');

angular.module('esn.inbox.libs')
  .factory('asyncJmapAction', function (backgroundAction, withJmapClient) {
    return function (message, action, options) {
      return backgroundAction(message, function () {
        return withJmapClient(action);
      }, options);
    };
  });
