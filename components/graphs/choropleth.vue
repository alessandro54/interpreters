<template>
  <div class="pt-20">
    <svg ref="svg" height="800" width="500">
      <path
        v-for="state in stateData"
        :key="state.feature.id"
        :d="pathGenerator(state.feature)"
        class="fill-slate-400 stroke-black hover:fill-red-400"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import * as d3 from 'd3'

export default defineComponent({
  name: 'Choropleth',
  data() {
    return {
      statesJson: null,
    }
  },
  computed: {
    projection() {
      return d3.geoMercator()
        .scale(1200)
        .center([-74.991903, -9.314378388527897])
        .translate([400 / 2, 500 / 2])
    },
    pathGenerator(): any {
      return d3.geoPath().projection(this.projection)
    },
    stateData() {
      return this.statesJson ? this.statesJson.features.map(feature => {
        return {
          feature,
          color: '#ccc'
        }
      }) : []
    },
    stateColor() {
      return d3.scaleSequential().domain([50, 1]).interpolator(d3.interpolateRdYlGn)
    },
    cityColor() {
      return d3.scaleLinear().domain([20, 1]).range(['#32a852', '#10732b'])
    },
    citySize() {
      return d3.scaleLinear().domain([20, 1]).range([5, 15])
    }
  },
  created() {
    fetch('https://raw.githubusercontent.com/juaneladio/peru-geojson/master/peru_departamental_simple.geojson')
      .then(response => {
        return response.json()
      })
      .then((r) => {
        this.statesJson = r
      })
      .catch(error => {
        console.log(error)
      })
  }
})
</script>
