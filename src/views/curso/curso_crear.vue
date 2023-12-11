<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">nombre</label>
                        <input v-model="curso.nombre" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">horas</label>
                        <input v-model="curso.horas" type="email" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/curso_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs, query, where,addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
            curso: {
                nombre: '',
                horas: '',
            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'curso'));
                const docRef = await addDoc(q, this.curso);
                this.$router.push({ name: 'curso_listar' })
            } catch (error) {
                console.log(error);
            } 
        },
    },
    created() {
    }
})
</script>