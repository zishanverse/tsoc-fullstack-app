import NeucronSDK from "neucron-sdk";

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({request}) => {
        const data = await request.formData();

    const neucron = new NeucronSDK();

    const authModule = neucron.authentication;
    const walletModule = neucron.wallet;
    const loginResponse = await authModule.login({ email: data.get("email"), password: data.get("password") });
    console.log(loginResponse);

    const DefaultWalletBalance = await walletModule.getWalletBalance({});
    //console.log(DefaultWalletBalance);

 

    return {success: true, balance: DefaultWalletBalance.data.balance.summary}
    },

    pay: async ({request}) => {
        const data = await request.formData();

        const neucron = new NeucronSDK();

    const authModule = neucron.authentication;
    const walletModule = neucron.wallet;



    const loginResponse = await authModule.login({ email: data.get("email"), password: data.get("password") });
    //console.log(loginResponse);

    


    const options = {
        outputs: [
          {
            address: data.get("paymail"),
            note: 'gurudakshina',
            amount: Number(data.get("amount"))
          }
        ]
      };

      let payResponse;
      try {
        payResponse = await neucron.pay.txSpend(options);
        console.log(payResponse);
        return { paid: true, payment: payResponse.data.txid };
      } catch (error) {
        console.log(error.message);
        return {paid : false, payment : error.message}
      }
    }
}