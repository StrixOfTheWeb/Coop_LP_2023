<script setup>

import {useRouter} from 'vue-router';
const router = useRouter();

import {useUserStore} from '@/stores/user';
const session = useUserStore();
const token = session.token;

onMounted(() => {
  api.get('ping').then(response => {
    console.log("L'api fonctionne !")
  })
  if (session.TestLegitime()) {
    
  }
})



</script>

<template>
  
</template>

<style>
</style>