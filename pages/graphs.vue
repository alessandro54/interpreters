<template>
  <ClientOnly>
    <section class="flex w-full justify-center pt-10">
      <div class="w-4/5">
        <apexchart :options="chartOptions" :series="[series]" />
      </div>
    </section>
  </ClientOnly>
</template>

<script lang="ts">
import { fromPairs, sortBy, toPairs } from 'lodash';
import { useInterpreterStore } from '~~/stores/interpreter';

export default defineComponent({
  data() {
    return {
      chartOptions: {
        colors: ['#5eead4'],
        chart: {
          id: 'example',
          type: 'bar',
          toolbar: {
            show: false
          },
        },
        xaxis: {
          categories: Object.keys(this.languageCount),
        },
        dataLabels: {
          offsetY: 20,
          style: {
            colors: ['#000'],
            fontWeight: 'bold',
          },
        },
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                height: 700,
                width: '100%'
              },
              yaxis: { show: false },
              plotOptions: {
                bar: {
                  horizontal: true,
                  dataLabels: { position: 'top' }
                }
              },
              dataLabels: {
                offsetX: 80,
                style: {
                  colors: ['#000'],
                  fontWeight: 'normal'
                },
                formatter: (val: any, opt: any) => {
                  return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
                }
              }
            }
          }
        ]
      },
      series: {
        name: 'Intérpretes',
        data: Object.values(this.languageCount)
      }
    }
  },
  async setup() {
    const store = useInterpreterStore();
    if (store.getTotalCount === 0)
      await store.fetchInterpreters();

    return {
      languageCount: fromPairs(sortBy(toPairs(store.getLanguageCount), 1).reverse())
    }
  }
})
</script>
