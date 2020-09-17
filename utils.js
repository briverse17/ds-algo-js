module.exports = {
    /**
     * Make the console sleep for ms miliseconds
     * @param {number} ms the duration of time to sleep
     */
    sleep: function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
};
