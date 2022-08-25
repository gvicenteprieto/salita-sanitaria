import { guardarChat, deleteChat, getChat, updateChat } from "./socket.js";

const chatsList = document.querySelector("#chats");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
let savedId = "";

const chatUI = (chat) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div>
        <h4> Título: ${chat.title}</h4>
        <h5>Descripción: ${chat.description}</h5>
        <div>
        <button class="update" data-id="${chat._id}">Obtener</button>
        <button class="delete" data-id="${chat._id}">Borrar</button>
        <hr>
        </div

    </div>
    `;
  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");

  btnDelete.addEventListener("click", (e) => deleteChat(btnDelete.dataset.id));

  btnUpdate.addEventListener("click", (e) => getChat(btnUpdate.dataset.id));
  return div;
};

export const renderChat = (chats) => {
  chatsList.innerHTML = "";
  chats.forEach((chat) => chatsList.append(chatUI(chat)));
};

export const fillForm = (chat) => {
  title.value = chat.title;
  description.value = chat.description;
  savedId = chat._id;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  if (savedId) {
    updateChat(savedId, title.value, description.value)
  } else {
      guardarChat(title.value, description.value);
  }
};

export const appendChat = (chat) => {
  chatsList.append(chatUI(chat));
};
