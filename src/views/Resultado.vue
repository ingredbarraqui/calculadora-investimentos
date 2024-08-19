<template>
  <div class="container">
    <div class="card-cinza">
      <h2>Resultado:</h2>
      <div>
        <h3>Em 24 meses você teria:</h3>
        <div class="card-resultado">
          <p>Taxa selic</p>
          <span>R$  {{ dinheiro(montanteSelic) }}</span>
        </div>
        <div class="card-resultado">
          <img src="../assets/LogoArca.png" alt="Arca logo">
          <p>Fundo arca</p>
          <span>R$ {{ dinheiro(montanteArca) }}</span>
        </div>
        <hr>
        <div class="taxas">
          <p>Taxa selic: <strong>9,25%</strong></p>
          <p>Rentabilidade do arca: <strong>18% a.a.</strong></p>
        </div>
        <div class="info">
          <p class="help d-flex">Valores utilizados no simulador de investimentos (referentes à data de última atualização - esses valores podem alterar de acordo com o mercado):</p>
          <p>- Data da última atualização: 10/01/2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dinheiro from '../helpers/dinheiro';
import { useSimuladorStore } from '../store/simulador.store';

const store = useSimuladorStore();

const montanteSelic = store.montanteSelic ;
const montanteArca = store.montanteArca;
</script>

<style scoped>
.card-cinza h2{ 
  margin-bottom: 5.5rem;
}

.card-cinza h3{ 
  color: var(--cinzaEscuro);
  margin-bottom: 1rem;
}

.card-resultado{
  border: 1px solid var(--borda);
  background-color: var(--branco);
  padding: 2rem;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
}

.card-cinza p{
  color: var(--secundaria);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-resultado span{
  font-size: 5.5rem;
  font-weight: bold;
}

.card-resultado img{
  margin-bottom: 1rem;
}

.taxas strong{
  color: var(--primaria);
}

.taxas p{
  padding: 1rem 0;
  margin-bottom: 0;
}

.info{
  margin-top: 3rem;
}

.info p{
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 400;
}

.help::before{
  content: url('/src/assets/help.svg');
}

@media only screen and (max-width: 540px) {
  .card-cinza h2{ 
    margin-bottom: 1rem;
  }

  .card-resultado span{
    font-size: 2rem;
  }

  .card-cinza p{
    font-size: 0.875rem;
  }

  .card-cinza form{
    margin-top: 3rem;
  }

  .card-resultado img{
    max-width: 4.5rem;
  }

  .help{
    flex-direction: row;
    gap: 10px;
  }

  .info{
    margin-top: 2rem;
  }
}
</style>