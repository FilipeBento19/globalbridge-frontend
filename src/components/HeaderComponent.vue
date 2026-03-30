<script>
</script>
<template>

  <header class="navbar">
    <div class="navbar_logo">
      <img src="/public/logogb.png" alt="">
    </div>

    <nav class="navbar_links">
      <a href="#">Meu destino</a>
      <a href="#">Companhias</a>
      <a href="#">Anos</a>
      <a href="#">Contato</a>
    </nav>

    <button class="navbar_cta">
      Work with us
      <span class="cta-icon">↗</span>
    </button>
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
  max-width: 1100px;
  margin: 16px auto;
}
/*  Nav links  */
.navbar_links {
  display: flex;
  gap: 40px;
}

.navbar_links a {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  transition: color 0.2s;
}

.navbar_links a:hover {
  color: #42023C;
}

/*  CTA button  */
.navbar_cta {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #A33DA3;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 12px 22px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  white-space: nowrap;
}

.cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  font-size: 14px;
  line-height: 1;
}
</style>