var CACTUSMQ_SUB_URL = 'http://www.cactusmq.com/subscribe/' + CACTUSMQ_SUB_APIKEY;

var evtSource = new EventSource(CACTUSMQ_SUB_URL);

evtSource.onopen = function() {
  console.log("Connection to server opened.");
};
evtSource.addEventListener(SOME_TOPIC, function(e) {
  var data = JSON.parse(e.data);
}, false);
