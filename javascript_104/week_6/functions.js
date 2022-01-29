/**
 * Bu fonksiyon, kendisine parametre olarak gonderilen diziyi
 * map metodu ile doner ve olusan template`i
 * html sayfasina render eder.
 * @param {Array} pPersonList
 */
const renderPersonList = (pPersonList) => {
  let template = "";

  if (pPersonList.length === 0) {
    // Person listesi bos ise kullaniciya mesaj gosterilir.
    template = `
            <div class="alert alert-primary" role="alert">
                Kayitli person bulunmamaktadir!
            </div>
        `;
  } else {
    // Person listesi bos degilse liste tablo olarak kullaniciya gosterilir.
    template = `
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                ${pPersonList
                  .map((person) => {
                    return `
                        <tr>
                            <td>${person.firstname}</td>
                            <td>${person.lastname}</td>
                            <td>
                              <i class="far fa-trash-alt text-danger" onclick="showConfirmAlert('${person.id}')"></i>
                            </td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
    `;
  }

  personListContainer.innerHTML = template;
};

/**
 * Bu fonksiyon, person ekleme formu submit oldugunda cagrilir.
 * event.target ile form icerisindeki input larin name attribute larina
 * gore inputlarin value larini alir.
 * Yeni bir object olusturur ve bunu person listesine ekler.
 * Ekleme isleminden once guncel data localStorage dan getirilir. Yeni person nesnesi
 * eklendikten sonra guncel data tekrar localStorage'a kaydedilir.
 * @param {Event} event
 */
const addPerson = (event) => {
  event.preventDefault();

  let newPerson = {
    id: uuidv4(),
    firstname: event.target["firstname"].value,
    lastname: event.target["lastname"].value,
  };

  personList = getFromLocalStorage("personList");

  personList.push(newPerson);

  setToLocalStorage("personList", personList);

  showSuccessAlert();

  renderPersonList(getFromLocalStorage("personList"));
};

/**
 * Bu fonksiyon, kendisine parametre olarak gonderilen id ye sahip person objesini siler.
 * @param {String} pId
 */
const deletePerson = (pId) => {
  personList = getFromLocalStorage("personList");
  personList = personList.filter((person) => person.id !== pId);
  setToLocalStorage("personList", personList);
  renderPersonList(getFromLocalStorage("personList"));
};

/**
 * Bu fonksiyon, localStorage dan parametre olarak gonderilen key degerine ait data yi getirir
 * @param {String} pKey
 * @returns
 */
const getFromLocalStorage = (pKey) => {
  return JSON.parse(localStorage.getItem(pKey));
};

/**
 * Bu fonksiyon, kendisine parametre olarak gonderilen key ve value degerlerine gore datayi
 * localStorage'a kaydeder.
 * @param {String} pKey
 * @param {Array} pValue
 * @returns
 */
const setToLocalStorage = (pKey, pValue) => {
  return localStorage.setItem(pKey, JSON.stringify(pValue));
};

/**
 * Success Sweet Alert
 */
const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Person basariyla eklendi!",
    showConfirmButton: false,
    timer: 1500,
  });
};

/**
 * Confirm Sweet Alert for delete person
 */
const showConfirmAlert = (pId) => {
  Swal.fire({
    title: "Silmek istediginize emin misiniz?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
  }).then((result) => {
    if (result.isConfirmed) {
      deletePerson(pId);
      Swal.fire("Person basariyla silindi!", "", "success");
    }
  });
};
