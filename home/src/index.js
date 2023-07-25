window.customerNameFormatter = (value, row) => {
    return value;
};

window.nameFormater = (value, row) => {
    return value;
};

window.descriptionFormater = (value, row) => {
    return `<div style="white-space: nowrap; overflow: hidden; max-width: 15vw; text-overflow: ellipsis;" title="${value}">${value}</div>`;
};

window.statusFormatter = (value, row) => {
    switch (value) {
        case 0:
            return `<div style="display: flex;align-items: center; justify-content: space-between;">
            <span style="font-weight: 500; color: gray;">Bloqueado</span>
            <span style="font-weight: 600; color: gray;" class="material-symbols-outlined">block</span>
            </div>`;
        case 1:
            return `<div style="display: flex;align-items: center; justify-content: space-between;">
            <span style="font-weight: 500; color: darkorange;">Pendiente</span>
            <span style="font-weight: 600; color: darkorange;" class="material-symbols-outlined">hourglass_empty</span>
            </div>`;
        case 2:
            return `<div style="display: flex;align-items: center; justify-content: space-between;">
            <span style="font-weight: 500; color: darkblue;">En proceso</span>
            <span style="font-weight: 600; color: darkblue;" class="material-symbols-outlined">done</span>
            </div>`;
        case 3:
            return `<div style="display: flex;align-items: center; justify-content: space-between;">
            <span style="font-weight: 500; color: darkgreen;">Terminado</span>
            <span style="font-weight: 600; color: darkgreen;" class="material-symbols-outlined">done_all</span>
            </div>`;
    }
};

window.optionsDateFormater = (value, row) => {
    // const isActive = `<div style="display:inline-flex;align-items:center;color:${value ? 'green' : 'red'};"><span class="material-icons">toggle_${value ? 'on' : 'off'}</span></div>`
    const settings = `<div title="Editar" class="btn-edit" style="display:inline-flex;align-items:center;"><span class="material-icons btn-settings">settings</span></div>`;
    const addProduct = `<a href="/work/?customer=${row.id}" class="btn-add" style="display:inline-flex;align-items:center;text-decoration: none;color: black;"><span class="material-icons btn-settings">add_shopping_cart</span></a>`;
    const loading = `<div class="spinner-border spinner-border-sm text-success" role="status" style="visibility:hidden;"><span class="visually-hidden">Loading...</span></div>`;
    // const container = `<div style="display:flex;justify-content:space-between;align-items:center">${isActive + settings + loading}</div>`
    const container = `<div style="display:flex;justify-content:space-between;align-items:center">${
        settings + loading
    }</div>`;

    switch (row.status) {
        case 0:
            return `<div style="display: flex;align-items: center; justify-content: center;">
            <span style="font-weight: 500; color: darkorange;">Esperando...</span>
            </div>`;
        case 1:
            return `<div class="btn-start clickable" style="display: flex;align-items: center; justify-content: center;">
            <span style="font-weight: 500; color: darkblue;">Iniciar</span>
            <span style="font-weight: 600; color: darkblue;" class="material-symbols-outlined">play_arrow</span>
            </div>`;
        case 2:
            return `<div class="btn-stop clickable" style="display: flex;align-items: center; justify-content: center;">
            <span style="font-weight: 500; color: darkgreen;">Terminar</span>
            <span style="font-weight: 600; color: darkgreen;" class="material-symbols-outlined">stop</span>
            </div>`;
        case 3:
            return `<div style="display: flex;align-items: center; justify-content: center;">
            <span style="font-weight: 500; color: darkgreen;"></span>
            <span style="font-weight: 600; color: darkgreen;" class="material-symbols-outlined">done_all</span>
            </div>`;
    }
};

window.tableCustomerEvents = {
    "click .btn-start": (e, value, row, index) => startTask(row),
    "click .btn-stop": (e, value, row, index) => stopTask(row),
};

const startTask = async (task) => {
    const data = {
        status: 2,
    };
    try {
        const response = await fetch(`/api/phase/task/${task.id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw response;
        }
        const workPhase = await response.json();
        console.log(workPhase);
        $("#task_table").bootstrapTable("refresh");
    } catch (error) {
        const text = await error.text();
        console.log(text);
        alert("La tarea no se pudo actualizar. :(");
    }
};

const stopTask = async (task) => {
    const data = {
        status: 3,
    };
    try {
        const response = await fetch(`/api/phase/task/${task.id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw response;
        }
        const workPhase = await response.json();
        console.log(workPhase);
        $("#task_table").bootstrapTable("refresh");
    } catch (error) {
        const text = await error.text();
        console.log(text);
        alert("La tarea no se pudo actualizar. :(");
    }
};
