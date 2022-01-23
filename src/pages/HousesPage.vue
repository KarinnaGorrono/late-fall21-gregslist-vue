<template>
  <div class="housesPage container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-between my-4">
        <h2>Houses</h2>
        <button class="btn btn-outline-dark border-3" data-bs-toggle="modal" data-bs-target="#house-modal"><i class="mdi mdi-24px mdi-plus"></i></button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="h in houses" :key="h.id">
        <House :house="h"/>
        
      </div>
    </div>
  </div>
 
<Modal id="create-house">
    <template #modal-title> Create House </template>
    <template #modal-body>
      <HouseForm />
    </template>
  </Modal>

<HouseForm />
</template>


<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'

export default {
    setup() {
        const loading = ref(true)
        onMounted(async () => {
            try {
                await housesService.getAll()
                loading.value = false
            } catch (error) {
                logger.error(error)
                Pop.toast('Unable to get Houses', 'error')
            }
        })
        return {
            loading,
            houses: computed(() => AppState.houses),
            account:computed(() => AppState.account)
        }
    }
}


  
</script>

<style lang="scss" scoped>


</style>