<script setup>

import {useRouter} from 'vue-router';
const router = useRouter();

import {useUserStore} from '@/stores/user';
const session = useUserStore();

onMounted(() => {
  api.get('ping').then(response => {
    console.log("L'api fonctionne !")
  })
  // let member = {fullname:'ok',email:'oui@ok.fr',password:'poiutfgio'};
  // api.delete('members',{body:member}).then(response => {
  //   console.log(response)
  // })

  api.post('members/signout', {
    body : session.token
  }).then(response => {

    session.token = false;
    session.member = false;
    session.isConnected = false;
  
    if (confirm("Vous voilà déconnecté ! Voulez-vous retounez à l'acceuil ?")) {
      router.push("/");
    }

  });
});

</script>

<template>
  <div class="disconnect">
    <h1>Page de Déconnection</h1>

    <p>Cette page n'est pas vraimment interresante donc maintenant que vous êtes deconnecté; nous vous recommandons de retournez à l'acceuil ou à quelque autre page d'intérêt.</p> 
    
  </div>
</template>

<style>
</style>
