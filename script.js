const openModelbnt = document.querySelector(".quick-action .add");

const modref = document.querySelector(".model");

const closeBtnref = document.querySelector(".model .right-section .close");

const textarearef = document.querySelector(".model textarea");

const priorityBoxRef = document.querySelectorAll(
  ".model .right-section .priority-filter .box"
);

const ticketsSectionRef = document.querySelector(".ticket-section");

const tasks = [
  {
    id: "1",
    description: "Task 1",
    priority: "p1",
  },

  {
    id: "2",
    description: "Task 2",
    priority: "p2",
  },
  {
    id: "3",
    description: "Task 3",
    priority: "p3",
  },
];
const newtask = {
  id: "",
  description: "",
  priority: "",
};

function openModel() {
  modref.classList.remove("hide");
}

function closeModel() {
  modref.classList.add("hide");
}

openModelbnt.addEventListener("click", () => {
  const isHideClassApplied = [...modref.classList].includes("hide");
  if (isHideClassApplied) {
    openModel();
  } else {
    closeModel();
  }
});

closeBtnref.addEventListener("click", () => {
  closeModel();
});

textarearef.addEventListener("keyup", function (ev) {
  if (ev.key == "Enter") {
    const description = ev.target.value;
    const priority = getSelectedClassPriority();
    console.log(description, priority);
    tasks.push({
      id: tasks.length + 1,
      description: description,
      priority: priority,
    });

    console.log(tasks);
    listTickets(tasks);
    closeModel();
  }
});

function getSelectedClassPriority() {
  let priority = "";
  priorityBoxRef.forEach(function (singleBoxRef, idx) {
    if ([...singleBoxRef.classList].includes("selected")) {
      priority = `p${idx + 1}`;
    }
  });
  return priority;
}

function removeSelectedClassFromBox() {
  priorityBoxRef.forEach(function (singleBoxRef) {
    singleBoxRef.classList.remove("selected");
  });
}

function addSelectedClassToCurrentBox(boxRef) {
  boxRef.classList.add("selected");
}

priorityBoxRef.forEach(function (boxRef) {
  boxRef.addEventListener("click", function (ev) {
    removeSelectedClassFromBox();
    addSelectedClassToCurrentBox(ev.target);
  });
});

function createTicket(ticket) {
  return `
            <div class="ticket-priority ${ticket.priority}"></div>
            <div class="ticket-id">${ticket.id}</div>
            <div class="ticket-content">
              <textarea disabled>${ticket.description}</textarea>
            </div>
            <div class="ticket-lock locked">
            <i class="fa-solid fa-lock"></i>
            <i class="fa-solid fa-lock-open"></i>
            </div>`;
}

function clearList() {
  ticketsSectionRef.innerHTML = "";
}

function listTickets(tickets) {
  clearList();
  tickets.forEach((ticket) => {
    const ticketContainerRef = document.createElement("div");
    ticketContainerRef.setAttribute("class", "ticket-container");
    ticketContainerRef.setAttribute("data-id", ticket.id);
    const ticketHTML = createTicket(ticket);
    ticketContainerRef.innerHTML = ticketHTML;
    ticketsSectionRef.appendChild(ticketContainerRef);
  });
}

ticketsSectionRef.addEventListener("click", function (ev) {
  if ([...ev.target.classList].includes("fa-solid")) {
    //console.log(ev.target);
    const currentTicketContainerRef = ev.target.closest(".ticket-container");
    //console.log(currentTicketContainerRef);
    const currentticketId = currentTicketContainerRef.getAttribute("data-id");
    console.log(currentticketId);
    const currentTextAreaRef = currentTicketContainerRef.querySelector(
      ".ticket-content textarea"
    );
    const lockRef = currentTicketContainerRef.querySelector(".ticket-lock");
    const isEditable = lockRef.classList.contains("locked");
    if (isEditable) {
      lockRef.classList.remove("fa-lock");
      lockRef.classList.add("fa-lock-open");
      lockRef.classList.remove("locked");
      currentTextAreaRef.removeAttribute("disabled");
    } else {
      lockRef.classList.remove("fa-lock-open");
      lockRef.classList.add("fa-lock");
      lockRef.classList.add("locked");
      currentTextAreaRef.setAttribute("disabled", true);
    }
  }
});

listTickets(tasks);
