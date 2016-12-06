import React from 'react';
import Pane, { PaneOptions } from '../ui/pane/Pane';
import AppForm from './AppForm';
import Button from '../ui/button/Button';
import Code from '../ui/code/Code';

export default ({
    fields,
    onFieldChange,
    snippet,
    snippets,
    onSnippetChange,
    onDownload,
    onRestore,
}) => (
    <div>
        <Pane side={ PaneOptions.side.left }>
            <div className="atui-vList atui-vList_lg">
                <div className="atui-vList atui-vList_sm">
                    <h1 className="atui-hdg atui-hdg_major">
                        Atom Themerator (Alpha)
                    </h1>
                    <p>Atom Themerator is an online syntax theme generator for Atom. Prepare your syntax theme with live preview, then download the generated theme for use &mdash; or manually tweak the generated theme for more precise styling.</p>
                    <p><a href="https://github.com/ctidd/atom-themerator">Atom Themerator on GitHub</a></p>
                </div>
                <div className="atui-box atui-box_dusty">
                    <div className="atui-field">
                        <h2 className="atui-hdg atui-hdg_minor">
                            Modifying an existing Atom Themerator theme? Start by uploading its atom-themerator.json file:
                        </h2>
                        <input
                            id="theme-restore"
                            className="atui-field-input atui-field-input_file"
                            type="file"
                            onChange={ onRestore } />
                        <label
                            className="atui-field-pseudoFile"
                            htmlFor="theme-restore">
                            Select Config File
                        </label>
                    </div>
                </div>
                <AppForm
                    snippet={ snippet }
                    snippets={ snippets }
                    onSnippetChange={ onSnippetChange }
                    fields={ fields }
                    onFieldChange={ onFieldChange } />
                <div>
                    <form onSubmit={ onDownload }>
                        <Button>
                            Download Theme
                        </Button>
                    </form>
                </div>
            </div>
        </Pane>
        <Pane side={ PaneOptions.side.right }>
            <Code markup={ snippet } />
        </Pane>
    </div>
);
