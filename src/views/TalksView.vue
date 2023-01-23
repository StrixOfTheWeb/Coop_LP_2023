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
    console.log("L'api fonctionne !")
  })
  if (session.TestLegitime()) {

    
    api.get(`channels/${router.currentRoute.value.params.id}/posts?token=${token}`).then(response => {
      if (response.message) {
        alert(response.message);
      } else {
        data.messages = response;
        
        data.messages.forEach((mes) => {
          session.members.forEach((member) => {
            if(mes.member_id == member.id) {
              //console.log("!");
              data.names[member.id] = member.name;

            }
          });
        });

        console.log(data.names);
      }	
    })
  }
})



</script>

<template>
  <div class="listMessages">
    <h1>Liste des Messages</h1>

      <section>
        <div v-for="message in data.messages">
    <span style="color : white">-------<br/>{{data.names[message.member_id]}}, denièrement édité à {{message.modified_at}} <br/> {{message.message}}<br/>-------</span>
        </div>
      </section>
      <div>
        <p><router-link :to="{name: 'post',params:{id: router.currentRoute.value.params.id}}">Poster un Message</router-link></p>
      </div>
   
    
    
  </div>
</template>

<style>
</style>
