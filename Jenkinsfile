pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/PetrucioAlberto/Ebac_aula12'
            }
        }
        stage('Instalar Dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('Rodar Testes Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}



