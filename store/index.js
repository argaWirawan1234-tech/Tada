export const state = () => ({
    listInvoices: [
      {code: 'RT3080', date: '20 Sep 2021', person: 'Arga Wirawan', amount: '123456', status: 'Paid'},
      {code: 'RT3080', date: '20 Sep 2021', person: 'Arga Wirawan', amount: '123456', status: 'Pending'},
    ]
  })
  
  export const mutations = {
    addInvoices(state, data) {
      state.listInvoices = [...state.listInvoices, data]
    }
  }

  export const  actions = {
    addInvoices ({commit}, data) {
      commit('addInvoices', data)
    }
  }