<script setup>
import BadgeComponent from '@/components/BadgeComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<template>
  <section class="contentlayer">
    <div class="contentlayercima">
      <div class="card card-pink">
        <BadgeComponent style="background-color: #FF75F3; color: #42023C;">
          Programas Disponíveis
        </BadgeComponent>
        <p class="description">
          Planos de intercâmbio intensivo com ensino universitário “Study & Work”, “Au Pair” e residência garantida. 
          Programas completos para quem deseja estudar, trabalhar e viver uma experiência internacional com mais segurança e planejamento.
        </p>
        <ButtonComponent text="Saiba mais" iconType="primary" />
      </div>

      <div class="card card-blue">
        <h2 class="title">INTERCÂMBIO SEM SABER O IDIOMA</h2>
        <p class="subtitle">Veja planos de intercâmbio com ensino de idioma integrado. Comece seu futuro hoje!</p>
        <ButtonComponent text="Ver os planos" iconType="secondary" style="background-color: white; color: #42023C;" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.contentlayer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 5%;
}

.contentlayercima {
  display: flex;
  flex-direction: column; /* Mobile: empilha */
  gap: 24px;
  width: 100%;
  max-width: 1300px;
}

.card {
  flex: 1;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  min-height: auto; /* remove altura fixa */
}

.card-pink {
  background-image: url('/images/programasdisponiveis.png');
  background-color: #ffb3e6;
}

.card-blue {
  background-image: url('/images/intercambioidioma.png');
  background-color: #4a90e2;
}

.title {
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
  margin-bottom: 12px;
}

.description {
  margin: 20px 0 30px;
  font-size: 1rem;
  line-height: 1.4;
}

.subtitle {
  font-size: 1rem;
  margin: 10px 0 30px;
}

/* Tablet e desktop */
@media (min-width: 768px) {
  .contentlayercima {
    flex-direction: row;
    gap: 20px;
  }
  
  .card {
    height: 500px; /* volta a altura fixa só em desktop */
    padding: 20px;
  }
  
  .description {
    padding-top: 200px;
    padding-bottom: 20px;
  }
  
  .title {
    font-size: 2rem;
  }
}
</style>