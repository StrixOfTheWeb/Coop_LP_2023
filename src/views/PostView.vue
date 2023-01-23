<script setup>

import {useRouter} from 'vue-router';
const router = useRouter();

const session = inject('session');
const token = session.token;
const id = router.currentRoute.value.params.id;

onMounted(() => {
  api.get('ping').then(response => {
    console.log("L'api fonctionne !")
  })
  if (session.TestLegitime()) {
    console.log(session.member.id);
  }
})

let talk = reactive({
  message: '',
})

function talking() {
  //console.log(talk.name);
  //console.log(talk.description);
  api.post(`channels/${id}/posts`, {
    body :{
      channel_id: id,
      member_id: session.member.id,
      message: talk.message,
      token: token,
    }
  }).then(response => {
    alert("Message envoyé !");
    router.push("/talks/"+id);
  })

}

</script>

<template>
  <div class="talk">
    <h1>Rédiger un Message</h1>
    
    <form @submit.prevent="talking">
      <section><div>
        <label for="label">Contenu du Message </label>
        <input type="text" id="message" v-model="talk.message" name="message" required>
      </div>

      <div>
        <input type="submit" value="Envoyer.">
      </div></section>
    </form>    
    
    
  </div>
</template>

<style>
</style>
