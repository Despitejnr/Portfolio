// filepath: c:\Users\MAWUKO\Desktop\Dave's - Portfolio\Dave project\src\Components\CoseStudy\imageRecognition.js

// Load the MobileNet model and classify images
async function recognizeImages() {
    const model = await mobilenet.load(); // Load the MobileNet model
    const images = document.querySelectorAll('.case-study-image img'); // Select all images in the case-study-image section

    images.forEach(async (image) => {
        const predictions = await model.classify(image); // Classify the image
        console.log(`Predictions for ${image.src}:`, predictions);

        // Display predictions below the image
        const resultDiv = document.createElement('div');
        resultDiv.style.marginTop = '10px';
        resultDiv.style.fontSize = '0.9rem';
        resultDiv.style.color = 'gray';

        predictions.forEach((prediction) => {
            const p = document.createElement('p');
            p.textContent = `${prediction.className} - ${(prediction.probability * 100).toFixed(2)}%`;
            resultDiv.appendChild(p);
        });

        image.parentElement.appendChild(resultDiv); // Append predictions to the image container
    });
}

// Run the function after the page loads
window.addEventListener('load', recognizeImages);