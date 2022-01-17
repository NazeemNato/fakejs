import data from "./data/sentence"
/**
 * @param {number} length - The length of the sentence. by default is 10
 * @returns {string}
 * @example
 * randomSentence()
 * // => tempore, tempore, consequatur tempore, consequatur id tempore, consequatur id? voluptatibus voluptatibus saepe voluptatibus saepe et voluptatibus saepe et? tempore, tempore, id tempore, id odio
 */
export function randomSentence(length: number = 10): string {
    const sentence = []
    const words = data.split(" ")
    let currentWord = words[Math.floor(Math.random() * words.length)]
    sentence.push(currentWord)
    for (let i = 0; i < length; i++) {
        const nextWord = words[Math.floor(Math.random() * words.length)]
        if (currentWord.endsWith(".") || currentWord.endsWith("?") || currentWord.endsWith("!")) {
            currentWord = nextWord
            sentence.push(currentWord)
        } else {
            const punctuation = [".", "!", "?"]
            const punctuationIndex = Math.floor(Math.random() * punctuation.length)
            // append punctuation if current word is more than 20 characters long
            if (currentWord.length > 20) {
                currentWord += punctuation[punctuationIndex]
            } else {
                currentWord += " " + nextWord
            }
            sentence.push(currentWord)
        }
    }
    return sentence.join(" ")
}