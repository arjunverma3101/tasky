const col = document.querySelector(".addingcard");
let globalCardContainer = [];
const addNewCard = (card) => `
    <div class="col-sm-12 col-md-6 col-lg-4 p-3" >
        <div class="card">
          <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-danger" onclick="deleteCard.apply(this,arguments)" id = "${card.id}"><i class="fa-solid fa-trash-can" onclick="deleteCard.apply(this,arguments)" id = "${card.id}"></i></button>
          </div>
          <div class="card-body shadow-lg bg-body rounded">
          <img src="${card.imageUrl}" class="card-img-top" alt="#">
              <p class="card-text fw-bold pt-2 h2">${card.taskTitle}</p>
              <p class="card-text">${card.taskDescription}</p>
              <a href="#" class="btn btn-primary fw-bold">${card.taskType}</a>
          </div>
          </div>
          </div>
          `;
const reloadPerviousCard = () => {
    const data = JSON.parse(localStorage.getItem("TasKy")).abcd;
    data.forEach(element => {
        globalCardContainer.push(element);
        col.insertAdjacentHTML("beforeend", addNewCard(element));

    });
};

const addTask = () => {
    const card = {
        id: `${Date.now()}`,
        imageUrl: document.querySelector("#imageurl").value,
        taskTitle: document.querySelector("#tasktitle").value,
        taskType: document.querySelector("#tasktype").value,
        taskDescription: document.querySelector("#taskdescription").value
    };
    col.insertAdjacentHTML("beforeend", addNewCard(card));
    globalCardContainer.push(card);
    localStorage.setItem("TasKy", JSON.stringify({ abcd: globalCardContainer }));
};

// ---------------------------------------------------------------------
const deleteCard = (event) => {
    event = window.event;
    const targetId = event.target.id;
    const targetTagName = event.target.tagName;
    globalCardContainer = globalCardContainer.filter((card) => card.id !== targetId);
    localStorage.setItem("TasKy", JSON.stringify({ abcd: globalCardContainer }));
    if (targetTagName === "BUTTON") {
        return col.removeChild(event.target.parentNode.parentNode.parentNode);
    } else {
        return col.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
    }
}