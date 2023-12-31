 # ece-devops
## 1. Work performed

- Create a web application
- Apply CI/CD pipeline
- Build Docker image of your application
- Make container orchestration using Docker Compose
- Make docker orchestration using Kubernetes

## 2. Screenshots

### 1. Create a web application
```
npm start
```

![image](https://github.com/Naomi075/devops_project/assets/78731315/13590fa0-ddf2-4d88-aed1-d7da7108c26d)


![image](https://github.com/Naomi075/devops_project/assets/78731315/7c034b94-df1f-4104-a019-b70d40817410)


![image](https://github.com/Naomi075/devops_project/assets/78731315/d92e9dc4-d238-4efe-9b25-5a7cceef357d)

### Just in case, to kill the process:
```
npx kill-port 3000
```

### 2. Apply CI/CD pipeline
<img width="883" alt="image" src="https://github.com/Naomi075/devops_project/assets/86240074/5051237f-d51d-4629-9b78-b92138f35138">

<img width="1033" alt="image" src="https://github.com/Naomi075/devops_project/assets/86240074/04392304-2d33-4866-8f6f-51ed215c2669">


### 3. Configure and provision a virtual environment and run your application using the IaC approac

#### Part-1. Imperative - Using Vagrant with Shell Provisioner

![check installed vm](https://github.com/Naomi075/devops_project/assets/144215283/74d684af-404f-4463-b334-34a6bc6c9ce8)

![vagrant ssh1](https://github.com/Naomi075/devops_project/assets/144215283/bf873cf1-6780-4440-81c3-1ab9006193d8)

![vagrant ssh](https://github.com/Naomi075/devops_project/assets/144215283/909b1779-cca2-4e0f-8039-30447fd7c433)

![vagrant provision](https://github.com/Naomi075/devops_project/assets/144215283/242e556e-dd0d-40a6-bc0c-2fd7ad2d920e)

![vagrant ssh provisionned](https://github.com/Naomi075/devops_project/assets/144215283/b30c1e3b-a2c1-4731-a35c-195f1f423620)

![vagrant ssh](https://github.com/Naomi075/devops_project/assets/144215283/e68c6bd4-9e57-4113-a86c-fd8eb2efca21)

#### Part-2. Declarative - GitLab installation using Vagrant and Ansible Provisioner

![serveur gitlab en fonction](https://github.com/Naomi075/devops_project/assets/144215283/43bc4734-62bb-45a0-8a0a-72781b38a5ea)

![test installation gitlab installation ](https://github.com/Naomi075/devops_project/assets/144215283/f841fc4c-4da0-425f-9d49-d422f439e0e6)

![upload playbooks](https://github.com/Naomi075/devops_project/assets/144215283/f0d82469-fec1-43e4-92d5-3c5f0a37414f)

### 4. Build Docker image of your application
![1-docker run hello world](https://github.com/Naomi075/devops_project/assets/86240074/20a9530e-cce8-4534-a6c8-30464dc466a4)
![2-docker hello world check](https://github.com/Naomi075/devops_project/assets/86240074/f8f00795-5b57-4f82-87ee-d936e0f4c97b)
![3-docker images](https://github.com/Naomi075/devops_project/assets/86240074/82f45137-9bdb-4ba4-9b41-3af3bfcf053c)
![4-docker run](https://github.com/Naomi075/devops_project/assets/86240074/f008e0de-5f90-4052-a0aa-4663bc093131)
![5-localhost](https://github.com/Naomi075/devops_project/assets/86240074/b2a57038-5190-48f6-b46f-8d695aafab3a)
![6-results-docker](https://github.com/Naomi075/devops_project/assets/86240074/dc31295b-dfa9-49c7-b05d-346658a46697)
![7-print-log-containers](https://github.com/Naomi075/devops_project/assets/86240074/5feb3d8f-35d6-40c0-ae88-0af8a594c436)
![8-new-docker-avecnosnoms](https://github.com/Naomi075/devops_project/assets/86240074/d5fc72c8-2e09-4b06-9103-3dd83224b7c8)
![9-login and tag](https://github.com/Naomi075/devops_project/assets/86240074/f21eea36-6b9e-4924-8ad3-a24365911f67)
![10-docker build](https://github.com/Naomi075/devops_project/assets/86240074/558296c0-a96e-4d50-9e9b-395c2f08ad89)
![11-check-tag-docker](https://github.com/Naomi075/devops_project/assets/86240074/51e31ca4-3263-48e5-a379-21d2321918c9)

### 5. Make container orchestration using Docker Compose
![docker-compose-up](https://github.com/Naomi075/devops_project/assets/86240074/23a1af71-af0f-4f3f-9f38-384f55ddcd0b)

![hello world avec nos noms ](https://github.com/Naomi075/devops_project/assets/86240074/c6d8eed9-ebea-45bd-b4b8-8fbba4298749)

### 6. Make docker orchestration using Kubernetes

![deployment](images/Kubernetes/1.%20deployment.png)
![get pods](images/Kubernetes/2.%20get%20pods.png)
![curl localhost](images/Kubernetes/2.2%20curl%20localhost.png)
![service & get services](images/Kubernetes/3.%20service%20et%20get%20services.png)
![get pv](images/Kubernetes/4.%20get%20pv.png)

### 7. Make a service mesh using Istio

### 8. Implement Monitoring to your containerized application

## 1. Instructions
### 1. Web application
#### Installation

1. install Redis:
```
sudo apt install Redis
```

2. install nodejs
```
sudo apt install nodejs
```

3. Go to userapi folder user cd command then run :
```
npm install
```

#### Run the application
- run the following command, then go to : http://localhost:3000
```
npm start
```

#### Test the application
- Run the following command to test the application :
```
npm test
```
  

### 2. CI/CD Pipeline
Our CI/CD are in (https://github.com/Naomi075/devops_project/tree/main/.github/workflows) file
1. Continuous integration

    Go to [Github Action](https://github.com/Naomi075/devops_project/edit/main/README.md) in our repository

2. Continuous deployment

    Go to : https://ece-devops.azurewebsites.net

### 3. IaC

### Part 1. Imperative - Using Vagrant with Shell Provisioner
### 1- Create a virtual machine (VM)
Open virtualbox
Run the command: 
```
vagrant up
```
To enter inside the VM via SSH:
```
vagrant ssh
```
It will open a session in the VM and you can run any bash commands being inside the Linux VM (like ls, pwd, etc.). Open VM and check  the installed virtual machine

Play with different commands for Shell Provisioner
```
# Start provisioning
config.vm.provision "shell",
  inline: "echo '127.0.0.1  mydomain-1.local' >> /etc/hosts"
```
Then, run: 
```
vagrant provision
```

#Then, Enter to the VM and read the /etc/vagrant_provisioned_at file content:
```
vagrant ssh
# ... entering to VM
cat /etc/vagrant_provisioned_at
```

### Part 2. Declarative - GitLab installation using Vagrant and Ansible Provisioner
## Run the command:
```
vagrant up
```
 1. Update the playbooks on the VM using vagrant upload:
```
vagrant upload playbooks /vagrant/playbooks gitlab_server
```
2.Rerun provisioning with the command:
```
vagrant provision
```

### 4. Docker image

1. Install [Docker Desktop](https://www.docker.com/get-started) following the instructions depending on your OS.
2. Make sure your docker installation is working properly by running the following command in a terminal:
   ```
   docker run hello-world
   ```
3. pull image
   ```
   docker push oliviaa/hello-everyone-world
   ```
   [link](https://hub.docker.com/repositories/oliviaa)to docker hub

4. run image
  ```
  docker run -p 12345:8080 -d hello-everyone-docker
  ```
  
5. go to : http://localhost:12345:8080

### 5. docker-compose
1. Docker Compose should be included in your Docker installation (on Windows and Mac at least). If not, install it using the official [instructions]          (https://docs.docker.com/compose/install/).

2. Go to the repository root folder

3. Run :
  ```
  docker-compose up
  ```
  
4. Visit `localhost:5000` in your web browser


### 6. docker orchestration using Kubernetes
1. Install Beta version of Minikube

[Install Minikube](https://minikube.sigs.k8s.io/docs/start/) following the instructions depending on your OS. There is a useful bugfix in the BETA version so please choose that.

- Ensure Hyper-V is enabled on Windows with Powershell command `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All` (right click powershell icon and select 'run as administrator' from the launch options)
- Set hyperv as your minikube container runtime with `minikube config set driver hyperv`
- Start Minikube with:
```
minikube start --driver=docker
```

Verify that everything is OK with:
```
minikube status
```

2. Go to [kubernetes](kubernetes) folder
3. Run the following commands :
  - ```
    kubectl apply -f redis-claim.yaml
    ```
  - ```
    kubectl apply -f redis-persistent.yaml
    ```
  - ```
    kubectl apply -f deployment.yaml
    ```
  - ```
    kubectl apply -f service.yaml
    ```
    
### 7. service mesh using Istio

### 8. Monitoring

## Links 

- [Github Action](https://github.com/XxProduGitxX/ece-devops-WANG-WALCZAK/actions)  
- https://ece-devops.azurewebsites.net  
- https://hub.docker.com/repository/docker/arnaudw/userapi  
## Authors
- Alexandra DUJARDIN
- Naomi FOULE
- Olivia MEDDAH
