const toggleFavorite = (id: number) =>{
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

    if(favorites.includes(id)) {
        favorites = favorites.filter( pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}


const existInFavorites = (id: number): boolean =>{

    //assure code is ran in client (not server, since window object is not available)
    if(typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

return favorites.includes(id);
}


const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}


const exports = {
    toggleFavorite,
    existInFavorites,
    pokemons  
}


export default exports
