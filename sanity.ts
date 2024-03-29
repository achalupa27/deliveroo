import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: '9mgdcv98',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);
export const urlFlor = (source) => builder.image(source);

export default client;
