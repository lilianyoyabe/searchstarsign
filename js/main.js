$(function() {

	$('.js-multiple-select').select2({
		tags: true,
		tokenSeparators: [',', ' '],
		placeholder: '請選擇一個或多個星座'
	});

});

document.addEventListener("DOMContentLoaded", function () {
    let multipleSelect = document.getElementById("multipleSelect");
    let nameList = document.getElementById("nameList");

    multipleSelect.addEventListener("change", function () {
        nameList.innerHTML = "";
        let selectedStarSigns = Array.from(multipleSelect.selectedOptions).map(option => option.value);
        console.log(selectedStarSigns);
        for (let i = 0; i < data.length; i++) {
            if (selectedStarSigns.includes(data[i].starSign)) {
                let listItem = document.createElement("li");
                listItem.textContent = data[i].name;
                nameList.appendChild(listItem);
            }
        }
    });
});
