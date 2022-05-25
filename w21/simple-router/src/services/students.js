export function getStudents(){
    return fetch('http://localhost:4000/students', {mode: 'cors'}).then(
        res => res.json()
    )
}