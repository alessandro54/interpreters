import { defineStore } from "pinia";
import InterpretersService from "~~/services/interpreters.service";

export const useInterpreterStore = defineStore("interpreter", {
  state: () => ({
    loading: true,
    data: [],
    fetchedData: [],
    error: null,
  }),
  actions: {
    async fetchInterpreters() {
      if (this.data.length > 0) return;
      await InterpretersService.fetchAll()
        .then(({ datalist }) => {
          this.loading = false;
          this.fetchedData = datalist;
          this.data = datalist;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
  getters: {
    getInterpreters: (state) => {
      return (limit: number = 10, page: number = 1) => {
        const start = page * limit;
        return state.data.slice(start, start + limit);
      };
    },
  },
});