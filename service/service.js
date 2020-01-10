class Service {
    messageService() {
        return "Hello World!";
    }

    greetingMessageService(req) {
         return `Welcome ${req.firstName} ${req.lastName} to Greeting App!`;
    }
}

module.exports = new Service();