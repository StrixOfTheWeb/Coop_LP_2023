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

    talk.topic = router.currentRoute.value.params.topic;
    talk.label = router.currentRoute.value.params.label;

    api.get('members', {}).then(response => {
      if (response.message) {
        alert(response.message);
      } else {
        //console.log(response);
        session.members = response;
      }

      

    })

    
  }
});

let talk = reactive({
  label: '',
  topic: ''
})

function edit() {

  api.put(`channels?token=${token}`, {
    body :{
    id : router.currentRoute.value.params.id,
    label : talk.name,
    topic : talk.description
    }
  }).then(response => {
    if (response.message) {
      alert(response.message);
    } else {
      if (confirm("Conversation créer ! Voulez-vous retounez à l'acceuil ?")) {
        router.push("/");
      }
    }  
  })

}



</script>

<template>
  
  <div class="talk">
    <h1>Modifier une Conversation</h1>

    <p>Dite-nous, de quoi cette conversation va parler ?</p>

    
    <form @submit.prevent="edit">
      <section><div>
        <label for="label">Nouveau Nom de la Conversation : </label>
        <input type="text" id="name" v-model="talk.name" name="name" required>
      </div>
      
      <div>
        <label for="topic">Nouvelle Description : </label>
        <input v-model="talk.description" type="text" id="description" name="description" required>
      </div>

      <div>
        <input type="submit" value="Confirmer les Changements.">
      </div></section>
    </form>    
    
    
  </div>

</template>

<style>
</style>
