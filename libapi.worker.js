var Module = {};

self.onmessage = event => {
    if (event.data.cmd === "load") {
        import("./libapi.mjs");
    }
};
