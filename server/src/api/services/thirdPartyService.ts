import axios from 'axios';
import { trailApiConfig, weatherApiConfig } from '../../config/thirdPartyConfig';

/**
 * Fetch data from the first third-party API.
 * @returns {Promise<any>} - The data retrieved from the API.
 */
export const fetchTrailData = async (query: string): Promise<any> => {
    try {
        const response = await axios.post(
            trailApiConfig.baseUrl,
            { query },
            {
                headers: {
                    'x-algolia-api-key': trailApiConfig.apiKey,
                    'x-algolia-application-id': trailApiConfig.applicationId,
                    'x-algolia-agent': trailApiConfig.agent,
                },
            }
        );
        
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch trail data');
    }
};

interface WeatherApiParams {
    latitude: number;
    longitude: number;
    hourly: string;
}
/**
 * Fetch data from the second third-party API.
 * @returns {Promise<any>} - The data retrieved from the API.
 */
export const fetchWeatherData = async (params: WeatherApiParams): Promise<any> => {
    try {
        const response = await axios.get(weatherApiConfig.baseUrl, {
            params: {
                latitude: params.latitude,
                longitude: params.longitude,
                hourly: params.hourly,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        throw new Error('Failed to fetch weather data');
    }
};
