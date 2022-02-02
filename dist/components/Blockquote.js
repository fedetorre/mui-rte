"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var PREFIX = 'MUIRichTextEditorBlockquote';
var classes = {
    root: PREFIX + "-root"
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    slot: 'Root',
    overridesResolver: function (_, styles) { return styles.root; }
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&." + classes.root] = {
            fontStyle: "italic",
            color: theme.palette.grey[800],
            borderLeft: "4px solid " + theme.palette.grey.A100
        },
        _b);
});
var Blockquote = function (props) {
    return (react_1.default.createElement(Root, { className: classes.root }, props.children));
};
exports.default = Blockquote;
//# sourceMappingURL=Blockquote.js.map