<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flow-root">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full px-2 align-middle sm:px-6 lg:px-8">
          <div class="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300 mt-10">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-2">
                    Nombre
                  </th>
                  <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    Apellido Paterno
                  </th>
                  <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                    Apellido Materno
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Departamento
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Lengua
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Variedad
                  </th>
                  <!-- <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 15" :key="n" class="animate-pulse w-full">
                  <td
                    class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-2">
                    <div class="flex-1 w-full space-y-6 py-1">
                      <div class="h-2 lg:h-6 bg-slate-200 rounded"></div>
                    </div>
                    <dl class="font-normal lg:hidden">
                      <dt class="sr-only">Apellido Paterno</dt>
                      <dd class="mt-1 truncate text-gray-700">
                        <div class="flex-1 w-full space-y-6 py-1">
                          <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                      </dd>
                      <dt class="sr-only">Apellido Materno</dt>
                      <dd class="mt-1 truncate text-gray-700">
                        <div class="flex-1 w-full space-y-6 py-1">
                          <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                      </dd>
                    </dl>
                  </td>
                  <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-6 w-4/5 bg-slate-200 rounded"></div>
                    </div>
                  </td>
                  <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-6 w-4/5 bg-slate-200 rounded"></div>
                    </div>
                  </td>
                  <!-- Departamento -->
                  <td class="px-3 py-4 text-sm text-gray-500">
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-6 w-4/5 bg-slate-200 rounded"></div>
                    </div>
                  </td>
                  <!-- Lengua -->
                  <td class="px-3 py-4 text-sm text-gray-500">
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-6 w-3/5 bg-slate-200 rounded"></div>
                    </div>
                  </td>
                  <!-- Variedad -->
                  <td class="px-3 py-4 text-sm text-gray-500">
                    <div class="space-y-6 py-1">
                      <div class="h-6 w-2/5 bg-slate-200 rounded"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
export default defineComponent({

})
</script>
