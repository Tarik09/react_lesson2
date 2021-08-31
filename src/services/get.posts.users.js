const url = 'https://jsonplaceholder.typicode.com/users'

const getPostsUsers = (id) => {
    return fetch(url + '/' + id + '/posts')
        .then(value => value.json())
}

export {getPostsUsers};