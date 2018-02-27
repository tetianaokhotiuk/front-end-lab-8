var rootNode = document.getElementById("root");

function createFileTree(arr) {

    var list = document.createElement('ul');

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].folder) {
            var item = document.createElement('li');
            item.className = "item";
            list.appendChild(item);
            var folder1 = document.createElement('i');
            folder1.className = "material-icons";
            folder1.innerHTML = "folder";
            folder1.style.color = "#d99f0d";
            item.appendChild(folder1);
            var title = document.createElement('span');
            title.innerHTML = arr[i].title;
            item.appendChild(title);
            folder1.addEventListener('click', toggle, true);


            if (arr[i].children) {
                var list2 = createFileTree(arr[i].children);
                item.appendChild(list2);
                list2.className = "closed";

            } else {
                var emptyFolder = document.createElement('p');
                emptyFolder.innerHTML = "Folder is empty";
                emptyFolder.className = "emptyFolder";
                item.appendChild(emptyFolder);
            }

        } else if (arr[i].title) {
            var item = document.createElement('li');
            list.appendChild(item);
            var file = document.createElement('i');
            file.className = "material-icons";
            file.innerHTML = "insert_drive_file";
            file.style.color = "#C7C7C7";
            item.appendChild(file);
            var title = document.createElement('span');
            title.innerHTML = arr[i].title;
            item.appendChild(title);

        }

    }

    return list;

    function toggle(event) {

        var folder = this.parentNode.children[0].innerHTML;
        this.parentNode.children[0].innerHTML = folder == 'folder' ? 'folder_open' : 'folder';
        var folderVisible = this.parentNode.children[2].className;
        this.parentNode.children[2].className = folderVisible == 'opened' ? 'closed' : 'opened';

    }

}

rootNode.appendChild(createFileTree(structure));