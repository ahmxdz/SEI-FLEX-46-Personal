import {makePostRequest} from '../../util/request.util'
export const handleNameSubmit = (firstName, lastName) => {
    const urlPath = '/students'
    makePostRequest(urlPath, { firstName, lastName })
}