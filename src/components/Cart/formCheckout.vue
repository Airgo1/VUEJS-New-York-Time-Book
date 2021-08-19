<template>
    <div>
        <b-card>
            <b-row align-v="center" cols="2">
                <b-col>
                    <b-input-group prepend="First name" class="mb-2">
                        <b-form-input v-model="firstName" aria-label="First name"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Last name" class="mb-2">
                        <b-form-input v-model="lastName" aria-label="Last name"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Email" class="mb-2">
                        <b-form-input v-model="email" aria-label="Email"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Adress" class="mb-2">
                        <b-form-input v-model="adress" list="my-list-id"></b-form-input>
                        <datalist id="my-list-id">
                            <option v-for="feature in geoReponse.features">{{ feature.properties.label }}</option>
                        </datalist> 
                    </b-input-group> 
                                  
                </b-col>
                <b-col>
                    <GoogmeMap v-bind:featureProps="feature"/>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'
import GoogmeMap from '@/components/Cart/GoogleMap'
export default {
    name: 'FormCheckout',
    components: {
        GoogmeMap
    },
    data () {
        return {
            firstName: null,
            lastName: null,
            email: null,
            adress: null,
            geoReponse: {},
            feature: null
        }
    },
    methods: {
        async apiGeoGouv (adress) {
            console.log(adress.replaceAll(' ','+'))
            var config = {
                method: 'get',
                url: 'https://api-adresse.data.gouv.fr/search/?q='+adress.replace(' ', '+')+'&limit=10',
                headers: { }
            }

            await axios(config)
                .then(response => {
                    this.geoReponse = response.data
                    if(response.data.features.length==1) {
                        this.feature = response.data.features[0]
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    watch: {
        adress (newValue) {
            this.apiGeoGouv(newValue)
        }
    }
    
}
</script>

<style>

</style>