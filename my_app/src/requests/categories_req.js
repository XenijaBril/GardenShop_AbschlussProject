
export const load_categories = () => {
    fetch('http://localhost:3333/categories/all')
    .then(resp => resp.json())
    .then(json => console.log(json))
}