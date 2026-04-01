<template>
  <div>
    <header>
      <div class="logo">CODE STATION</div>
      <button class="menu-btn" @click="toggleMenu">☰</button>
    </header>

    <nav v-if="showMenu" class="menu">
      <router-link to="/" @click="toggleMenu">الرئيسية</router-link>
      <router-link to="/contact" @click="toggleMenu">تواصل معنا</router-link>
      <router-link to="/clients" @click="toggleMenu">العملاء</router-link>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #222;
  color: white;
}

.logo {
  font-weight: bold;
  font-size: 20px;
}

.menu-btn {
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 15px;
  background: #333;
  padding: 10px 0;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.menu a.router-link-active {
  color: #00ffcc;
}

main {
  padding: 20px;
  text-align: center;
}
</style>