<script setup>

import {useRouter} from 'vue-router';
const router = useRouter();

const session = inject('session');
const token = session.token;

let data = reactive({
 messages : [],
 names : {}
 });

onMounted(() => {
  api.get('ping').then(response => {
    console.log("L'api fonctionne !");
  })
  if (session.TestLegitime()) {

    api.get('members', {}).then(response => {
      if (response.message) {
        alert(response.message);
      } else {
        //console.log(response);
        session.members = response;
      }

      api.delete(`channels/${router.currentRoute.value.params.id}?token=${token}`).then(response => {
        if (response.message) {
          alert(response.message);
          if (confirm("La conversation sélectionné a bien été supprimé ! Voulez-vous retounez à l'acceuil ?")) {
            router.push("/");
          }
        } else {
          if (confirm("La conversation sélectionné a bien été supprimé ! Voulez-vous retounez à l'acceuil ?")) {
            router.push("/");
          }
        }	
      })

    })

    
  }
})



</script>

<template>
  <h1>Page de Suppression de Conversation</h1>

<p>Cette page n'est pas vraimment interresante donc maintenant que vous avez supprimé cette conversation; nous vous recommandons de retournez à l'acceuil ou à quelque autre page d'intérêt.</p> 
</template>

<style>
</style>
