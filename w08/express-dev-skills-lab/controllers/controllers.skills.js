const Skills = require('../models/models.skills')

function createList (req, res, next){
    Skills.forEach(i => {
        return i
    })
    res.render('views.skills.ejs', { title: 'Skills Page', skillsList: Skills})
}
function push(req, res){
    Skills.push(req.body.newSkill)
    res.redirect('/skills')
}

function deleteSkills (req, res, s){
    // function RemoveElement(){
    //     document.getElementById('d').parentElement.remove()
    // }
    // RemoveElement()
    res.redirect('/')
}

function getArrayPosition (){
    Skills.forEach(e => {
        return Skills[e]

    })
}
module.exports = {
    createList,
    push,
    getArrayPosition,
    deleteSkills,

}