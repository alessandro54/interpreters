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
          this.data = datalist.slice(0, 10);
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
  getters: {
    getInterpreters: (state) => {
      return (page: number = 1, limit: number = 10) => {
        const start = page * limit;
        return state.fetchedData.slice(start, start + limit);
      };
    },
    getTotalCount(): number {
      return this.fetchedData.length;
    }
  },
});
