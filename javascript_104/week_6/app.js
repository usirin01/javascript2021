/**
 * Uygulama ilk baslatildiginda localStorage da
 * initial value olusturulur
 */
if (getFromLocalStorage("personList") === null) {
  setToLocalStorage("personList", personList);
}

/**
 * Person listesini sayfaya render eder
 */
renderPersonList(getFromLocalStorage("personList"));

/**
 * Formun submit olayinda addPerson fonksiyonunu cagirir
 */
formPerson.addEventListener("submit", addPerson);
