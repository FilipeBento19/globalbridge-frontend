<script setup>
import ButtonComponent from './ButtonComponent.vue';
</script>
<template>

  <header class="navbar">
    <div>
      <a class="navbar_logo" href="#"><img src="/logogb.png" alt=""></a>
    </div>

    <nav class="navbar_links">
      <a href="#">Meu destino</a>
      <a href="#">Companhias</a>
      <a href="#">Anus</a>
      <a href="#">Contato</a>
    </nav>

    <ButtonComponent 
      text="Work with us" 
      iconPath="/icons/icon_button.png" 
      class="buttonheader"
    />
  </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

/*  Base  */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 72px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  font-family: 'Montserrat', sans-serif;
  max-width: 1200px;
  margin: 16px auto;
}

/*  Navbar Logo  */
.navbar_logo img {
  transition: transform 0.2s ease;
}

.navbar_logo img:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}


/*  Nav links  */
.navbar_links {
  display: flex;
  gap: 20px;
}

.navbar_links a {
  text-decoration: none;
  color: #42023C;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  transition: color 0.2s;
  padding: 8px 10px;

  transition: all 0.2s ease;
}

.navbar_links a:hover {
  background: #f0ede6;
  border-radius: 20px;
  transform: scale(1.05);
}


</style>