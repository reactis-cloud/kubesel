# Kubernetes Cluster Select

Just copy predefined config file to ~/.kube/config

![Alt text](kubesel.gif?raw=true "")

### Install
```
git clone https://github.com/reactis-cloud/kubesel.git
cd kubesel
npm install
chmod +x ./kubesel.js
ln -s "$(pwd)"/kubesel.js /usr/local/bin/ks
```

### Config example 
~/.kubesel/config.yaml
```
clusters:
  - name: Hetzner
    config: ~/.kube/master
    color: 91
  - name: Backup
    config: ~/.kube/backup
    color: 96
  - name: Digital Ocean
    config: ~/.kube/do
    color: 96
  - name: Development
    config: ~/.kube/dev
```
Bash colors: https://misc.flogisoft.com/bash/tip_colors_and_formatting 

### Configure bash prompt
 ~/.bashrc
```
_kubesel_prompt()
{
 PS1="\\u@\\h[\e[`cat ~/.kubesel/color.selected`m`cat ~/.kubesel/name.selected`\e[39m]:\\w\\$ "
}
PROMPT_COMMAND=_kubesel_prompt

```
