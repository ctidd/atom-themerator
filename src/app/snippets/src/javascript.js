import Syntax from './Syntax';

export default class SyntaxPreview extends Syntax {
    constructor(options = []) {
        super(options);

        if (options.length === 0) {
            throw new Error();
        }

        this.content = options[0];
    }

    isLengthOf(str) {
        return this.content.length === str.length;
    }

    isEven() {
        return this.content.length % 2 === 0;
    }
}
