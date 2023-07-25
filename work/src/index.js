window.idFormater = (value, row) => {
    return value;
};

window.customerFormater = (value, row) => {
    return value;
};

window.nameFormater = (value, row) => {
    return `<div style="white-space: nowrap; overflow: hidden; max-width: 10vw; text-overflow: ellipsis;" title="${value}">${value}</div>`;
};

window.descriptionFormater = (value, row) => {
    return `<div style="white-space: nowrap; overflow: hidden; max-width: 15vw; text-overflow: ellipsis;" title="${value}">${value}</div>`;
};

window.deadlineFormater = (value, row) => {
    const dat = value.split("T");
    const ham = dat[1].split(":");
    return `<div>
        <div>Día: <span>${dat[0]}</span></div>
        <div>Hora: <span>${ham[0]}:${ham[1]}</span></div>
    </div>`;
};

window.deliveryDateFormater = (value, row) => {
    if (value) {
        const dat = value.split("T");
        const ham = dat[1].split(":");
        return `<div>
            <div>Día: <span>${dat[0]}</span></div>
            <div>Hora: <span>${ham[0]}:${ham[1]}</span></div>
        </div>`;
    } else {
        return `<div>En proceso...</div>`;
    }
};

window.phaseFormater = (value, row) => {
    const workPhase = row.phases.find((item) => item.phase.sequence == row.current_phase);
    let icon = "";
    switch (workPhase.status) {
        case 1:
            icon = `<span title="Pendiente" style="font-size: 1rem; color: firebrick; font-weight: 600;" class="material-symbols-outlined">hourglass_empty</span>`;
            break;
        case 2:
            icon = `<span title="Iniciado" style="font-weight: 600; color: deepskyblue;" class="material-symbols-outlined">done</span>`;
            break;
        case 3:
            icon = `<span title="Terminado" style="color: green;" class="material-symbols-outlined">done_all</span>`;
            break;

        default:
            break;
    }
    return `<div>
    <div>${row.current_phase} de ${row.total_phase}</div>
    <div style="display: flex; align-items: center; justify-content: space-around;"><span title="${workPhase.employee.name}" style="font-weight: 600;">${workPhase.phase.name}</span> ${icon}</div>
    </div>`;
};

window.creationDateFormater = (value, row) => {
    const dat = value.split("T");
    const ham = dat[1].split(":");
    return `<div>
        <div>Día: <span>${dat[0]}</span></div>
        <div>Hora: <span>${ham[0]}:${ham[1]}</span></div>
    </div>`;
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
    return container;
};

window.tableCustomerEvents = {
    "click .btn-edit": (e, value, row, index) => showEditModal(row),
    // "click .btn-add": (e, value, row, index) => showEditModal(row),
};

const showNewModal = (data) => {
    // document.querySelector("#customer_name").value = data.id;
    document.querySelector("#work_customer").value = data.name;
    // document.querySelector("#customer_edit_dni").value = data.dni;
    // document.querySelector("#customer_edit_ruc").value = data.ruc;
    // document.querySelector("#customer_edit_phone").value = data.phone;
    // document.querySelector("#customer_edit_address").value = data.address;
    // document.querySelector("#customer_edit_email").value = data.email;

    const myModal = new bootstrap.Modal("#add-work-modal", {
        keyboard: false,
    });
    myModal.show();
};

const showEditModal = (data) => {
    document.querySelector("#work_id_edit").value = data.id;
    document.querySelector("#work_customer_edit").value = data.customer.name;
    document.querySelector("#work_name_edit").value = data.name;
    document.querySelector("#work_description_edit").value = data.description;
    document.querySelector("#work_date_edit").value = data.deadline.slice(0, 16);

    const $container = document.querySelector("#phases_edit_container");
    const $employees = document.querySelector("#all_employees").innerHTML;
    let content = "";

    for (const phase of data.phases) {
        content += `<div class="mb-3">
            <label style="font-weight: 600;" for="work_phase_edit${phase.id}" class="form-label">Responsable de ${phase.phase.name}</label>
            <input type="hidden" class="form-control work_phase_id" value="${phase.id}">
            <select id="work_phase_edit${phase.id}" class="form-select form-select-sm" aria-label=".form-select-sm example">
                ${$employees}
            </select>
        </div>`;
    }
    $container.innerHTML = content;
    for (const phase of data.phases) {
        document.querySelector(`#work_phase_edit${phase.id}`).value = `${phase.employee.id}`;
    }

    const myModal = new bootstrap.Modal("#edit-work-modal", {
        keyboard: false,
    });
    myModal.show();
};

document.querySelector("#add-work-modal .btn-primary").addEventListener("click", async (e) => {
    const data = {};

    const customerId = document.querySelector("#customerId").value;
    const name = document.querySelector("#work_name").value;
    const description = document.querySelector("#work_description").value;
    const date = document.querySelector("#work_date").value;

    data.customerId = customerId;
    data.name = name;
    data.description = description;
    data.date = date;

    let i = 1;
    while (true) {
        const phase = document.querySelector(`#work_phase${i}`)?.value;
        if (!phase) {
            break;
        }
        data[`phase${i}`] = phase;
        data[`phase${i}_id`] = document.querySelector(`#work_phase${i}_id`)?.value;
        i++;
    }
    data[`phase_amount`] = i - 1;
    console.log(data);

    try {
        const response = await fetch("/api/work/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw response;
        }
        const work = await response.json();
        console.log(work);
        $("#work_table").bootstrapTable("refresh");
        // alert("El nuevo cliente se guardó con exito!");
    } catch (error) {
        const text = await error.text();
        console.log(text);
        alert("El nuevo pedido no se pudo guardar. :(");
    }

    $("#add-work-modal").modal("hide");
});

document.querySelector("#edit-work-modal .btn-primary").addEventListener("click", async (e) => {
    const data = {};

    const id = +document.querySelector("#work_id_edit").value;
    const name = document.querySelector("#work_name_edit").value;
    const description = document.querySelector("#work_description_edit").value;
    const date = document.querySelector("#work_date_edit").value;

    data.id = id;
    data.name = name;
    data.description = description;
    data.deadline = date;
    const phases = [];

    for (const child of document.querySelector("#phases_edit_container").children) {
        const workPhaseId = +child.querySelector(".work_phase_id").value;
        const workPhaseEmployeeId = +child.querySelector("select").value;
        phases.push({
            id: workPhaseId,
            employee: workPhaseEmployeeId,
        });
    }
    data.workPhases = phases;

    console.log(data);

    try {
        const response = await fetch(`/api/work/${id}/`, {
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
        const work = await response.json();
        console.log(work);
        $("#work_table").bootstrapTable("refresh");
    } catch (error) {
        const text = await error.text();
        console.log(text);
        alert("El pedido no se pudo actualizar. :(");
    }

    $("#edit-work-modal").modal("hide");
});

const customerID = document.querySelector("#customerId")?.value;
const customerName = document.querySelector("#customerName")?.value;
if (customerID) {
    showNewModal({ id: customerID, name: customerName });
}
