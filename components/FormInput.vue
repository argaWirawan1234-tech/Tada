<template>
    <div class="formWrapper">
        <div class="header-wrapper"><p>Add New</p></div>
        <div v-for="(item, index) in formInput" :key="index" style="width: 100%;margin-bottom:10px">
            <div class="header-label" v-if="item.type === 'text'">
                <p>{{item.label}}</p>
            </div>
            <div class="single" v-if="item.type === 'single'">
                <p>{{item.label}}</p>
                <input class="input" type="text" v-model="item.value">
            </div>
            <div class="multiple" v-if="item.type === 'multiple'">
                <div class="single" v-for="(item2, index2) in item.field" :key="index2">
                     <p>{{item2.label}}</p>
                     <input class="input" type="text" v-model="item2.value">
                </div>
            </div>
        </div>
        <div class="footer-wrapper">
            <button class="cancle-button" @click="close">Cancle</button>
            <button class="submit-button" @click="submit">Save Changes</button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return{
            formInput: [
                {type: 'text', label: 'Bill Form'},
                {type: 'single', label: 'Street Address', value: '', category: 'text'},
                {type: 'multiple', label: '', field: [
                    {type: 'single', label: 'City', value: '', category: 'text'},
                    {type: 'single', label: 'Postal Code', value: '', category: 'text'},
                    {type: 'single', label: 'Country', value: '', category: 'text'},
                ]},
                {type: 'text', label: 'Bill To'},
                {type: 'single', label: "Client's Name", value: '', category: 'text'},
                {type: 'single', label: "Client's Email", value: '', category: 'text'},
                {type: 'single', label: 'Street Address', value: '', category: 'text'},
                {type: 'multiple', label: '', field: [
                    {type: 'single', label: 'City', value: '', category: 'text'},
                    {type: 'single', label: 'Postal Code', value: '', category: 'text'},
                    {type: 'single', label: 'Country', value: '', category: 'text'},
                ]},
                {type: 'multiple', label: '', field: [
                    {type: 'single', label: 'Invoice Date', value: '', category: 'date'},
                    {type: 'single', label: 'Payment Terms', value: '', category: 'select'},
                ]},
                {type: 'single', label: 'Project Description', value: '', category: 'text'},
            ]
        }
    },
    props: {
        close: {
            type: Function,
            default: null,
        }
    },
    methods: {
    ...mapActions([
        'addInvoices',
    ]),
    submit() {
        const dataStatic = {code: 'RT3080', date: '20 Sep 2021', person: this.formInput[4].value, amount: '123456', status: 'Pending'}
        this.addInvoices(dataStatic)
        this.close()
        window.location.reload()
    }
    }
}
</script>