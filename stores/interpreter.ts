import { defineStore } from "pinia";
import InterpretersService from "~~/services/interpreters.service";
import { Interpreter } from "~~/types/interpreter";

export const useInterpreterStore = defineStore("interpreter", {
  state: () => ({
    loading: true,
    data: [] as Interpreter[],
    fetchedData: [] as Interpreter[],
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
      return (page: number = 1, limit: number = 10) : Interpreter[] => {
        const start = page * limit;
        return state.fetchedData.slice(start, start + limit);
      };
    },
    getTotalCount(): number {
      return this.fetchedData.length;
    },
    getLanguageCount(): LanguageCount {
      return this.fetchedData.reduce((acc: LanguageCount, cur: Interpreter) => {
        let key = cur.lengua1.nombre;
        if (!acc[key]) acc[key] = 0;
        acc[key]++;
        return acc;
      }, {} as LanguageCount);
    },
  },
});

type LanguageCount = {
  [key: string]: number;
};
