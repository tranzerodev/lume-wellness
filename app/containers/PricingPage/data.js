import axios from 'axios';
import {CMS_API_URL, CMS_API_TOKEN} from 'configs';

async function getPricing(){
	const res = await axios.get(
		CMS_API_URL+'api/collections/get/Pricing?'+CMS_API_TOKEN
	);
	return res.data.entries;
}