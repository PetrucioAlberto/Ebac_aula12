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
                sh 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}

