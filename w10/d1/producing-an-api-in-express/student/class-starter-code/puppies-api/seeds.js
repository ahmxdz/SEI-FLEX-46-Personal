require('./config/database')

const Puppy = require('./models/puppy')

async function createPuppy(){

        let newPuppy = new Puppy({
            name: 'Puppy',
            breed: 'Doberman',
            age: 1
        })
        await newPuppy.save()
 
    // Puppy.create({name: 'Puppy',
    // breed: 'Doberman',
    // age: 1}, function(err, newPuppy){
    //     if (!err) console.log('puppy is saved!')
    // })

    // Puppy.create({name: 'Puppy',
    // breed: 'Doberman',
    // age: 1}).then(newPuppy => console.log(newPuppy))

}

createPuppy()

// name: {type: String, required: true},
// breed: {type: String, default: 'Mixed'},
// age: {type: Number, default: 0}

console.log('Seeds file is running!')