//external api 
function auth(callBackFunction) {
    setTimeout(function () {
        const randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1) //should return 1 or 2
        if (randomNumber === 1) {
            callBackFunction(true) //we are not returning anything here, we are calling the function
        } else {
            callBackFunction(false)
        }
    }, 1000)
}

//expertnal api
function fetchUser(callbackFunction) {
    const randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1) //should return 1 or 2
    setTimeout(function () {
        if (randomNumber === 1) {
            callbackFunction(null, { name: 'Beni', age: 19, image: 'some image', friends: [{ name: 'Sarah Conor' }, { name: 'Arnold shwarz' }] })
        } else {
            callbackFunction('Errror!!!!! database is broken')
        }
    }, 1000)
}


auth((isLoggedIn) => {
    console.log('user is logged in? ', isLoggedIn)
    if (isLoggedIn) {
        fetchUser((err, data) => {            
            if (err) {
                console.log('Error : ', err)
            } else {
                console.log(data)
            }
        })
    }
})

console.log('end')



