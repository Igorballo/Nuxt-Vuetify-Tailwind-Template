import Cookies from "js-cookie";

export const state = () => ({
  ticket: null,
  hotel: null,
});

export const getters = {
  ticket: state => state.ticket,
  hotel: state => state.hotel,
}

export const mutations = {
  SET_TICKET(state, ticket) {
    state.ticket = ticket
  },
  SET_HOTEL(state, hotel) {
    state.hotel = hotel
  },
}

export const actions = {
  saveRechercheTicket ({ commit, dispatch }, ticket) {
    commit('SET_TICKET', ticket)
    if (!!ticket)
      Cookies.set('ticket', JSON.stringify(ticket), { expires: false ? 365 : null })
  },
  saveRechercheHotel ({ commit, dispatch }, hotel) {
    commit('SET_HOTEL', hotel)
    if (!!hotel)
      Cookies.set('hotel', JSON.stringify(hotel), { expires: false ? 365 : null })
  },
}
