<script setup>

import {useUserStore} from '@/stores/user';
const session = useUserStore();

provide('session',session);

</script>

<template>
  <div>
    <nav>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-if="!session.isConnected"><RouterLink to="/register">S'inscrire</RouterLink></template>
        <template v-if="!session.isConnected"><RouterLink to="/connect">Se Connecter</RouterLink></template>
        <template v-if="session.isConnected"><RouterLink to="/disconnect">Se Déconnecter</RouterLink></template>
        <template v-if="session.isConnected"><RouterLink to="/members">Liste des Membres</RouterLink></template>
        <template v-if="session.isConnected"><div>{{session.member.fullname}}</div></template>
      </nav>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
</style>
