<script setup>

import {useRouter} from 'vue-router';
const router = useRouter();

const session = inject('session');

onMounted(() => {
  api.get('ping').then(response => {
    console.log("L'api fonctionne !")
  })
  // let member = {fullname:'ok',email:'oui@ok.fr',password:'poiutfgio'};
  // api.delete('members',{body:member}).then(response => {
  //   console.log(response)
  // })
})



let member = reactive({
  fullname: '',
  email: '',
  password: ''
})



</script>

<template>
  <div class="connect">
    <h1>Se connecter</h1>

    <p>Pour vous connecter, veuillez remplir le formulaire çi dessous : </p>

    
    <form @submit.prevent="session.connect(member)">
      <section><div>
        <label for="fullname">Nom : </label>
        <input type="text" id="fullname" v-model="member.fullname" name="fullname" required>
      </div>
      
      <div>
        <label for="email">Mail : </label>
        <input v-model="member.email" type="text" id="email" name="email" required>
      </div>
      
      <div>
        <label for="password">Mot de Passe : </label>
        <input v-model="member.password" type="password" id="password" name="password" required>
      </div>

      <div>
        <input type="submit" value="Se connecter !">
      </div></section>
    </form>    
    
    
  </div>
</template>

<style>
</style>
