<template>
  <div>
    <header>
      
      <!-- اللوكو -->
      <div class="logo">
        شركة زمردة
      </div>

      <!-- زر القائمة -->
      <button class="menu-btn" @click="toggleMenu">
        ☰
      </button>

      

    </header>

    <!-- القائمة -->
    <nav v-if="showMenu" class="mobile-menu">
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
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
body {
  font-family: Arial;
  margin: 0;
  direction: rtl;
  background: #f4f4f4;
}

.services {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* موبايل: عمودين */
  gap: 15px;
  margin-top: 20px;
}

/* شكل الكروت */
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;

  /* الإطار الأخضر */
  border: 2px solid #00aa55;

  /* ظل خفيف */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  transition: 0.3s;
}

/* تأثير hover */
.card:hover {
  transform: translateY(-5px);
  border-color: #00ff88;
}

/* الهيدر */
header {
  background: #222;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between; /* يمين ويسار */
  align-items: center;
}

/* اللوكو */
.logo {
  font-weight: bold;
  font-size: 20px;
}

/* زر القائمة */
.menu-btn {
  font-size: 22px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* القائمة */
.mobile-menu {
  background: #333;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.mobile-menu a {
  color: white;
  padding: 10px;
  text-decoration: none;
  border-bottom: 1px solid #444;
}

.mobile-menu a:hover {
  background: #444;
}

/* القائمة */
nav {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* الرابط النشط */
nav a.router-link-active {
  color: #00ffcc;
}

/* المحتوى */
main {
  padding: 20px;
  text-align: center;
}

/* قائمة العملاء */
.page ul {
  list-style: none;
  padding: 0;
}

.page ul li {
  background: white;
  margin: 10px auto;
  padding: 10px;
  width: 250px;
  border-radius: 10px;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}
</style>