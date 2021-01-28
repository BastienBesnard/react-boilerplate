export default {
    // Sample: Async call to a public API
    loadNameInformation(name) {
        return fetch(`https://api.agify.io?name=${name}`).then((res) =>
            res.json()
        );
    }
};
