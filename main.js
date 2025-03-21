const list = [];

renderList();

function renderList(){
    let listHTML = '';

    for (i=0; i<list.length; i++){
        const listItem = list[i];
        const html = `
            <p>
                ${listItem}
                <i onclick="
                    const newValue = prompt('Edit item:', list[${i}]);
                    if (newValue !== null) {
                        list[${i}] = newValue;
                        renderList();
                    }
                "
                class="fa-solid fa-pen-to-square"></i>
                <i onclick="
                list.splice(${i}, 1)
                renderList();
                "
                class="fa-solid fa-trash"></i>
            </p>
        `;
        listHTML += html;
    }
    document.getElementById("js-list").innerHTML = listHTML;
}

function addItem(){
    const inputElement = document.getElementById("js-text-input");
    const item = inputElement.value;
    list.push(item);
    console.log(list);
    inputElement.value = '';
    renderList();
}