<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <TitlePage/>
  <div class="container">
    <div class="card-cinza">
      <section>
        <div>
          <h3>Simule agora</h3>
          <p>Faça uma comparação e comece a investir em uma experiência fácil e intuitiva:</p>
        </div>
      </section>
      <Form
          v-slot="{ isSubmitting }"
          :validation-schema="schema"
          @submit="onSubmit"
        >
          <div class="d-flex align-items-end">
            <div>
              <LabelFromYup
                name="investimentoInicial"
                :schema="schema"
              />
              <FloatMaskInput 
                name="investimentoInicial" 
                type="text" 
                placeholder="R$ 0,00" 
                class="inputtext"
                converter-para="string"
              />
              <ErrorMessage
                class="error-msg"
                name="investimentoInicial"
              />
            </div>
            <div>
              <LabelFromYup
                name="investimentoMensal"
                :schema="schema"
              />
              <FloatMaskInput 
                name="investimentoMensal" 
                type="text" 
                placeholder="R$ 0,00" 
                class="inputtext"
                converter-para="string"
              />
              <ErrorMessage
                class="error-msg"
                name="investimentoMensal"
              />
            </div>
            <div>
              <LabelFromYup
                name="tempo"
                :schema="schema"
              />
              <Field
                name="tempo"
                type="number"
                placeholder="1 ano" 
                class="inputtext"
                min="1"
                max="1000"
              />
              <ErrorMessage
                class="error-msg"
                name="tempo"
              />
            </div>
          </div>

          <div class="btn">
            <button
              :disabled="isSubmitting"
            >
              Calcular
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M13.7217 16.1217L12.2609 14.6261L17.5826 9.30431H0.156525V7.21735H17.5826L12.2609 1.89562L13.7217 0.399963L21.5826 8.26083L13.7217 16.1217Z"
                  fill="#21211F"
                />
              </svg>
            </button>
            <!-- <font-awesome-icon 
              v-show="isSubmitting" 
              icon="spinner" 
              class="spinner mt-3"
            /> -->
          </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { ErrorMessage, Field, Form } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FloatMaskInput from '../components/FloatMaskInput.vue';
import TitlePage from '../components/TitlePage.vue';
import { calculadora as schema } from '../consts/formSchema';
import { useSimuladorStore } from '../store/simulador.store';

const store = useSimuladorStore();
const router = useRouter();

const investimentoInicial = ref(0);
const investimentoMensal = ref(0);
const tempo = ref(1);

const calcularMontante = (principal, taxaAnual, diasUteis) => {
  const taxaDiaria = taxaAnual / 100 / 252;
  return principal * Math.pow(1 + taxaDiaria, diasUteis);
};

const onSubmit = (values) => {
  const t = values.tempo * 252;
  const montanteSelic = calcularMontante(
    values.investimentoInicial, 9.25, t
  );
  const montanteArca = calcularMontante(
    values.investimentoInicial, 18, t
  );

  store.setResultados(montanteSelic, montanteArca);
  router.push({ name: 'Resultado' });
};
</script>

<style scoped>
.card-cinza h3{
  color: var(--preto);
  padding-bottom: 1.375rem;
}

.card-cinza p{
  font-size: 1.563rem;
  color: var(--secundaria);
}

.card-cinza form{
  margin-top: 5.5rem;
}

.card-cinza button{
  background-color: var(--ciano);
  color: var(--primaria);
  padding: 1rem 1.375rem;
  border: none;
  font-size: 1.563rem;
  border-radius: 1rem;
}

.card-cinza .btn{
  text-align: end;
  margin-top: 5.5rem;
}

.align-items-end{
  align-items: flex-end;
}

@media only screen and (max-width: 540px) {
  .card-cinza p{
    font-size: 1rem;
  }

  .card-cinza form{
    margin-top: 3rem;
  }

  .card-cinza button{
    width: 100%;
  }

  .card-cinza .btn{
    margin-top: 3rem;
  }
}
</style>