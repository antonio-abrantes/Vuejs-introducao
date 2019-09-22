var PokeService = {
    API: {
        url: '//dev.treinaweb.com.br/pokeapi/',
        get: (url) => {
            return fetch(`${PokeService.API.url}${url}`)
                .then(response => response.json());
        },
        Pokemon: {
            listAll: () => {
                return PokeService.API.get('pokedex/1')
                    .then(response => {
                        return response.pokemon
                            .map(pokemon => {
                                pokemon.number = PokeService.getNumberFromURL(pokemon.resource_uri);
                                return pokemon
                            })
                            .filter(pokemon => pokemon.number < 1000)
                            .sort((a, b) => (a.number > b.number ? 1 : -1) )
                    })
            }
        }
    },
    getNumberFromURL: (url) => {
        return parseInt(url.replace(/.*\/(\d+)\/$/,'$1'));
    }
}