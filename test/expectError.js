"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectError = void 0;
function expectError(error, message) {
    return function (target, key, descriptor) {
        return {
            async value(...args) {
                let isThrowError = false;
                try {
                    await descriptor.value.call(this, ...args);
                }
                catch (err) {
                    isThrowError = true;
                    expect(err).toBeInstanceOf(error);
                    if (message) {
                        if (message instanceof RegExp) {
                            expect(err.message).toMatch(message);
                        }
                        else {
                            expect(err.message.replace('Mock', '')).toContain(message);
                        }
                    }
                }
                finally {
                    expect(isThrowError).toBeTruthy();
                }
            },
        };
    };
}
exports.expectError = expectError;
//# sourceMappingURL=expectError.js.map