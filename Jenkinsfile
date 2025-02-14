pipeline {
    agent any

    tools { 
        nodejs 'node-20.16.0' 
    }

    stages {
        stage('Clonar Repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/PetrucioAlberto/Ebac_aula12'
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Executar Testes Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}


