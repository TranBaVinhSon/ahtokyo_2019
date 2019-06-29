<template>
    <div>
        <router-link class="btn btn-success" :to="{ name: 'ShelterCreate' }">Create new shelter</router-link>

        <div class="row mt-3">
            <div class="col-12">
                <card :title="'Shelters'">
                    <div slot="raw-content" class="table-responsive">
                        <paper-table :data="listShelters.items" :columns="table.columns"></paper-table>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    import { PaperTable } from "@/components"
    import gql from 'graphql-tag'
    import { listShelters } from '@/graphql/queries'
    import { onCreateShelter, onDeleteShelter } from '@/graphql/subscriptions'

    const tableColumns = ['id', 'longitude', 'latitude', 'medical_kit', 'food_kit']

    export default {
        components: {
            PaperTable
        },

        data() {
            return {
                table: {
                    columns: [...tableColumns]
                },
                listShelters: { items: [] }
            }
        },

        apollo: {
            listShelters: {
                query: gql(listShelters),
                subscribeToMore: [
                    {
                        document: gql(onCreateShelter),
                        updateQuery(prev, { subscriptionData: {data} }){
                            // this will stop a duplicate person being added in the browser that made the change
                            const idInListAlready = prev.listShelters.items.some(person => person.id === data.onCreateShelter.id)
                            if (idInListAlready) {
                                return prev
                            }
                            return {
                                listShelters: {
                                    ...prev.listShelters,
                                    items: prev.listShelters.items.concat([data.onCreateShelter])
                                }
                            }
                        }
                    },
                    {
                        document: gql(onDeleteShelter),
                        updateQuery(prev, { subscriptionData: {data} }){
                            return {
                                listShelters: {
                                    ...prev.listShelters,
                                    items: prev.listShelters.items.filter(person => person.id !== data.onDeleteShelter.id)
                                }
                            }
                        }
                    },
                ],
            }
        }
    }
</script>
