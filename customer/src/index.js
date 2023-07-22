window.optionsDateFormater = (value, row) => {
    // const isActive = `<div style="display:inline-flex;align-items:center;color:${value ? 'green' : 'red'};"><span class="material-icons">toggle_${value ? 'on' : 'off'}</span></div>`
    const settings = `<div title="Editar" style="display:inline-flex;align-items:center;"><span class="material-icons btn-settings">settings</span></div>`;
    const addProduct = `<div style="display:inline-flex;align-items:center;"><span class="material-icons btn-settings">add_shopping_cart</span></div>`;
    const loading = `<div class="spinner-border spinner-border-sm text-success" role="status" style="visibility:hidden;"><span class="visually-hidden">Loading...</span></div>`;
    // const container = `<div style="display:flex;justify-content:space-between;align-items:center">${isActive + settings + loading}</div>`
    const container = `<div style="display:flex;justify-content:space-between;align-items:center">${
        settings + addProduct + loading
    }</div>`;
    return container;
};
