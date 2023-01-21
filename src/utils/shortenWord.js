export const shortWords = (word, length) => {
    if (word.length > length) {
        return word.substring(0, length) + "...";
    }
    return word;
}