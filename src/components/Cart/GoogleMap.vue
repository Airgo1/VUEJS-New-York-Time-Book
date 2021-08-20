<template>
    <div>
        <gmap-map
        :zoom="14"    
        :center="center"
        style="width:100%;  height: 500px;">
            <gmap-marker
                :key="index"
                :position="locationMarkers"
                @click="center=locationMarkers">
            </gmap-marker>
    </gmap-map>
    </div>
</template>

<script>
export default {
    name: 'googleMap',
    props: {
        featureProps: Object
    },
    data () {
        return {
            feature: this.featureProps,
            center: { 
                lat: 39.7837304,
                lng: -100.4458825
            },
            locationMarkers: null
        }
    },
 
  methods: {
    addLocationMarker(lat, lng) {
        const marker = {
          lat: lat,
          lng: lng
        };
        this.locationMarkers = marker
      }
  },
  watch: {
      featureProps (newValue, oldValue) {
        console.log('new feature')
        this.feature = newValue
        this.center = {
            lat: newValue.geometry.coordinates[1],
            lng: newValue.geometry.coordinates[0]
        }
        this.addLocationMarker(this.center.lat, this.center.lng)
      }
  }
}
</script>

<style scoped>

</style>
