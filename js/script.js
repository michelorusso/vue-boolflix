// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) 
// in cui possiamo scrivere completamente o parzialmente il nome di un film.
// Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// -Titolo
// -Titolo Originale
// -Lingua
// -Voto

var app = new Vue(
    {
    el: '#root',
    data: {  
        listMovie: [],
        title: '',
    }, 
    methods: {
        searchMovie() {

            axios.get('https://api.themoviedb.org/3/search/multi', {
                        params: {
                            api_key: 'e56155409e3774c5176290779eef0727',
                            query: this.title,
                            page: 1,
                        }
                    })
                        .then((response) => {

                            this.listMovie.push(response.data.results);

                            console.log('listMovie' ,this.listMovie)
                        });

                    this.title = '';
                    this.listMovie = [];


        }
    },
    mounted() {
        
    }
});
