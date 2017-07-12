"use strict";
var Phrase = (function () {
    function Phrase(id, firstName, secondName, phone, address, createdAt) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.phone = phone;
        this.address = address;
        this.createdAt = createdAt;
    }
    return Phrase;
}());
exports.Phrase = Phrase;
//# sourceMappingURL=phrase.js.map