const renderPersonList = () => {
    personListContainer.innerHTML = pPersonList.map(person => {
        return`
        <div>${person.firstname}</div>
        <div>${person.lastname}</div>
        `
    } ).join[("")];
};

const addPerson = (event) => {
    event.preventDefault();

    let newPerson = {
        firstname: event.target["firstname"].value, //tüm forma ulasiliyor event.target["name attribute nin degeri"];
        lastname: event.target["lastname"].value,
    }
    personList.push(newPerson);

    renderPersonList(personList);
};