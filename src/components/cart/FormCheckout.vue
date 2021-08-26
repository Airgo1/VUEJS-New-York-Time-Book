<template>
    <div>
        <b-card>
            <b-row align-v="center" cols="2">
                <b-col>
                    <div class='icon'>
                        <b-icon icon="box" aria-hidden="true" font-scale="7.5"></b-icon>
                    </div>
                    <div class='icon'>
                        <strong> Shipping form </strong>
                    </div>
                    <b-input-group prepend="First name" class="mb-2">
                        <b-form-input v-model="firstName" aria-label="First name" type="text"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Last name" class="mb-2">
                        <b-form-input v-model="lastName" aria-label="Last name" type="text"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Email" class="mb-2">
                        <b-form-input v-model="email" aria-label="Email" type="email"></b-form-input>
                    </b-input-group>
                    <b-input-group prepend="Adress" class="mb-2">
                        <b-form-input v-model="adress" list="my-list-id" type="text"></b-form-input>
                        <datalist id="my-list-id">
                            <option v-for="feature in geoReponse.features" v-bind:key="feature.properties.label">{{ feature.properties.label }}</option>
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
import GoogmeMap from '@/components/cart/GoogleMap'
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
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    watch: {
        adress (newValue) {
            this.apiGeoGouv(newValue)
            if( this.geoReponse.features.length==1) {
                this.feature =  this.geoReponse.features[0]
            }
        }
    }
    
}
</script>

<style>
.icon {
    text-align:center;
    padding-bottom: 50px;
}
</style>
