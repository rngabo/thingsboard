# thingsboard

This project simulates temperature and humidity information on a dashboard and logs messages to the console when a button is pushed. It consists of two main scripts, `send.js` and `receive.js`.

![Screenshot from 2023-12-22 11-16-31](https://github.com/rngabo/thingsboard/assets/33146522/02e5ccfb-c4e0-4d0f-a498-fbff49305b2e)


## Description

- `send.js`: This script is responsible for simulating temperature and humidity data. It publishes this information to a dashboard where it can be monitored and analyzed.
- `receive.js`: This script listens for a specific event - in this case, a button being pushed. When the event occurs, it logs a message to the console.

## Getting Started

### Dependencies
- **Thingsboard installation on ubuntu linux**: [This project uses MQTT to handle messaging between the scripts and the dashboard. Ensure you have an MQTT broker running or access to one.](https://thingsboard.io/docs/user-guide/install/ubuntu/)
- **Thingsboard user manual**: [The scripts are written in JavaScript and designed to be run in a Node.js environment.](https://thingsboard.io/docs/guides/)
- **MQTT**: This project uses MQTT to handle messaging between the scripts and the dashboard. Ensure you have an MQTT broker running or access to one.
- **Node.js**: The scripts are written in JavaScript and designed to be run in a Node.js environment.

### Installing

1. **Clone the repository**:
   ```bash
   git clone [repository URL]
   cd [repository directory]
# Running the Scripts
 ```bash
   node send.js
   node receive.js

      
