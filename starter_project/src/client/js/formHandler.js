const serverURL = 'http://localhost:8000/api';

export async function sendToServer(formText) {
    try {
        const response = await fetch(serverURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: formText })
        });

        if (!response.ok) {
            throw new Error(`Error response: ${response.statusText}`);
        }

        const data = await response.json();

         document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById("polarity").innerHTML = `Polarity: ${data.polarity}`;
        document.getElementById("text").innerHTML = `Text: ${data.text}`;
       

    } catch (e) {
        console.error('error', e);
    }
}

export async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;

    if (!isValidUrl(formText)) {
        console.error('Inalid', formText);
        return;
    }
    await sendToServer(formText);
}

export function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}
