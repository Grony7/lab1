const coursesForm = document.querySelector('#coursesForm');

coursesForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const coursName = coursesForm.querySelector('#coursName').value;
  const numberClasses = coursesForm.querySelector('#numberClasses').value;
  const classFormat = coursesForm.querySelector('input[name="classFormat"]:checked').value;

  return alert (`
    Курс: ${coursName}. \n
    Количество занятий: ${numberClasses}. \n
    ФОрмат обучения: ${classFormat}.`)
});
