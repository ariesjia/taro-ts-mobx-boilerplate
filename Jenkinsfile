pipeline {
  options { disableConcurrentBuilds() }
  agent any
  stages {
    stage('Build-development') {
      steps {
        sh """
          npm install --registry https://nexus.dev.casaba.tech/repository/npm
        """
      }
    }
    stage('Lint') {
      steps {
         sh "yarn lint"
      }
    }
    stage('Unit test') {
      steps {
         sh "yarn unit"
      }
    }
    stage('SonarQube analysis') {
      steps {
        sh """
           sh /usr/local/sonar-scanner/bin/sonar-scanner  -Dsonar.host.url=http://10.45.25.27:9000/
        """
      }
    }
    stage('build') {
      steps {
         sh "yarn build:weapp"
      }
    }
  }
}
