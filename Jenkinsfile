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
                sh 'mkdir -p results && npx cypress run --no-color --reporter junit --reporter-options "mochaFile=results/test-results.xml"'
            }
        }
    }
    post {
        always {
            junit 'results/test-results.xml'
        }
    }
}




