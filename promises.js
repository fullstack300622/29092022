

//external
// const getDataFromDatabasePromise = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1) //should return 1 or 2
//     if (randomNumber === 1) {
//         resolve({name:'beni',id:'123-123-4343'});
//     } else {
//         reject('Error there is no data in database');
//     }
// })

// getDataFromDatabasePromise.then((data)=>{
//     console.log('data',data)
// }).catch((err)=>{
//     console.log('[getDataFromDatabasePromise] error',err)
// })



//external api
function auth() {
    const promiseOBJ = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000)
    })
    return promiseOBJ;
}

//expertnal api
function fetchUser() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1) //should return 1 or 2
        setTimeout(() => {
            if (randomNumber === 1) {
                resolve({ name: 'Beni', age: 19, image: 'some image', friends: [{ name: 'Sarah Conor' }, { name: 'Arnold shwarz' }] })
            } else {
                reject('There is no such user in database')
            }
        }, 1000)
    })
}

// async await
// async function doAuthAndFetch(){}
const doAuthAndFetch = async () => {
    try {
        const isLoggedIn = await auth();
        console.log(isLoggedIn)
        const data = await fetchUser();
        console.log(data)
    } catch (error) {
        console.log('error: ', error)
    }
    // console.log('is logged in:',isLoggedIn)
    // if(isLoggedIn){
    // console.log(data)
    // }
    // console.log(isLoggedIn)
}

doAuthAndFetch();


// auth()
//     .then((isLoggedIn) => {
//         console.log('user is logged in? :', isLoggedIn)
//         fetchUser()
//             .then((data) => {
//                 console.log('here is the user: ', data)
//             })
//             .catch((err)=>{
//                 console.log('error: ',err)
//             })
//     }).catch((err) => {
//         console.log(err)
//     })

// console.log('end')
