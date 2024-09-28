let books = [{id:0,titre:"Atomic Habits",auteur:"James Clear",prix:60}];

        function Afficher() {
            let table = document.getElementById("tab");
            table.innerHTML = `<tr><th scope="col">ID</th><th scope="col">Title</th><th scope="col">Auteur</th><th scope="col">Prix</th><th scope="col">Actions</th></tr>`;
            
            for (let i = 0; i < books.length; i++) {
                let row = `<tr>
                    <td>${books[i].id}</td>
                    <td>${books[i].titre}</td>
                    <td>${books[i].auteur}</td>
                    <td>${books[i].prix}</td>
                    <td>
                        <button class="btn btn-danger" onclick="Supprimer(${books[i].id})">Supprimer</button>
                        <button class="btn btn-info" onclick="Modifier(${books[i].id})">Modifier</button>
                    </td>
                </tr>`;
                table.innerHTML += row;
            }
        }

        function AfficherFormulaire() {
            document.getElementById('formAjout').style.display = 'block';
            document.getElementById('formModification').style.display = 'none';
        }

        function AjouterLivre() {
            let titre = document.getElementById("titre").value;
            let auteur = document.getElementById("auteur").value;
            let prix = document.getElementById("prix").value;
            let id = books.length;  
            let newBook = {id: id, titre: titre, auteur: auteur, prix: prix};
            books.push(newBook);

            alert("Livre ajouté à la liste !");
                
            document.getElementById("titre").value = '';
            document.getElementById("auteur").value = '';
            document.getElementById("prix").value = '';
            document.getElementById('formAjout').style.display = 'none';
            Afficher();
        }

        function Supprimer(id) {
            if (confirm("Etes-vous sure de supprimer ce livre ?")){
                books = books.filter(book => book.id !== id);
                alert("Livre supprimé !");
                Afficher();
            }
        }

        function Modifier(id) {
            let livre = books.find(book => book.id === id);
            document.getElementById('modId').value = livre.id;
            document.getElementById('modTitre').value = livre.titre;
            document.getElementById('modAuteur').value = livre.auteur;
            document.getElementById('modPrix').value = livre.prix;
            
            document.getElementById('formAjout').style.display = 'none';
            document.getElementById('formModification').style.display = 'block';
        }

        function EnregistrerModifications() {
            let id = parseInt(document.getElementById('modId').value);
            let titre = document.getElementById('modTitre').value;
            let auteur = document.getElementById('modAuteur').value;
            let prix = document.getElementById('modPrix').value;

            let livre = books.find(book => book.id === id);
            livre.titre = titre;
            livre.auteur = auteur;
            livre.prix = prix;

            alert("Livre modifié !");
            document.getElementById('formModification').style.display = 'none';
            Afficher();
        }