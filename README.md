# 🚀 Crypto Signal Platform – DevSecOps Project

> This project develops a DevSecOps-based web app for crypto signal management using React.js and Express.js. It integrates Jenkins for CI/CD, OWASP tools for security testing, and Prometheus with Grafana for monitoring, ensuring a secure, automated, and reliable application lifecycle.

---

## 🧩 Overview
The **Crypto Signal Platform** is a web application designed to demonstrate the complete implementation of the **DevSecOps** methodology.  
It allows users to view, share, and analyze cryptocurrency trading signals securely through a structured multi-role system:
- **Admin** – manages users and configurations  
- **Analyst** – creates and updates trading signals  
- **Member** – views and follows crypto signals  

---

## ⚙️ Tech Stack
- **Frontend:** React.js  
- **Backend:** Express.js (Node.js)  
- **Database:** MySQL / MongoDB  
- **Containerization:** Docker  
- **CI/CD:** Jenkins  
- **Security:** OWASP ZAP, OWASP Dependency Check, Trivy, Snyk  
- **Monitoring:** Prometheus + Grafana  

---

## 🔐 DevSecOps Workflow
1. **Code & Commit** – Developers push code to Git repository  
2. **CI/CD Pipeline** – Jenkins automates build, test, scan, and deploy stages  
3. **Static Analysis** – OWASP Dependency Check inspects dependencies  
4. **Dynamic Analysis** – OWASP ZAP tests for runtime vulnerabilities  
5. **Container Scanning** – Trivy and Snyk scan images before deployment  
6. **Deploy to Dockerized Environment**  
7. **Monitoring** – Prometheus collects metrics visualized in Grafana dashboards  

---

## 🧠 Objectives
- Implement continuous integration and deployment with security integration  
- Apply OWASP tools for vulnerability detection and prevention  
- Maintain continuous monitoring and observability using Prometheus and Grafana  
- Demonstrate a secure, automated, and collaborative software delivery pipeline  

---

## 📦 How to Run
```bash
# Clone repository
git clone https://github.com/yourusername/crypto-signal-platform.git
cd crypto-signal-platform

# Build and run with Docker Compose
docker-compose up --build
