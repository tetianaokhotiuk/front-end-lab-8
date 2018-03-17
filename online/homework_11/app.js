var rootNode = document.getElementById("root");

function createFileTree(arr) {

    var list = document.createElement('ul');

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].folder) {
            var item = document.createElement('li');
            item.className = "item";
            list.appendChild(item);
            var div = document.createElement('div');
            div.className = "line";
            item.appendChild(div);
            var folder1 = document.createElement('i');
            folder1.className = "material-icons";
            folder1.innerHTML = "folder";
            folder1.style.color = "#d99f0d";
            div.appendChild(folder1);
            var title = document.createElement('p');
            title.addEventListener('click', function() {
            	event.stopPropagation();
            });
            title.innerHTML = arr[i].title;
            div.appendChild(title);
            div.addEventListener('click', toggle);


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
            var div = document.createElement('div');
            div.className = "line";
            item.appendChild(div);
            var file = document.createElement('i');
            file.className = "material-icons";
            file.innerHTML = "insert_drive_file";
            file.style.color = "#C7C7C7";
            div.appendChild(file);
            var title = document.createElement('p');
            title.className = "title";
            title.innerHTML = arr[i].title;
            div.appendChild(title);

        }

    }

    return list;

    function toggle(event) {

        var folder = this.children[0].innerHTML;
        this.children[0].innerHTML = folder == 'folder' ? 'folder_open' : 'folder';
        var folderVisible = this.nextSibling.className;
        this.nextSibling.className = folderVisible == 'opened' ? 'closed' : 'opened';

    }

}

rootNode.appendChild(createFileTree(structure));