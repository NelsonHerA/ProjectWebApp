window.optionsDateFormater = (value, row) => {
    // const isActive = `<div style="display:inline-flex;align-items:center;color:${value ? 'green' : 'red'};"><span class="material-icons">toggle_${value ? 'on' : 'off'}</span></div>`
    const settings = `<div title="Editar" class="btn-edit" style="display:inline-flex;align-items:center;"><span class="material-icons btn-settings">settings</span></div>`;
    const addProduct = `<a href="/work/?customer=${row.id}" class="btn-add" style="display:inline-flex;align-items:center;text-decoration: none;color: black;"><span class="material-icons btn-settings">add_shopping_cart</span></a>`;
    const loading = `<div class="spinner-border spinner-border-sm text-success" role="status" style="visibility:hidden;"><span class="visually-hidden">Loading...</span></div>`;
    // const container = `<div style="display:flex;justify-content:space-between;align-items:center">${isActive + settings + loading}</div>`
    const container = `<div style="display:flex;justify-content:space-between;align-items:center">${
        settings + addProduct + loading
    }</div>`;
    return container;
};

window.tableCustomerEvents = {
    "click .btn-edit": (e, value, row, index) => showEditModal(row),
    // "click .btn-add": (e, value, row, index) => showEditModal(row),
};

const showEditModal = (data) => {
    document.querySelector("#customer_edit_id").value = data.id;
    document.querySelector("#customer_edit_name").value = data.name;
    document.querySelector("#customer_edit_dni").value = data.dni;
    document.querySelector("#customer_edit_ruc").value = data.ruc;
    document.querySelector("#customer_edit_phone").value = data.phone;
    document.querySelector("#customer_edit_address").value = data.address;
    document.querySelector("#customer_edit_email").value = data.email;

    const myModal = new bootstrap.Modal("#edit-customer", {
        keyboard: false,
    });
    myModal.show();
};

document.querySelector("#add-center-modal .btn-primary").addEventListener("click", async (e) => {
    const name = document.querySelector("#customer_name").value;
    const dni = document.querySelector("#customer_dni").value;
    const ruc = document.querySelector("#customer_ruc").value;
    const phone = document.querySelector("#customer_phone").value;
    const email = document.querySelector("#customer_email").value;
    const address = document.querySelector("#customer_address").value;

    const data = {
        name: name,
        dni: dni,
        ruc: ruc,
        phone: phone,
        email: email,
        address: address,
    };

    try {
        const response = await fetch("/api/customer/", {
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
        const customer = await response.json();
        console.log(customer);
        $("#customer_table").bootstrapTable("refresh");
        // alert("El nuevo cliente se guardó con exito!");
    } catch (error) {
        const text = await error.text();
        console.log(text);
        alert("El nuevo cliente no se pudo guardar. :(");
    }

    document.querySelector("#customer_name").value = "";
    document.querySelector("#customer_dni").value = "";
    document.querySelector("#customer_ruc").value = "";
    document.querySelector("#customer_phone").value = "";
    document.querySelector("#customer_email").value = "";
    document.querySelector("#customer_address").value = "";

    $("#add-center-modal").modal("hide");
});

document.querySelector("#edit-customer .btn-primary").addEventListener("click", async (e) => {
    const id = document.querySelector("#customer_edit_id").value;
    const name = document.querySelector("#customer_edit_name").value;
    const dni = document.querySelector("#customer_edit_dni").value;
    const ruc = document.querySelector("#customer_edit_ruc").value;
    const phone = document.querySelector("#customer_edit_phone").value;
    const email = document.querySelector("#customer_edit_email").value;
    const address = document.querySelector("#customer_edit_address").value;

    const data = {
        name: name,
        dni: dni,
        ruc: ruc,
        phone: phone,
        email: email,
        address: address,
    };

    try {
        const response = await fetch(`/api/customer/${id}/`, {
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
        const customer = await response.json();
        console.log(customer);
        $("#customer_table").bootstrapTable("refresh");
    } catch (error) {
        const text = await error.text();
        console.log(text);
        alert("El nuevo cliente no se pudo actualizar. :(");
    }

    $("#edit-customer").modal("hide");
});
