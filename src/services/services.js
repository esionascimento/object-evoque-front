import axios from 'axios';
require('dotenv').config();

export default axios.create({
	baseURL: process.env.HOSTNAME || 'https://object-evoque-back.herokuapp.com/'
});
