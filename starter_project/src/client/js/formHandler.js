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

        document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
        document.getElementById("model").innerHTML = `Model: ${data.model}`;
        document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;

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
