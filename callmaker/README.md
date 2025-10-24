# CallMaker - DevSecOps Project Template

CallMaker is a sample Crypto Signal Platform built to demonstrate a full DevSecOps pipeline:
React (CRA) frontend, Express backend with MySQL, Jenkins CI/CD, OWASP scanning, and Prometheus/Grafana monitoring.

## Quick start
1. Copy `.env.example` to `.env` and adjust values.
2. Build and start services:
   ```bash
   docker-compose up --build -d
   ```
3. Backend: http://localhost:5000
   Frontend: http://localhost:3000
   Jenkins: http://localhost:8080
   Prometheus: http://localhost:9090
   Grafana: http://localhost:3001
