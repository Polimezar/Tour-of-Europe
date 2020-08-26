'use strict';

(function () {
  window.popup.setBuyTourHandler();
  window.popup.closePopupHandler();

  window.form.setSubmitListener(function () {
    function onSuccess() {
      window.form.addSuccess();
    }
    var data = window.form.getFormData();
    window.uploadData(data, onSuccess, onError);
  });

})();
