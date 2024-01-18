function extractFile(path) {
    let file = path.split('\\').pop();
    let lastDotInd = file.lastIndexOf('.');

    let fileName = file.substring(0,lastDotInd);
    let fileExt = file.substring(lastDotInd)

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExt}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
// extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');