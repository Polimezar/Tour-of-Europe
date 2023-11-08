'use strict';

(function () {

  var URL_UPLOAD = 'https://echo.htmlacademy.ru';
  var METHOD_UPLOAD = 'POST';
  var TIMEOUT_IN_MS = 10000;

  var StatusCode = {
    OK: 200
  };

  function createRequest(url, method, onSuccess, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open(method, url);
    xhr.send(data);
  }


  function uploadData(data, onSuccess, onError) {
    createRequest(URL_UPLOAD, METHOD_UPLOAD, onSuccess, onError, data);
  }

  window.uploadData = uploadData;

})();
