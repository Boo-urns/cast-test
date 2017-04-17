const APPLICATION_ID = 'B9FD6B0E';

window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    initializeCastApi();
  }
};

initializeCastApi = function() {
  cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: APPLICATION_ID,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};
