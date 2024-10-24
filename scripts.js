function uploadFile() {
    var input = document.getElementById('fileInput');
    if (input.files.length > 0) {
        var fileList = document.getElementById('fileList');
        var file = input.files[0];
        var listItem = document.createElement('div');
        listItem.textContent = 'تم تحميل الملف: ' + file.name;
        fileList.appendChild(listItem);
    }
}

function scrollToMenu(menuNumber) {
    var element = document.getElementById('menu' + menuNumber);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}