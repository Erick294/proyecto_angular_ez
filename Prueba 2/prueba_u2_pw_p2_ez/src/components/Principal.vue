<template>
  <ImagenesJuego :pokemonNumero="5" :mostrar="valor" :arreglo="obtenerPokemonsArreglo()"/>
  <div class="opciones-container">
    <button v-on:click="iniciarJuego()">Jugar</button>
  </div>
</template>

<script>
import ImagenesJuego from '@/components/ImagenesJuego.vue'
import getPokemons from '@/helpers/obtenerPokemons'

export default {
  name: 'Principal',
  components: {
    ImagenesJuego
  },
  data(){
        return{
            pokemonArreglo: [],
	    valor: false
        }
    },
    methods:{
        async obtenerPokemonsArreglo(){
            this.pokemonArreglo = await getPokemons()
        },
	iniciarJuego(){
            this.valor = true
        }
    },
    mounted(){
        this.obtenerPokemonsArreglo()
    }
}
</script>

<style>

</style>