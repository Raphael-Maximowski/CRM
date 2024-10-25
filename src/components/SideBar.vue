<script setup lang="ts">

import { ref } from 'vue'
import type { DropDown } from '@/models/SideBar'

const props = defineProps({
  windowWidth: { type: Number, required: true }
})

const dropDownOption : DropDown[] = [
  {
    title: 'Funis',
    router: 'Funnels',
    image: ''
  },
  {
    title: 'Contatos',
    router: 'Contacts',
    image: ''
  },
  {
    title: 'Calendário',
    router: 'Callendar',
    image: ''
  },
  {
    title: 'Relatórios',
    router: 'Reports',
    image: ''
  },
]

const dropDownState =  ref<boolean>(false)

const changeDropDownState = () => {
  return dropDownState.value = !dropDownState.value
}

</script>

<template>
  <div v-if="props.windowWidth < 768">
    <header id="mobileContent">
      <div id="MenuContainer">
        <img @click="changeDropDownState" src="../assets/images/MenuIcon.png" alt="Icone de Menu"/>
        <div
          v-if="dropDownState"
          :key="option"
          v-for="option in dropDownOption">
          <RouterLink :to=" { name: option.router } ">
            <div>
              <p>{{ option.title }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
      <div id="titleContainer">
        <div>
          <h1> Welcome User </h1>
          <p>Have a nice experience</p>
        </div>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>


  <div
    id="desktopWrapper"
    v-else>
      <article>
        <div>
          <div id="iconContainer">
            <h1>CRM</h1>
          </div>
          <div id="optionsContainer">
            <div
              v-for="option in dropDownOption"
              :key="option"
              class="optionContent">
              <RouterLink :to=" { name: option.router } ">
                <div>
                  <img src="@/assets/images/DashBoardIcon.png" />
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </article>
    <div>
      <header>
        <div id="titleWrapper">
          <h1> Welcome User </h1>
          <p>Have a nice experience</p>
        </div>
      </header>
      <main>
        <RouterView/>
      </main>
    </div>

  </div>

</template>

<style scoped lang="scss">
#mobileContent {
  background-color: red;
  height: 15vh;

  #MenuContainer {
    position: absolute;
    margin: 20px;

    img {
      width: clamp(25px, 5vw ,30px);
    }

    p {
      margin: 5px 0px;
      color: black;
    }
  }

  #titleContainer {
    background-color: blue;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;

    h1, p {
      text-align: center;
      margin: 3px 0px;
    }

    h1 {
      font-size: clamp(25px, 6vw ,35px);
    }

    p {
      font-size: clamp(17px, 3.8vw ,23px);
    }
  }
}

#desktopWrapper {
  display: flex;

  article {
    min-width: 110px;
    width:9vw;
    max-width: 130px;
    background-color: blue;
    height: 100vh;

    #iconContainer {
      background-color: red;
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #optionsContainer {

      .optionContent {
        background-color: green;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 35px;
          cursor: pointer;
          background-color: red;
          padding: 5px;
          border-radius: 5px;
        }
      }
    }
  }

  header {
    background-color: blue;
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;

    #titleWrapper {
      margin-left: 30px;
    }
  }
}



</style>
