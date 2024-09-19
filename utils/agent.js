import axios from 'axios';

axios.defaults.baseURL = 'https://nw8kawn3kf.execute-api.eu-north-1.amazonaws.com/'


const baseCalls = {
    getOne: async (dbItem, sk)  => await axios.get(`/${dbItem}/${sk}`).then(response => response.data),
    getAll: async (dbItem) => await axios.get(`/${dbItem}`).then(response => response.data),
    create: async (dbItem, data) => await axios.post(`/${dbItem}`, data),
    update: async (dbItem, sk, data) => await axios.put(`/${dbItem}/${sk}`, data),
    delete: async (dbItem, sk) => await axios.delete(`/${dbItem}/${sk}`)
}

const tasks = {
    getAll:  async () => await baseCalls.getAll('tasks'),
    getBySK: async (sk) => await baseCalls.getOne('tasks', sk),
    create:  async (data) => await baseCalls.create('tasks', data),
    update:  async (sk, data) => await baseCalls.update('tasks', sk, data),
    delete:  async (sk) => await baseCalls.delete('tasks', sk)
}

const agent = {
    tasks
}

export default agent;