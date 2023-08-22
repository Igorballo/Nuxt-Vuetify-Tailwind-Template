import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'

export const actions = {
  nuxtClientInit ({ commit }, context) {
    const token = Cookies.get('token')
    const user = Cookies.get('user')
    const last_connexion_time = Cookies.get('last_connexion_time')
    const ticket = Cookies.get('ticket')
    const hotel = Cookies.get('hotel')
    const recherche_ticket_adresse_depart = Cookies.get('recherche_ticket_adresse_depart')
    const recherche_ticket_adresse_destination = Cookies.get('recherche_ticket_adresse_destination')
    const recherche_ticket_date_depart = Cookies.get('recherche_ticket_date_depart')
    const societe = Cookies.get('societe')
    const societes = Cookies.get('societes')

    if(ticket){
      commit('user/SET_TICKET', JSON.parse(ticket))
    }

    if(hotel){
      commit('user/SET_HOTEL', JSON.parse(hotel))
    }

    if(societe){
      commit('store-societe/SET_AUTH_ACCOUNT_SOCIETE', JSON.parse(societe))
    }

    if(societes){
      commit('store-societe/SET_AUTH_ACCOUNT_SOCIETES', JSON.parse(societes))
    }

    if(recherche_ticket_adresse_depart){
      commit('user/SET_RECHERCHE_TICKET_ADRESSE_DEPART', JSON.parse(recherche_ticket_adresse_depart))
    }

    if(recherche_ticket_adresse_destination){
      commit('user/SET_RECHERCHE_TICKET_ADRESSE_DESTINATION', JSON.parse(recherche_ticket_adresse_destination))
    }

    if(recherche_ticket_date_depart){
      commit('user/SET_RECHERCHE_TICKET_DATE_DEPART', JSON.parse(recherche_ticket_date_depart))
    }

    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    if (user) {
      commit('auth/UPDATE_USER', JSON.parse(user))
    }

    if(last_connexion_time){
      commit('auth/SET_LAST_CONNEXION_TIME', JSON.parse(last_connexion_time))
    }

    const order_ticket = Cookies.get('temp_ticket')
    if(order_ticket){
      commit('ticket_bus/SET_TEMP_TICKET', JSON.parse(order_ticket))
    }

  }
}
