import Prism from 'prismjs';
import './plugins/whitespace';
import './plugins/numbers';

Prism.highlightAll();
Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
});
