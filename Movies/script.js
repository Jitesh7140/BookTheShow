document.querySelectorAll('.date-box').forEach(box => {
    box.addEventListener('click', function () {
        // Remove the selected class from all date boxes
        document.querySelectorAll('.date-box').forEach(b => b.classList.remove('selected'));
        // Add the selected class to the clicked date box
        this.classList.add('selected');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            dropdownContent.classList.remove('show');
        }
    });
});



function updateDropdown(dropdownId) {
    let selectedValues = Array.from(document.querySelectorAll(`#${dropdownId} ~ .dropdown-content input[type="checkbox"]:checked`))
        .map(cb => cb.value);

    let defaultText = {
        "selectedPrice1": "Hindi - IMAX 2D",
        "selectedPrice2": "Price Range",
        "selectedPrice3": "Preferred Time"
    };

    let displayText = selectedValues.length > 1
        ? selectedValues[0] + "..."
        : selectedValues[0] || defaultText[dropdownId];

    document.getElementById(dropdownId).innerHTML = displayText + ' <i class="mx-1 fa fa-caret-down"></i>';
}

document.querySelectorAll('.dropdown-content input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        let dropdownId = this.closest('.dropdown').querySelector('.dropbtn').id;
        updateDropdown(dropdownId);
    });
});



document.getElementById('searchBtn2').addEventListener('click', function () {
     document.getElementById('selectedItems').style.display='block' ; 
     document.getElementById('selectedItems23').style.display='block' ; 
    const myElement = document.getElementById("selectedPrice1");
    const myElement2 = document.getElementById("selectedPrice2");
    const myElement3 = document.getElementById("selectedPrice3"); 
    document.getElementById("movietype").innerText = myElement.innerText
    document.getElementById("Pricerange").innerText = myElement2.innerText
    document.getElementById("Timing").innerText = myElement3.innerText
        




});
