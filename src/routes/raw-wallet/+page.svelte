<script lang="ts">
    import  { PrivateKey } from '@bsv/sdk';

    let WIF:string;
    let address:string;

    const createWallet = () => {
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("Private Key WIF format is ", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ", address)

    }

</script>

<section>
    <div class="justify-center">
        <button class="bg-black p-5 text-sm text-slate-200 rounded border-emerald-600 border-solid" on:click={createWallet}>Generate New Wallet Keys</button>
        <p>Private key WIF format is {WIF}</p>
        <p>Your Bitcoin address  is {address}</p>
    </div>
</section>