<template>
  <main>
    <section class="sidebar">
      <div class="navbar p-2">
        <button class="btn btn-primary btn-menu" @click="closeMenu">Close</button>
      </div>
      <div class="profile-image">
        <img src="/Profile.jpg" alt="">
      </div>
      <div class="menu-container">
        <ul>
          <li class="menu_list" @click="activeMenu">ABOUT ME</li>
          <li class="menu_list" @click="go">PROJECTS</li>
          <li class="menu_list" @click="this.activeComp = 'tech-knowledge'">TECH KNOWLEDGE</li>
          <li class="menu_list" @click="this.activeComp = 'certifications'">CERTIFICATIONS</li>
        </ul>
      </div>
      <div class="social-media">
        <p>Follow Me:</p>
        <div class="icons">
          <button>
            <a href="https://www.github.com" target="_blank"><i class="fa-brands fa-github"></i></a>
          </button>
          <button>
            <a href="https://www.github.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          </button>
          <button>
            <a href="https://www.github.com" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          </button>
          <button>
            <a href="https://www.github.com" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
          </button>
        </div>
      </div>
    </section>
    <section class="main-container">
      <div class="header p-2">
        <div class="navbar p-2">
          <button class="btn btn-primary btn-menu" @click="showMenu">Menu</button>
        </div>

        <h1>Rolando Sala Jr.</h1>
        <hr>
        <h3>Aspiring Web Developer | Software Developer</h3>
      </div>
      <div class="content">
        <component :is="activeComp"></component>
      </div>
    </section>
    <div class="modal"></div>
  </main>
</template>
<script>
export default {

  data() {
    return {
      activeComp: 'about-me',

    }
  },
  methods: {
    activeMenu() {
      this.activeComp = 'about-me';
    },
    go() {
      this.activeComp = 'projects';
      
    },
    showMenu() {
      let sidebar = document.querySelector('.sidebar');
      sidebar.style.left = '0%';
    },
    closeMenu() {
      let sidebar = document.querySelector('.sidebar');
      sidebar.style.left = '-100%';
    }
  },
}
</script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: transparent;
  width: 100%;
  left: 0;
  display: none;
}

.btn-menu {
  transform: translateX(350%);
}

@media(max-width: 600px) {
  .navbar {
    display: flex;
  }

  .sidebar {
    position: fixed;
    left: -100%;
    border-radius: 0;
    top: 0;
    width: 100%;
    transition: .5s ease-in;
    z-index: 1;
    height: 100vh;
    text-align: center;
  }
}

</style>