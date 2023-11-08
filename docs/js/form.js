'use strict';

(function () {

  var popup = document.querySelector('.popup');
  var form = document.querySelector('.feedback');
  var submit = form.querySelector('.feedback__submit');

  function addSuccess() {
    submit.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('popup--success');
    });
  }

  function setSubmitListener(callback) {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      callback();
    });
  }

  function getFormData() {
    return new FormData(form);
  }

  window.form = {
    addSuccess: addSuccess,
    getFormData: getFormData,
    setSubmitListener: setSubmitListener
  };
})();
