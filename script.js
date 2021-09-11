let newBtn = document.getElementsByClassName('buttonNew')
let div = null
let arr = []
localStorage.clear();

function addNote() {
    document.getElementById('noteField').style.visibility = 'visible'
    let newNote = document.createElement('div');
    document.getElementById('noteList').appendChild(newNote)
    document.getElementsByClassName('buttonNew').style.disabled = true
}

function SaveNote() {
    let currentTitle = document.getElementById('title').value
    let currentDescription = document.getElementById('description').value
    let notes = localStorage.getItem('inputField')
    if (notes == null) {
        arr = []
    } else {
        arr = JSON.parse(notes)
    }
    arr.push({
        title: currentTitle,
        description: currentDescription
    })
    localStorage.setItem('inputField', JSON.stringify(arr))
    showNoteList()
    resetNote()
}

function showNoteList() {
    let list = document.getElementById('noteList')
    list.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let newNoteDiv = document.createElement('div');
        newNoteDiv.innerHTML = arr[i].title
        newNoteDiv.className = 'noteItem'
        newNoteDiv.addEventListener('click', (e) => {
            editNote(newNoteDiv)
        })
        document.getElementById('noteList').appendChild(newNoteDiv)
    }
}

function resetNote() {
    document.getElementById('title').value = ''
    document.getElementById('description').value = ''
}

function editNote(div) {
    document.getElementById('title').value = div.innerHTML
    document.getElementById('description').value = arr.find(item => div.innerHTML === item.title).description
}


function deleteNote() {
    let notes = localStorage.getItem('inputField')
    if (notes == null) {
        arr = []
    } else {
        arr = JSON.parse(notes)
    }
    arr.splice('inputField', 1);
    localStorage.setItem('inputField', JSON.stringify(arr))
    showNoteList()
}

function sortByTitle() {
    if (localStorage.length > 0) {
        arr = new Array();
        for (i = 0; i < localStorage.length; i++) {
            arr[i] = localStorage.key(i) + localStorage.getItem(localStorage.key(i));
        }
    }
    var sortedArray = arr.sort();
    return sortedArray;
}