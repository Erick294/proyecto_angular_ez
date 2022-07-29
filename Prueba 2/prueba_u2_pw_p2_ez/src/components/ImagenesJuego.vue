<template>
    <div class="marcador">
        <h2>Bienvenido</h2>
        <br>
        <h4>Puntaje: {{puntaje}} Intentos: {{intento}}</h4>
    </div>

    <div class="imagen-container">
        <table>
            <td><img class="imagen-oscura" src="@/assets/img/Cuadro-Negro.png" alt="No encontrado">
                <img v-if="mostrar" :src="imagenSRC" alt="No encontrado"></td>
            <td><img class="imagen-oscura" src="@/assets/img/Cuadro-Negro.png" alt="No encontrado">
                <img v-if="mostrar" :src="imagenSRC" alt="No encontrado"></td>
            <td><img class="imagen-oscura" src="@/assets/img/Cuadro-Negro.png" alt="No encontrado">
                <img v-if="mostrar" :src="imagenSRC" alt="No encontrado"></td>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            marcador: 1,
            intento: 5
        }
    },
    props:{
        pokemonNumero:{
            Type: Number,
            required: true
        },
        mostrar:{
            Type: Boolean,
            required: true,
            default: false
        },
        arreglo:{
            Type: Array,
            required: true
        }
    },
    computed:{
        imagenSRC(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonNumero}.svg`;
        }
    }

}
</script>

<style>
.imagen-oscura{
    height: 125px;
}

img{
    height: 125px;
    position: absolute;
}

td{
    padding: 65px;
    justify-content: center;
    display: flex;
}

.imagen-container{
    justify-content: center;
    display: flex;
}
</style>