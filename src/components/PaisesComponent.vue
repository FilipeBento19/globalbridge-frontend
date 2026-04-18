        <script setup>
        import { ref, onMounted } from "vue"
        import axios from "axios"

        const paises = ref([])

        onMounted(async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/paises/mais-procurados/"
                )
                paises.value = response.data

            } catch (error) {
                console.error("Erro ao buscar países:", error)
            }
        })

        const calcularPorcentagem = (valor) => {
            const max = Math.max(...paises.value.map(p => p.intercambistas))
            return (valor / max) * 100
        }
</script>

<template>
    <div class="container">
        <span class="best">o melhor para você</span>
        <h2>PAÍSES MAIS PROCURADOS</h2>

        <div v-for="pais in paises" :key="pais.id" class="pais">
            <div class="info">
                <div>
                    <h3 class="nome">{{ pais.nome.toUpperCase() }}</h3>

                </div>
                <div class="dinfo">
                    <p>Universidades: {{ pais.universidades }}</p>
                </div>
                <span class="numero">Intercambistas: {{ pais.intercambistas }}</span>
            </div>

            <div class="barra">
                <div class="preenchido" :style="{ width: calcularPorcentagem(pais.intercambistas) + '%' }"></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px 15%;
}

span.best {
    font-size: 0.78vw;
    color: #66635C;
    background-color: #E5E0CF;
    padding: 10px 8px;
    border-radius: 10px;
}

h2 {
    margin-top: 15px;
    font-size: 2vw;
    margin-bottom: 100px;
}

.info {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    border-top: 1px #f5490085 solid;
    margin: 0 0 30px 0;
    padding: 20px 0 0 0;
}

.pais {
    margin-bottom: 15px;
}


.nome {
    font-size: 1.5vw;
    color: #6e0000;
}

div.dinfo {
    color: #a70404;
}

.numero {
    color: #ff4d00;
}

/*
.barra {
    height: 8px;
    background: #eee;
    border-radius: 10px;
    overflow: hidden;
}

.preenchido {
    height: 100%;
    background: linear-gradient(to right, #ff7a00, #ff3d00);
}*/
</style>
