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


![image](https://github.com/Naomi075/devops_project/assets/78731315/13590fa0-ddf2-4d88-aed1-d7da7108c26d)


![image](https://github.com/Naomi075/devops_project/assets/78731315/7c034b94-df1f-4104-a019-b70d40817410)


![image](https://github.com/Naomi075/devops_project/assets/78731315/d92e9dc4-d238-4efe-9b25-5a7cceef357d)


### 2. Apply CI/CD pipeline
![github Action](images/CI-CD/1.%20github%20action%20.png)
![Azure deployment](images/CI-CD/2.%20azure%20deployment.png)

### 3. Configure and provision a virtual environment and run your application using the IaC approach

### 4. Build Docker image of your application
![build image](images/Docker/1.%20build%20image.png)
![docker images](images/Docker/2.%20docker%20imaes.png)
![docker run](images/Docker/3.%20docker%20run.png)
![docker ps](images/Docker/4.%20docker%20ps.png)
![docker logs](images/Docker/5.%20docker%20logs.png)
![push on docker hub](images/Docker/6.%20push%20on%20docker%20hub.png)
![verification](images/Docker/7.%20verification%20in%20my%20repository.png)

### 5. Make container orchestration using Docker Compose

![docker-compose up](images/Docker/8.%20docker-compose%20up.png)
![result](images/Docker/9.%20result.png)

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
Our CI/CD are in [workflows](.workflows) file
1. Continuous integration

    Go to [Github Action](https://github.com/XxProduGitxX/ece-devops-WANG-WALCZAK/actions) in our repository

2. Continuous deployment

    Go to : https://ece-devops.azurewebsites.net

### 3. IaC

We got an issue during Vagrant's installation.

### 4. Docker image

1. Install [Docker Desktop](https://www.docker.com/get-started) following the instructions depending on your OS.
2. Make sure your docker installation is working properly by running the following command in a terminal:
   ```
   docker run hello-world
   ```
3. pull image
   ```
   docker pull arnaudw/userapi
   ```
   [link](https://hub.docker.com/repository/docker/arnaudw/userapi) to docker hub

4. run image
  ```
  docker run 12345:3000 arnaudw/userapi
  ```
  
5. go to : http://localhost:12345

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

