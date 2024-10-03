const express = require("express");
const { connectDB } = require("./config/db");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            auth: '/api/auth',
            main: '/api/main',
            profile: '/api/profile',
        }

        this.middlewares();
        this.routes();

    }

    async DBConnection() {
        await connectDB();
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
    };

    routes() {
        this.app.use(this.paths.auth, require('./routes/auth.routes.js'));
        this.app.use(this.paths.main, require('./routes/main.routes'));
        // this.app.use(this.paths.profile, require('./routes/profile.routes.js'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    };

};

module.exports = { Server }
