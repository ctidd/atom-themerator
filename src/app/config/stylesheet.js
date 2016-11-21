export default `

/**************************************
** THEMERATOR | REMOVE THESE
***************************************/

.atui-code {
    color: @text;
}

.atui-code,
.atui-code * {
    background: @background !important;
}

.atui-code * {
    transform: none !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    position: static !important;
}

/**************************************
** EDITOR
***************************************/


/**************************************
** ALL LANGUAGES
***************************************/

.comment {
    color: @comment;
}

.keyword {
    color: @keyword;
}

.keyword.operator {
    color: @text;
}

.keyword.operator.new {
    color: @keyword-new;
}

.keyword.other.unit {
    color: @keyword-unit;
}

.storage {
    color: @keyword-storage;
}

.constant {
    color: @constant;
}

.constant.character.escape {
    color: inherit;
}

.constant.numeric {
    color: @constant-numeric;
}

.constant.other.color {
    color: @constant-color;
}

.constant.other.rgb-value {
    color: @constant-rbg;
}

.constant.other.symbol {
    color: @constant-symbol;
}

.constant.language {
    color: @constant-language;
}

.variable {
    color: @variable;
}

.variable.this {
    color: @variable-this;
}

.invalid.illegal,
.invalid.broken,
.invalid.deprecated,
.invalid.unimplemented {
    color: @error;
}

.string {
    color: @string;
}

.string.unquoted {
    color: @text;
}

.string.regexp,
.string.regexp > .keyword,
.string.regexp > .punctuation {
    color: @regexp;
}

.punctuation.definition.comment {
    color: @comment;
}

.punctuation.definition.heading,
.punctuation.definition.identity {
    color: @GREEN;
}

.punctuation.definition.bold {
    color: @GREEN;
    font-style: bold;
}

.punctuation.definition.italic {
    color: @GREEN;
    font-style: italic;
}

.punctuation.definition.interpolation {
    color: @COLOR_MUTED;
}

.punctuation.section.embedded {
    color: @text;
}

.entity.name.type {
    color: @BLUE;
}

.entity.other.inherited-class {
    color: @text;
}

.entity.name.class, &.name.type.class {
    color: @text;
}

.entity.name.tag {
    color: @BLUE;
}

.entity.other.attribute-name {
    color: @LIGHT_BLUE;
}

.entity.name.function, .support.function, .function.arrow {
    color: @text;
}

.object.key {
    color: @text;
}

.meta.class {
    color: @text;
}

.meta.link {
    color: @BLUE;
}

.meta.require {
    color: @BLUE;
}

.meta.selector {
    color: @BLUE;
}

.meta.separator {
    color: @text;
}

.meta.tag {
    color: @COLOR_MUTED;
}

.none {
    color: @text;
}

.markup.bold {
    color: @BLUE;
    font-weight: bold;
}

.markup.italic {
    color: @GREEN;
    font-style: italic;
}

.markup.heading .punctuation.definition.heading {
    color: @BLUE;
}

.source.gfm .markup {
    -webkit-font-smoothing: auto;
}

.source.gfm .markup.heading {
    color: @BLUE;
}

:host, atom-text-editor[mini] .scroll-view {
    padding-left: 1px;
}

`;
