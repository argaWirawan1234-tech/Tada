<template>
    <div class="home-wrapper">
        <div class="invoice-wrapper">
            <div class="invoice-header">
                <div class="left">
                    <span>Invoices</span>
                    <span>There are 7 total invoices</span>
                </div>
                <div class="right">
                    <div class="filter">
                        <span @click="filterDialog = !filterDialog">Filter By Status</span>
                        <i class="down-arrow" @click="filterDialog = !filterDialog" />
                        <div class="dropdown-filter" v-if="filterDialog">
                            <span v-for="(item, index) in status" :key="index"  @click="filterByStatus(item)">{{item}}</span>
                        </div>
                    </div>
                    <div class="add-invoices">
                        <div class="button-add" @click="editAddWrapper = !editAddWrapper">
                            <div class="button-add-circle">
                                +
                            </div>
                            New Invoices
                        </div>
                    </div>
                </div>
            </div>
            <div class="invoice-header-mobile">
                <div class="left">
                    <span>Invoices</span>
                    <span>7 invoices</span>
                </div>
                <div class="right">
                    <div class="filter">
                        <span @click="filterDialog = !filterDialog">Filter</span> 
                        <i class="down-arrow" @click="filterDialog = !filterDialog"></i></div>
                        <div class="dropdown-filter" v-if="filterDialog">
                            <span v-for="(item, index) in status" :key="index"  @click="filterByStatus(item)">{{item}}</span>
                        </div>
                    <div class="add-invoices">
                        <div class="button-add">
                            <div class="button-add-circle" @click="editAddWrapper = !editAddWrapper">
                                +
                            </div>
                            New
                        </div>
                    </div>
                </div>
            </div>
            <div style="width:100%" v-for="(item, index) in invoiceToDisplay" :key="index">
                <div class="invoice-item">
                    <div><span class="kress-symbol">#</span><span style="font-weight: bold">{{item.code}}</span></div>
                    <div><span>Due </span><span>{{item.date}}</span></div>
                    <div>{{item.person}}</div>
                    <div><span class="invoice-item-amount">£ {{item.amount}}</span></div>
                    <div><span :class="`status-box ${(item.status).toLowerCase() === 'paid' ? 'status-box-paid': 'status-box-pending'}`">{{item.status}}</span></div>
                    <div class="right-arrow"></div>
                </div>
                <div class="invoice-item-mobile">
                    <div style="display:flex;flex-direction: row; justify-content: space-between;width: 100%;margin-bottom:15px">
                        <div><span class="kress-symbol">#</span><span style="font-weight: bold">{{item.code}}</span></div>
                        <div>{{item.person}}</div>
                    </div>
                    <div style="display:flex;flex-direction: row; justify-content: space-between; align-items:center;width: 100%">
                        <div style="display: flex;flex-direction: column;">
                            <div style="margin-bottom:10px" ><span>Due </span><span>{{item.date}}</span></div>
                            <div><span class="invoice-item-amount">£ {{item.amount}}</span></div>
                        </div>
                        <div><span :class="`status-box ${(item.status).toLowerCase() === 'paid' ? 'status-box-paid': 'status-box-pending'}`">{{item.status}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="editAddWrapper ? 'edit-add-wrapper edit-add-wrapper-opened' : 'edit-add-wrapper edit-add-wrapper-closed' ">
            <FormInput :close="close" />
        </div>
        <div :class="editAddWrapper ? 'shadow-background': ''" @click="editAddWrapper = !editAddWrapper"></div>
    </div>
</template>
<script>
import FormInput from './FormInput'
import { mapState } from 'vuex'
export default {
    components: {
        FormInput: FormInput,
    },
    computed: {
        ...mapState({
            listInvoices: state => state.listInvoices,
        }),
	},
    data() {
        return {
            filterDialog: false,
            editAddWrapper: false,
            status: ['All', 'Paid', 'Pending'],
            invoiceToDisplay: [],
        }
    },
    methods: {
        async filterByStatus(item){
            this.filterDialog = false 
            if(item === 'All') {
                this.invoiceToDisplay = await this.listInvoices
                return
            }
            this.invoiceToDisplay = this.listInvoices.filter(el => el.status === item)
        },
        close() {
            this.editAddWrapper = false
        }
    },
    async mounted(){
        await console.log(this.listInvoices)
        this.invoiceToDisplay = this.listInvoices
    }
}
</script>
