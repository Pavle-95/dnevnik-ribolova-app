// import { fetchData } from "./Api";

export async function mapAsImage(params) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params) // Ensure params are stringified
    };
    const response = await fetch('https://maps.geoapify.com/v1/staticmap?apiKey=460b2c968c234bd0a127a19106e8ba3e', options);
    
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Return the response as a Blob (image data)
    return await response.blob();
}

export async function interactiveMap(params) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params) // Ensure params are stringified
    };
    const response = await fetch('https://maps.geoapify.com/v1/staticmap?apiKey=460b2c968c234bd0a127a19106e8ba3e', options);
    
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Return the response as a Blob (image data)
    return await response.blob();
}

// https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:-122.304378,47.526022&zoom=14&apiKey=460b2c968c234bd0a127a19106e8ba3e