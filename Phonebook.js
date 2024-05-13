// Define a phone book object to store contacts
const phoneBook = {
    contacts: [],
    addContact: function(name, phoneNumber, email) {
        this.contacts.push({ name, phoneNumber, email });
        console.log(`${name} has been added to the phone book.`);
    },
    searchContact: function(name) {
        const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (contact) {
            console.log(`Name: ${contact.name}, Phone Number: ${contact.phoneNumber}, Email: ${contact.email}`);
        } else {
            console.log(`Contact with name '${name}' not found.`);
        }
    },
    updateContact: function(name, newPhoneNumber, newEmail) {
        const index = this.contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            this.contacts[index].phoneNumber = newPhoneNumber;
            this.contacts[index].email = newEmail;
            console.log(`${name}'s contact information has been updated.`);
        } else {
            console.log(`Contact with name '${name}' not found.`);
        }
    },
    deleteContact: function(name) {
        const index = this.contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`${name} has been deleted from the phone book.`);
        } else {
            console.log(`Contact with name '${name}' not found.`);
        }
    }
};

phoneBook.addContact("saloni", "1234567890", "saloni@gmail.com");
phoneBook.addContact("amaan", "9876543210", "amaan@gmail.com");
phoneBook.addContact("aviral", "9876543210", "aviral@gmail.com");
phoneBook.searchContact("saloni");
phoneBook.searchContact("amaan");
phoneBook.searchContact("aviral");
phoneBook.updateContact("saloni", "0123456789", "saloni12@gmail.com");
phoneBook.searchContact("aviral");
phoneBook.deleteContact("aviral");
phoneBook.searchContact("amaan");
