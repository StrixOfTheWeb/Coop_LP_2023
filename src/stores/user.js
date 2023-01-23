import { ref } from 'vue'
import { defineStore, getActivePinia } from 'pinia'

import {useRouter} from 'vue-router';

export const useUserStore = defineStore('user', () => {
  const isConnected = ref(false);
  const member = reactive({});
  const token = ref(false);

  const router = useRouter();

  const members = reactive({});

  function setConnected(member, token) {
    isConnected.value = true;
  }  
  function disconnect() {
    isConnected.value = false;
  }

  function connect(arg) {
    api.post('members/signin', {
      body : arg
    }).then(response => {
      if (response.message) {
        alert(response.message);
      } else {
        isConnected.value = true;
        
        
        member.fullname = response.member.fullname;
        member.id = response.member.id;
        token.value = response.token;
        if (confirm("Vous voilà connecté ! Voulez-vous retounez à l'acceuil ?")) {
          router.push("/");
        }
      }  
    })
  }

  async function TestLegitime() {
    if (isConnected.value == true) {
      if (token.value != false) {
        const response = await api.get(`members/${member.id}/signedin?token=${token.value}`);
        const d = await response;
        if (d.token != false) {
          return true;
        } else {
          if (confirm("Pour acceder à cette page il va falloir que vous alliez vous connectez. On vous y emmene ?")) {
            router.push("/connect");
          }
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      if (confirm("Pour acceder à cette page il va falloir que vous alliez vous connectez. On vous y emmene ?")) {
        router.push("/connect");
      }
      return false;
    }
  }

  return {connect, isConnected, member,token ,setConnected, disconnect, TestLegitime }
}, {
  persist: true,
})
