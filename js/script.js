// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) 
// in cui possiamo scrivere completamente o parzialmente il nome di un film.
// Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// -Titolo
// -Titolo Originale
// -Lingua
// -Voto

// Milestone 2:
// Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
// Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)

// Milestone 3:
// In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco.
//  Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare per poi aggiungere la parte finale dell’URL passata dall’API.
// Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
// Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)

// Milestone 4:
// Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
// Un header che contiene logo e search bar
// Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342)
// Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview

// Milestone 5 (Opzionale):
// Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno parte del cast aggiungendo alla nostra scheda Film / Serie SOLO i primi 5 restituiti dall’API con Nome e Cognome,
// e i generi associati al film con questo schema: “Genere 1, Genere 2, …”.


var app = new Vue(
    {
    el: '#root',
    data: {  
        listMovie: [],
        listTvSeries: [],
        title: '',
        arrayType: ['HOME', 'MOVIE', 'TV SERIES'],
        courentType: 0,
    }, 
    methods: {
        // searchMovie --> function that, when clicked, searches for a movie / TV series based on user input
        searchMovie() {

            // search Movie
            axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'e56155409e3774c5176290779eef0727',
                        query: this.title,
                        page: 1,
                    }
                })
                    .then((response) => {

                        const obj = response.data;
                        this.listMovie.push(obj.results);

                        console.log('listMovie' ,this.listMovie)
                    });
            
            
            // search Tv Series
            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: 'e56155409e3774c5176290779eef0727',
                    query: this.title,
                    page: 1,
                }
            })
                .then((response) => {

                    const obj = response.data;
                    this.listTvSeries.push(obj.results);

                    console.log('listTvSeries' ,this.listTvSeries)
                });

                // Reset
                this.title = '';
                this.listMovie = [];
                this.listTvSeries = [];
        },
        choiceType(index) {
            // standby
        }
    },
    mounted() {
        
    }
});
