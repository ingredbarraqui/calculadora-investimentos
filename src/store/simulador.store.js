import { defineStore } from 'pinia';

export const useSimuladorStore = defineStore('simulador', {
  state: () => ({
    montanteSelic: 0,
    montanteArca: 0,
  }),
  actions: {
    setResultados(montanteSelic, montanteArca) {
      this.montanteSelic = montanteSelic;
      this.montanteArca = montanteArca;
    },
  },
});