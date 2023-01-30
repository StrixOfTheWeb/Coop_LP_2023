<script setup>

import {useRouter} from 'vue-router';
const router = useRouter();

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
  password: '',
  2password: ''
})

function register() {
  if(member.password == member.2password) {
    api.post('members', {
      body : member
      }).then(response => {
      if (response.message) {
        alert(response.message);
      } else {
        if (confirm("Votre compte a été créer, voulez-vous vous y connectez ?")) {
          router.push("/connect");
        }
      }
    })
  } else {
    alert("Erreur : Le Mot de Passe et sa Confirmation ne concorde pas.");
  }
}

</script>

<template>
  <div class="register">
    <h1>Rejoindre la Communauté</h1>

    <p>Pour vous incrire, veuillez remplir le formulaire çi dessous : </p>


    <form @submit.prevent="register">
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
        <label for="password">Valider Mot de Passe : </label>
        <input v-model="member.2password" type="password" id="2password" name="2password" required>
      </div>

      <div>
        <input type="submit" value="Valider l'inscription !">
      </div></section>
    </form>


  </div>
</template>

<style>
</style>
