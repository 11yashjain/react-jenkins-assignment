pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'yashj0768/react-calculator-app'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/11yashjain/react-jenkins-assignment.git', branch: 'main'

            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-creds', url: '']) {
                    script {
                        docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }
    }
}
