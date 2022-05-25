 require('./config/database');// connect this script to the database
 const Movie = require('./models/movie');
 const User = require('./models/movie');
 const Performer = require('./models/performer');
 const data = require('./data');

const p = new Promise(function(resolve, reject) {
    console.log(resolve)
    console.log(reject)

    resolve('resolved with this value')
})

p.then(function (resolvedValue) {
    console.log('Printing my resolved value: ', resolvedValue)
})

// console.log(p)


// This runs log 1, log 3, then log 2 after 1 second
function someSynchronousFunction() {
    console.log('-------')
    console.log('This is one sync function')

    console.log(1)

    setTimeout(function () {
        console.log(2)
    }, 1000)

    console.log(3)
}

function loggingNumbersWithDelayPromise() {
    console.log('-------')
    console.log('We are using a promise')

    console.log(1)
    const waitPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(2)
            // resolve(['My tweet'])
            // reject('Tweets not found')

            resolve([])
            console.log('some log here')
        }, 1000)
    })

    waitPromise.then(function (resolvedValue) {
        console.log(3)
    })

    const promiseWithThen = waitPromise.then(function (twitterResponse) {
        console.log('Then')
        const tweets = twitterResponse
        if (!tweets || tweets.length === 0) {
            return Promise.reject('Now tweets are really not found')
        }
        console.log(3)
        // resolve(tweets)
    })

    promiseWithThen.catch(function (err) {
        console.log('Catch function')
        console.log(err)
    })
}

// Example of chaining promises
// Mocking twitter api call
function fakePromiseGetTweetById(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const myTweet = {
                content: 'Hey, welcome to my feed',
                timestamp: {
                    createdAt: '2022-02-11'
                },
                author: 'Ashwin'
            }
            resolve(myTweet)
        }, 500)
    })
}

function exampleOfChainingPromises() {
    // User.findOne({ title: 'Superbad' }).then(function (userObj) {
    //     // Assumed tweetId is the same as user id
    //     const twitterId = userObj._id
    //     fakePromiseGetTweetById(twitterId).then(function (tweetObj) {
    //         console.log(tweetObj.conte)
    //     })
    // })

    // Same as above + catch
    User.findOne({ title: 'Superbad' })
    .then(function (userObj) {
        // Assumed tweetId is the same as user id
        const twitterId = userObj._id
        console.log('first then')
        return fakePromiseGetTweetById(twitterId)
    })
    .then(function (tweetObj) {
        if (tweetObj.content.length > 140) {
            return Promise.reject('Too many characters for your content')
        }
        
        console.log('second then')
        console.log(tweetObj.content)
        // return Promise.reject('This is my error')
        // return Promise.resolve(tweetObj.content)
        return tweetObj.content
    })
    .then(function (tweetContent) {
        // throw new Error('oh no!!')
        console.log('Printing my tweet content again', tweetContent)
    })
    .catch(function (err) {
        console.log('Catch22', err)
    })
    .finally(function () {
        console.log('This runs in the end')
    })
}

// someSynchronousFunction()
// loggingNumbersWithDelayPromise()
exampleOfChainingPromises()