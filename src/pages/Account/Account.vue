<template>
    <div>
        <ion-page>
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Account</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content padding>
                <!-- <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                    <ion-refresher-content></ion-refresher-content>
                </ion-refresher> -->
                <div class="account-details">
                    <div class="account-details-container">
                        <h4>Account Details</h4>
                        <AccountDetails class="account-details-card" />
                    </div>

                    <div class="account-details-container">
                        <h4>Current Balance</h4>
                        <BalanceDetails class="account-details-card" />
                    </div>
                </div>
            </ion-content>
        </ion-page>
    </div>
</template>

<script>
import AccountDetails from "./AccountDetails"
import BalanceDetails from "./BalanceDetails"

export default {
    name: "Account",
    components: {
        AccountDetails,
        BalanceDetails,
    },
    methods: {
        doRefresh(event) {
            this.getAPIData().then(() => {
                console.log("Refresh complete")
                event.target.complete()
            })
        },
    },
}
</script>
