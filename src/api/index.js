import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api"
})

export const createNote = data => api.post(`/note`, data)
export const deleteNoteById = id => api.delete(`/note/${id}`)
export const retrieveNote = () => api.get(`/note`)
export const updateNoteById = (id, data) => api.put(`/note/${id}`, data)

const apis = {
    createNote,
    deleteNoteById,
    retrieveNote,
    updateNoteById
}

export default apis
