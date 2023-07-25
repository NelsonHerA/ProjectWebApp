window.idFormatter = (value, row) => {
    return row.status ? `<span>${value}</span>` : `<span style="font-weight: 100">${value}</span>`;
};

window.nameFormatter = (value, row) => {
    return row.status ? `<span>${value}</span>` : `<span style="font-weight: 100">${value}</span>`;
};

window.stateFormatter = (value, row) => {
    return row.status ? `<span>Activo</span>` : `<span style="font-weight: 100">Inactivo</span>`;
};

window.optionsDateFormater = (value, row) => {
    // const isActive = `<div style="display:inline-flex;align-items:center;color:${value ? 'green' : 'red'};"><span class="material-icons">toggle_${value ? 'on' : 'off'}</span></div>`
    const settings = `<div title="Editar" class="btn-edit" style="display:inline-flex;align-items:center;"><span class="material-icons btn-settings">settings</span></div>`;
    const addProduct = `<div style="display:inline-flex;align-items:center;"><span class="material-icons btn-settings">add_shopping_cart</span></div>`;
    const loading = `<div class="spinner-border spinner-border-sm text-success" role="status" style="visibility:hidden;"><span class="visually-hidden">Loading...</span></div>`;
    // const container = `<div style="display:flex;justify-content:space-between;align-items:center">${isActive + settings + loading}</div>`
    const container = `<div style="display:flex;justify-content:space-between;align-items:center">${
        settings + loading
    }</div>`;
    return container;
};

window.tableCustomerEvents = {
    "click .btn-edit": (e, value, row, index) => showEditModal(row),
};

const showEditModal = (data) => {
    document.querySelector("#phase_edit_id").value = data.id;
    document.querySelector("#phase_edit_name").value = data.name;
    document.querySelector("#phase-active-check").checked = data.status;

    const myModal = new bootstrap.Modal("#edit-phase", {
        keyboard: false,
    });
    myModal.show();
};

document.querySelector("#edit-phase .btn-primary").addEventListener("click", async (e) => {
    const id = document.querySelector("#phase_edit_id").value;
    const name = document.querySelector("#phase_edit_name").value;
    const status = +document.querySelector("#phase-active-check").checked;

    const data = {
        name: name,
        status: status,
    };

    try {
        const response = await fetch(`/api/phase/${id}/`, {
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
        const phase = await response.json();
        console.log(phase);
        $("#phase_table").bootstrapTable("refresh");
    } catch (error) {
        const text = await error.text();
        console.log(text);
        alert("La etapa no se pudo actualizar. :(");
    }

    $("#edit-phase").modal("hide");
});
