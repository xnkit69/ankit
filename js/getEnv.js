var myEnv = (() => {
    const environment = {
        // create your own api key from: https://web3forms.com/
        // this api key can be public.
        web3FormsApiKey: "229fa972-9a72-4c89-b429-e4d6be70021e",
    }
    return {
        getVariable: (key) => {
            return environment[key];
        }
    }
})();
