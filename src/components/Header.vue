<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <div class="container">
      <img 
      src="../assets/Logo.svg"
      alt="Logo Grupo primo"
      >
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header{
  background-color: var(--branco);
  padding: 2rem 0;
  border-bottom: 1px solid var(--cinzaClaro);
}

@media only screen and (max-width: 540px) {
  .header img{
		max-width: 120px;
	}
}
</style>