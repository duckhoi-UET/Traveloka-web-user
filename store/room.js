export const state = () => ({
  detailRoom: null,
});

export const getters = {};

export const actions = {
  setDetailRoom({ commit }, payload) {
    commit("SET_DETAIL_ROOM", payload);
  },
};

export const mutations = {
  SET_DETAIL_ROOM(state, payload) {
    state.detailRoom = payload;
  },
};

