const TextToSpeech = require('text-to-speech-converter')

async function testSpeechGeneration() {
    try {
        const outputFilePath = 'testfile';
        const text = 'Hello friends, this is a code test for you to understand it';
        const result = await TextToSpeech(text, outputFilePath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
testSpeechGeneration();
