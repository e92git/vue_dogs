<template>
  <div id="app">
    <div id="nav">
      <div class="nav__container">
        <router-link to="/"><img alt="logo" src="./assets/logo.svg"></router-link>
        <router-link to="/favourites">Избранные пёсели</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
