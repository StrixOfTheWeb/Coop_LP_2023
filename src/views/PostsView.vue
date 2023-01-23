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
    
  }
})

let talk = reactive({
  label: '',
  topic: ''
})

function talking() {
  //console.log(talk.name);
  //console.log(talk.description);
  api.post(`channels?token=${token}`, {
    body :{
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
    <h1>Créer une Conversation</h1>

    <p>Dite-nous, de quoi cette conversation va parler ?</p>

    
    <form @submit.prevent="talking">
      <section><div>
        <label for="label">Nom de la Conversation : </label>
        <input type="text" id="name" v-model="talk.name" name="name" required>
      </div>
      
      <div>
        <label for="topic">Description : </label>
        <input v-model="talk.description" type="text" id="description" name="description" required>
      </div>

      <div>
        <input type="submit" value="Créer la Conversation.">
      </div></section>
    </form>    
    
    
  </div>
</template>

<style>
</style>
