pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Clonar Repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/PetrucioAlberto/Ebac_aula12'
            }
        }

        stage('Instalar Dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}


