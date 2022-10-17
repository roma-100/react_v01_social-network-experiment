import * as axios from "axios";

const instance = axios.create (
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {'API-KEY': '46f80780-8cc7-4980-bf49-abc33bba8e09'}
    }
);

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        const httpQuery = `users?page=${currentPage}&count=${pageSize}`; //baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        return instance.get(httpQuery)
            .then(response => response.data)
    },  
    follow(userId) { 
        const httpQuery = `follow/${userId}`; //baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        return instance.post(httpQuery)
        .then(response => response.data)
    },
    unfollow(userId) { 
        const httpQuery = `follow/${userId}`; //baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        return instance.delete(httpQuery)
        .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        const httpQuery = `profile/${userId}`; //baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        return instance.get(httpQuery)
        .then(response => response.data)
    },
    getStatus(userId){ //add new
        const httpQuery = `profile/status/${userId}`; //baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        return instance.get(httpQuery)
        .then(response => response.data)
    },  
    updateStatus(status){ //add new
        const httpQuery = `profile/status`; 
        return instance.put(httpQuery, {status: status}) //отправляем инфо <300 line
        .then(response => response.data)
    },      
}

export const authAPI = {
    me(){
        const httpQuery = `auth/me`; //baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        return instance.get(httpQuery)
        .then(response => response.data)
    }
}
