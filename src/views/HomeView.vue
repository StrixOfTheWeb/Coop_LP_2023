<script setup>
import TheWelcome from '../components/TheWelcome.vue';

const session = inject('session');

let data = reactive ({
	talks : ref([])
});

onMounted(() => {
  if (session.TestLegitime()) {
    api.get(`channels?token=${session.token}`).then(response => {data.talks = response;});
  }
})



</script>

<template>
  <main>
    <TheWelcome />
    <p>Un des Site de Tchat créer durant les cours du premier groupe de LP CIASIE 2022-2023 !</p>
    <template v-if="session.isConnected">
      <p>Maintenant que vous faites partie de la communauté, vous pouvez acceder à toutes les fonctionalités de ce site.</p>
      <p>De plus, voiçi un aperçu de ce qui se dit en ce moment avec les dernières conversation dans lesquels des messages ont été postés sur l'entièreté du site : </p>
      
      <section>
      <nav><br/>
        <li v-for="talk in data.talks">
        <router-link :to="{name: 'talks',params:{id: talk.id}}">
        <span><br/>-------<br/>{{talk.label}}, denièrement édité à {{talk.modified_at}} <br/> {{talk.topic}}<br/>-------<p></p></span>
        </router-link>
        <div style = "float : right;">
        <router-link :to="{name: 'del_talks',params:{id: talk.id}}">
          Supprimer Conversation <img style = "max-height : 4%; max-width: 4%;" src="../assets/delete_icon.jpg">
        </router-link><router-link :to="{name: 'edit_talks',params:{id: talk.id,label: talk.label, topic : talk.topic}}">
          Modifier Conversation <img style = "max-height : 4%; max-width: 4%;" src="../assets/edit_icon.jpg">
        </router-link>
        </div>
        </li>
      </nav><br/>
      </section>
      
      <p>Vous voulez parler d'autre chose ?</p>
      <p>Allez cherchez dans toutes les conversations si il n'en pas déjà une parlant de cela ou alors créer là votre <router-link to="/posts">içi</router-link> !</p>
    </template>
    <template v-else>
      <p>Si vous voulez pouvoir discuter avec les membres de ce site, il vous faudra vous inscrire dans la section "S'inscrire".</p>
    </template>
  </main>
</template>
