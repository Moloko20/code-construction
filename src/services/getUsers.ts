export async function getUsers() {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(response =>
        response.json(),
    )
}
