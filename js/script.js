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
// Qui un esempio di chiamata per le serie tv:

var app = new Vue(
    {
    el: '#root',
    data: {  
        listMovie: [],
        title: '',
    }, 
    methods: {
        searchMovie() {

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

                    this.title = '';
                    this.listMovie = [];


        }
    },
    mounted() {
        
    }
});
