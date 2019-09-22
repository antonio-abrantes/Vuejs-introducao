const app = new Vue({
    el: '#app',
    data: {
        pokemonList: [],
        nameFilter: ''
    },
    filters:{
        pokeNumber: function(number){
            return ('000' + number).slice(-3);
        }
    },
    mounted: function(){
        PokeService.API.Pokemon.listAll()
        .then(pokemonList =>{
                this.pokemonList = pokemonList;
            })
    },
    computed: {
        pokeList: function(){
            var nameFilter = this.nameFilter.toLowerCase();
            return this.pokemonList.filter( pokemon => pokemon.name.includes(nameFilter) )
        }
    }
})