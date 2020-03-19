import axios from 'axios'

export default function ajax(url, type = 'GET' ,data = {}) {
    if (type === 'GET') {
        return axios.get(url, {
            params: data
        }
        )
    }
    else {
        return axios.post(url, data,{headers: {'Content-Type': 'application/json'}}
        )
    }
}
