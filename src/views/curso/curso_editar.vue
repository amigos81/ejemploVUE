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

import { collection, getDocs,getDoc, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            curso: {
                nombre: '',
                horas: '',
            },
        }
    },
    methods: {
        async getUrls() {
            try {
                const q = doc(db, "curso", this.id);
                const respuesta = await getDoc(q);
                this.curso=respuesta.data()
            } catch (error) {
                console.log(error);
            }
        },
        async guardar() {
            try {
                const q = doc(db, 'curso',this.id);
                const docRef = await updateDoc(q,this.curso);
                this.$router.push({ name: 'curso_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getUrls()
    }
})
</script>