import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Reemplaza con la URL de tu backend

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getNotes = () => api.get('/notes').then((response) => response.data.content);
export const getArchive = () => api.get('/notes/archives').then((response) => response.data.content);
export const createNote = (note) => api.post('/notes', note);
export const updateNote = (note) => api.put(`/notes/${note.id}`, note);
export const deleteNote = (noteId) => api.delete(`/notes/${noteId}`);

export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (user) => api.post('/auth/register', user);

const apiRoutes = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
    login,
    register,
};

export default apiRoutes;
