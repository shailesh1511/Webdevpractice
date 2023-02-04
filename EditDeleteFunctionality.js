var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
    e.preventDefault();
    
    //Get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteBtn = document.createElement('button');
    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    // create edit button element
    var editBtn = document.createElement('button');
    //add classes to button
    editBtn.className = 'btn btn-primary btn-sm float-right mr-2 edit';
    //append tex node
    editBtn.appendChild(document.createTextNode('Edit'));
    //append button to li
    li.appendChild(editBtn);

    itemList.appendChild(li);
}

//remove Item
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                var li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }



