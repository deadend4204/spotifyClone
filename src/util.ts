export const millisToMinutesAndSeconds = (ms: number) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = Number(((ms % 60000) / 1000).toFixed(0));
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};