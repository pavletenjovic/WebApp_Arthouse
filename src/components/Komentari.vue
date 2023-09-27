<template>
    <div id="listaKomentara">
        <table>
            <tr v-for = 'kom in komentari' :key="kom.id">
                <td>                    
                    <b> {{kom.kreator}} </b> <br> {{ kom.tekst }}
                </td>
            </tr>   
        </table>
    </div>
</template>

<style scoped>
    #listaKomentara{
        display: flex;
        justify-content: center;
    }
    #listaKomentara table{
        align-self: center;
    }
</style>

<script>
    export default{
        name: 'Komentari',
        props:[
            'komentari'
        ]
    }
</script>
