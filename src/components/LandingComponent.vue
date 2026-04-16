<script setup>
import BadgeComponent from '@/components/BadgeComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>
<template>
  <section class="contentlayer">
    <div class="contentlayercima">
      
      <div class="card card-pink">
        <BadgeComponent
        style="
        background-color: #FF75F3;
        color: #42023C;
        ">
        Programas Disponíveis
        </BadgeComponent />
        <p class="description">
          Planos de intercâmbio intensivo com ensino universitário “Study & Work”, “Au Pair” e residência garantida. 
          Programas completos para quem deseja estudar, trabalhar e viver uma experiência internacional com mais segurança e planejamento.
        </p>
        <ButtonComponent 
        text="Saiba mais" 
        iconPath="/icons/icon_button.png" 
        class="buttonheader"
        style=""
        />
      </div>
      

      <div class="card card-blue">
        <h2 class="title">INTERCÂMBIO SEM SABER O IDIOMA</h2>
        <p class="subtitle">Veja planos de intercâmbio com ensino de idioma integrado. Comece seu futuro hoje!</p>
        <ButtonComponent 
        text="Ver os planos" 
        iconType="secondary"
        style="background-color: white; color: #42023C;"
        />
      </div>

    </div>
    
  </section>
</template>

<style scoped>
.contentlayer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.contentlayercima {
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1300px;
}

/* Estilo Base do Card */
.card {
  flex: 1;
  height: 500px;
  border-radius: 15px;
  padding: 20px;
 
  flex-direction: column;
  background-size: cover;
  background-position: center;
  color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card-pink {
  background-image: url('/images/programasdisponiveis.png');
  background-color: #ffb3e6;
}

.card-blue {
  background-image: url('/images/intercambioidioma.png');
  background-color: #4a90e2;
}


.quotes {
  font-size: 8rem;
  line-height: 0;
  margin-top: 40px;
  opacity: 0.5;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  padding-top: 220px;
  padding-bottom: 20px;
}

.description, .subtitle {
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 90%;
}

.btn {
  background: #a346a6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  font-weight: bold;
}

.btn-white {
  background: white;
  color: #333;
}

.arrow-pink {
  color: #d63384;
}
</style>