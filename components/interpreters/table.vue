<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="h-[100px]" />
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-2">Nombre
                  </th>
                  <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    Apellido Paterno
                  </th>
                  <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    Apellido Materno
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Localidad</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(interpreter, interpreterIdx) in interpreters" :key="interpreter.email1"
                  :class="interpreterIdx % 2 === 0 ? undefined : 'bg-gray-50'">
                  <td
                    class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-2">
                    {{ interpreter.nombre }}
                    <dl class="font-normal lg:hidden">
                      <dt class="sr-only">Apellido Paterno</dt>
                      <dd class="mt-1 truncate text-gray-700">{{ interpreter.apellidoPaterno }}</dd>
                      <dt class="sr-only">Apellido Materno</dt>
                      <dd class="mt-1 truncate text-gray-700">{{ interpreter.apellidoMaterno }}</dd>
                    </dl>
                  </td>
                  <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ interpreter.apellidoPaterno }}</td>
                  <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ interpreter.apellidoMaterno }}</td>
                  <td class="px-3 py-4 text-sm text-gray-500">{{ interpreter.ubigeoResidencia.nombreDepartamento }}</td>
                  <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, {{
                      interpreter.nombre
                    }}</span></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination />
</template>

<script>
import { useInterpreterStore } from '~~/stores/interpreter';
import { storeToRefs } from "pinia";
import Pagination from "./pagination.vue";
export default defineComponent({
  async setup() {
    const { data: interpreters } = storeToRefs(useInterpreterStore());

    return { interpreters }
  },
  components: {
    Pagination
  },
})
</script>
