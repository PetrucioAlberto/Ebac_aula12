pipeline {
    agent any
    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/PetrucioAlberto/Ebac_aula12'
            }
        }
        stage('Instalar Dependências') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
                bat 'set NO_COLOR=1 && npm run cy:run'
            }
        }
    }
}

