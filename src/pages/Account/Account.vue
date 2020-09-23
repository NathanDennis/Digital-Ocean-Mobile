<template>
    <div>
        <ion-page>
            <ion-content padding>
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
import AccountDetails from './AccountDetails'
import BalanceDetails from './BalanceDetails'

export default {
    name: 'Account',
    components: {
        AccountDetails,
        BalanceDetails
    }
}
</script>
