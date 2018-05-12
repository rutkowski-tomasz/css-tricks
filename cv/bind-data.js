
(function () { 

    let elements = document.querySelectorAll("[data-bind]");
    for(let element of elements) {
        element.innerHTML = personalData[element.dataset.bind];
    }
})();