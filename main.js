import { Octokit } from '@octokit/core';
import dotenv from 'dotenv';

const owner = 'LeonhardTissen';
const repo = 'CodaFlavors';

const headers = {
	'X-GitHub-Api-Version': '2022-11-28'
}

const octokit = new Octokit({
	auth: dotenv.GITHUB_TOKEN,
});
  
octokit.request(`GET /repos/${owner}/${repo}/languages`, {
	owner,
	repo,
	headers,
}).then((response) => {
	console.log(response);
}).catch((error) => {
	console.log(error);
})
