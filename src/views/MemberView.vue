<script setup>

import {useRouter, useRoute} from 'vue-router';
const router = useRouter();
const route = useRoute();

const session = inject('session');
const token = session.token;

let data = reactive({
 membres : [],
 membre : []
 });

onMounted(() => {
  api.get('ping').then(response => {
    console.log("L'api fonctionne !")
  })
  if (session.TestLegitime()) {


    api.get('members',{}).then(response => {
      if (response.message) {
        alert(response.message);
      } else {
        data.membres = response;
        

        data.membres.forEach((m) => {
          //console.log(m);
          if(m.id == route.params.id) {
            data.membre = m;
            //alert("!");
          }
        })
        console.log(data.membre);
      }
    })
  }
})



</script>

<template>
  <h2>{{data.membre.fullname}}</h2>
  <p>email du membre : {{ data.membre.email }}</p>
  <p>Membre depuis : {{ data.membre.created_at }}</p>

</template>

<style>
</style>
