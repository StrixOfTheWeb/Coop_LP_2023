<script setup>

import {useRouter} from 'vue-router';
const router = useRouter();

const session = inject('session');
const token = session.token;


onMounted(() => {
  api.get('ping').then(response => {
    console.log("L'api fonctionne !")
  })
  if (session.TestLegitime()) {
    api.get('members', {}).then(response => {

     if (response.message) {
        alert(response.message);
      } else {
        session.members = response;
      }
    })
  }
})



</script>

<template>
  <div class="listMembres">
    <h1>Liste des Membres</h1>

      <p>Voiçi la liste des membres de Co-op !</p>
      <section>
	   <ul>
	   	<li v-for="membre in session.members">
      <router-link :to="{name: 'member',params:{id: membre.id}}">
        <div>-------<br/> {{membre.fullname}} - {{membre.email}}<br/>-------</div>
      </router-link>
      </li>
	   </ul>
      </section>



  </div>
</template>

<style>
</style>
