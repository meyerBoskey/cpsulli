var Message = /** @class */ (function () {
    function Message(content, username, messageId, userId) {
        this.content = content;
        this.messageId = messageId;
        this.userId = userId;
        this.username = username;
    }
    return Message;
}());
export { Message };
