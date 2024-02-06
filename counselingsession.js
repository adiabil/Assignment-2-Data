//counselingsession.js

const fileSystem = require('fs');

class CounselingSession {
    constructor(id, crisis, clientName, counslerName, sessionStatuss, date) {
        this.id = id;
        this.crisis = crisis;
        this.clientName = clientName;
        this.counslerName = counslerName;
        this.sessionStatuss = sessionStatuss;
        this.date = date;
    }
}

class CounselingSessionsManager {
    constructor(sessionPath) {
        this.sessionPath = sessionPath;
        this.data = this.readData();
    }

    getAllSessions() {
        return this.data.counselingSessions;
    }
  
    getSession(id) {
        return this.data.counselingSessions.find(session => session.id == id);
    }
    readData() {
        try {
            const jsonData = fileSystem.readFileSync(this.sessionPath, 'utf8');
            return JSON.parse(jsonData);
        } catch (error) {
            // If the file doesn't exist or cannot be parsed, return an empty object.
            return { counselingSessions: [] };
        }
    }

    writeData() {
        const jsonData = JSON.stringify(this.data, null, 2);
        fileSystem.writeFileSync(this.sessionPath, jsonData);
    }

    createSession(session) {
        this.data.counselingSessions.push(session);
        this.writeData();
    }

    readSessions() {
        return this.data.counselingSessions;
    }

    updateSession(id, updatedSession) {
        const sessionToUpdate = this.data.counselingSessions.find(session => session.id == id);
        if (sessionToUpdate) {
            // Update session properties with the provided values
            sessionToUpdate.crisis = updatedSession.crisis;
            sessionToUpdate.clientName = updatedSession.clientName;
            sessionToUpdate.counslerName = updatedSession.counslerName;
            sessionToUpdate.sessionStatuss = updatedSession.sessionStatuss;
            sessionToUpdate.date = updatedSession.date;

            this.writeData();
            return true; // Indicate success
        }
        return false; // Indicate failure (session not found)
    }

    deleteSession(id) {
        const initialLength = this.data.counselingSessions.length;
        this.data.counselingSessions = this.data.counselingSessions.filter(session => session.id != id);

        if (this.data.counselingSessions.length < initialLength) {
            this.writeData();
            return true; // Indicate success
        }
        return false; // Indicate failure (session not found)
    }
}

module.exports = {
    CounselingSession,
    CounselingSessionsManager
};
