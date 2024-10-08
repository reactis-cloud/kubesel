#!/usr/bin/env node
const yaml = require('yaml');
const fs = require('fs');
const prompts = require('prompts');
const expandTilde = require('expand-tilde');
const homedir = require('os').homedir();
const kubedir = homedir + '/.kube';
const kubeseldir = homedir + '/.kubesel';
const file = fs.readFileSync(kubeseldir + '/config.yaml', 'utf8')
const config = yaml.parse(file);

(async () => {
	const response = await prompts({
		type: 'select',
		name: 'value',
		message: 'Select a kubernetes cluster',
		choices: config.clusters.map((item) => { return  {title: item.name, value: item}}),
		initial: 0
	});
	if (response.value) {
		fs.copyFile(expandTilde(response.value.config), kubedir + '/config', (err) => {
			if (err) throw err;
			else {
				fs.writeFile(kubeseldir + '/name.selected', response.value.name, () => {

				});
				fs.writeFile(kubeseldir + '/color.selected', response.value.color ? response.value.color.toString() : '', () => {

				});
			}
		});
	}
})();
