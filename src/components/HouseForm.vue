<template>
   <form @submit.prevent="handleSubmit">
       <div class="form-group">
           <label for="model" class="">Model:</label>
           <input 
           placeholder="Model"
          v-model="editable.model"
          type="text"
          class="form-control"
          name="model"
          id="model"
          required
           
           />
       </div>

       <div class="form-group">
          <label for="year" class="">year:</label>
          <input
           placeholder="year"
           v-model="editable.year"
           type="year"
           class="form-control"
           name="year"
          id="year"
      />
      <div class="form-group">
      <label for="description" class="">description:</label>
      <textarea
        placeholder="Description"
        v-model="editable.description"
        type="text"
        class="form-control"
        name="description"
        id="description"
        rows="5"
      ></textarea>
    </div>
<div class="form-group">
      <label for="price" class="">Price:</label>
      <input
        placeholder="Price"
        v-model="editable.price"
        type="number"
        class="form-control"
        name="price"
        id="price"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input
        placeholder="https://imgurl.com"
        v-model="editable.imgUrl"
        type="url"
        class="form-control"
        name="img"
        id="img"
        required
      />
    </div>
    <div class="d-flex justify-content-between my-3">
      <button
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        class="btn text-dark lighten-20 text-uppercase selectable"
      >
        <b> cancel </b>
      </button>
      <button
        type="submit"
        class="btn btn-success text-primary text-uppercase selectable"
      >
        <b> submit </b>
      </button>
    </div>
       </div>

   </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import { House } from '../models/House'
import { computed, watchEffect } from '@vue/runtime-core'
import { housesService } from '../services/HousesService'
import Pop from '../utils/Pop.js'
import { Modal } from 'bootstrap'
export default {
    props: {
        house: {type: House, default: () => new House}
    },
    setup(props){
        const editable = ref({})
        watchEffect(() => {
            editable.value = { ...props.house}
        })
        return {
            editable,
            async handleSubmit() {
                try {
                    if (editable.value.id) {
                        await housesService.editHouse(editable.value)
                        // Modal.getOrCreateInstance(document.getElementById('edit-modal')).hide()
                } else {
               
                    await housesService.createHouse(editable.value)
                    // Modal.getOrCreateInstance(document.getElementById('create-car')).hide()
                }
                } catch (error) {
                    Pop.toast(error.message, 'error')
                }
             }
        }
    }
}
</script>


