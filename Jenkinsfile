pipeline {
    agent any
    environment {
     
        NO_COLOR = ''
    }
    tools {
        nodejs "NodeJS" 
    }
    stages {
        stage('Instalar Dependências') {
            steps {
                script {
                    
                    sh 'npm install'
                }
            }
        }
        stage('Rodar Testes Cypress') {
            steps {
                script {
                   
                    sh 'npx cypress run'
                }
            }
        }
    }
}



