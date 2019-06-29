<template>
    <card class="card" title="Create new shelter">
        <vue-form-generator :schema="schema" :model="model" class="form"/>
    </card>
</template>

<script>
    import gql from 'graphql-tag'
    import { createShelter } from '@/graphql/mutations'
    import { listShelters } from '@/graphql/queries'

    export default {
        data () {
            return {
                model: {},
                schema: {
                    fields: [
                        {
                            type: "input",
                            inputType: "text",
                            label: "Longitude",
                            model: "longitude",
                            placeholder: "Please enter your longitude",
                            required: true
                        },
                        {
                            type: "input",
                            inputType: "email",
                            label: "Latitude",
                            model: "latitude",
                            placeholder: "Please enter your latitude",
                            required: true
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Medical Kit",
                            model: "medical_kit",
                            placeholder: "Please enter your medical kit",
                            required: true
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "Food Kit",
                            model: "food_kit",
                            placeholder: "Please enter your food kit",
                            required: true
                        },
                        {
                            type: "submit",
                            inputType: "submit",
                            onSubmit: this.handleSubmit
                        }
                    ]
                }
            }
        },

        methods: {
            handleSubmit (shelter) {
                this.$apollo.mutate({
                    mutation: gql(createShelter),
                    variables: { input: this.model },
                    optimisticResponse: {
                        __typename: 'Mutation',
                        createShelter: {
                            ...shelter,
                            __typename: "Shelter",
                            id:  Math.round(Math.random() * -1000000)
                        }
                    },

                    update(cache, { data: { createShelter } }){
                        // read the data from the cache for this query
                        const query = cache.readQuery({query: gql(listShelters)})
                        // add our person from the mutation to the end
                        query.listShelters.items.push(createShelter);
                        // write the data back to the cache
                        cache.writeQuery({
                            query: gql(listShelters),
                            data: query
                        });
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vue-form-generator .field-submit input {
        // Default bootstrap primary button style
        color: #fff !important;
        background-color: #337ab7 !important;
        border-color: #2e6da4 !important;
    }
</style>
