import axios from 'axios';

const VERSION = 'v1';

const API_KEY = process.env.API_KEY;

export const getArtist = name => (
    axios(`https://www.theaudiodb.com/api/${VERSION}/json/${API_KEY}/search.php?s=${name}`)
);