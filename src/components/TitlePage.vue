<template>
  <section class="title-page">
    <div class="container">
      <h1>Simulador de investimento</h1>
      <p>Descubra o quanto você pode economizar.</p>
    </div>
  </section>
</template>

<style scoped>
.title-page{
  background-color: var(--quasePreto);
  padding: 7.5rem 0;
}

.title-page h1{
  color: var(--branco);
  padding-bottom: 1rem;
}

.title-page p{
  color: var(--branco);
}

@media only screen and (max-width: 540px) {
  .title-page{
    padding: 5.5rem 0;
  }
  .title-page p{
    font-size: 0.813rem;
  }
}
</style>