const form = document.getElementById("contactForm");
const listeContacts = document.getElementById("listeContacts");

let contacts = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nouveauContact = {
        nomClient: document.getElementById("nomClient").value,
        titreProjet: document.getElementById("titreProjet").value,
        numeroContact: document.getElementById("numeroContact").value,
        detailProjet: document.getElementById("detailProjet").value
    };

    contacts.push(nouveauContact);
    afficherContacts();
    form.reset();
});

function afficherContacts() {
    listeContacts.innerHTML = "";

    contacts.forEach((c, index) => {
        listeContacts.innerHTML += `
            <li>
                ${c.nomClient} - ${c.titreProjet} - ${c.numeroContact} - ${c.detailProjet}
                <button onclick="updateContact(${index})">Modifier</button>
                <button onclick="deleteContact(${index})">Supprimer</button>
            </li>
        `;
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    afficherContacts();
}

function updateContact(index) {
    const contact = contacts[index];

    contact.nomClient = prompt("Modifier le nom", contact.nomClient);
    contact.titreProjet = prompt("Modifier le titre du projet", contact.titreProjet);
    contact.numeroContact = prompt("Modifier le numéro", contact.numeroContact);
    contact.detailProjet = prompt("Modifier les détails", contact.detailProjet);

    afficherContacts();
}