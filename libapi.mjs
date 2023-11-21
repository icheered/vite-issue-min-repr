var Module = (() => {
    return function () {
        new Worker(new URL("libapi.worker.js", import.meta.url));
    };
})();

export default Module;
