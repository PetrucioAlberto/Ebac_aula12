pipeline {
    agent any
    environment {
        NO_COLOR = '1'
    }
    tools {
        nodejs "NodeJS" 
    }
    stages {
        stage('Instalar Dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('Rodar Testes Cypress') {
            steps {
                sh 'npx cypress run --no-color'
            }
        }
    }
}




