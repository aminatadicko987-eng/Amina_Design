//...
const nouveauContact = {
    nomClient:document.getElementById('nomClient'). value,
    titreProjet:getElementById('titreProjet'). value,
    numéroContact:getElementById('numéroContact'). value,
    detailProjet:getElementById('detailProjet'). value

} ;
//...
function afficherContact() {
    //...
    liste . innerHTML+=`<li${c .nomClient} - ${c . titreprojet} - ${c.numeroContact} - ${c .detailProjet}
                        <button onclick="updateContact(${index}) "Modifier </button> 
                        <button onclick="updateContact(${index}) "Supprimer </button></li`
    //...

    `
}