import { createElement } from 'lwc';
import Psngrcdid_26_07 from 'c/psngrcdid_26_07';

describe('c-psngrcdid-26-07', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-psngrcdid-26-07', {
            is: Psngrcdid_26_07
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});