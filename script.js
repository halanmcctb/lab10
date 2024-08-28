let contacts = [ 
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" }, 
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" }, 
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" } 
];

function displayContacts(callback) {
    setTimeout(() => {
        const contactsList = document.getElementById('contacts_list');
        contactsList.innerHTML = '';
        contacts.forEach(contact => {
            const contactItem = document.createElement('div');
            contactItem.innerHTML = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
            contactsList.appendChild(contactItem);
        });
        callback();
    }, 1000);
}

function addContact() {
    const name = prompt("Enter contact name:");
    const phone = prompt("Enter contact phone:");
    const email = prompt("Enter contact email:");
    if (name && phone && email) {
        contacts.push({ name, phone, email });
    }
}

function findContactByName(name, index = 0) {
    if (index >= contacts.length) {
        alert("Contact not found.");
        return null;
    }
    if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
        alert(`Contact found: Name: ${contacts[index].name}, Phone: ${contacts[index].phone}, Email: ${contacts[index].email}`);
        return contacts[index];
    }
    return findContactByName(name, index + 1);
}

function changeBackgroundColor() {
    const colors = ['#FFB6C1', '#ADD8E6', '#90EE90', '#FFFFE0', '#D3D3D3'];
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[index % colors.length];
        index++;
    }, 5000);
}

setInterval(() => {
    console.log(`Total contacts: ${contacts.length}`);
}, 5000);

function init() {
    displayContacts(() => {
        console.log('Contacts displayed.');
    });
    changeBackgroundColor();
    
    let action;
    do {
        action = prompt("Choose an action: add, find, or stop");
        switch(action.toLowerCase()) {
            case 'add':
                addContact();
                displayContacts(() => console.log('Contact added.'));
                break;
            case 'find':
                const name = prompt("Enter the name to search:");
                findContactByName(name);
                break;
            case 'stop':
                alert("Success!");
                break;
            default:
                alert("Invalid action. Please choose 'add', 'find', or 'stop'.");
        }
    } while (action.toLowerCase() !== 'stop');
}

init();
