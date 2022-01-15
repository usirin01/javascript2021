const renderCourseList = (pArray) => {
    courseContainer.innerHTML = pArray.map(course => {
        return `
        <div>${courseList.name}</div>
        `
    })
    .join("");
};

const addCourse = (event) => {
    event.preventDefault();//refresh i engellenemek icin default yaptik
    //console.log("Save butonuna tiklandi");
    //console.log(event);
};