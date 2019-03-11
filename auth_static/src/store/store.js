import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1"

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        },
        destroyCommit(state, token) {
            state.token = null
        },
    },
    actions: {
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/rest-auth/login/', credentials).then(response => {
                    const token = response.data.key;
                    localStorage.setItem('access_token', token);
                    context.commit('retrieveToken', token);
                    resolve(response);
                    //console.log(token);
                }).catch(error => {
                    //console.log(error);
                    reject(error);
                })
            })

        },
        destroyToken(context) {
            // axios.defaults.headers.common['Authorization'] = 'Token ' + context.state.token;
            if (context.getters.loggedIn) {
                const auth_header = {
                    headers: { Authorization: 'Token ' + localStorage.getItem('access_token') }
                }
                return new Promise((resolve, reject) => {
                    axios.post('/rest-auth/logout/', {}, auth_header).then(response => {
                        localStorage.removeItem('access_token');
                        context.commit('destroyCommit');
                        resolve(response);
                    }).catch(error => {
                        localStorage.removeItem('access_token');
                        context.commit('destroyCommit');
                        reject(error);
                    })
                })
            }
        }
    }
})