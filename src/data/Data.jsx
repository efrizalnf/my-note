const key = 'NOTES';

const cekStorage = () =>{
    return typeof Storage !== "undefined";
}
const getAllNotes = () => { if (cekStorage) { return JSON.parse(localStorage.getItem(key)) } return [] }

const addNotes = (data) => {
    localStorage.setItem(key, data)
} 

const deleteNotes = (id) => {
    let data = JSON.parse(localStorage.getItem(key))
    data = data.filter(element => element.id !== id);
    localStorage.setItem(key, JSON.stringify(data));
}

export default { getAllNotes, addNotes, deleteNotes };